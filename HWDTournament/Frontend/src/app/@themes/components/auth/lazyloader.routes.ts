import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../../../@pages/dashboard-crm/dashboard-crm.component';
import { CallRecordingSearchComponent } from '../../../@pages/call-recording-search/call-recording-search.component';

export const appRoutes: Routes = [
    {   path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
      //  { path: 'callrecording', component: CallRecordingSearchComponent },
       // { path: 'material-widgets', loadChildren: '../../../@pages/material-widgets/material-widgets.module#MaterialWidgetsModule' },
       // { path: 'reactivexjs', loadChildren: '../../../@pages/reactivexjs/rxjs.module#RxjsModule' },
       // { path: 'tables', loadChildren: '../../../@pages/tables/tables.module#TablesModule' },
        // { path: 'maps', loadChildren: '../../../@pages/maps/maps.module#MapsModule' },
        // { path: 'charts', loadChildren: '../../../@pages/charts/charts.module#ChartsModule' },
        // { path: 'chats', loadChildren: '../../../@pages/chats/chat.module#ChatsModule' },
        // { path: 'mail', loadChildren: '../../../@pages/mail/mail.module#MailModule' },
        { path: 'recordings', loadChildren: '../../../@pages/call-recording-search/call-recording-search.module#CallRecordingSearchModule'},
      //  { path: 'authstest', loadChildren: '../../../@pages/authstest/authorisation.module#AuthsTestAppModule' },
       // { path: 'forms', loadChildren: '../../../@pages/forms/forms.module#FormModule' }, //fix this
      //  { path: 'guarded-routes', loadChildren: '../../../@pages/guarded-routes/guarded-routes.module#GuardedRoutesModule' },
       // { path: 'editor', loadChildren: '../../../@pages/editor/editor.module#EditorModule' },
       // { path: 'scrumboard', loadChildren: '../../../@pages/scrumboard/scrumboard.module#ScrumboardModule' },
       { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
}];
