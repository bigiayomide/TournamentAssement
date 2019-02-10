
import { Component, OnInit, ViewChild, Input, Output} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AccountDataService } from '../../../../shared/services/account.data.service';
import { IAccountGeneralInformationVM } from '../../../../shared/interfaces/interfaces';

@Component({
  selector: 'ngx-generalinfo-card',
  styleUrls: ['./generalinfo-card.component.scss'],
  templateUrl: './generalinfo-card.component.html',
  
      animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)',
                }),
                animate('0.5s ease-in'),
            ]),
            transition('* => void', [
                animate('0.2s 10s ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)',
                })),
            ]),
        ])],
})

export class GeneralInfoCardComponent implements OnInit {

  //  accountsviews: any; // ICompanyHeadView[];
  @Input() acc_code: any; 
    apiHost: string;    
    // public itemsPerPage: number = 8;
    // public totalItems: number = 0;
    // public currentPage: number = 1;
    generalinfo: IAccountGeneralInformationVM;
   //  selectedAccountId: number;
   //  viewaccount: boolean = false;

     generalinfoLoaded: boolean = false;
   // approve: boolean= true;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    // private searchField: FormControl;
    // issubmitting:boolean = false;
   
    constructor(  protected router: Router,private activatedRoute: ActivatedRoute,
        private dataService: AccountDataService,/*private itemsService: ItemsService,*/       
    // constructor(
    //     protected router: Router
        // private toasterService: ToasterService, 
        // private dataService: CompanyDataService,
        // private itemsService: ItemsService,     
        // private configService: ConfigService,    
        // config: NgbProgressbarConfig
    ) {        
        // config.max = 1000;
        // config.striped = true;
        // config.animated = true;
        // config.type = 'success';
        // config.height = '10px';
    }

    ngOnInit() {
        this.generalinfoLoaded = false;     
        this.loadGeneralInfo();
    }

    loadGeneralInfo() {  
        this.dataService.getAccountGeneralInfomation(this.acc_code)
        .subscribe((generalinfo: IAccountGeneralInformationVM) => {
            this.generalinfo = generalinfo;         
                      
               this.generalinfoLoaded = true;  
            },
            error => {                
               // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
      
    }


     // start of notifications
//   config: ToasterConfig;
  
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
      // end of notifications
}
export interface ICardResult{
    accountnumber : number;
    bookname : string;
    customername : number;
    accountstatus : boolean;   
   // loggedin : boolean;
    //date_created: Date;
 }
 
