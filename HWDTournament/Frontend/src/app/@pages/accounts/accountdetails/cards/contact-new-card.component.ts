import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild, Inject} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Router ,ActivatedRoute} from '@angular/router';
import { IContactInformationVM, PaginatedResult, IAccountSummaryVM, IContactPersonVM, ITitleVM, IMaritalStatusVM, ILanguageVM, ISalaryPaymentDateVM } from '../../../../shared/interfaces/interfaces';
import { AccountDataService } from '../../../../shared/services/account.data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
@Component({
  selector: 'ngx-contact-new-card',
  styleUrls: ['./contact-new-card.component.scss'],
  templateUrl: './contact-new-card.component.html',
  // animations: [
  //   trigger('flipCard', [
  //     state('true', style({
  //       transform: 'rotateY(180deg)'
  //     })),
  //     state('false', style({
  //       transform: 'rotateY(0)'
  //     })),
  //     transition('true => false', animate('800ms ease-out')),
  //     transition('false => true', animate('800ms ease-out'))
  //   ])
  // ]
 
})

export class ContactNewCardComponent implements OnInit {  
    @Input() acc_code: number; 
    flipped = false;
    apiHost: string;
    contactinfos: IContactInformationVM[];
    contactinformationLoaded: boolean;
  //  contactLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    isProcessing: boolean = false;
    flippedCouplesCount: number = 0;
    animal: string;
    name: string = "taoana";
    constructor(public dialog: MatDialog,
     protected router: Router,private activatedRoute: ActivatedRoute,
        private dataService: AccountDataService,/*private itemsService: ItemsService,       
       
        private dataService: CompanyDataService,
        private configService: ConfigService*/) { }

    ngOnInit() {
      //alert('tretreytrry 1') ;    
        this.apiHost = "";// this.configService.getApiHost();    
       // alert('tretreytrry 2') ;        
      this.LoadContacts();
    }

    // openContactDetailsDialog(contactinfo: any): void {
    //     const dialogRef = this.dialog.open(ContactInformationDialog, {
    //      width: '900px',
    //     // height:'700px',
    //     // data: {name: this.name, animal: this.animal}
    //     data:  contactinfo
    //    });
   
    //    dialogRef.afterClosed().subscribe(result => {        
    //      this.animal = result;
    //    });
    //  }
     
    //  openPersonDetailsDialog(contactinfo: any): void {
       
    //     const dialogRef = this.dialog.open(PersonDetailsDialog, {
    //      width: '900px',
    //     // height:'700px',
    //     // data: {name: this.name, animal: this.animal}
    //     data: contactinfo
    //    });
   
    //    dialogRef.afterClosed().subscribe(result => {       
    //      this.animal = result;
    //    });
    //  }

    // flip: string = 'inactive';

    // toggleFlip() {
    //   this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    // }
  
    // flipCard(contactinfo: any) {
      
    //     contactinfo.isFlipped = !contactinfo.isFlipped;
    // }   


    LoadContacts()
    {   //alert('tretreytrry 3') ;    
        this.dataService.getContactInfomation(this.acc_code)
        .subscribe((contactinfos: IContactInformationVM[]) => {
            this.contactinfos = contactinfos;   
              this.contactinformationLoaded = true;  
            },
            error => {                
               // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
    }
}

// @Component({
//     selector: './contact-information-dialog',
//     templateUrl: './contact-information-dialog.html',
//     styleUrls: ['./dialog.component.scss'],

//   })
//   export class ContactInformationDialog {
//     contactinfo: IContactInformationVM;
//     contactinfoLoaded: boolean = false;
//     constructor(
//         private toasterService: ToasterService,
//       public dialogRef: MatDialogRef<ContactInformationDialog>,
//       @Inject(MAT_DIALOG_DATA) public data: IContactInformationVM) {
//         this.contactinfo = data ;   
//         this.contactinfoLoaded = true;   
//       }
  
//     updateContact(): void {     
//         this.showToast('success', 'Update Success', 'Error occurred while logging in, please try again with valid credentials!');   
//     }  

//     config: ToasterConfig;  
//     position: string = 'toast-top-full-width';
//     animationType: string = 'slideDown';
//     title: string = 'HI there!';
//     content: string = `I'm cool toaster!`;
//     timeout: number = 5000;
//     toastsLimit: number = 5;
//     type: string = 'default';  
//     isNewestOnTop: boolean = true;
//     isHideOnClick: boolean = true;
//     isDuplicatesPrevented: boolean = false;
//     isCloseButton: boolean = true;
    
//     makeToast() {
//       this.showToast(this.type, this.title, this.content);
//     }
    
//     private showToast(type: string, title: string, body: string) {
//       this.config = new ToasterConfig({
//         positionClass: this.position,
//         timeout: this.timeout,
//         newestOnTop: this.isNewestOnTop,
//         tapToDismiss: this.isHideOnClick,
//         preventDuplicates: this.isDuplicatesPrevented,
//         animation: this.animationType,
//         limit: this.toastsLimit,
//       });
//       const toast: Toast = {
//         type: type,
//         title: title,
//         body: body,
//         timeout: this.timeout,
//         showCloseButton: this.isCloseButton,
//         bodyOutputType: BodyOutputType.TrustedHtml,
//       };
//       this.toasterService.popAsync(toast);
//     }
  
//   }
  
// @Component({
//     selector: './person-details-dialog',
//     templateUrl: './person-detail-dialog.html',
//     styleUrls: ['./dialog.component.scss'],
//   })
//   export class PersonDetailsDialog {
//         contactperson : IContactPersonVM;
//         contactpersonLoaded: boolean;
//         maritalstattusloaded: boolean = false;
//         languageloaded: boolean = false;
//         titleloaded: boolean = false;
//         salarypaymentsloaded: boolean = false;
//         titles: ITitleVM;
//         maritalstatuses: IMaritalStatusVM;
//         languages: ILanguageVM;
//         contactinfo: IContactInformationVM;
//         salarypaymentdates: ISalaryPaymentDateVM;
//         minDate = new Date(1970,0,1);
//         maxDate = new Date();

//         constructor(
//             private toasterService: ToasterService,
//             private dataService: AccountDataService,
//             public dialogRef: MatDialogRef<PersonDetailsDialog>,
//             @Inject(MAT_DIALOG_DATA) public data: IContactInformationVM ) 
//     {      
//         this.contactinfo = data ;    
//         this.LoadContacts(this.contactinfo.per_code );
//     }
      
//     LoadContacts(per_code : number)
//     {       

//         this.dataService.getTitles()
//         .subscribe((titles: ITitleVM) => {
//             this.titles = titles; 
//               this.titleloaded = true;  
//             },
//             error => {                
//                // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
//             });
//         //  }
//         this.dataService.getMaritalStatuses()
//         .subscribe((maritalstatuses: IMaritalStatusVM) => {
//             this.maritalstatuses = maritalstatuses; 
//               this.maritalstattusloaded = true;  
//             },
//             error => {                
//                // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
//             });

//             this.dataService.getLanguages()
//             .subscribe((languages: ILanguageVM) => {
//                 this.languages = languages; 
//                   this.languageloaded = true;  
//                 },
//                 error => {                
//                    // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
//                 });

//              this.dataService.getSalaryPaymentDates()
//              .subscribe((salarypaymentdates: ISalaryPaymentDateVM) => {
//                     this.salarypaymentdates = salarypaymentdates; 
//                       this.salarypaymentsloaded = true;  
//                     },
//                     error => {                
//                        // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
//                     });  

                
//         //  }
      
//         this.dataService.getContactPerson(per_code)
//         .subscribe((contactperson: IContactPersonVM) => {
//             this.contactperson = contactperson; 
//               this.contactpersonLoaded = true;  
//             },
//             error => {                
//                // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
//             });
//     }
  
//     updatePerson(): void {
//         this.showToast('success', 'Update Success', 'Error occurred while logging in, please try again with valid credentials!');  
//      // this.dialogRef.close();
//     }  
//     config: ToasterConfig;  
//     position: string = 'toast-top-full-width';
//     animationType: string = 'slideDown';
//     title: string = 'HI there!';
//     content: string = `I'm cool toaster!`;
//     timeout: number = 5000;
//     toastsLimit: number = 5;
//     type: string = 'default';  
//     isNewestOnTop: boolean = true;
//     isHideOnClick: boolean = true;
//     isDuplicatesPrevented: boolean = false;
//     isCloseButton: boolean = true;
    
//     makeToast() {
//       this.showToast(this.type, this.title, this.content);
//     }
    
//     private showToast(type: string, title: string, body: string) {
//       this.config = new ToasterConfig({
//         positionClass: this.position,
//         timeout: this.timeout,
//         newestOnTop: this.isNewestOnTop,
//         tapToDismiss: this.isHideOnClick,
//         preventDuplicates: this.isDuplicatesPrevented,
//         animation: this.animationType,
//         limit: this.toastsLimit,
//       });
//       const toast: Toast = {
//         type: type,
//         title: title,
//         body: body,
//         timeout: this.timeout,
//         showCloseButton: this.isCloseButton,
//         bodyOutputType: BodyOutputType.TrustedHtml,
//       };
//       this.toasterService.popAsync(toast);
//     }
//   }
  
