
import { Component, OnInit, ViewChild, Input, Output} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { IAccountDetailVM,IScriptVM } from '../../../shared/interfaces/interfaces';
import { AccountDataService } from '../../../shared/services/account.data.service';

@Component({
  selector: 'ngx-accountdetails',
  styleUrls: ['./account-details.component.scss'],
  templateUrl: './account-details.component.html',
  
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

export class AccountDetailsComponent implements OnInit {

    accountsviews: any; // ICompanyHeadView[];
  
    apiHost: string;    
   acc_code: number = 0;
    accountdetail:IAccountDetailVM;
    accountsdetailLoaded: boolean = false;
   // approve: boolean= true;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    issubmitting:boolean = false;
    script: IScriptVM;
    scriptloaded: boolean;
    constructor(  protected router: Router,private activatedRoute: ActivatedRoute,
        private dataService: AccountDataService,    
      
    ) { 
       
        // config.max = 1000;
        // config.striped = true;
        // config.animated = true;
        // config.type = 'success';
        // config.height = '10px';
    }

    ngOnInit() {
       var myacc_code= JSON.parse(localStorage.getItem('acc_code'));  //localStorage.setItem('acc_code', JSON.stringify(accountnumber)); 
        var _user = JSON.parse(localStorage.getItem('user')); 
        
        if (_user == null) {  
            this.router.navigate(['./logins']);  
        }       
        this.accountsdetailLoaded = false;     
        //TO DO: get acc_code from parameters or localhost
       if (myacc_code) 
       {
           this.acc_code = myacc_code;
           this.loadScript(this.acc_code);
       }
       else{
        this.acc_code = 0;
       } 
       
    }

    loadAccountsDetails() {  
              this.accountsdetailLoaded = true;  
    }

    loadScript(acc_code : number)
    {
        this.dataService.getScript(this.acc_code)
        .subscribe((script: IScriptVM) => {
            this.script = script;         
           
          this.scriptloaded = true;
            },
            error => {                
               // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });  
    }

    ViewAccounts(){
        this.router.navigate(['./pages/accountview']);     
    }

    ShowList() {
      
        this.issubmitting = false;  
    } 

    public hideChildModal(): void {
      //  this.childModal.hide();
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
 
