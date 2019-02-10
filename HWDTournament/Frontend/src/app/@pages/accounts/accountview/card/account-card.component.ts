import { Component, Input, Output, OnInit, ViewContainerRef, EventEmitter, ViewChild, Inject} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { Router ,ActivatedRoute} from '@angular/router';
import { SearchService } from '../../../../shared/services/search.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'ngx-account-card',
  styleUrls: ['./account-card.component.scss'],
  templateUrl: './account-card.component.html',
})

export class AccountCardComponent implements OnInit {  
    @Input() account: any; 
   // @Output() viewCompanyDetails: EventEmitter<any> = new EventEmitter<any>();
   
    apiHost: string;
    
    @ViewChild('modal')
    modal: any;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    
    companyLoaded: boolean = false;
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    animal: string;
    name: string;
    constructor(public dialog: MatDialog, private searchservice: SearchService, protected router: Router,private activatedRoute: ActivatedRoute/*private itemsService: ItemsService,       
        private dataService: CompanyDataService,
        private configService: ConfigService*/) {             
        }

    ngOnInit() {
        this.apiHost = "";// this.configService.getApiHost();      
    }

    // public viewdetails(id: number): void {       
    //     //this.viewCompanyDetails.emit(id);
    // }

    public hideChildModal(): void {
        // this.childModal.hide();
    }

    ViewAccountDetails(accountnumber:number)  {
        this.searchservice.setCanSearch(false);
        localStorage.setItem('acc_code', JSON.stringify(accountnumber)); 
        //TO DO: get the acc_code wand put t in the localstorage or have a parameterised route for account details
       this.router.navigate(['./auth/accounts/account-details']);  
    }

    opened() {      
        this.output = '(opened)';
    }
}


