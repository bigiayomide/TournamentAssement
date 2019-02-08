import { Http, Response } from '@angular/http';
import { ConfigService } from '../../../shared/utils/config.service';
//import {Observable} from 'rxjs/observable';
import { Observable, of } from 'rxjs';
//import 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { ISearchModel } from '../callrecording.models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AccountStatusFilterService {

constructor(private http: HttpClient, private configService: ConfigService) {}

    getClasses(bckDescriptionHash: string, serverDbVarbinary: string): Observable<ISearchModel[]> {

        const reqParams = new HttpParams().
        set('bckDescriptionHash', bckDescriptionHash)
        .append('serverDbVarbinary', serverDbVarbinary);

        return this.http.get(this.configService.getApiURI() + 'Lookup/GetClasses', {params: reqParams})
        .map(
            (response: ISearchModel[]) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
    }

    getComments(bckDescriptionHash: string, serverDbVarbinary: string): Observable<ISearchModel[]> {
        const reqParams = new HttpParams().
        set('bckDescriptionHash', bckDescriptionHash)
        .append('serverDbVarbinary', serverDbVarbinary);

        return this.http.get(this.configService.getApiURI() + 'Lookup/GetComments', {params: reqParams})
        .map(
            (response: ISearchModel[]) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
        }
}
