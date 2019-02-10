import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccountDataService } from '../../../../shared/services/account.data.service';
import { IAccountSummaryVM, IAccountDetailVM } from '../../../../shared/interfaces/interfaces';

@Component({
  selector: 'ngx-accountinfo-card',
  styleUrls: ['./accountinfo-card.component.scss'],
  templateUrl: './accountinfo-card.component.html',
})

export class AccountInfoCardComponent implements OnInit {  
    @Input() acc_code: any; 
    @Output() viewCompanyDetails: EventEmitter<any> = new EventEmitter<any>();
   // registeringcompany: ICompanyDetail;   
    apiHost: string;
    accountdetail:IAccountDetailVM;
   // accountsdetailLoaded: boolean = false;
    accountinfoLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    constructor(  protected router: Router,private activatedRoute: ActivatedRoute,
        private dataService: AccountDataService,/*private itemsService: ItemsService,       

    constructor(  protected router: Router,private activatedRoute: ActivatedRoute/*private itemsService: ItemsService,       
        private dataService: CompanyDataService,
        private configService: ConfigService*/) { }

    ngOnInit() {
        this.apiHost = "";// this.configService.getApiHost();   
        this.LoadAccountInfo()  
    }

    LoadAccountInfo()
    {
        this.dataService.getAccountdetails(this.acc_code)
        .subscribe((accountdetail: IAccountDetailVM) => {
            this.accountdetail = accountdetail;        
                   
              this.accountinfoLoaded = true;  
            },
            error => {                
               // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
      // this.accountsdetailLoaded = true;
    } 
}