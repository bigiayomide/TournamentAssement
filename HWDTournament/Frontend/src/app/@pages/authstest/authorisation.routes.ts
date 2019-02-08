import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { HttpInterceptor } from '../../shared/utils/http.interceptor';
import { StateService } from '../../shared/utils/state.service';
import { AccessForbiddenComponent } from './components/claims/access-forbidden/access-forbidden.component';
import { ManageComponent } from './components/manage/manage.component';
import { StreamingRegisterComponent } from './components/streaming/register/register.component';
import { AddVideoComponent } from './components/streaming/add/add-video.component';

const authRoutes: Routes = [
  	// { path: 'contact', component: ContactComponent ,data: { animation: 'contact' } },
  	// { path: 'about', component: AboutComponent ,data: { animation: 'about' }},
    // { path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
        { path: 'home', component: HomeComponent },
       // { path: 'logins', component: LoginSComponent },
       // { path: 'registers', component: RegisterSComponent },
        { path: 'claims', component: ClaimsComponent },
        { path: 'videos/:id', component: StreamingComponent },
        { path: 'videos', component: StreamingComponent },
        { path: 'streaming/register', component: StreamingRegisterComponent },
        { path: 'streaming/videos/add', component: AddVideoComponent },
        { path: 'access-forbidden', component: AccessForbiddenComponent },
        { path: 'manage/users', component: ManageComponent },
        { path: '**', redirectTo: 'home' }
];

@NgModule({

  imports: [
   // CommonModule,
    //    HttpModule,
   //     FormsModule,
      //  BrowserAnimationsModule,

    RouterModule.forChild(authRoutes)
    ],

  exports: [
    RouterModule
  ]
})
export class AuthTestAppRouterModule { }
