
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HWB_AUTH_OPTIONS } from '../../../shared/auth/auth.options';
import { getDeepFromObject } from '../../../shared/auth/helpers';
import { HwbAuthService } from '../../../shared/auth/services/auth.service';
import { HwbAuthResult } from '../../../shared/auth/services/auth-result';

@Component({
  selector: 'hwb-logout',
  template: `
    <div>Logging out, please wait...</div>
  `,
})
export class HwbLogoutComponent implements OnInit {

  redirectDelay: number = 0;
  strategy: string = '';

  constructor(//protected service: HwbAuthService,
             // @Inject(HWB_AUTH_OPTIONS) protected options = {},
              protected router: Router) {
    this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
    this.strategy = this.getConfigValue('forms.logout.strategy');
  }

  ngOnInit(): void {
    this.logout(this.strategy);
  }

  logout(strategy: string): void {
    // this.service.logout(strategy).subscribe((result: HwbAuthResult) => {

    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //     setTimeout(() => {
    //       return this.router.navigateByUrl(redirect);
    //     }, this.redirectDelay);
    //   }
    // });
  }

  getConfigValue(key: string): any {
   // return getDeepFromObject(this.options, key, null);
  }
}
