import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IUser, IUserRecaptcha, IForgotPasswordVM, ILoginVM, LoginResponseVM, IResultVM ,IRegisterVM, ITournament, IAuthDetails} from '../interfaces/interfaces';
import { ItemsService } from '../utils/items.service';
import { ConfigService } from '../utils/config.service';

@Injectable()
export class TournamentDataService {

    _baseUrl: string = '';

    constructor(private http: Http,
        private itemsService: ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    GetAllTournaments(): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.get(this._baseUrl + 'Tournament', {
            headers: headers, 
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    GetTournament(id: number): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.get(this._baseUrl + 'tournament/'+ id ,{
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    DeleteTournament(id: number): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.delete(this._baseUrl + 'tournament/'+ id ,{
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    UpdateTournament(tournament:ITournament): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.patch(this._baseUrl + 'tournament/' ,JSON.stringify(tournament), {
            headers: headers,
        })
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    CreateTournament(tournament:ITournament): Observable<IResultVM> {
        const headers = new Headers();
        var userdata = JSON.parse(localStorage.getItem("auth")) as IAuthDetails;
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'Bearer '+ userdata.token);     
        return this.http.post(this._baseUrl + 'tournament/',JSON.stringify(tournament), {
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
