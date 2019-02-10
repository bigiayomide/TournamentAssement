import { HwbAuthStrategyOptions } from '../auth-strategy-options';
import { HwbAuthSimpleToken } from '../../services';

export class HwbDummyAuthStrategyOptions extends HwbAuthStrategyOptions {
  token? = {
    class: HwbAuthSimpleToken,
  };
  delay? = 1000;
  alwaysFail? = false;
}

export const dummyStrategyOptions: HwbDummyAuthStrategyOptions = new HwbDummyAuthStrategyOptions();