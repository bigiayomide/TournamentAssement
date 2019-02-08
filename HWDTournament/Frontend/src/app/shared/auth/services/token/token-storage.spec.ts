import { async, inject, TestBed } from '@angular/core/testing';

import { TraqTokenLocalStorage, TraqTokenStorage } from './token-storage';
import { HWB_AUTH_TOKENS } from '../../auth.options';
import { TraqAuthSimpleToken, hwbAuthCreateToken } from './token';
import { TraqAuthJWTToken } from './token';
import { HWB_AUTH_FALLBACK_TOKEN, TraqAuthTokenParceler } from './token-parceler';

describe('token-storage', () => {

  let tokenStorage: TraqTokenStorage;
  let tokenParceler: TraqAuthTokenParceler;
  const testTokenKey = 'auth_app_token';
  const testTokenValue = 'test-token';
  const ownerStrategyName = 'strategy';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
        { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
        { provide: HWB_AUTH_TOKENS, useValue: [TraqAuthSimpleToken, TraqAuthJWTToken] },
        TraqAuthTokenParceler,
      ],
    });
  });

    beforeEach(async(inject(
    [TraqTokenStorage, TraqAuthTokenParceler],
    (_tokenStorage, _tokenParceler) => {
      tokenStorage = _tokenStorage;
      tokenParceler = _tokenParceler;
    },
  )));

  afterEach(() => {
    localStorage.removeItem(testTokenKey);
  });


  it('set test token', () => {
    const token = hwbAuthCreateToken(TraqAuthSimpleToken, testTokenValue, ownerStrategyName);

    tokenStorage.set(token);
    expect(localStorage.getItem(testTokenKey)).toEqual(tokenParceler.wrap(token));
  });

  it('setter set invalid token to localStorage as empty string', () => {
    let token;

    token = hwbAuthCreateToken(TraqAuthSimpleToken, null, ownerStrategyName);
    tokenStorage.set(token);
    expect(localStorage.getItem(testTokenKey)).toEqual(tokenParceler.wrap(token));

    token = hwbAuthCreateToken(TraqAuthSimpleToken, undefined, ownerStrategyName);
    tokenStorage.set(token);
    expect(localStorage.getItem(testTokenKey)).toEqual(tokenParceler.wrap(token));
  });

  it('get return null in case token was not set', () => {
    const token = tokenStorage.get();
    expect(token.getValue()).toBe('');
    expect(token.isValid()).toBe(false);
  });

  it('should return correct value', () => {
    const token = hwbAuthCreateToken(TraqAuthSimpleToken, 'test', ownerStrategyName);
    localStorage.setItem(testTokenKey, tokenParceler.wrap(token));

    expect(tokenStorage.get().getValue()).toEqual(token.getValue());
  });

  it('clear remove token', () => {
    const token = hwbAuthCreateToken(TraqAuthSimpleToken, 'test', ownerStrategyName);
    localStorage.setItem(testTokenKey, tokenParceler.wrap(token));

    tokenStorage.clear();

    expect(localStorage.getItem(testTokenKey)).toBeNull();
  });

  it('clear remove token only', () => {
    const token = hwbAuthCreateToken(TraqAuthSimpleToken, 'test', ownerStrategyName);
    localStorage.setItem(testTokenKey, tokenParceler.wrap(token));
    localStorage.setItem(testTokenKey + '2', tokenParceler.wrap(token));

    tokenStorage.clear();

    expect(localStorage.getItem(testTokenKey + '2')).toEqual(tokenParceler.wrap(token));
    expect(localStorage.getItem(testTokenKey)).toBeNull();
  });
});