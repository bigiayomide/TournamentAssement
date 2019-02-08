import { async, inject, TestBed } from '@angular/core/testing';

import { TraqAuthSimpleToken, hwbAuthCreateToken, TraqAuthJWTToken } from './token';
import { HWB_AUTH_FALLBACK_TOKEN, TraqAuthTokenParceler } from './token-parceler';
import { HWB_AUTH_TOKENS } from '../../auth.options';

describe('token-parceler', () => {

  let tokenParceler: TraqAuthTokenParceler;

  const createdAt = new Date(1532350800000);
  const simpleToken = hwbAuthCreateToken(TraqAuthSimpleToken, 'test value', 'strategy', createdAt);
  // tslint:disable-next-line
  const wrappedSimple = `{"name":"${TraqAuthSimpleToken.NAME}","ownerStrategyName":"${simpleToken.getOwnerStrategyName()}","createdAt":${simpleToken.getCreatedAt().getTime()},"value":"${simpleToken.getValue()}"}`;
  // tslint:disable-next-line
  const jwtToken = hwbAuthCreateToken(TraqAuthJWTToken, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjZXJlbWEuZnIiLCJpYXQiOjE1MzIzNTA4MDAsImV4cCI6MTUzMjQzNzIwMCwic3ViIjoiQWxhaW4gQ0hBUkxFUyIsImFkbWluIjp0cnVlfQ.iICwNqhvg9KPv3_MSg3HCydyAgAYI9mL3ZejLkY11Ck', 'strategy', createdAt);
  // tslint:disable-next-line
  const wrappedJWT = `{"name":"${TraqAuthJWTToken.NAME}","ownerStrategyName":"${jwtToken.getOwnerStrategyName()}","createdAt":${jwtToken.getCreatedAt().getTime()},"value":"${jwtToken.getValue()}"}`;
  // tslint:disable-next-line
  const wrappedNonExisting = `{"name":"non-existing","value":"${simpleToken.getValue()}","ownerStrategyName":"${simpleToken.getOwnerStrategyName()}","createdAt":"${createdAt.getTime()}"}`;
  const wrappedInvalid = `{"name":"non-existing"`;

  describe('default configuration', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
          { provide: HWB_AUTH_TOKENS, useValue: [TraqAuthSimpleToken, TraqAuthJWTToken] },
          TraqAuthTokenParceler,
        ],
      });
    });

    beforeEach(async(inject(
      [TraqAuthTokenParceler],
      (_tokenParceler) => {
        tokenParceler = _tokenParceler;
      },
    )));

    it('wraps simple', () => {
      expect(tokenParceler.wrap(simpleToken))
        .toEqual(wrappedSimple);
    });

    it('wraps jwt', () => {
      expect(tokenParceler.wrap(jwtToken))
        .toEqual(wrappedJWT);
    });

    it('unwraps simple', () => {
      expect(tokenParceler.unwrap(wrappedSimple))
        .toEqual(simpleToken);
    });

    it('unwraps jwt', () => {
      expect(tokenParceler.unwrap(wrappedJWT))
        .toEqual(jwtToken);
    });

    it('unwraps non existing', () => {
      expect(tokenParceler.unwrap(wrappedNonExisting))
        .toEqual(simpleToken);
    });

    it('unwraps invalid', () => {
      const token = tokenParceler.unwrap(wrappedInvalid);
      expect(token.getName())
        .toEqual(simpleToken.getName());
      expect(token.getValue())
        .toEqual('');
    });
  });

  describe('fail configuration', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          { provide: HWB_AUTH_FALLBACK_TOKEN, useValue: TraqAuthSimpleToken },
          { provide: HWB_AUTH_TOKENS, useValue: [] },
          TraqAuthTokenParceler,
        ],
      });
    });

    beforeEach(async(inject(
      [TraqAuthTokenParceler],
      (_tokenParceler) => {
        tokenParceler = _tokenParceler;
      },
    )));

    it('unwraps jwt to fallback simple as none provided', () => {

      const token = tokenParceler.unwrap(wrappedJWT);
      expect(token.getName())
        .toEqual(simpleToken.getName());

      expect(token.getValue())
        .toEqual(jwtToken.getValue());
    });

  });
});