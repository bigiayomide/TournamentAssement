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
import { TournamentComponent } from './TournamentView/tournament.component';
import { TournamentDataService } from '../../shared/services/tournament.data.service';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonToggleModule } from '@angular/material';
import { TournamentAlertDialogComponent } from './tournament-alert/tournament-alert';
import { TournamentCreateDialogComponent } from './tournament-create/tournament-create';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TournamentUpdateDialogComponent } from './tournament-update/tournament-update';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: TournamentComponent },
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
    ToasterModule, 
  ],
  declarations: [
      TournamentComponent,
      TournamentAlertDialogComponent,
      TournamentCreateDialogComponent,
      TournamentUpdateDialogComponent
      ],
  exports: [
      TournamentComponent,
      TournamentAlertDialogComponent,
      TournamentCreateDialogComponent,
      TournamentUpdateDialogComponent
  ],
  providers:[
    ToasterService,
    TournamentDataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  entryComponents: [
    TournamentAlertDialogComponent,
    TournamentCreateDialogComponent,
    TournamentUpdateDialogComponent
]
})
export class TournamentModule { }
