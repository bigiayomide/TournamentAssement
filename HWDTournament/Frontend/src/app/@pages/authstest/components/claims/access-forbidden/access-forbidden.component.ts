import { Component,Renderer2 } from '@angular/core';

@Component({
    selector: 'access-forbidden',
    templateUrl: './access-forbidden.component.html',
    styleUrls: ['./access-forbidden.component.scss']
})
export class AccessForbiddenComponent {

    constructor(private renderer2: Renderer2 )          
    {
        
    }
 
     mouseenter (event) {       
          this.renderer2.addClass(event.target, 'mat-elevation-z10');
     }
       
     mouseleave (event) {       
         this.renderer2.removeClass(event.target, 'mat-elevation-z10');
         this.renderer2.addClass(event.target, 'mat-elevation-z2');
     }
}
