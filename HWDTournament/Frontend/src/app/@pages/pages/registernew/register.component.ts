import { Component, Inject,Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ItemsService } from '../../../shared/utils/items.service';
import { ConfigService } from '../../../shared/utils/config.service';
import { IUser, IUserRecaptcha, IRegisterVM, IRoleMenu,IResultVM,StatusEnum } from '../../../shared/interfaces/interfaces';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { UserDataService } from '../../../shared/services/user.data.service';
import { FormGroup, FormControl, FormGroupDirective, NgForm, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
     const invalidCtrl = !!(control && control.invalid && control.parent.dirty && control.pristine);
     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
 
     return (invalidCtrl || invalidParent);
   }
 }

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterSComponent {
    // public user: RegisterVM = {
    //     userName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     startFreeTrial: true,
    //     isAdmin: false
    // };
    public errors: string = '';
    //public simpleUser: boolean = false;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    //_newUser: IUser;
    _recaptureUser:IUserRecaptcha;
    userloaded: boolean;

   _registeruser: IRegisterVM;
    _baseUrl: string = '';
    registerForm: FormGroup;
    passwordForm: FormGroup;
    matcher = new MyErrorStateMatcher();
    spinnerOn = false;

    constructor(private formBuilder: FormBuilder,public http: Http,
        private configService: ConfigService,
        private renderer2: Renderer2 ,
        public router: Router,
        private  dataService: UserDataService,
     private toasterService: ToasterService,
        ) {

         
         this.registerForm = this.formBuilder.group({
           passwordForm: new FormBuilder().group({
            'password': ['', [
               Validators.minLength(6),
               Validators.maxLength(25)
             ]
             ],
             'confirmpassword':  ['',[
               Validators.minLength(6),
               Validators.maxLength(25)
             ]]
           }, 
           { validator: this.checkPasswords }
           ),
            'username': ['', [
               Validators.required
            ]
         
             ],
             'email': ['', [
               Validators.required ,
               Validators.email
            ]             
             ],
           }), 
            this._registeruser = {
                id:'',
                email:'',
                userName :'',
                password :'',
                isAdmin : true,   
                confirmPassword :'',
               }
          
               this.userloaded = true;
    }

   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      let pass = group.controls.password.value;
      let confirmPass = group.controls.confirmpassword.value;

      return pass === confirmPass ? null : { notSame: true }
   }


    mouseenter (event) {  
        this.renderer2.removeClass(event.target, 'mat-elevation-z4');     
         this.renderer2.addClass(event.target, 'mat-elevation-z15');
    }
      
    mouseleave (event) {       
        this.renderer2.removeClass(event.target, 'mat-elevation-z15');
        this.renderer2.addClass(event.target, 'mat-elevation-z4');
    }

    
   ngOnInit() {

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
   }


registerUser(): void {
   this.spinnerOn = true;
  this._registeruser.userName = this.registerForm.get('username').value;
  this._registeruser.password = this.registerForm.get('passwordForm.password').value;
  this._registeruser.confirmPassword = this.registerForm.get('passwordForm.confirmpassword').value;

    this.dataService.register(this._registeruser)
    .subscribe((res:any) => {      
      const registerResult = res as IResultVM;
        if (registerResult.status === StatusEnum.Success) {
         this.router.navigate(["/logins"]);
       } else if (registerResult.status === StatusEnum.Error) {
         this.spinnerOn = false;
         this.errors = registerResult.data.toString();
         this.showToast('error', 'Registration Failed', this.errors.toString());   
       }
    },
    error => {
      this.spinnerOn = false;
        this.showToast('error', 'Registration Failed', 'Error occurred during registration process!' + error);   
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
