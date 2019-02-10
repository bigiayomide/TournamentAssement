import { Routes, RouterModule } from '@angular/router';
import { AccountViewComponent } from './accountview/account-view.component';
import { AccountDetailsComponent } from './accountdetails/account-details.component';


const childRoutes: Routes = [
    {
      path: 'account-view',
      component: AccountViewComponent
    },
    {
      path: 'account-details',
      component: AccountDetailsComponent,
    }, 
    // {
    //   path: 'createaccount',
    //   component:  RegisterRedirectComponent,
    // } , 
    // {
    //   path: 'login',
    //   component:  LoginRedirectComponent,
    // }      
];

export const routing = RouterModule.forChild(childRoutes);

// const FormsRoutes: Routes = [
//     { path: 'reactive_forms', component: ReactiveFormsComponent },
//     { path: 'template_forms', component: TemplateDrivenFormsComponent },
    
// ];

// @NgModule({
// imports: [
//   RouterModule.forChild(FormsRoutes)
//     ],
// exports: [
//   RouterModule
// ]
// })
// export class FormsRouterModule {}
