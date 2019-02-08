
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { InjectionToken ,Inject} from '@angular/core';
// import { NbMediaBreakpoint } from './services/breakpoints.service';
// import { NbJSThemeOptions } from './services/js-themes/theme.options';
// export interface NbThemeOptions {
//     name: string;
// }
// export declare const NB_THEME_OPTIONS: InjectionToken<NbThemeOptions>;
// export declare const NB_MEDIA_BREAKPOINTS: InjectionToken<NbMediaBreakpoint[]>;
// export declare const NB_BUILT_IN_JS_THEMES: InjectionToken<NbJSThemeOptions[]>;
// export declare const NB_JS_THEMES: InjectionToken<NbJSThemeOptions[]>;
/**
 * We're providing browser apis with tokens to improve testing capabilities.
 * */

 //export declare const HWB_WINDOW : InjectionToken<Window>;

 export const HWB_WINDOW = new InjectionToken<Window>("Window");

// export declare  HWB_WINDOW  = new InjectionToken<Window>('Manually constructed MyService', {
   
//   });
// class MyService {
//     constructor(readonly myDep: MyDep) {}
//   }
   
//   const MY_SERVICE_TOKEN = new InjectionToken<MyService>('Manually constructed MyService', {
//     providedIn: 'root',
//     factory: () => new MyService(inject(MyDep)),
//   });
//export declare const  BASE_URL : InjectionToken<string>('BaseUrl');
export  const  HWB_DOCUMENT = new InjectionToken<Document>("Document");



