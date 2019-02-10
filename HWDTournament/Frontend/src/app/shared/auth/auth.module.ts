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
  HwbAuthService,
  HwbAuthSimpleToken,
  HwbAuthTokenClass,
  HwbAuthTokenParceler,
  HwbTokenLocalStorage,
  HwbTokenService,
  HwbTokenStorage,
} from './services';
import {
  HwbAuthStrategy,
  HwbAuthStrategyOptions,
  HwbDummyAuthStrategy,
  HwbOAuth2AuthStrategy,
  HwbPasswordAuthStrategy,
} from './strategies';

import {
  defaultAuthOptions,
  HWB_AUTH_INTERCEPTOR_HEADER,
  HWB_AUTH_OPTIONS,
  HWB_AUTH_STRATEGIES,
  HWB_AUTH_TOKENS,
  HWB_AUTH_USER_OPTIONS,
  HwbAuthOptions,
  HwbAuthStrategyClass,
} from './auth.options';

// import { HwbAuthComponent } from './components/auth.component';

// import { HwbAuthBlockComponent } from './components/auth-block/auth-block.component';
// import { HwbLoginComponent } from './components/login/login.component';
// import { HwbRegisterComponent } from './components/register/register.component';
// import { HwbLogoutComponent } from './components/logout/logout.component';
// import { HwbRequestPasswordComponent } from './components/request-password/request-password.component';
// import { HwbResetPasswordComponent } from './components/reset-password/reset-password.component';

// import { routes } from './auth.routes';
import { deepExtend } from './helpers';

export function hwbStrategiesFactory(options: HwbAuthOptions, injector: Injector): HwbAuthStrategy[] {
  const strategies = [];
  options.strategies
    .forEach(([strategyClass, strategyOptions]: [HwbAuthStrategyClass, HwbAuthStrategyOptions]) => {
      const strategy: HwbAuthStrategy = injector.get(strategyClass);
      strategy.setOptions(strategyOptions);

      strategies.push(strategy);
    });
  return strategies;
}

export function hwbTokensFactory(strategies: HwbAuthStrategy[]): HwbAuthTokenClass[] {
  const tokens = [];
  strategies
    .forEach((strategy: HwbAuthStrategy) => {
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
export class HwbAuthModule {
  static forRoot(hwbAuthOptions?: HwbAuthOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: HwbAuthModule,
      providers: [
        { provide: HWB_AUTH_USER_OPTIONS, useValue: hwbAuthOptions },
        { provide: HWB_AUTH_OPTIONS, useFactory: hwbOptionsFactory, deps: [HWB_AUTH_USER_OPTIONS] },
        { provide: HWB_AUTH_STRATEGIES, useFactory: hwbStrategiesFactory, deps: [HWB_AUTH_OPTIONS, Injector] },
        { provide: HWB_AUTH_TOKENS, useFactory: hwbTokensFactory, deps: [HWB_AUTH_STRATEGIES] },
        { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: HwbAuthSimpleToken },
        { provide: HWB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
        { provide: HwbTokenStorage, useClass: HwbTokenLocalStorage },
        HwbAuthTokenParceler,
        HwbAuthService,
        HwbTokenService,
        HwbDummyAuthStrategy,
        HwbPasswordAuthStrategy,
        HwbOAuth2AuthStrategy,
      ],
    };
  }
}