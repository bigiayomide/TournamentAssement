
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HWB_AUTH_OPTIONS, HwbAuthSocialLink } from '../../../shared/auth/auth.options';
import { getDeepFromObject } from '../../../shared/auth/helpers';

import { HwbAuthService } from '../../../shared/auth/services/auth.service';
import { HwbAuthResult } from '../../../shared/auth/services/auth-result';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'hwb-login',  
  templateUrl: 'login.component.html',
  styleUrls:['login.component.scss'], 
})

export class HwbLoginComponent implements OnInit{

  userForm: FormGroup;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    },
    'password': {
      'required': 'please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

    redirectDelay: number = 0;
    showMessages: any = {};
    strategy: string = '';
  
    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    submitted: boolean = false;
    socialLinks: HwbAuthSocialLink[] = [];
  
    constructor(protected service: HwbAuthService,
                @Inject(HWB_AUTH_OPTIONS) protected options = {},
                protected cd: ChangeDetectorRef,
                protected router: Router,
                private fb: FormBuilder) {
  
      this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
      this.showMessages = this.getConfigValue('forms.login.showMessages');
      this.strategy = this.getConfigValue('forms.login.strategy');
      this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }

    ngOnInit() { 
      this.buildForm();
    }

    

    buildForm() {
      this.userForm = this.fb.group({
        'email': ['', [
          Validators.required,
          Validators.email
        ]
        ],
        'password': ['', [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
        ],
      });

       this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
      this.onValueChanged();
    }


    login(): void {      
      let formData = Object.assign({});
      formData = Object.assign(formData, this.userForm.value);   
      this.user = new HwbUser(formData.email ,formData.password );     
      this.errors = this.messages = [];
      this.submitted = true;

      this.service.authenticate(this.strategy, this.user).subscribe((result: HwbAuthResult) => {
        this.submitted = false;
  
        if (result.isSuccess()) {
          this.messages = result.getMessages();
        } else {
          this.errors = result.getErrors();
        }
  
        const redirect = result.getRedirect();
        if (redirect) {
          setTimeout(() => {
            return this.router.navigateByUrl(redirect);
          }, this.redirectDelay);
        }
        this.cd.detectChanges();
      });
    }
  
    getConfigValue(key: string): any {
      return getDeepFromObject(this.options, key, null);
    }

    onValueChanged(data?: any) {
      if (!this.userForm) {
        return;
      }
      const form = this.userForm;
      for (const field in this.formErrors) {
        if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }
  }

  export class HwbUser {
    constructor(public email: string, public password: string) {}
    // public constructor(init?: Partial<HwbUser >) {
    // Object.assign(this, init);
  //  }
  }