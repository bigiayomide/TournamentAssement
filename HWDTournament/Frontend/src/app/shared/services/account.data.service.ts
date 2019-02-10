import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser, IUserRecaptcha, IForgotPasswordVM, IAccountSummaryVM, IAccountGeneralInformationVM, IAccountFinancialBalanceVM, IAccountFinancialDatesVM, IAccountDetailVM, IAccountSearchVM, PaginatedResult, IContactInformationVM, IContactPersonVM, ITitleVM, IMaritalStatusVM, ILanguageVM, ISalaryPaymentDateVM, IScriptVM, IPropertyTypeVM, IContactAddressVM} from '../interfaces/interfaces';
import { ItemsService } from '../utils/items.service';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class AccountDataService {

    _baseUrl: string = '';

    constructor(private http: Http,
        private itemsService: ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    getAccountdetails(code: number): Observable<IAccountDetailVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/getaccountdetails?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);     
    }

    getAccountSummary(code: number): Observable<IAccountSummaryVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/getaccountsummary?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);     
       
    }

   getAccountsSummary(accountsearchvm: IAccountSearchVM): Observable<PaginatedResult<IAccountSummaryVM[]>> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');      
        let peginatedResult: PaginatedResult<IAccountSummaryVM[]> = new PaginatedResult<IAccountSummaryVM[]>();
      // console.log(accountsearchvm) ;
      // console.log(this._baseUrl);
        return this.http.post(this._baseUrl + 'accounts/accountsearch/', JSON.stringify(accountsearchvm), {
            headers: headers,
        })
        .map((res: any) => {
            peginatedResult = res.json();
            //peginatedResult.pagination = res.;
         
            console.log(res.json());
            return res.json();            
        })
        .catch(this.handleError);
    }

    getContactInfomation(code: number): Observable<IContactInformationVM[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/getaccountcontactinfo?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);
    }

    //to move to another service
    getContactPerson (code: number): Observable<IContactPersonVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accountholder/personaldetails?per_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);
    }    

    //to move to another service    
    UpdateUser(contactpersonvm: IContactPersonVM): Observable<IContactPersonVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');     
        return this.http.post(this._baseUrl + 'accountholder/editpersonaldetails/', JSON.stringify(contactpersonvm), {
            headers: headers,
        })
        .map((res: Response) => {
            return res.json();
        })
        .catch(this.handleError);
    }


    getTitles(): Observable<ITitleVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'lookup/titles' )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);    
    }


    getMaritalStatuses(): Observable<IMaritalStatusVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'lookup/maritalstatuses' )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);       
    }
  
    getProperties(): Observable<IPropertyTypeVM[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'lookup/propertytypes' )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);       
    }

    getContactAddresses(per_code: number,address_typeid: number): Observable<IContactAddressVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accountholder/accountaddress?per_code=' + per_code + '&addressTypeId=' + address_typeid )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);       
    }
 
    getLanguages(): Observable<ILanguageVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'lookup/languages' )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);       
    }

    getSalaryPaymentDates(): Observable<ISalaryPaymentDateVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'lookup/paymentdates' )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);       
    }    

    getScript(code: number): Observable<IScriptVM>
    {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/accountscript?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);  
    }

    getAccountGeneralInfomation(code: number): Observable<IAccountGeneralInformationVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/getaccountgeneralinfo?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json'); 
        // return this.http.get(this._baseUrl + 'user/getverificationcode/' + code )
        // .map((res: Response) => {   
        //     console.log(res);        
        //     return res.json();
        // })
        // .catch(this.handleError);
    }

    getAccountFinancialBalance(code: number): Observable<IAccountFinancialBalanceVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/getaccountfinancialbalance?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json'); 
        // return this.http.get(this._baseUrl + 'user/getverificationcode/' + code )
        // .map((res: Response) => {   
        //     console.log(res);        
        //     return res.json();
        // })
        // .catch(this.handleError);
    }

    getAccountFinancialDates(code: number): Observable<IAccountFinancialDatesVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); 
        return this.http.get(this._baseUrl + 'accounts/getaccountfinancialdates?acc_code=' + code )
        .map((res: Response) => {   
           // console.log(res);        
            return res.json();
        })
        .catch(this.handleError);
    }


    private handleError(error: any) {      
        const applicationError = error.headers.get('Application-Error');
        const serverError = error.json();
        let modelStateErrors: string = '';

        if (!serverError.type) {          
            for (const key in serverError) {
                if (serverError[key]) {
                        modelStateErrors += serverError[key] + '\n';
                }
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}
