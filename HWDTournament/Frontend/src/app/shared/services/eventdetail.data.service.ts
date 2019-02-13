import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { IResultVM, IEventDetail } from "../interfaces/interfaces";
import { ConfigService } from "../utils/config.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class EventDetailDataService {
  _baseUrl: string = "";

  constructor(private http: HttpClient, private configService: ConfigService) {
    this._baseUrl = configService.getApiURI();
  }

  GetAllEventDetails(): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .get(this._baseUrl + "EventDetail/", {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  GetEventDetail(id: number): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .get(this._baseUrl + "EventDetail/" + id, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  DeleteEventDetail(id: number): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .delete(this._baseUrl + "EventDetail/" + id, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  UpdateEventDetail(event: IEventDetail): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .patch(this._baseUrl + "EventDetail/", event, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  CreateEventDetail(event: IEventDetail): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(this._baseUrl + "EventDetail/", event, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const applicationError = error.headers.get("Application-Error");
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
