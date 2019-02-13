import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../../../@pages/dashboard-crm/dashboard-crm.component';
import { EventComponent } from '../../../@pages/events/EventView/Event.component';
import { EventStatusComponent } from '../../../@pages/event-status/EventStatusView/event-status.component';
import { TournamentComponent } from '../../../@pages/Tournaments/TournamentView/tournament.component';
import { EventDetailComponent } from '../../../@pages/event-details/EventDetailView/event-detail.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        // { path: 'dashboard', component: DashboardCrmComponent },
        // { path: 'accounts', loadChildren: '../../../@pages/accounts/accounts.module#AccountsModule' },
        { path: 'landing', loadChildren: '../../../@pages/landing/landingpage.module#LandingPageModule' },
        // { path: 'material-widgets', loadChildren: '../../../@pages/material-widgets/material-widgets.module#MaterialWidgetsModule' },
        // { path: 'reactivexjs', loadChildren: '../../../@pages/reactivexjs/rxjs.module#RxjsModule' },
        // { path: 'tables', loadChildren: '../../../@pages/tables/tables.module#TablesModule' },
    //    { path: 'maps', loadChildren: '../../../@pages/maps/maps.module#MapsModule' },
    //    { path: 'charts', loadChildren: '../../../@pages/charts/charts.module#ChartsModule' },
    //    { path: 'chats', loadChildren: '../../../@pages/chats/chat.module#ChatsModule' }, // fix this
    //    { path: 'mail', loadChildren: '../../../@pages/mail/mail.module#MailModule' }, // fix this
       // { path: 'pages', loadChildren: '../../../@pages/pages/pages.module#PagesModule' },
      // { path: 'auths', loadChildren: '../../../@themes/components/auths/authorisation.module#AuthsModule' },
       // { path: 'authstest', loadChildren: '../../../@pages/authstest/authorisation.module#AuthsTestAppModule' },
        //{ path: 'authorization', loadChildren: '../../../@pages/authorization/authorization.module#AuthorizationModule' },
         { path: 'event', loadChildren: '../../../@pages/events/event.module#EventModule'  }, //fix this
         { path: 'event-status', loadChildren: '../../../@pages/event-status/event-status.module#EventStatusModule'  }, //fix this
         { path: 'tournament',loadChildren: '../../../@pages/Tournaments/tournament.module#TournamentModule' }, //fix this
         { path: 'event-detail', loadChildren: '../../../@pages/event-details/event-detail.module#EventDetailModule'  }, //fix this
         { path: 'home', loadChildren: '../../../@pages/Home/home.module#HomeModule'  }, //fix this
        { path: 'guarded-routes', loadChildren: '../../../@pages/landing/landingpage.module#LandingPageModule'  },
        // { path: 'editor', loadChildren: '../../../@pages/editor/editor.module#EditorModule' }, 
        // { path: 'scrumboard', loadChildren: '../../../@pages/scrumboard/scrumboard.module#ScrumboardModule' },
    ]
}];