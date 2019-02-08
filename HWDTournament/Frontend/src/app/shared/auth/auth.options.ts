import { InjectionToken } from '@angular/core';
import { TraqAuthStrategy, TraqAuthStrategyOptions } from './strategies';
import { TraqAuthToken, TraqAuthTokenClass } from './services/token/token';

export type TraqAuthStrategyClass = new (...params: any[]) => TraqAuthStrategy;

export type TraqAuthStrategies  = [TraqAuthStrategyClass, TraqAuthStrategyOptions][];

export interface TraqAuthOptions {
  forms?: any;
  strategies?: TraqAuthStrategies;
}

export interface TraqAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}

const socialLinks: TraqAuthSocialLink[] = [];

export const defaultAuthOptions: any = {
  strategies: [],
  forms: {
    login: {
      redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
      strategy: 'email',  // provider id key. If you have multiple strategies, or what to use your own
      rememberMe: true,   // whether to show or not the `rememberMe` checkbox
      showMessages: {     // show/not show success/error messages
        success: true,
        error: true,
      },
      socialLinks: socialLinks, // social links at the bottom of a page
    },
    register: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      terms: true,
      socialLinks: socialLinks,
    },
    requestPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks: socialLinks,
    },
    resetPassword: {
      redirectDelay: 500,
      strategy: 'email',
      showMessages: {
        success: true,
        error: true,
      },
      socialLinks: socialLinks,
    },
    logout: {
      redirectDelay: 500,
      strategy: 'email',
    },
    validation: {
      password: {
        required: true,
        minLength: 4,
        maxLength: 50,
      },
      email: {
        required: true,
      },
      fullName: {
        required: false,
        minLength: 4,
        maxLength: 50,
      },
    },
  },
};

// export const HWB_AUTH_OPTIONS = new InjectionToken<TraqAuthOptions>('Nebular Auth Options');
// export const HWB_AUTH_USER_OPTIONS = new InjectionToken<TraqAuthOptions>('Nebular User Auth Options');
// export const HWB_AUTH_STRATEGIES = new InjectionToken<TraqAuthStrategies>('Nebular Auth Strategies');
// export const HWB_AUTH_TOKENS = new InjectionToken<TraqAuthTokenClass<TraqAuthToken>[]>('Nebular Auth Tokens');
// export const HWB_AUTH_INTERCEPTOR_HEADER = new InjectionToken<TraqAuthStrategies>('Nebular Simple Interceptor Header');

export const HWB_AUTH_OPTIONS = new InjectionToken<TraqAuthOptions>('Traq Auth Options');
export const HWB_AUTH_USER_OPTIONS = new InjectionToken<TraqAuthOptions>('Traq User Auth Options');
export const HWB_AUTH_STRATEGIES = new InjectionToken<TraqAuthStrategies>('Traq Auth Strategies');
export const HWB_AUTH_TOKENS = new InjectionToken<TraqAuthTokenClass<TraqAuthToken>[]>('Traq Auth Tokens');
export const HWB_AUTH_INTERCEPTOR_HEADER = new InjectionToken<TraqAuthStrategies>('Traq Simple Interceptor Header');