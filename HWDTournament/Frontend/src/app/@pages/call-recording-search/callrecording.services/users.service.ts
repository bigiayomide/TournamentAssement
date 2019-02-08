import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { Observable, of } from 'rxjs';
//import 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../../shared/utils/config.service';
import { AppUser, IPasswordResetVM } from '../../../shared/interfaces';

@Injectable()
export class UserManagementService {

    constructor(private http: HttpClient, private configService: ConfigService) {}

    getUsers(): Observable<AppUser[]> {
        return this.http.get(this.configService.getApiURI() + 'Account/GetUsers')
        .map(
            (response: AppUser[]) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
    }

    forgotPassword(email: string) {
        const reqParams = new HttpParams().set('email', email);
        return this.http.get(this.configService.getApiURI() + 'Account/ResetPassword', {params: reqParams, responseType: 'text'})
        .map(
            (response: any) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
    }

    resetPassword(model: IPasswordResetVM) {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.configService.getApiURI() + 'Account/ResetPassword', model, { headers: headers, responseType: 'text' })
        .map(
            (response: any) => {
              return response;
            })
            .catch((error) => this.handleErrorObservable(error));
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
