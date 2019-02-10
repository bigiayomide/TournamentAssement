import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { IUser, IUserRecaptcha, IForgotPasswordVM, ILoginVM, LoginResponseVM, IResultVM ,IRegisterVM} from '../interfaces/interfaces';
import { ItemsService } from '../utils/items.service';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class UserDataService {

    _baseUrl: string = '';

    constructor(private http: Http,
        private itemsService: ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    register(uservm: IRegisterVM): Observable<IResultVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');     
        return this.http.post(this._baseUrl + 'user/create/', JSON.stringify(uservm), {
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }


    login(creds: ILoginVM): Observable<LoginResponseVM>  {     
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'user/token/', JSON.stringify(creds), {
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    logout(creds: IUser): Observable<IUser>   {
        return this.http.post(this._baseUrl + 'user/SignOut', JSON.stringify(creds), {          
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    isUserAuthenticated(): boolean {
        const _user: any = localStorage.getItem('auth');
        if (_user != null)   {
            return true;
            }   else {
            return false;
            }
    }

    getLoggedInUser(): IUser {
        let _user: IUser;
        if (this.isUserAuthenticated()) {
            const _userData = JSON.parse(localStorage.getItem('auth'));
            _user = {
                id: _userData.id ,       
                usr_user_name : _userData.usr_user_name,
                usr_surname: _userData.usr_surname,
                usr_first_name: _userData.usr_first_name,
                usr_password: '',
                usr_code:0, 
                usr_confirmpassword : '',              
                usr_active: false,
                date_created : new Date(),
                date_updated : null ,
            }

            return _user;
        }
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
        return throwError(applicationError || modelStateErrors || 'Server error');
    }
}
