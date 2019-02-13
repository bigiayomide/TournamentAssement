import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IUser, IUserRecaptcha, IForgotPasswordVM, ILoginVM, LoginResponseVM, IResultVM ,IRegisterVM, ITournament, IAuthDetails} from '../interfaces/interfaces';
import { ItemsService } from '../utils/items.service';
import { ConfigService } from '../utils/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TournamentDataService {

    _baseUrl: string = '';

    constructor(private http: HttpClient,
        private itemsService: ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

    GetAllTournaments(): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._baseUrl + 'Tournament', {
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    GetTournament(id: number): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this._baseUrl + 'tournament/'+ id ,{
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    DeleteTournament(id: number): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this._baseUrl + 'tournament/'+ id ,{
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    UpdateTournament(tournament:ITournament): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this._baseUrl + 'tournament/' ,tournament, {
            headers: headers,
        })
        .map((res:IResultVM) => res)
        .catch(this.handleError);
    }

    CreateTournament(tournament:ITournament): Observable<IResultVM> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this._baseUrl + 'tournament/',tournament, {
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
