import { Injectable } from '@angular/core';
import { ConfigService } from '../../../shared/utils/config.service';
import { Http, Response } from '@angular/http';
//import {Observable} from 'rxjs/observable';
import { Observable, of, throwError } from 'rxjs';
//import 'rxjs/Rx';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { ISearchModel } from '../callrecording.models';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CampaignFilterService {

constructor(private http: HttpClient, private configService: ConfigService) {}

     getBusinessUnits(): Observable<ISearchModel[]> {
        return this.http.get(this.configService.getApiURI() + 'Lookup/GetBusinessUnits')
        .map(
            (response: ISearchModel[]) => {
              console.log(response);
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
     }

     getDatabases(businessunit: number): Observable<ISearchModel[]> {
        // const requestOptionArgs = {params: {businessUnitId: businessunit }};
        const reqParams = { params: new HttpParams().set('businessUnitId', businessunit.toString()) };
        return this.http.get(this.configService.getApiURI() + 'Lookup/GetDatabases', reqParams)
        .map(
            (response: ISearchModel[]) => {
              return  response;
            })
            .catch((error) => this.handleError(error));
     }

     getAgentGroups(): Observable<ISearchModel[]> {
        return this.http.get(this.configService.getApiURI() + 'Lookup/GetAgentDetails')
        .map(
            (response: ISearchModel[]) => {
              return  response;
            })
            .catch((error) => this.handleError(error));
     }

     getEmployeeCodes(bckDescriptionHash: string, serverDbVarbinary: string, agentGroup: number): Observable<ISearchModel[]> {
      // tslint:disable-next-line:max-line-length
      // const requestParams = {params: {bckDescriptionHash: bckDescriptionHash, serverDbVarbinary: serverDbVarbinary, agentGroup: agentGroup}};
      const reqParams = new HttpParams().set('bckDescriptionHash', bckDescriptionHash)
        .append('serverDbVarbinary', serverDbVarbinary)
        .append('agentGroup', agentGroup.toString());

        return this.http.get(this.configService.getApiURI() + 'Lookup/GetEmployeeCodes', { params: reqParams})
        .map(
            (response: ISearchModel[]) => {
              return  response;
            })
            .catch((error) => this.handleError(error));
     }

    getBooks(serverDBVarbinary: string): Observable<ISearchModel[]> {
        const reqParams = new HttpParams().set('serverDBVarbinary', serverDBVarbinary);
        return this.http.get(this.configService.getApiURI() + 'Lookup/GetBooks', { params: reqParams})
        .map(
            (response: ISearchModel[]) => {
              return  response;
            })
            .catch((error) => this.handleError(error));
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    }
}
