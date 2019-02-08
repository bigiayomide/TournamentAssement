import { async, inject, TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { TraqTokenLocalStorage, TraqTokenStorage } from './token-storage';
import { TraqAuthSimpleToken, TraqAuthToken, hwbAuthCreateToken } from './token';
import { TraqTokenService } from './token.service';
import { TraqAuthJWTToken } from './token';
import { HWB_AUTH_FALLBACK_TOKEN, TraqAuthTokenParceler } from './token-parceler';
import { HWB_AUTH_TOKENS } from '../../auth.options';

const noop = () => {};
const ownerStrategyName = 'strategy';

describe('token-service', () => {

  let tokenService: TraqTokenService;
  let tokenStorage: TraqTokenLocalStorage;
  const simpleToken = hwbAuthCreateToken(TraqAuthSimpleToken, 'test value', ownerStrategyName);
  const emptyToken = hwbAuthCreateToken(TraqAuthSimpleToken, '', ownerStrategyName);
  const testTokenKey = 'auth_app_token';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TraqTokenStorage, useClass: TraqTokenLocalStorage },
        { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
        { provide: HWB_AUTH_TOKENS, useValue: [TraqAuthSimpleToken, TraqAuthJWTToken] },
        TraqAuthTokenParceler,
        TraqTokenService,
      ],
    });
  });

    beforeEach(async(inject(
    [TraqTokenService, TraqTokenStorage],
    (_tokenService, _tokenStorage) => {
      tokenService = _tokenService;
      tokenStorage = _tokenStorage;
    },
  )));

  afterEach(() => {
    localStorage.removeItem(testTokenKey);
  });

  it('set calls storage set', () => {

    const spy = spyOn(tokenStorage, 'set')
      .and
      .returnValue(null);

    tokenService.set(simpleToken).subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('get return null in case token was not set', () => {

    const spy = spyOn(tokenStorage, 'get')
      .and
      .returnValue(emptyToken);

    tokenService.get()
      .subscribe((token: TraqAuthToken) => {
        expect(spy).toHaveBeenCalled();
        expect(token.getValue()).toEqual('');
        expect(token.isValid()).toBe(false);
      })
  });

  it('should return correct value', () => {
    tokenService.set(simpleToken).subscribe(noop);

    tokenService.get()
      .subscribe((token: TraqAuthToken) => {
        expect(token.getValue()).toEqual(simpleToken.getValue());
      });
  });

  it('clear remove token', () => {

    const spy = spyOn(tokenStorage, 'clear')
      .and
      .returnValue(null);

    tokenService.set(simpleToken).subscribe(noop);

    tokenService.clear().subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it('token should be published', (done) => {
    tokenService.tokenChange()
      .pipe(take(1))
      .subscribe((token: TraqAuthToken) => {
        expect(token.getValue()).toEqual('');
      });
    tokenService.set(simpleToken).subscribe(noop);
    tokenService.tokenChange()
      .subscribe((token: TraqAuthToken) => {
        expect(token.getValue()).toEqual(simpleToken.getValue());
        done();
      });
  });

  it('clear should be published', (done) => {
    tokenService.tokenChange()
      .pipe(take(1))
      .subscribe((token: TraqAuthToken) => {
        expect(token.getValue()).toEqual('');
      });
    tokenService.set(simpleToken).subscribe(noop);
    tokenService.tokenChange()
      .pipe(take(1))
      .subscribe((token: TraqAuthToken) => {
        expect(token.getValue()).toEqual(simpleToken.getValue());
      });
    tokenService.clear().subscribe(noop);
    tokenService.tokenChange()
      .subscribe((token: TraqAuthToken) => {
        expect(token.getValue()).toEqual('');
        done();
      });
  })
});