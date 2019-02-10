import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of as observableOf } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { HWB_AUTH_OPTIONS, HWB_AUTH_USER_OPTIONS, HWB_AUTH_STRATEGIES, HWB_AUTH_TOKENS } from '../auth.options';
import { HwbAuthService } from './auth.service';
import { HwbDummyAuthStrategy } from '../strategies';
import { hwbStrategiesFactory, hwbOptionsFactory } from '../auth.module';
import { HwbAuthResult } from './auth-result';
import { HwbTokenService } from './token/token.service';
import { HwbAuthSimpleToken, hwbAuthCreateToken, HwbAuthJWTToken } from './token/token';
import { HwbTokenLocalStorage, HwbTokenStorage } from './token/token-storage';
import { HWB_AUTH_FALLBACK_TOKEN, HwbAuthTokenParceler } from './token/token-parceler';

describe('auth-service', () => {
  let authService: HwbAuthService;
  let tokenService: HwbTokenService;
  let dummyAuthStrategy: HwbDummyAuthStrategy;
  const testTokenValue = 'test-token';
  const ownerStrategyName = 'strategy';


  const resp401 = new HttpResponse<Object>({body: {}, status: 401});
  const resp200 = new HttpResponse<Object>({body: {}, status: 200});

  const testToken = hwbAuthCreateToken(HwbAuthSimpleToken, testTokenValue, ownerStrategyName);
  const emptyToken = hwbAuthCreateToken(HwbAuthSimpleToken, null, ownerStrategyName);

  const failResult = new HwbAuthResult(false,
    resp401,
    null,
    ['Something went wrong.']);

  const successResult = new HwbAuthResult(true,
    resp200,
    '/',
    [],
    ['Successfully logged in.'],
    testToken);

  const successLogoutResult = new HwbAuthResult(true,
    resp200,
    '/',
    [],
    ['Successfully logged out.']);

  const successResetPasswordResult = new HwbAuthResult(true,
    resp200,
    '/',
    [],
    ['Successfully reset password.']);

  const successRequestPasswordResult = new HwbAuthResult(true,
    resp200,
    '/',
    [],
    ['Successfully requested password.']);

  const successRefreshTokenResult = new HwbAuthResult(true,
    resp200,
    null,
    [],
    ['Successfully refreshed token.'],
    testToken);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HWB_AUTH_OPTIONS, useValue: {} },
        { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: HwbAuthSimpleToken },
        { provide: HWB_AUTH_TOKENS, useValue: [HwbAuthSimpleToken, HwbAuthJWTToken] },
        HwbAuthTokenParceler,
        {
          provide: HWB_AUTH_USER_OPTIONS, useValue: {
            forms: {
              login: {
                redirectDelay: 3000,
              },
            },
            strategies: [
              HwbDummyAuthStrategy.setup({
                name: 'dummy',

                alwaysFail: true,
                delay: 1000,
              }),
            ],
          },
        },
        { provide: HWB_AUTH_OPTIONS, useFactory: hwbOptionsFactory, deps: [HWB_AUTH_USER_OPTIONS] },
        { provide: HWB_AUTH_STRATEGIES, useFactory: hwbStrategiesFactory, deps: [HWB_AUTH_OPTIONS, Injector] },
        { provide: HwbTokenStorage, useClass: HwbTokenLocalStorage },
        HwbTokenService,
        HwbAuthService,
        HwbDummyAuthStrategy,
      ],
    });
    authService = TestBed.get(HwbAuthService);
    tokenService = TestBed.get(HwbTokenService);
    dummyAuthStrategy = TestBed.get(HwbDummyAuthStrategy);
  });

  it('get test token before set', () => {
      const spy = spyOn(tokenService, 'get')
        .and
        .returnValue(observableOf(testToken));

      authService.getToken().subscribe((val: HwbAuthSimpleToken) => {
        expect(spy).toHaveBeenCalled();
        expect(val.getValue()).toEqual(testTokenValue);
      });
    },
  );

  it('is authenticated true if token exists', () => {
      const spy = spyOn(tokenService, 'get')
        .and
        .returnValue(observableOf(testToken));

      authService.isAuthenticated().subscribe((isAuth: boolean) => {
        expect(spy).toHaveBeenCalled();
        expect(isAuth).toBeTruthy();
      });
    },
  );

  it('is authenticated false if token doesn\'t exist', () => {
      const spy = spyOn(tokenService, 'get')
        .and
        .returnValue(observableOf(emptyToken));

      authService.isAuthenticated().subscribe((isAuth: boolean) => {
        expect(spy).toHaveBeenCalled();
        expect(isAuth).toBeFalsy();
      });
    },
  );

  it('onTokenChange return correct stream and gets test token', (done) => {
      const spy = spyOn(tokenService, 'tokenChange')
        .and
        .returnValue(observableOf(testToken));

      authService.onTokenChange()
        .pipe(first())
        .subscribe((token: HwbAuthSimpleToken) => {
          expect(spy).toHaveBeenCalled();
          expect(token.getValue()).toEqual(testTokenValue);
          done();
        });
    },
  );

  it('authenticate failed', (done) => {
      const spy = spyOn(dummyAuthStrategy, 'authenticate')
        .and
        .returnValue(observableOf(failResult)
          .pipe(
            delay(1000),
          ));

      authService.authenticate('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(spy).toHaveBeenCalled();
        expect(authRes.isFailure()).toBeTruthy();
        expect(authRes.isSuccess()).toBeFalsy();
        expect(authRes.getMessages()).toEqual([]);
        expect(authRes.getErrors()).toEqual(['Something went wrong.']);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp401);
        done();
      })
    },
  );

  it('authenticate succeed', (done) => {
      const strategySpy = spyOn(dummyAuthStrategy, 'authenticate')
        .and
        .returnValue(observableOf(successResult)
          .pipe(
            delay(1000),
          ));

      const tokenServiceSetSpy = spyOn(tokenService, 'set')
        .and
        .returnValue(observableOf(null));


      authService.authenticate('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(strategySpy).toHaveBeenCalled();
        expect(tokenServiceSetSpy).toHaveBeenCalled();


        expect(authRes.isFailure()).toBeFalsy();
        expect(authRes.isSuccess()).toBeTruthy();
        expect(authRes.getMessages()).toEqual(['Successfully logged in.']);
        expect(authRes.getErrors()).toEqual([]);
        expect(authRes.getRedirect()).toEqual('/');
        expect(authRes.getToken()).toEqual(testToken);
        expect(authRes.getResponse()).toEqual(resp200);
        done();
      })
    },
  );

  it('register failed', (done) => {
      const spy = spyOn(dummyAuthStrategy, 'register')
        .and
        .returnValue(observableOf(failResult)
          .pipe(
            delay(1000),
          ));

      authService.register('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(spy).toHaveBeenCalled();
        expect(authRes.isFailure()).toBeTruthy();
        expect(authRes.isSuccess()).toBeFalsy();
        expect(authRes.getMessages()).toEqual([]);
        expect(authRes.getErrors()).toEqual(['Something went wrong.']);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp401);
        done();
      })
    },
  );

  it('register succeed', (done) => {
      const strategySpy = spyOn(dummyAuthStrategy, 'register')
        .and
        .returnValue(observableOf(successResult)
          .pipe(
            delay(1000),
          ));

      const tokenServiceSetSpy = spyOn(tokenService, 'set')
        .and
        .returnValue(observableOf(null));

      authService.register('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(strategySpy).toHaveBeenCalled();
        expect(tokenServiceSetSpy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeFalsy();
        expect(authRes.isSuccess()).toBeTruthy();
        expect(authRes.getMessages()).toEqual(['Successfully logged in.']);
        expect(authRes.getErrors()).toEqual([]);
        expect(authRes.getRedirect()).toEqual('/');
        expect(authRes.getToken()).toEqual(testToken);
        expect(authRes.getResponse()).toEqual(resp200);
        done();
      })
    },
  );

  it('logout failed', (done) => {
      const spy = spyOn(dummyAuthStrategy, 'logout')
        .and
        .returnValue(observableOf(failResult)
          .pipe(
            delay(1000),
          ));

      authService.logout('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(spy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeTruthy();
        expect(authRes.isSuccess()).toBeFalsy();
        expect(authRes.getMessages()).toEqual([]);
        expect(authRes.getErrors()).toEqual(['Something went wrong.']);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp401);
        done();
      })
    },
  );

  it('logout succeed', (done) => {
      const strategyLogoutSpy = spyOn(dummyAuthStrategy, 'logout')
        .and
        .returnValue(observableOf(successLogoutResult)
          .pipe(
            delay(1000),
          ));
      const tokenServiceClearSpy = spyOn(tokenService, 'clear').and.returnValue(observableOf('STUB'));

      authService.logout('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(strategyLogoutSpy).toHaveBeenCalled();
        expect(tokenServiceClearSpy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeFalsy();
        expect(authRes.isSuccess()).toBeTruthy();
        expect(authRes.getMessages()).toEqual(['Successfully logged out.']);
        expect(authRes.getErrors()).toEqual([]);
        expect(authRes.getRedirect()).toEqual('/');
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp200);
        done();
      })
    },
  );

  it('requestPassword failed', (done) => {
      const spy = spyOn(dummyAuthStrategy, 'requestPassword')
        .and
        .returnValue(observableOf(failResult)
          .pipe(
            delay(1000),
          ));

      authService.requestPassword('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(spy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeTruthy();
        expect(authRes.isSuccess()).toBeFalsy();
        expect(authRes.getMessages()).toEqual([]);
        expect(authRes.getErrors()).toEqual(['Something went wrong.']);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp401);
        done();
      })
    },
  );

  it('requestPassword succeed', (done) => {
      const strategyLogoutSpy = spyOn(dummyAuthStrategy, 'requestPassword')
        .and
        .returnValue(observableOf(successRequestPasswordResult)
          .pipe(
            delay(1000),
          ));

      authService.requestPassword('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(strategyLogoutSpy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeFalsy();
        expect(authRes.isSuccess()).toBeTruthy();
        expect(authRes.getMessages()).toEqual(['Successfully requested password.']);
        expect(authRes.getErrors()).toEqual([]);
        expect(authRes.getRedirect()).toEqual('/');
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp200);
        done();
      })
    },
  );

  it('resetPassword failed', (done) => {
      const spy = spyOn(dummyAuthStrategy, 'resetPassword')
        .and
        .returnValue(observableOf(failResult)
          .pipe(
            delay(1000),
          ));

      authService.resetPassword('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(spy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeTruthy();
        expect(authRes.isSuccess()).toBeFalsy();
        expect(authRes.getMessages()).toEqual([]);
        expect(authRes.getErrors()).toEqual(['Something went wrong.']);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp401);
        done();
      })
    },
  );

  it('resetPassword succeed', (done) => {
      const strategyLogoutSpy = spyOn(dummyAuthStrategy, 'resetPassword')
        .and
        .returnValue(observableOf(successResetPasswordResult)
          .pipe(
            delay(1000),
          ));

      authService.resetPassword('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(strategyLogoutSpy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeFalsy();
        expect(authRes.isSuccess()).toBeTruthy();
        expect(authRes.getMessages()).toEqual(['Successfully reset password.']);
        expect(authRes.getErrors()).toEqual([]);
        expect(authRes.getRedirect()).toEqual('/');
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp200);
        done();
      })
    },
  );

  it('refreshToken failed', (done) => {
      const spy = spyOn(dummyAuthStrategy, 'refreshToken')
        .and
        .returnValue(observableOf(failResult)
          .pipe(
            delay(1000),
          ));

      authService.refreshToken('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(spy).toHaveBeenCalled();
        expect(authRes.isFailure()).toBeTruthy();
        expect(authRes.isSuccess()).toBeFalsy();
        expect(authRes.getMessages()).toEqual([]);
        expect(authRes.getErrors()).toEqual(['Something went wrong.']);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toBe(null);
        expect(authRes.getResponse()).toEqual(resp401);
        done();
      })
    },
  );

  it('refreshToken succeed', (done) => {
      const strategySpy = spyOn(dummyAuthStrategy, 'refreshToken')
        .and
        .returnValue(observableOf(successRefreshTokenResult)
          .pipe(
            delay(1000),
          ));

      const tokenServiceSetSpy = spyOn(tokenService, 'set')
        .and
        .returnValue(observableOf(null));

      authService.refreshToken('dummy').subscribe((authRes: HwbAuthResult) => {
        expect(strategySpy).toHaveBeenCalled();
        expect(tokenServiceSetSpy).toHaveBeenCalled();

        expect(authRes.isFailure()).toBeFalsy();
        expect(authRes.isSuccess()).toBeTruthy();
        expect(authRes.getMessages()).toEqual(['Successfully refreshed token.']);
        expect(authRes.getErrors()).toEqual([]);
        expect(authRes.getRedirect()).toBeNull();
        expect(authRes.getToken()).toEqual(testToken);
        expect(authRes.getResponse()).toEqual(resp200);
        done();
      })
    },
  );
});