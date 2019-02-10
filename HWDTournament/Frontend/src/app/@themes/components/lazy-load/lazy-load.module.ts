import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';

// const routes: Routes = [   
//     {path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
//     {path: 'register', loadChildren: '../../../@pages/pages/register/register.module#RegisterModule'},
//     {path: 'login', loadChildren: '../../../@pages/pages/login/login.module#LoginModule'},
//     // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

//     {path: '**', redirectTo: 'auth/dashboard'},
// ]

const routes: Routes = [   
    {path: 'auth', loadChildren: '../auth/auth.module#AuthModule'},
    {path: 'registers', loadChildren: '../../../@pages/pages/registernew/register.module#RegisterSModule'},
    {path: 'logins', loadChildren: '../../../@pages/pages/loginnew/login.module#LoginSModule'},
   
    { path: 'hwbregister', loadChildren: '../../../@pages/authorization/register/register.module#HwbRegisterModule' },
    { path: 'hwblogin', loadChildren: '../../../@pages/authorization/login/login.module#HwbLoginModule' },
    { path: 'hwblogout', loadChildren: '../../../@pages/authorization/logout/logout.module#HwbLogoutModule' },
    { path: 'hwbrequestpassword', loadChildren: '../../../@pages/authorization/request-password/request-password.module#HwbRequestPasswordModule' },
    { path: 'hwbresetpassword', loadChildren: '../../../@pages/authorization/reset-password/reset-password.module#HwbResetPasswordModule' },
  // {path: 'authorization', loadChildren: '../auth/auth.module#AuthModule'},
   // { path: 'authorization', loadChildren: '../../../@pages/pages/auth/auth.module#AuthorizationModule' },
  //  { path: 'authorization', loadChildren: '../../../@pages/pages/auth/auth.module#AuthorizationModule' },
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},

   // {path: '**', redirectTo: 'auth/dashboard'},
   {path: '**', redirectTo: 'auth/landing'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes , {useHash: true,enableTracing:true})
    ],
    exports: [RouterModule]
})
export class LazyLoadModule { }
