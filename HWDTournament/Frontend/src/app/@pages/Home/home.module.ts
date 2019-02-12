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
import { EventDetailDataService } from '../../shared/services/eventdetail.data.service';
import { Routes, RouterModule } from '@angular/router';
import { EventStatusDataService } from '../../shared/services/eventstatus.data.service';
import { HomeComponent } from './home.component';
import { ConfigService } from '../../shared/utils/config.service';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
    MatCardModule,
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
    HomeComponent,
      ],
  exports: [
      HomeComponent,
  ],
  providers:[
    ToasterService,
    EventDetailDataService,
    EventStatusDataService,
    ConfigService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],

})
export class HomeModule { }
