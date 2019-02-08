import { AbstractControl, FormGroup, FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export const passwordMatcher = (control: AbstractControl): {[key: string]: boolean} => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword) { return null; }
    return password.value === confirmPassword.value ? null : { nomatch: true };
  };

export const checkPasswords = (group: FormGroup) => {
  const pass = group.controls.password.value;
  const confirmPass = group.controls.confirmPass.value;

  return pass === confirmPass ? null : { notSame: true };
};

export class CRErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

export class CustomValidators {
  /**
   * Validates that child controls in the form group are equal
   */
  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
      const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
      const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
      return isValid ? null : { childrenNotEqual: true };
  }
}


export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return control.parent.invalid && control.touched;
  }
}

export const regExps: { [key: string]: RegExp } = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/
};

export const errorMessages: { [key: string]: string } = {
  username: 'Full name must be between 1 and 128 characters',
  email: 'Email must be a valid email address (username@domain)',
  password: 'Password must be between 6 and 15 characters, and contain at least one number and special character',
  confirmPassword: 'Passwords must match'
};


