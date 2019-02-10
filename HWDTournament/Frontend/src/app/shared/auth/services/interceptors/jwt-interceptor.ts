import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HwbAuthService } from '../auth.service';
import { HwbAuthJWTToken } from '../token/token';

@Injectable()
export class HwbAuthJWTInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.getToken()
      .pipe(
        switchMap((token: HwbAuthJWTToken) => {
          debugger;
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

  protected get authService(): HwbAuthService {
    return this.injector.get(HwbAuthService);
  }
}