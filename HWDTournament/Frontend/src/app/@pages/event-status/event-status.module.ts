import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatChipsModule } from "@angular/material/chips";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { Ng2OdometerModule } from "ng2-odometer";
import { RoundProgressModule } from "angular-svg-round-progressbar";
import { ToasterService, ToasterModule } from "angular2-toaster";
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonToggleModule
} from "@angular/material";
import { EventStatusAlertDialogComponent } from "./event-status-alert/event-status-alert";
import { EventStatusComponent } from "./EventStatusView/event-status.component";
import { EventStatusUpdateDialogComponent } from "./event-status-update/event-status-update";
import { EventStatusCreateDialogComponent } from "./event-status-create/event-status-create";
import { EventStatusDataService } from "../../shared/services/eventstatus.data.service";
import { Routes, RouterModule } from "@angular/router";
export const appRoutes: Routes = [
  { path: "", component: EventStatusComponent }
];

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
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ToasterModule
  ],
  declarations: [
    EventStatusComponent,
    EventStatusAlertDialogComponent,
    EventStatusUpdateDialogComponent,
    EventStatusCreateDialogComponent
  ],
  exports: [
    EventStatusComponent,
    EventStatusAlertDialogComponent,
    EventStatusUpdateDialogComponent,
    EventStatusCreateDialogComponent
  ],
  providers: [
    ToasterService,
    EventStatusDataService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  entryComponents: [
    EventStatusAlertDialogComponent,
    EventStatusUpdateDialogComponent,
    EventStatusCreateDialogComponent
  ]
})
export class EventStatusModule {}
