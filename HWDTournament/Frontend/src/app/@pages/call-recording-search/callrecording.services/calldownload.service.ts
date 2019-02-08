import { Http, ResponseContentType } from '@angular/http';
import { ConfigService } from '../../../shared/utils/config.service';
import { Injectable } from '@angular/core';
import { ISelectedModel } from '../callrecording.models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class CallDownloadService {

    constructor(private http: HttpClient,  private configService: ConfigService) { }

    downloadFile(filename: string) {
      const reqParams = new HttpParams().set('filename', filename);
        // const requestOptionArgs = {params: { filename: filename }, responseType: ResponseContentType.Blob};
        return this.http
          .get(this.configService.getApiURI() + 'NexusSearch/Download', { params: reqParams, responseType: 'blob' })
          .map(res => {
            return {
              filename: filename,
              // data: res.blob()
              data: res
            };
          });
      }

      downloadSelection(selectionModel: ISelectedModel) {
        const requestOptionArgs = { responseType: ResponseContentType.Blob};
        return this.http
          .post(this.configService.getApiURI() + 'NexusSearch/DownloadSelected', selectionModel, { responseType: 'blob' })
          .map(res => {
            return {
              filename: 'recordings.zip',
              data: res
            };
          });
      }

      downloadAll(selectionModel: ISelectedModel) {
        const requestOptionArgs = { responseType: ResponseContentType.Json};
        return this.http
          .post(this.configService.getApiURI() + 'NexusSearch/DownloadAll', selectionModel, { responseType: 'blob' })
          .map(res => {
            return {
              res
            };
          });
      }
}
