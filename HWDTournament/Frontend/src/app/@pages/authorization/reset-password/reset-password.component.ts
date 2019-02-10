/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HWB_AUTH_OPTIONS } from '../../../shared/auth/auth.options';
import { getDeepFromObject } from '../../../shared/auth/helpers';

import { HwbAuthService } from '../../../shared/auth/services/auth.service';
import { HwbAuthResult } from '../../../shared/auth/services/auth-result';

@Component({
  selector: 'hwb-reset-password-page',
  styleUrls: ['./reset-password.component.scss'],
  template: `
    test
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HwbResetPasswordComponent {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor(//protected service: HwbAuthService,
             // @Inject(HWB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router) {

    this.redirectDelay = this.getConfigValue('forms.resetPassword.redirectDelay');
    this.showMessages = this.getConfigValue('forms.resetPassword.showMessages');
    this.strategy = this.getConfigValue('forms.resetPassword.strategy');
  }

  resetPass(): void {
    // this.errors = this.messages = [];
    // this.submitted = true;

    // this.service.resetPassword(this.strategy, this.user).subscribe((result: HwbAuthResult) => {
    //   this.submitted = false;
    //   if (result.isSuccess()) {
    //     this.messages = result.getMessages();
    //   } else {
    //     this.errors = result.getErrors();
    //   }

    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //     setTimeout(() => {
    //       return this.router.navigateByUrl(redirect);
    //     }, this.redirectDelay);
    //   }
    //   this.cd.detectChanges();
    // });
  }

  getConfigValue(key: string): any {
    //return getDeepFromObject(this.options, key, null);
  }
}