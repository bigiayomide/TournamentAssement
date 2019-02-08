import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ConfigService } from '../../../shared/utils/config.service';
import { Observable } from 'rxjs/observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ISearchResult, ISearchViewModel, INexusRecordingElement } from '../callrecording.models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class RecordingSearchService {

constructor(private http: HttpClient, private configService: ConfigService) {}

    searchRecordings(searchModel: ISearchViewModel): Observable<ISearchResult[]> {
        return this.http.post(this.configService.getApiURI() + 'Search/GetRecordings', searchModel)
        .map(
            (response: ISearchResult[]) => {
              return  response;
            })
        .catch((error) => this.handleErrorObservable(error));
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    searchNexus(searchModel: ISearchViewModel, pageIndex?: number, pageSize?: number): Observable<INexusRecordingElement[]> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        if (pageIndex != null && pageSize != null) {
        headers.append('Pagination', pageIndex + ',' + pageSize);
        }
        return this.http.post(this.configService.getApiURI() + 'NexusSearch/GetNexusRecordingDetails', searchModel, { headers: headers })
        .map(
            (response: INexusRecordingElement[]) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
      }

      getRecording(callId: number): Observable<INexusRecordingElement[]> {
        const reqParams = new HttpParams().set('callId', callId.toString());
        return this.http.get(this.configService.getApiURI() + 'NexusSearch/GetNexusRecording', { params: reqParams})
        .map(
            (response: INexusRecordingElement[]) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
      }

      downloadNexusRecording(callId: number, filename: string): any {
        const reqParams = new HttpParams().set('callId', callId.toString()).append('filename', filename);
        return this.http.get(this.configService.getApiURI() + 'NexusSearch/DownloadNexusRecording', { params: reqParams})
        .map(
            (response: any) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
      }

      removeDownloadedNexusRecording(callId: number): any {
        const reqParams = new HttpParams().set('callId', callId.toString());
        return this.http.get(this.configService.getApiURI() + 'NexusSearch/DeleteDownloadedRecording', { params: reqParams})
        .map(
            (response: any) => {
              return  response;
            })
            .catch((error) => this.handleErrorObservable(error));
      }

}
