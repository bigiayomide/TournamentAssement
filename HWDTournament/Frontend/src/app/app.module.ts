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
import { HwbTokenService, HwbTokenStorage, HwbAuthService, HwbTokenLocalStorage,HwbOAuth2AuthStrategy,
         HwbAuthModule, HwbAuthTokenParceler ,HwbPasswordAuthStrategy,HwbOAuth2ResponseType} from './shared/auth';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatInputModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './@pages/helpers/jwt.interceptors';


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
    MatInputModule,
    BrowserAnimationsModule,  
 
    HwbAuthModule.forRoot({
      strategies: [
        HwbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }), 
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBtUsPwFS3uEAbtoVCJpFubjSW2AD3_YDk",
      libraries: ["places"]
    })
  ],
  providers: [
    ConfigService,
    ItemsService, 
    StateService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    
    // { provide: HwbTokenStorage, useClass: HwbTokenLocalStorage },
    // HwbTokenService,
    // HwbAuthService,   
    // HwbAuthTokenParceler
    // HwbTokenLocalStorage         
               ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
