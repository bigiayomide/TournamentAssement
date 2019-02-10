import { InjectionToken } from '@angular/core';
import { HwbAuthStrategy, HwbAuthStrategyOptions } from './strategies';
import { HwbAuthToken, HwbAuthTokenClass } from './services/token/token';

export type HwbAuthStrategyClass = new (...params: any[]) => HwbAuthStrategy;

export type HwbAuthStrategies  = [HwbAuthStrategyClass, HwbAuthStrategyOptions][];

export interface HwbAuthOptions {
  forms?: any;
  strategies?: HwbAuthStrategies;
}

export interface HwbAuthSocialLink {
  link?: string,
  url?: string,
  target?: string,
  title?: string,
  icon?: string,
}

const socialLinks: HwbAuthSocialLink[] = [];

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

// export const HWB_AUTH_OPTIONS = new InjectionToken<HwbAuthOptions>('Nebular Auth Options');
// export const HWB_AUTH_USER_OPTIONS = new InjectionToken<HwbAuthOptions>('Nebular User Auth Options');
// export const HWB_AUTH_STRATEGIES = new InjectionToken<HwbAuthStrategies>('Nebular Auth Strategies');
// export const HWB_AUTH_TOKENS = new InjectionToken<HwbAuthTokenClass<HwbAuthToken>[]>('Nebular Auth Tokens');
// export const HWB_AUTH_INTERCEPTOR_HEADER = new InjectionToken<HwbAuthStrategies>('Nebular Simple Interceptor Header');

export const HWB_AUTH_OPTIONS = new InjectionToken<HwbAuthOptions>('Hwb Auth Options');
export const HWB_AUTH_USER_OPTIONS = new InjectionToken<HwbAuthOptions>('Hwb User Auth Options');
export const HWB_AUTH_STRATEGIES = new InjectionToken<HwbAuthStrategies>('Hwb Auth Strategies');
export const HWB_AUTH_TOKENS = new InjectionToken<HwbAuthTokenClass<HwbAuthToken>[]>('Hwb Auth Tokens');
export const HWB_AUTH_INTERCEPTOR_HEADER = new InjectionToken<HwbAuthStrategies>('Hwb Simple Interceptor Header');