import { Inject, Injectable, InjectionToken } from '@angular/core';

import { hwbAuthCreateToken, HwbAuthToken, HwbAuthTokenClass } from './token';
import { HWB_AUTH_TOKENS } from '../../auth.options';

export interface HwbTokenPack {
  name: string,
  ownerStrategyName: string,
  createdAt: Number,
  value: string,
}

export const HWB_AUTH_FALLBACK_TOKEN = new InjectionToken<HwbAuthTokenClass>('Hwb Auth Options');

/**
 * Creates a token parcel which could be stored/restored
 */
@Injectable()
export class HwbAuthTokenParceler {

  constructor(@Inject(HWB_AUTH_FALLBACK_TOKEN) private fallbackClass: HwbAuthTokenClass,
              @Inject(HWB_AUTH_TOKENS) private tokenClasses: HwbAuthTokenClass[]) {
  }

  wrap(token: HwbAuthToken): string {
    return JSON.stringify({
      name: token.getName(),
      ownerStrategyName: token.getOwnerStrategyName(),
      createdAt: token.getCreatedAt().getTime(),
      value: token.toString(),
    });
  }

  unwrap(value: string): HwbAuthToken {
    let tokenClass: HwbAuthTokenClass = this.fallbackClass;
    let tokenValue = '';
    let tokenOwnerStrategyName = '';
    let tokenCreatedAt: Date = null;

    const tokenPack: HwbTokenPack = this.parseTokenPack(value);
    if (tokenPack) {
      tokenClass = this.getClassByName(tokenPack.name) || this.fallbackClass;
      tokenValue = tokenPack.value;
      tokenOwnerStrategyName = tokenPack.ownerStrategyName;
      tokenCreatedAt = new Date(Number(tokenPack.createdAt));
    }

    return hwbAuthCreateToken(tokenClass, tokenValue, tokenOwnerStrategyName, tokenCreatedAt);
  }

  // TODO: this could be moved to a separate token registry
  protected getClassByName(name): HwbAuthTokenClass {
    return this.tokenClasses.find((tokenClass: HwbAuthTokenClass) => tokenClass.NAME === name);
  }

  protected parseTokenPack(value): HwbTokenPack {
    try {
      return JSON.parse(value);
    } catch (e) { }
    return null;
  }
}