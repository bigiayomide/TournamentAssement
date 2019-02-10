
import { Component, OnInit, ViewChild, Input, Output, OnDestroy, ElementRef} from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AccountCardComponent } from './card/account-card.component';
import { PaginatedResult, IAccountSummaryVM, IAccountSearchVM, Pagination } from '../../../shared/interfaces/interfaces';
import { AccountDataService } from '../../../shared/services/account.data.service';
import { ItemsService } from '../../../shared/utils/items.service';
import { ConfigService } from '../../../shared/utils/config.service';
import { constructor } from 'q';
import { SearchService } from '../../../shared/services/search.service';
import { Subscription, Subject }   from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-accountview',
  styleUrls: ['./account-view.component.scss'],
  templateUrl: './account-view.component.html',
  
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

export class AccountViewComponent implements OnInit,OnDestroy { 

    public color ;
public mode 
public value;
public bufferValue;

    accountsviews: any; // ICompanyHeadView[];
    searchaccountvm: IAccountSearchVM = {
        searchquery: '',
        // acc_account_code :'',
        // ped_id_number: '',
        // pho_phone_number:'',
        criteria : 0,
        currentpage : 0,
        itemsperpage :12
    };
   mypagination: Pagination = {
        currentPage: 0,
        itemsPerPage: 12,
        totalItems: 0,
        totalPages: 1
    }
  
    accountviewLoaded: boolean =false;
    isformloadingfirsttime:boolean=false;
    
    apiHost: string;    
    public itemsperpage: number = 12;
    public totalItems: number = 0;
    public currentPage: number = 0;

    selectedAccountId: number;
    viewaccount: boolean = false;

    accountsLoaded: boolean = false;
  
    index: number = 0;
    backdropOptions = [true, false, 'static'];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
  
    private searchField: FormControl;
    issubmitting:boolean = false;  

   searchtextstring  = new Subject();//;='<no mission announced>';
   subscription: Subscription;
   breakpoint: number = 4;
   private searchTextChanged = new Subject<string>() ;
   searchTextChanged$ = this.searchTextChanged.asObservable();
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild('filter') filter: ElementRef;

   issearching: boolean = false;
    constructor(
        protected router: Router,private activatedRoute: ActivatedRoute,
        private searchservice: SearchService,
        private dataService: AccountDataService,
        private itemsService: ItemsService,     
        private configService: ConfigService,   
    ) { 
            
        this.subscription = this.searchservice.getSearchText().subscribe(
            message => { this.searchtextstring = message; 
                //this.loadAccountsView() ;
               this. SearchAccounts();
            });    

             this.searchservice.setCanSearch(true);
    }

    ngOnDestroy() {
        this.searchservice.setCanSearch(false);
        // prevent memory leak when component destroyed
        // if (this.subscription!= null)
        // this.subscription.unsubscribe();
      }

    SearchTextEvent(searchtext: string) {
      
    }

     ngOnInit() {    
        this.isformloadingfirsttime = true;
        var _user = JSON.parse(localStorage.getItem('user'));         
        if (_user == null) {   
            this.router.navigate(['./logins']);  
        }       
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
        this.accountviewLoaded = false;     
       // this.loadAccountsView();
    }

    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    }

    SearchAccounts()
    {   if (this.searchtextstring != null)
        {
            let searchcriteriaarry = this.searchtextstring.toString()  .substring(0, this.searchtextstring.toString().length).split("1searchcriteria1");
            //return messages;
          
            this.searchaccountvm.searchquery = searchcriteriaarry[0];
           
            if (  searchcriteriaarry[1] != null && searchcriteriaarry[1].toString() == 'quick')
            {
                this.searchaccountvm.criteria  = 0;
            }
            else if(searchcriteriaarry[1] != null && searchcriteriaarry[1].toString() == 'account number') {
                this.searchaccountvm.criteria  = 1;
            }
            else if ( searchcriteriaarry[1] != null && searchcriteriaarry[1].toString() == 'id number')
            {
                this.searchaccountvm.criteria  = 2;
            }
            else if (searchcriteriaarry[1] != null && searchcriteriaarry[1].toString() == 'phone')
            {
                this.searchaccountvm.criteria  = 3;
            }
            else if (searchcriteriaarry[1] != null && searchcriteriaarry[1].toString() == 'name')
            {
                this.searchaccountvm.criteria  = 4;
            }
            else
            {
                this.searchaccountvm.criteria  = 0;
            }
        }
        else{
            this.searchaccountvm.criteria  = 0;
            this.searchaccountvm.searchquery = '';
        }     

        this.loadAccountsView();
    }


    // Progress(){
    //     this.color = 'primary';
    //     this.mode ='query';
    // }

    // StopProgress(){
    //     this.color = '';
    //     this.mode ='';
    // }


    loadAccountsView() {  
       
        this.color = 'primary';
        this.mode ='query';
        this.issearching = true;
        this.searchaccountvm.currentpage =  this.currentPage ;      
    
        this.dataService.getAccountsSummary(this.searchaccountvm)
        
        .subscribe((res: PaginatedResult<IAccountSummaryVM[]>) => {
            //this.accountsviews = JSON.parse();
                const peginatedResult: PaginatedResult<IAccountSummaryVM[]> = new PaginatedResult<IAccountSummaryVM[]>();
                peginatedResult.items = res.items;
                this.accountsviews = peginatedResult.items;//this.itemsService.getSerialized<IAccountSummaryVM[]>(JSON.parse(peginatedResult.result.get('items')); 
                this.mypagination = res.pagination;
                this.currentPage = this.mypagination.currentPage;
                this.totalItems = this.mypagination.totalItems;
                this.itemsperpage = this.mypagination.itemsPerPage;

                this.isformloadingfirsttime = false;
                this.accountviewLoaded = true;   
                this.color = '';
                this.mode ='';
                this.issearching = false;
            },
            error => {                
               // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
    }

    viewAccountDetails(id: number) {        
        //account-details     
    }

    ShowList() {
       // this.viewEvaluate = false;
        this.issubmitting = false;  
    } 

    // pageChanged(event: any): void {
    //     this.currentPage = event.page;
    //     this.loadAccountsView();
    // };
   
    pageChanged(event: any): void {
        this.currentPage = event.pageIndex + 1;
        this.searchaccountvm.itemsperpage = event.pageSize;  
        this.loadAccountsView();
    };

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
//to move the interface to the shared folder 
export interface ICardResult{
    accountnumber : number;
    bookname : string;
    customername : number;
    accountstatus : boolean;   
   // loggedin : boolean;
    //date_created: Date;
 }
 
