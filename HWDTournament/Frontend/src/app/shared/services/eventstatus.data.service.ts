import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { throwError } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { IResultVM, IEventDetailStatus } from "../interfaces/interfaces";
import { ConfigService } from "../utils/config.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class EventStatusDataService {
  _baseUrl: string = "";

  constructor(private http: HttpClient, private configService: ConfigService) {
    this._baseUrl = configService.getApiURI();
  }

  GetAllEventStatus(): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .get(this._baseUrl + "EventStatus", {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  GetEventStatus(id: number): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .get(this._baseUrl + "EventStatus/" + id, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  DeleteEventStatus(id: number): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .delete(this._baseUrl + "EventStatus/" + id, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  UpdateEventStatus(eventstatus: IEventDetailStatus): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .patch(this._baseUrl + "EventStatus/", eventstatus, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  CreateEventStatus(eventstatus: IEventDetailStatus): Observable<IResultVM> {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(this._baseUrl + "EventStatus/", eventstatus, {
        headers: headers
      })
      .map((res: IResultVM) => res)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const applicationError = error.headers.get("Application-Error");
    const serverError = error.json();
    let modelStateErrors: string = "";

    if (!serverError.type) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + "\n";
        }
      }
    }

    modelStateErrors = modelStateErrors = "" ? null : modelStateErrors;
    return throwError(applicationError || modelStateErrors || "Server error");
  }
}
