import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  // intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
  //   // add authorization header with jwt token if available
  //   const currentUser = JSON.parse(localStorage.getItem('auth'));
  //   if (currentUser && currentUser.token) {
  //     request = request.clone({
  //       setHeaders: {
  //         Authorization: `Bearer ${currentUser.token}`
  //       }
  //     });
  //   }
  //   return next.handle(request).do((event: HttpEvent<any>) => {
  //     if (event instanceof HttpResponse) {
  //     }
  //   }, (err: any) => {
  //     if (err instanceof HttpErrorResponse) {
  //       if (err.status === 401) {
  //           this.router.navigate(['/logins']);
  //       }
  //     }
  //   });
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = JSON.parse(localStorage.getItem('auth'));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
          return event;
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
            this.router.navigate(['/logins']);
        }
      }
    }));
  }

}
