import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountViewComponent } from './accountview/account-view.component';
import { AccountDetailsComponent } from './accountdetails/account-details.component';
import { ContactCardComponent,/* ContactInformationDialog, PersonDetailsDialog*/ } from './accountdetails/cards/contact-card.component';
import { AccountHolderCardComponent } from './accountdetails/cards/accountholder-card.component';
import { AccountDataService } from '../../shared/services/account.data.service';
import { ItemsService } from '../../shared/utils/items.service';
import { ConfigService } from '../../shared/utils/config.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinancialDatesCardComponent } from './accountdetails/cards/financialdates-card.component';
import { FinancialBalancesCardComponent } from './accountdetails/cards/financialbalances-card.component';
import { GeneralInfoCardComponent } from './accountdetails/cards/generalinfo-card.component';
import { routing } from './account.routing';
import { AccountCardComponent } from './accountview/card/account-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import {   
			MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
			MatIconModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatListModule,
            MatStepperModule,
            MatFormFieldModule,
            MatMenuModule,
            MatExpansionModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatSliderModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatProgressBarModule,
            MatDialogModule,
            MatGridListModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MAT_DIALOG_DEFAULT_OPTIONS,} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AccountInfoCardComponent } from './accountdetails/cards/accountinfo-card.component';
import { ContactNewCardComponent } from './accountdetails/cards/contact-new-card.component';
import { ContactInformationDialog, PersonDetailsDialog, ContactFlipCardComponent, ContactAddressDialog } from './accountdetails/cards/contact-flip-card/contact-flip-card.component';
import { TournamentDataService } from '../../shared/services/tournament.data.service';

@NgModule({
    imports: [     
        FormsModule,  
        MatDialogModule,
        //PaginationModule,
        CommonModule,
      //  FormsRouterModule,
		FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		 MatInputModule,
         ReactiveFormsModule,
         FlexLayoutModule,
         MatAutocompleteModule,
         MatButtonModule,
         MatCardModule,
         MatCheckboxModule,
         MatProgressSpinnerModule,
         MatIconModule,
         MatTabsModule,
         MatTableModule,
         MatPaginatorModule,
         MatSortModule,
         MatRadioModule,
         MatToolbarModule,
         MatListModule,
         MatStepperModule,
         ReactiveFormsModule,
         FormsModule,
         MatFormFieldModule,
         MatInputModule,
         MatMenuModule,
         MatExpansionModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatSliderModule,
         MatSelectModule,
         MatSlideToggleModule,
         MatProgressBarModule,
         MatDialogModule,
         MatGridListModule,
        // FormsModule,
         ToasterModule,
       // SharedModule,
     //  NgxEchartsModule,
        routing
    ],
    declarations: [
        ContactInformationDialog,
        ContactAddressDialog,
        PersonDetailsDialog,
        AccountDetailsComponent,
        AccountViewComponent , 
        AccountCardComponent , 
        ContactCardComponent,
        FinancialDatesCardComponent,
        FinancialBalancesCardComponent,
        GeneralInfoCardComponent,
        AccountHolderCardComponent, 
        AccountInfoCardComponent, 
        ContactNewCardComponent,
        ContactFlipCardComponent
      //  RegisterRedirectComponent,
//LoginRedirectComponent 
    ],
    providers: [
       // SearchService,
       ToasterService,
        AccountDataService,
        TournamentDataService,
        ItemsService,     
        ConfigService,
      //  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
     
    ],
    entryComponents: [
        ContactInformationDialog,
        ContactAddressDialog,
        PersonDetailsDialog
    ]
})
export class AccountsModule { }
