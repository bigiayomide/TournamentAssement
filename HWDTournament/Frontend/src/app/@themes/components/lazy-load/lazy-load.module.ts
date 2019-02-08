import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
    {path: 'registers', loadChildren: '../../../@pages/pages/registernew/register.module#RegisterSModule'},
    {path: 'logins', loadChildren: '../../../@pages/pages/loginnew/login.module#LoginSModule'},
    {path: 'forgot-password', loadChildren: '../../../@pages/pages/forgot-password/forgot-password.module#ForgotPasswordModule'},
    {path: 'reset-password', loadChildren: '../../../@pages/pages/reset-password/reset-password.module#ResetPasswordModule'},
    {path: '**', redirectTo: 'logins'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class LazyLoadModule { }
