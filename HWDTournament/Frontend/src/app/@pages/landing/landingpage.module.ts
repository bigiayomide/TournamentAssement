import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landingpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule ,MatTooltipModule} from '@angular/material';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';
import {ToasterService,ToasterModule } from 'angular2-toaster';
import { TournamentModule } from '../Tournaments/tournament.module';
import { EventModule } from '../events/event.module';
import { EventDetailModule } from '../event-details/event-detail.module';
import { EventStatusModule } from '../event-status/event-status.module';
export const appRoutes: Routes = [
    { path: '', component: LandingPageComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    ToasterModule,
    MatButtonModule ,
    MatTooltipModule,
    DashboardWidgetModule,
    TournamentModule,
    EventModule,
    EventDetailModule,
    EventStatusModule
  ],
  declarations: [LandingPageComponent],
  exports: [  ],
  providers: [
    ToasterService,
  ]
})
export class LandingPageModule { }



