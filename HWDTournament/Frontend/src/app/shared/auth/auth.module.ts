import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import {
//   NbAlertModule,
//   NbButtonModule,
//   NbCardModule,
//   NbCheckboxModule,
//   NbInputModule,
//   NbLayoutModule,
// } from '@nebular/theme';

import {
  HWB_AUTH_FALLBACK_TOKEN,
  TraqAuthService,
  TraqAuthSimpleToken,
  TraqAuthTokenClass,
  TraqAuthTokenParceler,
  TraqTokenLocalStorage,
  TraqTokenService,
  TraqTokenStorage,
} from './services';
import {
  TraqAuthStrategy,
  TraqAuthStrategyOptions,
  TraqDummyAuthStrategy,
  TraqOAuth2AuthStrategy,
  TraqPasswordAuthStrategy,
} from './strategies';

import {
  defaultAuthOptions,
  HWB_AUTH_INTERCEPTOR_HEADER,
  HWB_AUTH_OPTIONS,
  HWB_AUTH_STRATEGIES,
  HWB_AUTH_TOKENS,
  HWB_AUTH_USER_OPTIONS,
  TraqAuthOptions,
  TraqAuthStrategyClass,
} from './auth.options';

import { deepExtend } from './helpers';

export function hwbStrategiesFactory(options: TraqAuthOptions, injector: Injector): TraqAuthStrategy[] {
  const strategies = [];
  options.strategies
    .forEach(([strategyClass, strategyOptions]: [TraqAuthStrategyClass, TraqAuthStrategyOptions]) => {
      const strategy: TraqAuthStrategy = injector.get(strategyClass);
      strategy.setOptions(strategyOptions);

      strategies.push(strategy);
    });
  return strategies;
}

export function hwbTokensFactory(strategies: TraqAuthStrategy[]): TraqAuthTokenClass[] {
  const tokens = [];
  strategies
    .forEach((strategy: TraqAuthStrategy) => {
      tokens.push(strategy.getOption('token.class'));
    });
  return tokens;
}

export function hwbOptionsFactory(options) {
  return deepExtend(defaultAuthOptions, options);
}

@NgModule({
  imports: [
     CommonModule,
    // NbLayoutModule,
    // NbCardModule,
    // NbCheckboxModule,
    // NbAlertModule,
    // NbInputModule,
    // NbButtonModule,
    // RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
  ],
   declarations: [
//     NbAuthComponent,
//     NbAuthBlockComponent,
//     NbLoginComponent,
//     NbRegisterComponent,
//     NbRequestPasswordComponent,
//     NbResetPasswordComponent,
//     NbLogoutComponent,
   ],
  exports: [
    // NbAuthComponent,
    // NbAuthBlockComponent,
    // NbLoginComponent,
    // NbRegisterComponent,
    // NbRequestPasswordComponent,
    // NbResetPasswordComponent,
    // NbLogoutComponent,
  ],
})
export class TraqAuthModule {
  static forRoot(hwbAuthOptions?: TraqAuthOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: TraqAuthModule,
      providers: [
        { provide: HWB_AUTH_USER_OPTIONS, useValue: hwbAuthOptions },
        { provide: HWB_AUTH_OPTIONS, useFactory: hwbOptionsFactory, deps: [HWB_AUTH_USER_OPTIONS] },
        { provide: HWB_AUTH_STRATEGIES, useFactory: hwbStrategiesFactory, deps: [HWB_AUTH_OPTIONS, Injector] },
        { provide: HWB_AUTH_TOKENS, useFactory: hwbTokensFactory, deps: [HWB_AUTH_STRATEGIES] },
        { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
        { provide: HWB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
        { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
        TraqAuthTokenParceler,
        TraqAuthService,
        TraqTokenService,
        TraqDummyAuthStrategy,
        TraqPasswordAuthStrategy,
        TraqOAuth2AuthStrategy,
      ],
    };
  }
}