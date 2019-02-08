import { NgModule } from '@angular/core';
import { MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatDialogModule,
       } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRouterModule } from './pages.routes';
import { CoreModule } from '../../@themes/components/core/core.module';
import { AppUserComponent } from './users/app-user/app-user.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { DeleteDialogComponent } from './users/delete-dialog/delete-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidatorModule } from '../../shared/utils/equal-validator.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        MatTableModule,
        MatDialogModule,
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatChipsModule,
        CoreModule,
        PagesRouterModule,
        ToasterModule,
       // AccountDataService,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        EqualValidatorModule,
    ],
    entryComponents: [AppUserComponent, DeleteDialogComponent]
})
export class PagesModule {
}
