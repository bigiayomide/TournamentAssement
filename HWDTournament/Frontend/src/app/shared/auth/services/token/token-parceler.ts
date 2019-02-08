import { Inject, Injectable, InjectionToken } from '@angular/core';

import { hwbAuthCreateToken, TraqAuthToken, TraqAuthTokenClass } from './token';
import { HWB_AUTH_TOKENS } from '../../auth.options';

export interface TraqTokenPack {
  name: string,
  ownerStrategyName: string,
  createdAt: Number,
  value: string,
}

export const HWB_AUTH_FALLBACK_TOKEN = new InjectionToken<TraqAuthTokenClass>('Traq Auth Options');

/**
 * Creates a token parcel which could be stored/restored
 */
@Injectable()
export class TraqAuthTokenParceler {

  constructor(@Inject(HWB_AUTH_FALLBACK_TOKEN) private fallbackClass: TraqAuthTokenClass,
              @Inject(HWB_AUTH_TOKENS) private tokenClasses: TraqAuthTokenClass[]) {
  }

  wrap(token: TraqAuthToken): string {
    return JSON.stringify({
      name: token.getName(),
      ownerStrategyName: token.getOwnerStrategyName(),
      createdAt: token.getCreatedAt().getTime(),
      value: token.toString(),
    });
  }

  unwrap(value: string): TraqAuthToken {
    let tokenClass: TraqAuthTokenClass = this.fallbackClass;
    let tokenValue = '';
    let tokenOwnerStrategyName = '';
    let tokenCreatedAt: Date = null;

    const tokenPack: TraqTokenPack = this.parseTokenPack(value);
    if (tokenPack) {
      tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
      tokenValue = tokenPack.value;
      tokenOwnerStrategyName = tokenPack.ownerStrategyName;
      tokenCreatedAt = new Date(Number(tokenPack.createdAt));
    }

    return hwbAuthCreateToken(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
  }

  // TODO: this could be moved to a separate token registry
  protected getClassByName(name): TraqAuthTokenClass {
    return this.tokenClasses.find((tokenClass: TraqAuthTokenClass) => tokenClass.NAME === name);
  }

  protected parseTokenPack(value): TraqTokenPack {
    try {
      return JSON.parse(value);
    } catch (e) { }
    return null;
  }
}