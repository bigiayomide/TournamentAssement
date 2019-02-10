import { Injectable } from '@angular/core';

import { HwbAuthToken } from './token';
import { HwbAuthTokenParceler } from './token-parceler';

export abstract class HwbTokenStorage {

  abstract get(): HwbAuthToken;
  abstract set(token: HwbAuthToken);
  abstract clear();
}

/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: HwbTokenStorage, useClass: HwbTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `HwbTokenStorage`
 * or `HwbTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: HwbTokenStorage, useClass: HwbTokenCustomStorage },
 * ```
 *
 */
@Injectable()
export class HwbTokenLocalStorage extends HwbTokenStorage {

  protected key = 'auth_app_token';

  constructor(private parceler: HwbAuthTokenParceler) {
    super();
  }

  /**
   * Returns token from localStorage
   * @returns {HwbAuthToken}
   */
  get(): HwbAuthToken {
    const raw = localStorage.getItem(this.key);
    return this.parceler.unwrap(raw);
  }

  /**
   * Sets token to localStorage
   * @param {HwbAuthToken} token
   */
  set(token: HwbAuthToken) {
    const raw = this.parceler.wrap(token);
    localStorage.setItem(this.key, raw);
  }

  /**
   * Clears token from localStorage
   */
  clear() {
    localStorage.removeItem(this.key);
  }
}