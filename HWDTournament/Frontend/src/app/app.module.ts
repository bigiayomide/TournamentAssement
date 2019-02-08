import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './@themes/components/lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './@themes/components/core/core.module';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { StateService } from './shared/utils/state.service';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
// import {TraqPasswordAuthStrategy} from from './shared/auth';
import { TraqTokenService, TraqTokenStorage, TraqAuthService, TraqTokenLocalStorage, TraqOAuth2AuthStrategy,
         TraqAuthModule, TraqAuthTokenParceler , TraqPasswordAuthStrategy, TraqOAuth2ResponseType} from './shared/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './@pages/helpers/jwt.interceptor';
//import { ForgotPasswordComponent } from './@pages/pages/users/forgot-password/forgot-password.component';
import { ToasterModule, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule, MatToolbarModule,
  MatIconModule, MatCheckboxModule,
  MatListModule,
   MatChipsModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecallToastService } from './@pages/pages/users/toast-service';
// import { AppRoutingModule } from './app-routing.module';
// import {
//   TraqAuthComponent,
//   TraqLoginComponent,
//   TraqLogoutComponent,
//   TraqRegisterComponent,
//   TraqRequestPasswordComponent,
//   TraqResetPasswordComponent,
// } from './@pages/pages/auth';


@NgModule({
  declarations: [
    AppComponent,
    DateFormatPipe,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ToasterModule,
   // TraqAuthModule
    TraqAuthModule.forRoot({
      strategies: [
        TraqPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
    // TraqAuthModule.forRoot({
    //   strategies: [
    //     TraqOAuth2AuthStrategy.setup({
    //       name: 'google',
    //       clientId: '806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com',
    //       clientSecret: '',
    //       authorize: {
    //         endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    //         responseType: TraqOAuth2ResponseType.TOKEN,
    //         scope: 'https://www.googleapis.com/auth/userinfo.profile',
    //         redirectUri: 'https://akveo.github.io/nebular/example/oauth2/callback',
    //       },

    //       redirect: {
    //         success: '/example/oauth2',
    //       },
    //     }),
    //   ],
    // }),
  ],
  providers: [
    ConfigService,
    ItemsService, StateService
   // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
    // TraqTokenService,
    // TraqAuthService,
    // TraqAuthTokenParceler
    // TraqTokenLocalStorage
               ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  // static forRoot(hwbAuthOptions?: TraqAuthOptions): ModuleWithProviders {
  //       return <ModuleWithProviders> {
  //         ngModule: TraqAuthModule,
  //         providers: [
  //           { provide: HWB_AUTH_USER_OPTIONS, useValue: hwbAuthOptions },
  //           { provide: HWB_AUTH_OPTIONS, useFactory: hwbOptionsFactory, deps: [HWB_AUTH_USER_OPTIONS] },
  //           { provide: HWB_AUTH_STRATEGIES, useFactory: hwbStrategiesFactory, deps: [HWB_AUTH_OPTIONS, Injector] },
  //           { provide: HWB_AUTH_TOKENS, useFactory: hwbTokensFactory, deps: [HWB_AUTH_STRATEGIES] },
  //           { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
  //           { provide: HWB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
  //           { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
  //           TraqAuthTokenParceler,
  //           TraqAuthService,
  //           TraqTokenService,
  //           TraqDummyAuthStrategy,
  //           TraqPasswordAuthStrategy,
  //           TraqOAuth2AuthStrategy,
  //         ],
  //       };
  //     }
  // static forRoot(hwbAuthOptions?: TraqAuthOptions): ModuleWithProviders {
  //   return <ModuleWithProviders> {
  //     ngModule: TraqAuthModule,
  //     providers: [
  //       { provide: HWB_AUTH_USER_OPTIONS, useValue: hwbAuthOptions },
  //       { provide: HWB_AUTH_OPTIONS, useFactory: hwbOptionsFactory, deps: [HWB_AUTH_USER_OPTIONS] },
  //       { provide: HWB_AUTH_STRATEGIES, useFactory: hwbStrategiesFactory, deps: [HWB_AUTH_OPTIONS, Injector] },
  //       { provide: HWB_AUTH_TOKENS, useFactory: hwbTokensFactory, deps: [HWB_AUTH_STRATEGIES] },
  //       { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
  //       { provide: HWB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
  //       { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
  //       TraqAuthTokenParceler,
  //       TraqAuthService,
  //       TraqTokenService,
  //       TraqDummyAuthStrategy,
  //       TraqPasswordAuthStrategy,
  //       TraqOAuth2AuthStrategy,
  //     ],
  //   };
  // }
}
