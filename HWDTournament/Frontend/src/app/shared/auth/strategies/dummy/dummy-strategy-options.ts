import { TraqAuthStrategyOptions } from '../auth-strategy-options';
import { TraqAuthSimpleToken } from '../../services';

export class TraqDummyAuthStrategyOptions extends TraqAuthStrategyOptions {
  token? = {
    class: TraqAuthSimpleToken,
  };
  delay? = 1000;
  alwaysFail? = false;
}

export const dummyStrategyOptions: TraqDummyAuthStrategyOptions = new TraqDummyAuthStrategyOptions();