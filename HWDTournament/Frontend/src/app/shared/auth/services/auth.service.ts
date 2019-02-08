import { Inject, Injectable } from '@angular/core';

import { Observable, of as observableOf } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { TraqAuthStrategy } from '../strategies/auth-strategy';
import { HWB_AUTH_STRATEGIES } from '../auth.options';
import { TraqAuthResult } from './auth-result';
import { TraqTokenService } from './token/token.service';
import { TraqAuthToken } from './token/token';

/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
@Injectable()
export class TraqAuthService {

  constructor(protected tokenService: TraqTokenService,
              @Inject(HWB_AUTH_STRATEGIES) protected strategies) {
  }

  /**
   * Retrieves current authenticated token stored
   * @returns {Observable<any>}
   */
  getToken(): Observable<TraqAuthToken> {
    return this.tokenService.get();
  }

  /**
   * Returns true if auth token is presented in the token storage
   * @returns {Observable<any>}
   */
  isAuthenticated(): Observable<boolean> {
    return this.getToken()
      .pipe(map((token: TraqAuthToken) => token.isValid()));
  }

  /**
   * Returns tokens stream
   * @returns {Observable<TraqAuthSimpleToken>}
   */
  onTokenChange(): Observable<TraqAuthToken> {
    return this.tokenService.tokenChange();
  }

  /**
   * Returns authentication status stream
   * @returns {Observable<boolean>}
   */
  onAuthenticationChange(): Observable<boolean> {
    return this.onTokenChange()
      .pipe(map((token: TraqAuthToken) => token.isValid()));
  }

  /**
   * Authenticates with the selected strategy
   * Stores received token in the token storage
   *
   * Example:
   * authenticate('email', {email: 'email@example.com', password: 'test'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<TraqAuthResult>}
   */
  authenticate(strategyName: string, data?: any): Observable<TraqAuthResult> {
    alert('test strategy service');
    return this.getStrategy(strategyName).authenticate(data)
      .pipe(
        switchMap((result: TraqAuthResult) => {
          return this.processResultToken(result);
        }),
      );
  }

  /**
   * Registers with the selected strategy
   * Stores received token in the token storage
   *
   * Example:
   * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<TraqAuthResult>}
   */
  register(strategyName: string, data?: any): Observable<TraqAuthResult> {
    console.log('data////.ppppppppppppp'  + data);
    return this.getStrategy(strategyName).register(data)
      .pipe(
        switchMap((result: TraqAuthResult) => {
          return this.processResultToken(result);
        }),
      );
  }

  /**
   * Sign outs with the selected strategy
   * Removes token from the token storage
   *
   * Example:
   * logout('email')
   *
   * @param strategyName
   * @returns {Observable<TraqAuthResult>}
   */
  logout(strategyName: string): Observable<TraqAuthResult> {
    return this.getStrategy(strategyName).logout()
      .pipe(
        switchMap((result: TraqAuthResult) => {
          if (result.isSuccess()) {
            this.tokenService.clear()
              .pipe(map(() => result));
          }
          return observableOf(result);
        }),
      );
  }

  /**
   * Sends forgot password request to the selected strategy
   *
   * Example:
   * requestPassword('email', {email: 'email@example.com'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<TraqAuthResult>}
   */
  requestPassword(strategyName: string, data?: any): Observable<TraqAuthResult> {
    return this.getStrategy(strategyName).requestPassword(data);
  }

  /**
   * Tries to reset password with the selected strategy
   *
   * Example:
   * resetPassword('email', {newPassword: 'test'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<TraqAuthResult>}
   */
  resetPassword(strategyName: string, data?: any): Observable<TraqAuthResult> {
    return this.getStrategy(strategyName).resetPassword(data);
  }

  /**
   * Sends a refresh token request
   * Stores received token in the token storage
   *
   * Example:
   * refreshToken('email', {token: token})
   *
   * @param {string} strategyName
   * @param data
   * @returns {Observable<TraqAuthResult>}
   */
  refreshToken(strategyName: string, data?: any): Observable<TraqAuthResult> {
    return this.getStrategy(strategyName).refreshToken(data)
      .pipe(
        switchMap((result: TraqAuthResult) => {
          return this.processResultToken(result);
        }),
      );
  }

  /**
   * Get registered strategy by name
   *
   * Example:
   * getStrategy('email')
   *
   * @param {string} provider
   * @returns {TraqAbstractAuthProvider}
   */
  protected getStrategy(strategyName: string): TraqAuthStrategy {
    console.log('strategise---///....' + this.strategies);
    const found = this.strategies.find((strategy: TraqAuthStrategy) => strategy.getName() === strategyName);

    if (!found) {
      throw new TypeError(`There is no Auth Strategy registered under '${strategyName}' name`);
    }

    return found;
  }

  private processResultToken(result: TraqAuthResult) {
    if (result.isSuccess() && result.getToken()) {
      return this.tokenService.set(result.getToken())
        .pipe(
          map((token: TraqAuthToken) => {
            return result;
          }),
        );
    }

    return observableOf(result);
  }
}