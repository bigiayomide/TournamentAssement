//import { NgModule, Injector } from '@angular/core';
import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { HwbLoginComponent } from './login.component';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HwbAuthOptions, HwbAuthModule, HwbAuthService, HwbTokenService, HwbTokenStorage, HwbTokenLocalStorage, HwbAuthTokenParceler,
     HWB_AUTH_USER_OPTIONS, HWB_AUTH_OPTIONS, hwbOptionsFactory, HWB_AUTH_STRATEGIES, HWB_AUTH_TOKENS,
      HWB_AUTH_FALLBACK_TOKEN, HWB_AUTH_INTERCEPTOR_HEADER, HwbAuthSimpleToken, hwbTokensFactory,
       hwbStrategiesFactory, HwbDummyAuthStrategy, HwbPasswordAuthStrategy, HwbOAuth2AuthStrategy,HwbOAuth2ResponseType } from '../../../shared/auth';

const routes: Routes = [
    {path: '', component: HwbLoginComponent},
  ];

//   export function hwbStrategiesFactory(options: HwbAuthOptions, injector: Injector): HwbAuthStrategy[] {
//     const strategies = [];
//     options.strategies
//       .forEach(([strategyClass, strategyOptions]: [HwbAuthStrategyClass, HwbAuthStrategyOptions]) => {
//         const strategy: HwbAuthStrategy = injector.get(strategyClass);
//         strategy.setOptions(strategyOptions);
  
//         strategies.push(strategy);
//       });
//     return strategies;
//   }
  
//   export function hwbTokensFactory(strategies: HwbAuthStrategy[]): HwbAuthTokenClass[] {
//     const tokens = [];
//     strategies
//       .forEach((strategy: HwbAuthStrategy) => {
//         tokens.push(strategy.getOption('token.class'));
//       });
//     return tokens;
//   }
  
//   export function hwbOptionsFactory(options) {
//     return deepExtend(defaultAuthOptions, options);
//   }

@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        // HwbAuthModule.forRoot({
        //     strategies: [
        //       HwbOAuth2AuthStrategy.setup({
        //         name: 'google',
        //         clientId: '806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com',
        //         clientSecret: '',
        //         authorize: {
        //           endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        //           responseType: HwbOAuth2ResponseType.TOKEN,
        //           scope: 'https://www.googleapis.com/auth/userinfo.profile',
        //           redirectUri: 'https://akveo.github.io/nebular/example/oauth2/callback',
        //         },
      
        //         redirect: {
        //           success: '/example/oauth2',
        //         },
        //       }),
        //     ],
        //   }),
            
       HwbAuthModule.forRoot({
                strategies: [
                HwbPasswordAuthStrategy.setup({
                    name: 'email',
                }),
                ],
                forms: {},
            }),        
    ],
    declarations: [   
        HwbLoginComponent,   
       // HwbTokenStorage     
    ],
    exports: [
        RouterModule
    ],
    providers: [
    //    { provide: HWB_AUTH_USER_OPTIONS, useValue: '' },
    //    { provide: HWB_AUTH_OPTIONS, useFactory: hwbOptionsFactory, deps: [HWB_AUTH_USER_OPTIONS] },
    //    { provide: HWB_AUTH_STRATEGIES, useFactory: hwbStrategiesFactory, deps: [HWB_AUTH_OPTIONS, Injector] },
    //    { provide: HWB_AUTH_TOKENS, useFactory: hwbTokensFactory, deps: [HWB_AUTH_STRATEGIES] },
    //    { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: HwbAuthSimpleToken },
    //    { provide: HWB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
    //    { provide: HwbTokenStorage, useClass: HwbTokenLocalStorage },
    //    HwbAuthTokenParceler,
    //    HwbAuthService,
    //    HwbTokenService,
    //    HwbDummyAuthStrategy,
    //    HwbPasswordAuthStrategy,
    //    HwbOAuth2AuthStrategy,
    ]
})
export class HwbLoginModule {
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


