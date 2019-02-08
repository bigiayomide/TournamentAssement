import { Inject, Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { TraqAuthService } from '../auth.service';
import { HWB_AUTH_INTERCEPTOR_HEADER } from '../../auth.options';
import { TraqAuthJWTToken } from '../token/token';

@Injectable()
export class NbAuthSimpleInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              @Inject(HWB_AUTH_INTERCEPTOR_HEADER) protected headerName: string = 'Authorization') {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.getToken()
      .pipe(
        switchMap((token: TraqAuthJWTToken) => {
          if (token && token.getValue()) {
            req = req.clone({
              setHeaders: {
                [this.headerName]: token.getValue(),
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