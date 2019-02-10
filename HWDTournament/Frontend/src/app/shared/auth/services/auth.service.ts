import { Inject, Injectable } from '@angular/core';

import { Observable, of as observableOf } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { HwbAuthStrategy } from '../strategies/auth-strategy';
import { HWB_AUTH_STRATEGIES } from '../auth.options';
import { HwbAuthResult } from './auth-result';
import { HwbTokenService } from './token/token.service';
import { HwbAuthToken } from './token/token';

/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Strategy.
 */
@Injectable()
export class HwbAuthService {

  constructor(protected tokenService: HwbTokenService,
              @Inject(HWB_AUTH_STRATEGIES) protected strategies) {
  }

  /**
   * Retrieves current authenticated token stored
   * @returns {Observable<any>}
   */
  getToken(): Observable<HwbAuthToken> {
    return this.tokenService.get();
  }

  /**
   * Returns true if auth token is presented in the token storage
   * @returns {Observable<any>}
   */
  isAuthenticated(): Observable<boolean> {
    return this.getToken()
      .pipe(map((token: HwbAuthToken) => token.isValid()));
  }

  /**
   * Returns tokens stream
   * @returns {Observable<HwbAuthSimpleToken>}
   */
  onTokenChange(): Observable<HwbAuthToken> {
    return this.tokenService.tokenChange();
  }

  /**
   * Returns authentication status stream
   * @returns {Observable<boolean>}
   */
  onAuthenticationChange(): Observable<boolean> {
    return this.onTokenChange()
      .pipe(map((token: HwbAuthToken) => token.isValid()));
  }

  /**
   * Authenticates with the selected strategy
   * Stores received token in the token storage
   *
   * Example:
   * authenticate('email', {email: 'email@example.com', password: 'test'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<HwbAuthResult>}
   */
  authenticate(strategyName: string, data?: any): Observable<HwbAuthResult> {

    return this.getStrategy(strategyName).authenticate(data)
      .pipe(
        switchMap((result: HwbAuthResult) => {
          return this.processResultToken(result);
        }),
      );
  }

  /**
   * Registers with the selected strategy
   * Stores received token in the token storage
   *
   * Example:
   * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<HwbAuthResult>}
   */
  register(strategyName: string, data?: any): Observable<HwbAuthResult> {

    return this.getStrategy(strategyName).register(data)
      .pipe(
        switchMap((result: HwbAuthResult) => {
          return this.processResultToken(result);
        }),
      );
  }

  /**
   * Sign outs with the selected strategy
   * Removes token from the token storage
   *
   * Example:
   * logout('email')
   *
   * @param strategyName
   * @returns {Observable<HwbAuthResult>}
   */
  logout(strategyName: string): Observable<HwbAuthResult> {
    return this.getStrategy(strategyName).logout()
      .pipe(
        switchMap((result: HwbAuthResult) => {
          if (result.isSuccess()) {
            this.tokenService.clear()
              .pipe(map(() => result));
          }
          return observableOf(result);
        }),
      );
  }

  /**
   * Sends forgot password request to the selected strategy
   *
   * Example:
   * requestPassword('email', {email: 'email@example.com'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<HwbAuthResult>}
   */
  requestPassword(strategyName: string, data?: any): Observable<HwbAuthResult> {
    return this.getStrategy(strategyName).requestPassword(data);
  }

  /**
   * Tries to reset password with the selected strategy
   *
   * Example:
   * resetPassword('email', {newPassword: 'test'})
   *
   * @param strategyName
   * @param data
   * @returns {Observable<HwbAuthResult>}
   */
  resetPassword(strategyName: string, data?: any): Observable<HwbAuthResult> {
    return this.getStrategy(strategyName).resetPassword(data);
  }

  /**
   * Sends a refresh token request
   * Stores received token in the token storage
   *
   * Example:
   * refreshToken('email', {token: token})
   *
   * @param {string} strategyName
   * @param data
   * @returns {Observable<HwbAuthResult>}
   */
  refreshToken(strategyName: string, data?: any): Observable<HwbAuthResult> {
    return this.getStrategy(strategyName).refreshToken(data)
      .pipe(
        switchMap((result: HwbAuthResult) => {
          return this.processResultToken(result);
        }),
      );
  }

  /**
   * Get registered strategy by name
   *
   * Example:
   * getStrategy('email')
   *
   * @param {string} provider
   * @returns {HwbAbstractAuthProvider}
   */
  protected getStrategy(strategyName: string): HwbAuthStrategy {
    console.log('strategise---///....' + this.strategies);
    const found = this.strategies.find((strategy: HwbAuthStrategy) => strategy.getName() === strategyName);

    if (!found) {
      throw new TypeError(`There is no Auth Strategy registered under '${strategyName}' name`);
    }

    return found;
  }

  private processResultToken(result: HwbAuthResult) {
    if (result.isSuccess() && result.getToken()) {
      return this.tokenService.set(result.getToken())
        .pipe(
          map((token: HwbAuthToken) => {
            return result;
          }),
        );
    }

    return observableOf(result);
  }
}