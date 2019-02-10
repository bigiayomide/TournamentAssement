import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Router ,ActivatedRoute} from '@angular/router';
import { AccountDataService } from '../../../../shared/services/account.data.service';
import { IAccountSummaryVM } from '../../../../shared/interfaces/interfaces';

@Component({
  selector: 'ngx-accountholder-card',
  styleUrls: ['./accountholder-card.component.scss'],
  templateUrl: './accountholder-card.component.html',
})

export class AccountHolderCardComponent implements OnInit {  
    @Input() acc_code: any; 
    @Output() viewCompanyDetails: EventEmitter<any> = new EventEmitter<any>();
   // registeringcompany: ICompanyDetail;   
    apiHost: string;
    accountsummary: IAccountSummaryVM
    accountsummayLoaded: boolean = false;
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
        this.LoadAccountHolder()  
    }

    LoadAccountHolder()
    {
        this.dataService.getAccountSummary(this.acc_code)
        .subscribe((accountsummary: IAccountSummaryVM) => {
            this.accountsummary = accountsummary; 
              this.accountsummayLoaded = true;  
            },
            error => {                
               // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });      
    } 
}