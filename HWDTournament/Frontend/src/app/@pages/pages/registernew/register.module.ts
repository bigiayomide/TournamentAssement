import { NgModule } from '@angular/core';
import { RegisterSComponent } from './register.component';

import {
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AccountDataService } from '../../../shared/services/account.data.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ParticlesModule } from 'angular-particle';


const routes: Routes = [
    {path: '', component: RegisterSComponent},
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
        MatProgressBarModule,
        MatProgressSpinnerModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
      RegisterSComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AccountDataService,
        ToasterService,
    ]
})
export class RegisterSModule {
}
