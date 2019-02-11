import { MatRadioModule } from '@angular/material/radio';
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
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonToggleModule, MatTableModule, MatPaginatorModule, MatGridListModule, MatSelectModule, MatSortModule } from '@angular/material';
import { EventDetailComponent } from './EventDetailView/event-detail.component';
import { EventDetailUpdateDialogComponent } from './event-detail-update/event-detail-update';
import { EventDetailCreateDialogComponent } from './event-detail-create/event-detail-create';
import { EventDetailDataService } from '../../shared/services/eventdetail.data.service';
import { EventDetailAlertDialogComponent } from './event-detail-alert/event-detail-alert';
import { Routes, RouterModule } from '@angular/router';
import { EventStatusDataService } from '../../shared/services/eventstatus.data.service';
import { EventDataService } from '../../shared/services/event.data.service';

export const appRoutes: Routes = [
  { path: '', component: EventDetailComponent },
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
    MatListModule,
    Ng2OdometerModule,
    MatPaginatorModule,
    RoundProgressModule,
    MatMenuModule,
    MatGridListModule,
    MatChipsModule,
    MatTableModule,
    MatProgressBarModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ToasterModule,
  ],
  declarations: [
    EventDetailComponent,
    EventDetailAlertDialogComponent,
    EventDetailUpdateDialogComponent,
    EventDetailCreateDialogComponent
      ],
  exports: [
      EventDetailComponent,
      EventDetailAlertDialogComponent,
      EventDetailUpdateDialogComponent,
      EventDetailCreateDialogComponent
  ],
  providers:[
    ToasterService,
    EventDetailDataService,
    EventStatusDataService,
    EventDataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [
    EventDetailAlertDialogComponent,
    EventDetailUpdateDialogComponent,
    EventDetailCreateDialogComponent
]
})
export class EventDetailModule { }
