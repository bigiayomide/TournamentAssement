import { TraqAuthSimpleToken, TraqAuthTokenClass } from '../../services';
import { TraqAuthStrategyOptions } from '../auth-strategy-options';
import { getDeepFromObject } from '../../helpers';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export interface TraqPasswordStrategyModule {
  alwaysFail?: boolean;
  rememberMe?: boolean;
  endpoint?: string;
  method?: string;
  redirect?: {
    success?: string | null;
    failure?: string | null;
  };
  requireValidToken?: boolean;
  defaultErrors?: string[];
  defaultMessages?: string[];
}

export interface TraqPasswordStrategyReset extends TraqPasswordStrategyModule {
  resetPasswordTokenKey?: string;
}

export interface TraqPasswordStrategyToken {
  class?: TraqAuthTokenClass,
  key?: string,
  getter?: Function,
}

export interface TraqPasswordStrategyMessage {
  key?: string,
  getter?: Function,
}

export class TraqPasswordAuthStrategyOptions extends TraqAuthStrategyOptions {
  baseEndpoint? = '/api/auth/';
  login?: boolean | TraqPasswordStrategyModule = {
    alwaysFail: false,
    endpoint: 'login',
    method: 'post',
    requireValidToken: false,
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Login/Email combination is not correct, please try again.'],
    defaultMessages: ['You have been successfully logged in.'],
  };
  register?: boolean | TraqPasswordStrategyModule = {
    alwaysFail: false,
    rememberMe: true,
    endpoint: 'register',
    method: 'post',
    requireValidToken: false,
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully registered.'],
  };
  requestPass?: boolean | TraqPasswordStrategyModule = {
    endpoint: 'request-pass',
    method: 'post',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Reset password instructions have been sent to your email.'],
  };
  resetPass?: boolean | TraqPasswordStrategyReset = {
    endpoint: 'reset-pass',
    method: 'put',
    redirect: {
      success: '/',
      failure: null,
    },
    resetPasswordTokenKey: 'reset_password_token',
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Your password has been successfully changed.'],
  };
  logout?: boolean | TraqPasswordStrategyReset = {
    alwaysFail: false,
    endpoint: 'logout',
    method: 'delete',
    redirect: {
      success: '/',
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['You have been successfully logged out.'],
  };
  refreshToken?: boolean | TraqPasswordStrategyModule = {
    endpoint: 'refresh-token',
    method: 'post',
    requireValidToken: false,
    redirect: {
      success: null,
      failure: null,
    },
    defaultErrors: ['Something went wrong, please try again.'],
    defaultMessages: ['Your token has been successfully refreshed.'],
  };
  token?: TraqPasswordStrategyToken = {
    class: TraqAuthSimpleToken,
    key: 'data.token',
    getter: (module: string, res: HttpResponse<Object>, options: TraqPasswordAuthStrategyOptions) => getDeepFromObject(
      res.body,
      options.token.key,
    ),
  };
  errors?: TraqPasswordStrategyMessage = {
    key: 'data.errors',
    getter: (module: string, res: HttpErrorResponse, options: TraqPasswordAuthStrategyOptions) => getDeepFromObject(
      res.error,
      options.errors.key,
      options[module].defaultErrors,
    ),
  };
  messages?: TraqPasswordStrategyMessage = {
    key: 'data.messages',
    getter: (module: string, res: HttpResponse<Object>, options: TraqPasswordAuthStrategyOptions) => getDeepFromObject(
      res.body,
      options.messages.key,
      options[module].defaultMessages,
    ),
  };
  validation?: {
    password?: {
      required?: boolean;
      minLength?: number | null;
      maxLength?: number | null;
      regexp?: string | null;
    };
    email?: {
      required?: boolean;
      regexp?: string | null;
    };
    fullName?: {
      required?: boolean;
      minLength?: number | null;
      maxLength?: number | null;
      regexp?: string | null;
    };
  };
}

export const passwordStrategyOptions: TraqPasswordAuthStrategyOptions = new TraqPasswordAuthStrategyOptions();