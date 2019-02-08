import { Injectable } from '@angular/core';

import { TraqAuthToken } from './token';
import { TraqAuthTokenParceler } from './token-parceler';

export abstract class TraqTokenStorage {

  abstract get(): TraqAuthToken;
  abstract set(token: TraqAuthToken);
  abstract clear();
}

/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```ts
 * { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `TraqTokenStorage`
 * or `TraqTokenLocalStorage` and provide in your `app.module`:
 * ```ts
 * { provide: TraqTokenStorage, useClass: TraqTokenCustomStorage },
 * ```
 *
 */
@Injectable()
export class TraqTokenLocalStorage extends TraqTokenStorage {

  protected key = 'auth_app_token';

  constructor(private parceler: TraqAuthTokenParceler) {
    super();
  }

  /**
   * Returns token from localStorage
   * @returns {TraqAuthToken}
   */
  get(): TraqAuthToken {
    const raw = localStorage.getItem(this.key);
    return this.parceler.unwrap(raw);
  }

  /**
   * Sets token to localStorage
   * @param {TraqAuthToken} token
   */
  set(token: TraqAuthToken) {
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