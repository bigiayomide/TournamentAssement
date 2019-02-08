import { TraqAuthOAuth2Token, TraqAuthTokenClass } from '../../services';
import { TraqAuthStrategyOptions } from '../auth-strategy-options';

export enum TraqOAuth2ResponseType {
  CODE = 'code',
  TOKEN = 'token',
}

// TODO: client_credentials
export enum TraqOAuth2GrantType {
  AUTHORIZATION_CODE = 'authorization_code',
  PASSWORD = 'password',
  REFRESH_TOKEN = 'refresh_token',
}

export enum TraqOAuth2ClientAuthMethod {
  NONE = 'none',
  BASIC = 'basic',
  REQUEST_BODY = 'request-body',
}

export class TraqOAuth2AuthStrategyOptions extends TraqAuthStrategyOptions {
  baseEndpoint?: string = '';
  clientId: string = '';
  clientSecret?: string = '';
  clientAuthMethod?: string = TraqOAuth2ClientAuthMethod.NONE;
  redirect?: { success?: string; failure?: string } = {
    success: '/',
    failure: null,
  };
  defaultErrors?: any[] = ['Something went wrong, please try again.'];
  defaultMessages?: any[] = ['You have been successfully authenticated.'];
  authorize?: {
    endpoint?: string;
    redirectUri?: string;
    responseType?: string;
    requireValidToken?: boolean; // used only with NbOAuth2ResponseType.TOKEN
    scope?: string;
    state?: string;
    params?: { [key: string]: string };
  } = {
    endpoint: 'authorize',
    responseType: TraqOAuth2ResponseType.CODE,
  };
  token?: {
    endpoint?: string;
    grantType?: string;
    redirectUri?: string;
    requireValidToken?: boolean;
    class: TraqAuthTokenClass,
  } = {
    endpoint: 'token',
    grantType: TraqOAuth2GrantType.AUTHORIZATION_CODE,
    requireValidToken: false,
    class: TraqAuthOAuth2Token,
  };
  refresh?: {
    endpoint?: string;
    grantType?: string;
    scope?: string;
    requireValidToken?: boolean;
  } = {
    endpoint: 'token',
    grantType: TraqOAuth2GrantType.REFRESH_TOKEN,
  };
}

export const auth2StrategyOptions: TraqOAuth2AuthStrategyOptions = new TraqOAuth2AuthStrategyOptions();