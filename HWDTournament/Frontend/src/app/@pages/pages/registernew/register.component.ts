import { Component, Inject, Renderer2, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { ItemsService } from "../../../shared/utils/items.service";
import { ConfigService } from "../../../shared/utils/config.service";
import {
  RegisterVM,
  IRoleMenu,
  ResultVM,
  StatusEnum
} from "../../../shared/interfaces";

import {
  ToasterService,
  ToasterConfig,
  Toast,
  BodyOutputType
} from "angular2-toaster";
import { AccountDataService } from "../../../shared/services/account.data.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterSComponent implements OnInit {
  public user: RegisterVM = {
    id: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    startFreeTrial: true,
    isAdmin: false
  };
  public errors = "";
  public simpleUser = false;
  _baseUrl = "";
  config: ToasterConfig;

  position = "toast-top-full-width";
  animationType = "slideDown";
  title = "HI there!";
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  type = "default";

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  constructor(
    public dataService: AccountDataService,
    private toasterService: ToasterService,
    public http: Http,
    private configService: ConfigService,
    private renderer2: Renderer2,
    public router: Router
  ) {
    this._baseUrl = configService.getApiURI();
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
        color: { value: "#2f5677" },
        shape: {
          type: "star",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: { opacity: 1 }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { rticles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    };
  }

  mouseenter(event) {
    this.renderer2.removeClass(event.target, "mat-elevation-z4");
    this.renderer2.addClass(event.target, "mat-elevation-z15");
  }

  mouseleave(event) {
    this.renderer2.removeClass(event.target, "mat-elevation-z15");
    this.renderer2.addClass(event.target, "mat-elevation-z4");
  }

  register() {
    this.dataService.register(this.user).subscribe(
      (result: any) => {
        debugger;
        const registerResult = result.json() as ResultVM;
        if (registerResult.status === StatusEnum.Success) {
          this.router.navigate(["/logins"]);
        } else if (registerResult.status === StatusEnum.Error) {
          this.errors = registerResult.data.toString();
        }
      },
      (error) => {
        console.log(error);
        this.showToast(
          "error",
          "Login Error",
          "Error occurred while registering in, please try again with valid credentials! " + error
        );
      }
    );

    // this.dataService.register(this.user).subscribe(result => {
    //              let registerResult = result as ResultVM;
    //     if (registerResult.status === StatusEnum.Success) {
    //         this.router.navigate(['/@pages/pages/logins']);
    //     } else if (registerResult.status === StatusEnum.Error) {
    //         this.errors = registerResult.data.toString();
    // }
    //     )
  }

  makeAdmin(event: any) {
    if (event) {
      this.user.startFreeTrial = false;
      this.simpleUser = false;
    }
  }

  makeTrial(event: any) {
    if (event) {
      this.user.isAdmin = false;
      this.simpleUser = false;
    }
  }

  isSimpleUser(event: any) {
    this.simpleUser = event;
    if (event) {
      this.user.isAdmin = false;
      this.user.startFreeTrial = false;
    }
  }

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
}

// interface RegisterVM {
//     userName: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//     startFreeTrial: boolean;
//     isAdmin: boolean;
// }
