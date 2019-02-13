import { NgModule } from '@angular/core';
import { LoginSComponent } from './login.component';

import { ParticlesModule } from 'angular-particle';
//import {RegsterComponent} from './register.component';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatProgressBarModule
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { UserDataService } from '../../../shared/services/user.data.service';
import { ItemsService } from '../../../shared/utils/items.service';

const routes: Routes = [
    {path: '', component: LoginSComponent},
  ];
@NgModule({
    imports: [
        MatCardModule,
        MatIconModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        ParticlesModule,   
        ToasterModule,  
        MatProgressBarModule,   
        RouterModule.forChild(routes)       
    ],
    declarations: [   
        LoginSComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ToasterService,
        UserDataService, 
        ItemsService,
    ]
})
export class LoginSModule {
}
