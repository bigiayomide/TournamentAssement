import { Injectable } from '@angular/core';

import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

import { HwbAuthStrategy } from '../auth-strategy';
import { HwbAuthResult } from '../../services/auth-result';
import { HwbDummyAuthStrategyOptions, dummyStrategyOptions } from './dummy-strategy-options';
import { HwbAuthStrategyClass } from '../../auth.options';


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
export class HwbDummyAuthStrategy extends HwbAuthStrategy {

  protected defaultOptions: HwbDummyAuthStrategyOptions = dummyStrategyOptions;

  static setup(options: HwbDummyAuthStrategyOptions): [HwbAuthStrategyClass, HwbDummyAuthStrategyOptions] {
    return [HwbDummyAuthStrategy, options];
  }

  authenticate(data?: any): Observable<HwbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  register(data?: any): Observable<HwbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  requestPassword(data?: any): Observable<HwbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  resetPassword(data?: any): Observable<HwbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  logout(data?: any): Observable<HwbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  refreshToken(data?: any): Observable<HwbAuthResult> {
    return observableOf(this.createDummyResult(data))
      .pipe(
        delay(this.getOption('delay')),
      );
  }

  protected createDummyResult(data?: any): HwbAuthResult {

    if (this.getOption('alwaysFail')) {
      return new HwbAuthResult(
        false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.'],
      );
    }

    try {
      const token = this.createToken('test token', true);
      return new HwbAuthResult(
        true,
        this.createSuccessResponse(data),
        '/',
        [],
        ['Successfully logged in.'],
        token,
      );
    } catch (err) {
      return new HwbAuthResult(
        false,
        this.createFailResponse(data),
        null,
        [err.message],
      );
    }


  }
}