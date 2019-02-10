import { Component, OnInit ,Input } from '@angular/core';
import { Observable ,  Observer } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
@Component({
    selector: 'hwb-dashcard',
    templateUrl: './dashcard.component.html',
    styleUrls: ['./dashcard.component.scss']
})
export class DashcardComponent implements OnInit {
     
    @Input() dashData: any;
    
    constructor(
        public http: Http, 
        private toasterService: ToasterService,
        protected router: Router,
        private activatedRoute: ActivatedRoute) {

     }

    ngOnInit() {
    }

    ViewAccounts(linknumber: number)
    {  
        if (linknumber == 1)
        {
            this.router.navigate(['./auth/accounts/account-view']);      
        }
        else
        {          
            this.showToast('success', 'Success', 'Under construction!'); 
        }
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
