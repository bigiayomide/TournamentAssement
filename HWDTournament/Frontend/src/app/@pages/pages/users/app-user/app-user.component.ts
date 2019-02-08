import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppUser, RegisterVM, ResultVM } from '../../../../shared/interfaces';
import { AccountDataService } from '../../../../shared/services/account.data.service';
import {
  ToasterConfig,
  Toast,
  ToasterService,
  BodyOutputType
} from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { passwordMatcher, CustomValidators } from '../passwordMatcher';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit {
  appUser: AppUser;
  Title: string;
  user: RegisterVM;
  userFrom:  FormGroup;
  action: string;
  required: Boolean;

  config: ToasterConfig;
  passwordsAreEqual = true;
  position = 'toast-top-full-width';
  animationType = 'slideDown';
  timeout = 6500;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;

  constructor(
    private dialogRef: MatDialogRef<AppUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dataService: AccountDataService,
    private toasterService: ToasterService,
    private fb: FormBuilder
  ) {
    this.Title = (data.action === 'Edit') ? 'Edit User' : 'Add User';
    this.required = (data.action === 'Edit') ? false : true;
    this.appUser = data.user;
    this.action = data.action;
  }

  ngOnInit() {
    this.setUserDetails();
  }

  createForm() {
   this.userFrom = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [ Validators.required])
    });
  }

  setUserDetails() {
    if (this.appUser) {
      this.user = {
        id: this.appUser.id,
        userName: this.appUser.userName,
        email: this.appUser.email,
        password: '',
        confirmPassword: '',
        startFreeTrial: true,
        isAdmin: this.appUser.isAdmin
      };
    } else {
      this.user = {
        id: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        startFreeTrial: false,
        isAdmin: false
      };
    }
  }

  saveUser() {
    if (this.action === 'Edit') {
      this.editUser();
    } else {
      this.registerUser();
    }
  }

  registerUser() {
    this.dataService.register(this.user).subscribe(
      (result: any) => {
        const registerResult = result as ResultVM;
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.showToast(
          'error',
          'Adding User Error',
          'Error occurred while adding a user, please try again: ' + error
        );
      }
    );
  }

  editUser() {
    this.dataService.editUser(this.user).subscribe(
      (result: any) => {
        const registerResult = result as ResultVM;
        this.dialogRef.close();
      },
      error => {
        console.log(error);
        this.showToast(
          'error',
          'Edit User Error',
          'Error occurred while editing a user, please try again! ' + error
        );
      }
    );
  }
  checkArePasswordsValid() {
    if (this.user.confirmPassword.length > 0) {
      this.passwordsAreEqual = this.user.password === this.user.confirmPassword ? true : false;
    } else {
      this.passwordsAreEqual = true;
    }
}
  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml
    };
    this.toasterService.popAsync(toast);
  }

  close() {
    this.dialogRef.close();
  }
}
