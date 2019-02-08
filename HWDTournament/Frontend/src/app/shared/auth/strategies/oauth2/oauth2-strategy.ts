import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HWB_WINDOW } from '../../theme.options';

import { TraqAuthStrategy } from '../auth-strategy';
import {
  TraqAuthIllegalTokenError,
  TraqAuthRefreshableToken,
  TraqAuthResult,
  TraqAuthToken,
} from '../../services';
import {
  TraqOAuth2AuthStrategyOptions,
  TraqOAuth2ResponseType,
  auth2StrategyOptions,
  TraqOAuth2GrantType, TraqOAuth2ClientAuthMethod,
} from './oauth2-strategy.options';
import { TraqAuthStrategyClass } from '../../auth.options';


/**
 * OAuth2 authentication strategy.
 *
 * Strategy settings:
 *
 * ```ts
 * export enum TraqOAuth2ResponseType {
 *   CODE = 'code',
 *   TOKEN = 'token',
 * }
 *
 * export enum TraqOAuth2GrantType {
 *   AUTHORIZATION_CODE = 'authorization_code',
 *   PASSWORD = 'password',
 *   REFRESH_TOKEN = 'refresh_token',
 * }
 *
 * export class TraqOAuth2AuthStrategyOptions {
 *   name: string;
 *   baseEndpoint?: string = '';
 *   clientId: string = '';
 *   clientSecret: string = '';
 *   clientAuthMethod: string = TraqOAuth2ClientAuthMethod.NONE;
 *   redirect?: { success?: string; failure?: string } = {
 *     success: '/',
 *     failure: null,
 *   };
 *   defaultErrors?: any[] = ['Something went wrong, please try again.'];
 *   defaultMessages?: any[] = ['You have been successfully authenticated.'];
 *   authorize?: {
 *     endpoint?: string;
 *     redirectUri?: string;
 *     responseType?: string;
 *     requireValidToken: false,
 *     scope?: string;
 *     state?: string;
 *     params?: { [key: string]: string };
 *   } = {
 *     endpoint: 'authorize',
 *     responseType: TraqOAuth2ResponseType.CODE,
 *   };
 *   token?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     requireValidToken: false,
 *     redirectUri?: string;
 *     class: NbAuthTokenClass,
 *   } = {
 *     endpoint: 'token',
 *     grantType: TraqOAuth2GrantType.AUTHORIZATION_CODE,
 *     class: NbAuthOAuth2Token,
 *   };
 *   refresh?: {
 *     endpoint?: string;
 *     grantType?: string;
 *     scope?: string;
 *     requireValidToken: false,
 *   } = {
 *     endpoint: 'token',
 *     grantType: TraqOAuth2GrantType.REFRESH_TOKEN,
 *   };
 * }
 * ```
 *
 */
@Injectable()
export class TraqOAuth2AuthStrategy extends TraqAuthStrategy {

  static setup(options: TraqOAuth2AuthStrategyOptions): [TraqAuthStrategyClass, TraqOAuth2AuthStrategyOptions] {
    return [TraqOAuth2AuthStrategy, options];
  }

  get responseType() {
    return this.getOption('authorize.responseType');
  }

  get clientAuthMethod() {
    return this.getOption('clientAuthMethod');
  }

  protected redirectResultHandlers = {
    [TraqOAuth2ResponseType.CODE]: () => {
      return observableOf(this.route.snapshot.queryParams).pipe(
        switchMap((params: any) => {
          if (params.code) {
            return this.requestToken(params.code)
          }

          return observableOf(
            new TraqAuthResult(
              false,
              params,
              this.getOption('redirect.failure'),
              this.getOption('defaultErrors'),
              [],
            ));
        }),
      );
    },
    [TraqOAuth2ResponseType.TOKEN]: () => {
      const module = 'authorize';
      const requireValidToken = this.getOption(`${module}.requireValidToken`);
      return observableOf(this.route.snapshot.fragment).pipe(
        map(fragment => this.parseHashAsQueryParams(fragment)),
        map((params: any) => {
          if (!params.error) {
            return new TraqAuthResult(
              true,
              params,
              this.getOption('redirect.success'),
              [],
              this.getOption('defaultMessages'),
              this.createToken(params, requireValidToken));
          }
          return new TraqAuthResult(
            false,
            params,
            this.getOption('redirect.failure'),
            this.getOption('defaultErrors'),
            [],
          );
        }),
        catchError(err => {
          const errors = [];
          if (err instanceof TraqAuthIllegalTokenError) {
            errors.push(err.message)
          } else {
            errors.push('Something went wrong.');
          }
          return observableOf(
            new TraqAuthResult(
              false,
              err,
              this.getOption('redirect.failure'),
              errors,
            ));
        }),
      );
    },
  };

  protected redirectResults = {
    [TraqOAuth2ResponseType.CODE]: () => {
      return observableOf(this.route.snapshot.queryParams).pipe(
        map((params: any) => !!(params && (params.code || params.error))),
      );
    },
    [TraqOAuth2ResponseType.TOKEN]: () => {
      return observableOf(this.route.snapshot.fragment).pipe(
        map(fragment => this.parseHashAsQueryParams(fragment)),
        map((params: any) => !!(params && (params.access_token || params.error))),
      );
    },
  };

  protected defaultOptions: TraqOAuth2AuthStrategyOptions = auth2StrategyOptions;

  constructor(protected http: HttpClient,
              private route: ActivatedRoute,
              @Inject(HWB_WINDOW) private window: any) {
    super();
  }

  authenticate(data?: any): Observable<TraqAuthResult> {

    if (this.getOption('token.grantType') === TraqOAuth2GrantType.PASSWORD) {
      return this.passwordToken(data.email, data.password)
    } else {
      return this.isRedirectResult()
        .pipe(
          switchMap((result: boolean) => {
            if (!result) {
              this.authorizeRedirect();
              return observableOf(new TraqAuthResult(true));
            }
            return this.getAuthorizationResult();
          }),
        );
    }
  }

  getAuthorizationResult(): Observable<any> {
    const redirectResultHandler = this.redirectResultHandlers[this.responseType];
    if (redirectResultHandler) {
      return redirectResultHandler.call(this);
    }

    throw new Error(`'${this.responseType}' responseType is not supported,
                      only 'token' and 'code' are supported now`);
  }

  refreshToken(token: TraqAuthRefreshableToken): Observable<TraqAuthResult> {
    const module = 'refresh';
    const url = this.getActionEndpoint(module);
    const requireValidToken = this.getOption(`${module}.requireValidToken`);

    return this.http.post(url, this.buildRefreshRequestData(token), this.buildAuthHeader())
      .pipe(
        map((res) => {
          return new TraqAuthResult(
            true,
            res,
            this.getOption('redirect.success'),
            [],
            this.getOption('defaultMessages'),
            this.createRefreshedToken(res, token, requireValidToken));
        }),
        catchError((res) => this.handleResponseError(res)),
      );
  }

  passwordToken(email: string, password: string): Observable<TraqAuthResult> {
    const module = 'token';
    const url = this.getActionEndpoint(module);
    const requireValidToken = this.getOption(`${module}.requireValidToken`);

    return this.http.post(url, this.buildPasswordRequestData(email, password), this.buildAuthHeader() )
      .pipe(
        map((res) => {
          return new TraqAuthResult(
            true,
            res,
            this.getOption('redirect.success'),
            [],
            this.getOption('defaultMessages'),
            this.createToken(res, requireValidToken));
        }),
        catchError((res) => this.handleResponseError(res)),
      );
  }

  protected authorizeRedirect() {
    this.window.location.href = this.buildRedirectUrl();
  }

  protected isRedirectResult(): Observable<boolean> {
    return this.redirectResults[this.responseType].call(this);
  }

  protected requestToken(code: string) {

    const module = 'token';
    const url = this.getActionEndpoint(module);
    const requireValidToken = this.getOption(`${module}.requireValidToken`);

    return this.http.post(url, this.buildCodeRequestData(code),
                         this.buildAuthHeader())
      .pipe(
        map((res) => {
          return new TraqAuthResult(
            true,
            res,
            this.getOption('redirect.success'),
            [],
            this.getOption('defaultMessages'),
            this.createToken(res, requireValidToken));
        }),
        catchError((res) => this.handleResponseError(res)),
      );
  }

  protected buildCodeRequestData(code: string): any {
    const params = {
      grant_type: this.getOption('token.grantType'),
      code: code,
      redirect_uri: this.getOption('token.redirectUri'),
      client_id: this.getOption('clientId'),
    };
    return this.cleanParams(this.addCredentialsToParams(params));
  }

  protected buildRefreshRequestData(token: TraqAuthRefreshableToken): any {
    const params = {
      grant_type: this.getOption('refresh.grantType'),
      refresh_token: token.getRefreshToken(),
      scope: this.getOption('refresh.scope'),
    };
    return this.cleanParams(this.addCredentialsToParams(params));
  }

  protected buildPasswordRequestData(email: string, password: string ): any {
    const params = {
      grant_type: this.getOption('token.grantType'),
      email: email,
      password: password,
    };
    return this.cleanParams(this.addCredentialsToParams(params));
  }

  protected buildAuthHeader(): any {
    if (this.clientAuthMethod === TraqOAuth2ClientAuthMethod.BASIC) {
      if (this.getOption('clientId') && this.getOption('clientSecret')) {
        return {
          headers: new HttpHeaders(
            {
              'Authorization': 'Basic ' + btoa(
                this.getOption('clientId') + ':' + this.getOption('clientSecret')),
            },
          ),
        };
      } else {
        throw Error('For basic client authentication method, please provide both clientId & clientSecret.');
      }
    }
  }

  protected cleanParams(params: any): any {
    Object.entries(params)
      .forEach(([key, val]) => !val && delete params[key]);
    return params;
  }

  protected addCredentialsToParams(params: any): any {
    if (this.clientAuthMethod === TraqOAuth2ClientAuthMethod.REQUEST_BODY) {
      if (this.getOption('clientId') && this.getOption('clientSecret')) {
        return {
          ... params,
          client_id: this.getOption('clientId'),
          client_secret: this.getOption('clientSecret'),
        }
      } else {
        throw Error('For request body client authentication method, please provide both clientId & clientSecret.')
      }
    }
    return params;
  }


  protected handleResponseError(res: any): Observable<TraqAuthResult> {
    let errors = [];
    if (res instanceof HttpErrorResponse) {
      if (res.error.error_description) {
        errors.push(res.error.error_description);
      } else {
        errors = this.getOption('defaultErrors');
      }
    }  else if (res instanceof TraqAuthIllegalTokenError ) {
      errors.push(res.message)
    } else {
        errors.push('Something went wrong.')
    };

    return observableOf(
      new TraqAuthResult(
        false,
        res,
        this.getOption('redirect.failure'),
        errors,
        [],
      ));
  }

  protected buildRedirectUrl() {
    const params = {
      response_type: this.getOption('authorize.responseType'),
      client_id: this.getOption('clientId'),
      redirect_uri: this.getOption('authorize.redirectUri'),
      scope: this.getOption('authorize.scope'),
      state: this.getOption('authorize.state'),

      ...this.getOption('authorize.params'),
    };

    const endpoint = this.getActionEndpoint('authorize');
    const query = Object.entries(params)
      .filter(([key, val]) => !!val)
      .map(([key, val]: [string, string]) => `${key}=${encodeURIComponent(val)}`)
      .join('&');

    return `${endpoint}?${query}`;
  }

  protected parseHashAsQueryParams(hash: string): { [key: string]: string } {
    return hash ? hash.split('&').reduce((acc: any, part: string) => {
      const item = part.split('=');
      acc[item[0]] = decodeURIComponent(item[1]);
      return acc;
    }, {}) : {};
  }

  protected createRefreshedToken(res, existingToken: TraqAuthRefreshableToken, requireValidToken: boolean): TraqAuthToken {
    type AuthRefreshToken = TraqAuthRefreshableToken & TraqAuthToken;

    const refreshedToken: AuthRefreshToken = this.createToken<AuthRefreshToken>(res, requireValidToken);
    if (!refreshedToken.getRefreshToken() && existingToken.getRefreshToken()) {
      refreshedToken.setRefreshToken(existingToken.getRefreshToken());
    }
    return refreshedToken;
  }

  register(data?: any): Observable<TraqAuthResult> {
    throw new Error('`register` is not supported by `TraqOAuth2AuthStrategy`, use `authenticate`.');
  }

  requestPassword(data?: any): Observable<TraqAuthResult> {
    throw new Error('`requestPassword` is not supported by `TraqOAuth2AuthStrategy`, use `authenticate`.');
  }

  resetPassword(data: any = {}): Observable<TraqAuthResult> {
    throw new Error('`resetPassword` is not supported by `TraqOAuth2AuthStrategy`, use `authenticate`.');
  }

  logout(): Observable<TraqAuthResult> {
    return observableOf(new TraqAuthResult(true));
  }
}