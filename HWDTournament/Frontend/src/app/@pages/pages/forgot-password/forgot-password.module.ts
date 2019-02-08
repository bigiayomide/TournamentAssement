import { NgModule } from '@angular/core';
import {
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AccountDataService } from '../../../shared/services/account.data.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ForgotPasswordComponent } from './forgot-password.component';
import { UserManagementService } from '../../call-recording-search/callrecording.services/users.service';
import { ParticlesModule } from 'angular-particle';
const routes: Routes = [
    {path: '', component: ForgotPasswordComponent},
  ];
@NgModule({
    imports: [
        ParticlesModule,
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        ToasterModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ForgotPasswordComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AccountDataService,
        ToasterService,
        UserManagementService
    ]
})
export class ForgotPasswordModule {
}
