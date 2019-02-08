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
import { ResetPasswordComponent } from './reset-password.component';
import { UserManagementService } from '../../call-recording-search/callrecording.services/users.service';
import { ParticlesModule } from 'angular-particle';


const routes: Routes = [
    {path: '', component: ResetPasswordComponent},
  ];
@NgModule({
    imports: [
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
        ParticlesModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ResetPasswordComponent
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
export class ResetPasswordModule {
}
