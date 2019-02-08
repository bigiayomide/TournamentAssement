import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatOptionModule,
  MatSelectModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MAT_DATE_LOCALE,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatCheckboxModule,
  MatTooltipModule
} from '@angular/material';


import { CallRecordingRouterModule } from './call-recording-search.router';
import { CallRecordingSearchComponent } from './call-recording-search.component';
import { HomeComponent } from './recordingsearch/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CampaignFilterService } from './callrecording.services/campaignfilter.service';
import { AccountStatusFilterService } from './callrecording.services/accountstatusfilter.service';
import { RecordingSearchService } from './callrecording.services/recordingsearch.service';
import { RecordingsComponent } from './recordingsearch/recordings/recordings.component';
import { RecordingDialogComponent } from './recordingsearch/recording-dialog/recording-dialog.component';
import { Data } from './callrecording.providers/data';
import { CallDownloadService } from './callrecording.services/calldownload.service';
import { MomentModule } from 'ngx-moment';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { ToasterService, ToasterModule } from 'angular2-toaster';
import { UsersComponent } from '../pages/users/users.component';
import { UserManagementService } from './callrecording.services/users.service';
import { AppUserComponent } from '../pages/users/app-user/app-user.component';
import { AccountDataService } from '../../shared/services/account.data.service';
import { DeleteDialogComponent } from '../pages/users/delete-dialog/delete-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    CallRecordingRouterModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MomentModule,
    HttpClientModule,
    ToasterModule,
    MatTooltipModule
  ],
  declarations: [
    CallRecordingSearchComponent,
    HomeComponent,
    RecordingsComponent,
   UsersComponent,
    RecordingDialogComponent,
    AppUserComponent,
   DeleteDialogComponent,
    AlertDialogComponent,
  ],
    providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'en-ZA'},
      CampaignFilterService,
       AccountStatusFilterService,
       RecordingSearchService,
       CallDownloadService,
       ToasterService,
       AccountDataService,
       UserManagementService,
       { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      Data],
       entryComponents: [RecordingDialogComponent,
        AppUserComponent,
        DeleteDialogComponent,
        AlertDialogComponent
      ]
})
export class CallRecordingSearchModule { }
