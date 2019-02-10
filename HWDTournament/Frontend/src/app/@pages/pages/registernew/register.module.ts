import { NgModule } from '@angular/core';
import { RegisterSComponent } from './register.component';
import { 
        MatCardModule,
        MatCheckboxModule,
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
import { ParticlesModule } from 'angular-particle';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { UserDataService } from '../../../shared/services/user.data.service';
import { ItemsService } from '../../../shared/utils/items.service';
import { TournamentDataService } from '../../../shared/services/tournament.data.service';

const routes: Routes = [
    {path: '', component: RegisterSComponent},
  ];
@NgModule({
    imports: [
        MatCardModule,
        MatCheckboxModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        ParticlesModule,   
        ToasterModule,  
        MatProgressBarModule, 
        RouterModule.forChild(routes)
    ],
    declarations: [   
        RegisterSComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ToasterService,
        UserDataService, 
        ItemsService,
        TournamentDataService
    ]
})
export class RegisterSModule {
}
