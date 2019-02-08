import { Component, OnInit } from '@angular/core';
// import {
//   IForgotPasswordVM,
//   IPasswordResetVM
// } from '../../../../shared/interfaces';
// import { UserManagementService } from '../../../call-recording-search/callrecording.services/users.service';
import {
  ToasterConfig,
  Toast,
  BodyOutputType,
  ToasterService
} from 'angular2-toaster';
import { ActivatedRoute, Router } from '@angular/router';
import { IPasswordResetVM } from '../../../shared/interfaces';
import { UserManagementService } from '../../call-recording-search/callrecording.services/users.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordResetModel: IPasswordResetVM;

  config: ToasterConfig;

  position = 'toast-top-full-width';
  animationType = 'slideDown';
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;
  passwordsAreEqual = true;

  myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

  constructor(
    private userService: UserManagementService,
    private toasterService: ToasterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      const resetToken = params['resetToken'];
      const id = params['userId'];
      this.passwordResetModel = {
        id: id,
        email: '',
        password: '',
        confirmPassword: '',
        resetToken: resetToken
      };
    });
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed', 'width': '100%', 'height': '100%', 'z-index': -1, 'top': 0, 'left': 0,
      'right': 0, 'bottom': 0, 'background-color': '#2b2f3e', 'background-image': 'url("")',
      'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-position': '50% 50%'
      };

      this.myParams = {
      particles: {
      number: {
      value: 80,
      density: { enable: true, value_area: 800 }
      },
      color: { value: '#2f5677'},
      shape: {
      type: 'star',
      stroke: {width: 0, color: '#000000' },
      polygon: { nb_sides: 5},
      image: { src: 'img/github.svg', width: 100, height: 100 }
      },
      opacity: {
      value: 0.5, random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
      move: {
      enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
      },
      interactivity: {
      detect_on: 'canvas',
      events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
      },
      modes: {
      grab: {
      distance: 400,
      line_linked: {opacity: 1 }
      },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { rticles_nb: 4 },
      remove: { particles_nb: 2 }
      }
      },
      retina_detect: true,
      };
  }

  resertPassword() {
    this.userService.resetPassword(this.passwordResetModel).subscribe(
      (result: any) => {
        const registerResult = result;
        this.showToast(
          'success',
          'Password Reset Success',
          'Your password has been reset, Please login.'
        );
        setTimeout(() => this.router.navigate(['/logins']), 3000);
      },
      error => {
        console.log(error);
        this.showToast(
          'error',
          'Password reset Error',
          'Error occurred while reseting your password, please try again!'
        );
      }
    );
  }

  checkArePasswordsValid() {
    if (this.passwordResetModel.confirmPassword.length > 0) {
      this.passwordsAreEqual = this.passwordResetModel.password === this.passwordResetModel.confirmPassword ? true : false;
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
      limit: this.toastsLimit,
      showCloseButton: true
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
}
