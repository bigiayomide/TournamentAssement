import { HwbAuthTokenClass } from '../services';

export class HwbAuthStrategyOptions {
  name: string;
  token?: {
    class?: HwbAuthTokenClass;
    [key: string]: any;
  };
}