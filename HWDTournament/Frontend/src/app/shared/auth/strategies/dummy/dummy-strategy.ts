import { Injectable } from '@angular/core';

import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TraqAuthStrategy } from '../auth-strategy';
import { TraqAuthResult } from '../../services/auth-result';
import { TraqDummyAuthStrategyOptions, dummyStrategyOptions } from './dummy-strategy-options';
import { TraqAuthStrategyClass } from '../../auth.options';


/**
 * Dummy auth strategy. Could be useful for auth setup when backend is not available yet.
 *
 *
 * Strategy settings.
 *
 * ```ts
 * export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
 *   name = 'dummy';
 *   token = {
 *     class: NbAuthSimpleToken,
 *   };
 *   delay? = 1000;
 *   alwaysFail? = false;
 * }
 * ```
 */
@Injectable()
export class TraqDummyAuthStrategy extends TraqAuthStrategy {

  protected defaultOptions: TraqDummyAuthStrategyOptions = dummyStrategyOptions;

  static setup(options: TraqDummyAuthStrategyOptions): [TraqAuthStrategyClass, TraqDummyAuthStrategyOptions] {
    return [TraqDummyAuthStrategy, options];
  }

  authenticate(data?: any): Observable<TraqAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  register(data?: any): Observable<TraqAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  requestPassword(data?: any): Observable<TraqAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  resetPassword(data?: any): Observable<TraqAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  logout(data?: any): Observable<TraqAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  refreshToken(data?: any): Observable<TraqAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  protected createDummyResult(data?: any): TraqAuthResult {

    if (this.getOption('alwaysFail')) {
      return new TraqAuthResult(
        false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.'],
      );
    }

    try {
      const token = this.createToken('test token', true);
      return new TraqAuthResult(
        true,
        this.createSuccessResponse(data),
        '/',
        [],
        ['Successfully logged in.'],
        token,
      );
    } catch (err) {
      return new TraqAuthResult(
        false,
        this.createFailResponse(data),
        null,
        [err.message],
      );
    }


  }
}