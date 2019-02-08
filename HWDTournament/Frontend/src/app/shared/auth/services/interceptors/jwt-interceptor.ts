import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TraqAuthService } from '../auth.service';
import { TraqAuthJWTToken } from '../token/token';

@Injectable()
export class TraqAuthJWTInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.getToken()
      .pipe(
        switchMap((token: TraqAuthJWTToken) => {
          if (token.isValid()) {
            const JWT = `Bearer ${token.getValue()}`;
            req = req.clone({
              setHeaders: {
                Authorization: JWT,
              },
            });
          }
          return next.handle(req);
        }),
      );
  }

  protected get authService(): TraqAuthService {
    return this.injector.get(TraqAuthService);
  }
}