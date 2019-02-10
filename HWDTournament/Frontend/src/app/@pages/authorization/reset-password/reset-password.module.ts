import { NgModule, Injector } from '@angular/core';
import { HwbResetPasswordComponent } from './reset-password.component';
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
import { HwbAuthModule, HwbAuthService, HwbTokenService, HwbTokenStorage, HwbTokenLocalStorage, HwbAuthTokenParceler,
     HWB_AUTH_USER_OPTIONS, HWB_AUTH_OPTIONS, hwbOptionsFactory, HWB_AUTH_STRATEGIES, HWB_AUTH_TOKENS, HWB_AUTH_FALLBACK_TOKEN,
      HWB_AUTH_INTERCEPTOR_HEADER, HwbAuthSimpleToken, hwbTokensFactory, hwbStrategiesFactory, HwbDummyAuthStrategy, HwbPasswordAuthStrategy, HwbOAuth2AuthStrategy } from '../../../shared/auth';

const routes: Routes = [
    {path: '', component: HwbResetPasswordComponent},
  ];
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
       // HwbAuthModule,//HwbTokenStorage
    ],
    declarations: [   
        HwbResetPasswordComponent,   
       // HwbTokenStorage     
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // { provide: HwbTokenStorage, useClass: HwbTokenLocalStorage },
        // HwbTokenService,
        // HwbAuthService,      
       // HwbTokenLocal
       // provide: HwbTokenStorage, useClass: HwbTokenLocalStorage
      // HWB_AUTH_USER_OPTIONS
       { provide: HWB_AUTH_USER_OPTIONS, useValue: '' },
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
    ]
})
export class HwbResetPasswordModule {
}


