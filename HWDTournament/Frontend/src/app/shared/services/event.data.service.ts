import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IResultVM , IAuthDetails, IEvent} from '../interfaces/interfaces';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class EventDataService {

    _baseUrl: string = '';

    constructor(private http: Http,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    GetAllEvents(): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.get(this._baseUrl + 'Event', {
            headers: headers, 
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    GetEvent(id: number): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.get(this._baseUrl + 'Event/'+ id ,{
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    DeleteEvent(id: number): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.delete(this._baseUrl + 'Event/'+ id ,{
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    UpdateEvent(event:IEvent): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.patch(this._baseUrl + 'Event/' ,JSON.stringify(event), {
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    CreateEvent(event:IEvent): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.post(this._baseUrl + 'Event/',JSON.stringify(event), {
            headers: headers,
        })
        .map((res:Response) => res.json())
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
