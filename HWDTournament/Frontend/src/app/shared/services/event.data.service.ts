import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IResultVM , IAuthDetails, IEvent} from '../interfaces/interfaces';
import { ConfigService } from '../utils/config.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class EventDataService {

    _baseUrl: string = '';

    constructor(private http: HttpClient,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    GetAllEvents(): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._baseUrl + 'Event', {
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    GetEvent(id: number): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._baseUrl + 'Event/'+ id ,{
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    DeleteEvent(id: number): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this._baseUrl + 'Event/'+ id ,{
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    UpdateEvent(event:IEvent): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this._baseUrl + 'Event/' ,event, {
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    CreateEvent(event:IEvent): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'Event/',event, {
            headers: headers,
        })
        .map((res:IResultVM) => res)
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
        return throwError(applicationError || modelStateErrors || 'Server error');
    }
}
