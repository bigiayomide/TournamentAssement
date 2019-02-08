import { Component, Inject, Renderer2, ViewContainerRef, ChangeDetectorRef, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { StateService } from '../../../shared/utils/state.service';
import { ConfigService } from '../../../shared/utils/config.service';
import { AccountDataService } from '../../../shared/services/account.data.service';
import { HWB_AUTH_OPTIONS } from '../../../shared/auth';
import { FormBuilder } from '@angular/forms';
import { IRoleMenu, LoginVM, ResultVM, StatusEnum, AuthDetails } from '../../../shared/interfaces';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { RecallToastService } from '../users/toast-service';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginSComponent implements OnInit {
    public user: LoginVM = { userName: '', password: '' };
    public errors = '';
    _baseUrl = '';    // todo move this into a service
    spinnerOn = false;

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

    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

    constructor(private toasterService: ToasterService,
       // protected service: TraqAuthService,
        public dataService: AccountDataService,
      vcr: ViewContainerRef,
        @Inject(HWB_AUTH_OPTIONS) protected options = {},
        protected cd: ChangeDetectorRef,
      //  protected router: Router,
        private fb: FormBuilder,
        public http: Http,
        /* @Inject('BASE_URL') public baseUrl: string,*/
        private configService: ConfigService,
        private renderer2: Renderer2 ,
        public router: Router,
        public stateService: StateService) {
                    this._baseUrl = configService.getApiURI();
    }

    ngOnInit() {
      localStorage.clear();
      this.myStyle = {
        'position': 'fixed','width': '100%', 'height': '100%', 'z-index': -1, 'top': 0,'left': 0,
        'right': 0,'bottom': 0,'background-color': '#2b2f3e', 'background-image': 'url("")',
        'background-repeat': 'no-repeat','background-size': 'cover', 'background-position': '50% 50%'
      };

      this.myParams = {
          particles:{
              number:{
                value:80,
                density:{ enable:true, value_area:800 }
              },
              color:{ value:"#2f5677"},
              shape:{
                type:"star",
                stroke:{width:0,  color:"#000000" },
                polygon:{ nb_sides:5},
                image:{ src:"img/github.svg", width:100, height:100 }
              },
              opacity:{
                value:0.5,  random:false,
                anim:{ enable:false, speed:1, opacity_min:0.1, sync:false }
              },
              size:{
                value:3,
                random:true,
                anim:{ enable:false,  speed:40, size_min:0.1, sync:false  }
              },
              line_linked:{ enable:true, distance:150, color:"#ffffff",opacity:0.4,  width:1 },
              move:{
                enable:true, speed:6, direction:"none", random:false, straight:false, out_mode:"out", bounce:false,
                attract:{ enable:false,rotateX:600, rotateY:1200 }
              }
            },
              interactivity:{
                  detect_on:"canvas",
                  events:{
                    onhover:{  enable:true, mode:"repulse" },
                    onclick:{  enable:true, mode:"push" },
                    resize:true
                  },
                  modes:{
                    grab:{
                        distance:400,
                        line_linked:{opacity:1 }
                    },
                    bubble:{ distance:400,size:40, duration:2, opacity:8, speed:3 },
                    repulse:{ distance:200, duration:0.4 },
                    push:{  rticles_nb:4 },
                    remove:{ particles_nb:2 }
                  }
                },
                retina_detect:true,
                }
  };

  mouseenter (event) {
      this.renderer2.removeClass(event.target, 'mat-elevation-z4');
       this.renderer2.addClass(event.target, 'mat-elevation-z15');
  }

  mouseleave (event) {
      this.renderer2.removeClass(event.target, 'mat-elevation-z15');
      this.renderer2.addClass(event.target, 'mat-elevation-z4');
  }
    login() {
        this.spinnerOn = true;
        this.dataService.login(this.user)
        .subscribe((result: any) => {

            const loginResult = result as ResultVM;
            if (loginResult.status === StatusEnum.Success) {
              const auth: AuthDetails = {
                  token: loginResult.token,
                  username: loginResult.username,
                  roles: loginResult.roles
              };
                localStorage.clear();
                localStorage.setItem('auth', JSON.stringify(auth));
                this.router.navigate(['./auth/recordings/home']);
                this.spinnerOn = false;
            } else if (loginResult.status === StatusEnum.Error) {
               // this.errors = loginResult.data.toString();
               this.spinnerOn = false;
                this.showToast('error', 'Login Error', 'Error occurred while logging in, please try again with valid credentials!');
            }
        },
        error => {
            console.log(error);
            this.spinnerOn = false;
           this.showToast('error', 'Login Error', 'Error occurred while logging in, please try again with valid credentials!');
        });
    }

    // makeToast() {
    // this.showToast(this.type, this.title, this.content);
    // }

    private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
        positionClass: this.position,
        timeout: this.timeout,
        newestOnTop: this.isNewestOnTop,
        tapToDismiss: this.isHideOnClick,
        preventDuplicates: this.isDuplicatesPrevented,
        animation: this.animationType,
        limit: this.toastsLimit,
    });
    const toast: Toast = {
        type: type,
        title: title,
        body: body,
        timeout: this.timeout,
        showCloseButton: this.isCloseButton,
        bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
    }

}

// interface LoginVM {
//     userName: string;
//     password: string;
// }

// interface ResultVM {
//     status: StatusEnum;
//     message: string;
//     data: {}
// }

// enum StatusEnum {
//     Success = 1,
//     Error = 2
// }

