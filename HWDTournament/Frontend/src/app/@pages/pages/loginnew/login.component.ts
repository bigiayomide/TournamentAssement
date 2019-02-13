import { Component, Inject,Renderer2 } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { StateService } from '../../../shared/utils/state.service';
import { ConfigService } from '../../../shared/utils/config.service';

import { UserDataService } from '../../../shared/services/user.data.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { StatusEnum,IAuthDetails, IResultVM, ILoginVM, LoginResponseVM } from '../../../shared/interfaces/interfaces';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginSComponent {
    public user: ILoginVM = { userName: '', password: '' }
    public errors: string = '';
    _baseUrl: string = '';    //todo move this into a service
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    spinnerOn = false;

    _loginresponse :LoginResponseVM;
    constructor(public http: Http, 
        private toasterService: ToasterService, public dataService: UserDataService,
                private configService: ConfigService,
                private renderer2: Renderer2 ,
                public router: Router, public stateService: StateService) {
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

    Login() {
      this.spinnerOn = true;
        localStorage.clear();
        this.dataService.login(this.user)
        .subscribe((result: any) => {
            const loginResult = result as IResultVM;
            if (loginResult.status === StatusEnum.Success) {
              const auth: IAuthDetails = {
                  token: loginResult.token,
                  username: loginResult.username,
                  roles: loginResult.roles
              };
                localStorage.clear();
                localStorage.setItem('auth', JSON.stringify(auth));
                this.router.navigate(['./auth/home']);
            } else if (loginResult.status === StatusEnum.Error) {
              this.spinnerOn = false;
                this.showToast('error', 'Login Error', 'Error occurred while logging in, please try again with valid credentials!');
            }
        },
        error => {
          this.spinnerOn = false;
           this.showToast('error', 'Login Error', error);
        });  
     }

     config: ToasterConfig;  
     position: string = 'toast-top-full-width';
     animationType: string = 'slideDown';
     title: string = 'HI there!';
     content: string = `I'm cool toaster!`;
     timeout: number = 5000;
     toastsLimit: number = 5;
     type: string = 'default';  
     isNewestOnTop: boolean = true;
     isHideOnClick: boolean = true;
     isDuplicatesPrevented: boolean = false;
     isCloseButton: boolean = true;
     
     makeToast() {
       this.showToast(this.type, this.title, this.content);
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

