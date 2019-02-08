import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CallRecordingSearchComponent } from './call-recording-search.component';
import { RecordingsComponent } from './recordingsearch/recordings/recordings.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsersComponent } from '../pages/users/users.component';

const callRecordingRoutes: Routes = [
    { path: 'home', component: CallRecordingSearchComponent, canActivate: [AuthGuard] },
    { path: 'searchresults', component: RecordingsComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    // { path: 'forgot-password', component: ForgotPasswordComponent },
    // { path: 'password-reset', component: ResetPasswordComponent },
    // { path: '**', component: LoginSComponent },
];

@NgModule({
imports: [
  RouterModule.forChild(callRecordingRoutes)
    ],
exports: [
  RouterModule
]
})
export class CallRecordingRouterModule { }
