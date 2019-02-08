import { NgModule } from '@angular/core';
import { MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatSelectModule
       } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthTestAppRouterModule } from './authorisation.routes';

import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { NavMenuSComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { ClaimsComponent } from './components/claims/claims.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { HttpInterceptor } from '../../shared/utils/http.interceptor';
import { StateService } from '../../shared/utils/state.service';
import { AccessForbiddenComponent } from './components/claims/access-forbidden/access-forbidden.component';
import { ManageComponent } from './components/manage/manage.component';
import { StreamingRegisterComponent } from './components/streaming/register/register.component';
import { AddVideoComponent } from './components/streaming/add/add-video.component';

// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';
// import { CoreModule } from '../../@themes/components/core/core.module';

@NgModule({
    imports: [
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
        MatGridListModule,
        MatSelectModule,
      //  CoreModule,
      HttpModule,
      FormsModule,
      AuthTestAppRouterModule ],
  declarations: [
    AppComponent,
    ClaimsComponent,
    NavMenuSComponent,
    HomeComponent,
    StreamingComponent,
    StreamingRegisterComponent,
    AddVideoComponent,
    AccessForbiddenComponent,
    ManageComponent
],
 providers: [
        { provide: Http, useClass: HttpInterceptor },
        StateService
    ],
})
export class AuthsTestAppModule {
}
