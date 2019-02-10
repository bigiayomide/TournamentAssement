import { HwbAuthOAuth2Token, HwbAuthTokenClass } from '../../services';
import { HwbAuthStrategyOptions } from '../auth-strategy-options';

export enum HwbOAuth2ResponseType {
  CODE = 'code',
  TOKEN = 'token',
}

// TODO: client_credentials
export enum HwbOAuth2GrantType {
  AUTHORIZATION_CODE = 'authorization_code',
  PASSWORD = 'password',
  REFRESH_TOKEN = 'refresh_token',
}

export enum HwbOAuth2ClientAuthMethod {
  NONE = 'none',
  BASIC = 'basic',
  REQUEST_BODY = 'request-body',
}

export class HwbOAuth2AuthStrategyOptions extends HwbAuthStrategyOptions {
  baseEndpoint?: string = '';
  clientId: string = '';
  clientSecret?: string = '';
  clientAuthMethod?: string = HwbOAuth2ClientAuthMethod.NONE;
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
    responseType: HwbOAuth2ResponseType.CODE,
  };
  token?: {
    endpoint?: string;
    grantType?: string;
    redirectUri?: string;
    requireValidToken?: boolean;
    class: HwbAuthTokenClass,
  } = {
    endpoint: 'token',
    grantType: HwbOAuth2GrantType.AUTHORIZATION_CODE,
    requireValidToken: false,
    class: HwbAuthOAuth2Token,
  };
  refresh?: {
    endpoint?: string;
    grantType?: string;
    scope?: string;
    requireValidToken?: boolean;
  } = {
    endpoint: 'token',
    grantType: HwbOAuth2GrantType.REFRESH_TOKEN,
  };
}

export const auth2StrategyOptions: HwbOAuth2AuthStrategyOptions = new HwbOAuth2AuthStrategyOptions();