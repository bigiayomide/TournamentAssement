import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { Ng2OdometerModule } from 'ng2-odometer';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ToasterService,ToasterModule } from 'angular2-toaster';
import { TournamentDataService } from '../../shared/services/tournament.data.service';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonToggleModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatTableModule, MatOptionModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { EventAlertDialogComponent } from './event-alert/event-alert';
import { EventComponent } from './EventView/event.component';
import { EventUpdateDialogComponent } from './event-update/event-update';
import { EventCreateDialogComponent } from './event-create/event-create';
import { EventDataService } from '../../shared/services/event.data.service';
import { Routes, RouterModule } from '@angular/router';
export const appRoutes: Routes = [
  { path: '', component: EventComponent },
]


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatRadioModule,
    MatListModule,
    MatListModule,
    MatTableModule,
    Ng2OdometerModule,
    MatOptionModule,
    MatSelectModule,
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,  
    RouterModule.forChild(appRoutes),
    ToasterModule, 
  ],
  declarations: [
    EventComponent,
    EventAlertDialogComponent,
    EventUpdateDialogComponent,
    EventCreateDialogComponent
      ],
  exports: [
      EventComponent,
      EventAlertDialogComponent,
      EventUpdateDialogComponent,
      EventCreateDialogComponent
  ],
  providers:[
    ToasterService,
    EventDataService,
    TournamentDataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [
    EventAlertDialogComponent,
    EventUpdateDialogComponent,
    EventCreateDialogComponent
]
})
export class EventModule { }
