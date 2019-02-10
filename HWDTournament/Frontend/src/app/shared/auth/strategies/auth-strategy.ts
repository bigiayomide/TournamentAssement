import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HwbAuthResult } from '../services/auth-result';
import { HwbAuthStrategyOptions } from './auth-strategy-options';
import { deepExtend, getDeepFromObject } from '../helpers';
import {
  HwbAuthToken,
  hwbAuthCreateToken,
  HwbAuthIllegalTokenError,
} from '../services/token/token';

export abstract class HwbAuthStrategy {

  protected defaultOptions: HwbAuthStrategyOptions;
  protected options: HwbAuthStrategyOptions;

  // we should keep this any and validation should be done in `register` method instead
  // otherwise it won't be possible to pass an empty object
  setOptions(options: any): void {
    this.options = deepExtend({}, this.defaultOptions, options);
  }

  getOption(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  createToken<T extends HwbAuthToken>(value: any, failWhenInvalidToken?: boolean): T {
    const token =  hwbAuthCreateToken<T>(this.getOption('token.class'), value, this.getName());
    // At this point, hwbAuthCreateToken failed with NbAuthIllegalTokenError which MUST be intercepted by strategies
    // Or token is created. It MAY be created even if backend did not return any token, in this case it is !Valid
    if (failWhenInvalidToken && !token.isValid()) {
      // If we require a valid token (i.e. isValid), then we MUST throw NbAuthIllegalTokenError so that the strategies
      // intercept it
      throw new HwbAuthIllegalTokenError('Token is empty or invalid.');
    }
    return token;
  }

  getName(): string {
    return this.getOption('name');
  }

  abstract authenticate(data?: any): Observable<HwbAuthResult>;

  abstract register(data?: any): Observable<HwbAuthResult>;

  abstract requestPassword(data?: any): Observable<HwbAuthResult>;

  abstract resetPassword(data?: any): Observable<HwbAuthResult>;

  abstract logout(): Observable<HwbAuthResult>;

  abstract refreshToken(data?: any): Observable<HwbAuthResult>;

  protected createFailResponse(data?: any): HttpResponse<Object> {
    return new HttpResponse<Object>({ body: {}, status: 401 });
  }

  protected createSuccessResponse(data?: any): HttpResponse<Object> {
    return new HttpResponse<Object>({ body: {}, status: 200 });
  }

  protected getActionEndpoint(action: string): string {
    const actionEndpoint: string = this.getOption(`${action}.endpoint`);
    const baseEndpoint: string = this.getOption('baseEndpoint');
    return baseEndpoint + actionEndpoint;
  }
}