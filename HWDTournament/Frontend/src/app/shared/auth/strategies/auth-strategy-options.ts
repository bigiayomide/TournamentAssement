import { TraqAuthTokenClass } from '../services';

export class TraqAuthStrategyOptions {
  name: string;
  token?: {
    class?: TraqAuthTokenClass;
    [key: string]: any;
  };
}