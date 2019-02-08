import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { IUser, IUserRecaptcha, IForgotPasswordVM, LoginVM, RegisterVM, ResultVM} from '../interfaces';
import { ItemsService } from '../utils/items.service';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class AccountDataService {

    _baseUrl = '';

    constructor(private http: Http,
        private itemsService: ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    // register(uservm: IUser): Observable<IUser> {
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post(this._baseUrl + 'user/', JSON.stringify(uservm), {
    //         headers: headers,
    //     })
    //     .map((res: Response) => {
    //         return;
    //     })
    //     .catch(this.handleError);
    // }

    resetpassword(resetvm: IUser): Observable<IUserRecaptcha> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'user/resetpassword', JSON.stringify(resetvm), {
            headers: headers,
        })
        .map((res: Response) => {
            return res.json();
        })
        .catch(this.handleError);
    }

    forgotpassword(forgotpasswordvm: IForgotPasswordVM): Observable<IForgotPasswordVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'user/forgotpassword', JSON.stringify(forgotpasswordvm), {
            headers: headers,
        })
        .map((res: Response) => {
            return res.json();
        })
        .catch(this.handleError);
    }

    getVerificationPassword(code: string): Observable<IForgotPasswordVM> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._baseUrl + 'user/getverificationcode/' + code )
        .map((res: Response) => {
            console.log(res);
            return res.json();
        })
        .catch(this.handleError);
    }

    login(creds: LoginVM): Observable<ResultVM>  {
        const headers = new Headers();
       headers.append('accept', 'application/json');
        headers.append('accept-language', 'en');
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'user/token', JSON.stringify(creds), {
            headers: headers, withCredentials: true })
            .map((res: Response) => {
               return res.json();
            })
            .catch(this.handleError);
    }

    register(user: RegisterVM): Observable<ResultVM>  {
         const headers = new Headers();
        headers.append('accept', 'application/json');
         headers.append('accept-language', 'en');
         headers.append('Content-Type', 'application/json');
         return this.http.post(this._baseUrl + 'User/Create/', JSON.stringify(user), {
             headers: headers, withCredentials: true })
             .map((res: Response) => {
                return res.json();
             })
             .catch(this.handleError);
     }

     editUser(user: RegisterVM): Observable<ResultVM>  {
        const headers = new Headers();
       headers.append('accept', 'application/json');
        headers.append('accept-language', 'en');
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'account/EditUser/', JSON.stringify(user), {
            headers: headers, withCredentials: true })
            .map((res: Response) => {
               return res.json();
            })
            .catch(this.handleError);
    }

    deleteUser(userId: string): Observable<ResultVM> {
        const headers = new Headers();
        headers.append('accept', 'application/json');
         headers.append('accept-language', 'en');
         headers.append('Content-Type', 'application/json');
         return this.http.post(this._baseUrl + 'account/DeleteUser/', JSON.stringify(userId), {
             headers: headers, withCredentials: true })
             .map((res: Response) => {
                return res.json();
             })
             .catch(this.handleError);
    }

    logout(creds: IUser): Observable<IUser>   {
        return this.http.post(this._baseUrl + 'users/', JSON.stringify(creds), {
        })
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }

    isUserAuthenticated(): boolean {
        const _user: any = localStorage.getItem('user');
        if (_user != null)   {
            return true;
            }   else {
            return false;
            }
    }

    getLoggedInUser(): IUser {
        let _user: IUser;
        if (this.isUserAuthenticated()) {
            const _userData = JSON.parse(localStorage.getItem('user'));
            _user = {
                id: _userData.id ,
                company_detail_id: _userData.company_detail_id,
                b2btype_id: _userData.b2btype_id,
                username : _userData.Username,
                password: '',
                usr_code: 0,
                confirmpassword : '',
                rememberme: _userData.rememberme,
                salt: '',
                isactive: false,
                date_created : new Date(),
                date_updated : null ,
            };

            return _user;
        }
    }

    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        const serverError = error.json();
        let modelStateErrors = '';

        if (!serverError.type) {
            for (const key in serverError) {
                if (serverError[key]) {
                        modelStateErrors += serverError[key] + '\n';
                }
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        console.log(modelStateErrors);
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
        // return Observable.throwError(applicationError || modelStateErrors || 'Server error');
    }
}
