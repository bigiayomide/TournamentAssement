import { Component,Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { StateService, UserState } from '../../../../shared/utils/state.service';
import { ItemsService } from '../../../../shared/utils/items.service';
import { ConfigService } from '../../../../shared/utils/config.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    _baseUrl: string = '';
    constructor(public http: Http, stateService: StateService, /*@Inject('BASE_URL') public baseUrl: string*/
    private renderer2: Renderer2 ,private configService: ConfigService
    ) {
        this._baseUrl = configService.getApiURI();
        this.http.get(this._baseUrl + 'account/authenticated').subscribe(result => {
            this._baseUrl = configService.getApiURI();
            var state = result.json() as UserState;
            console.log(state);
            stateService.setAuthentication(state);
        }, error => console.error(error));
    }

    mouseenter (event) {        
         this.renderer2.addClass(event.target, 'mat-elevation-z10');
    }
      
    mouseleave (event) {     
        this.renderer2.removeClass(event.target, 'mat-elevation-z10');
        this.renderer2.addClass(event.target, 'mat-elevation-z2');
    }

    getRouteAnimation(outlet) {
      
      return outlet.activatedRouteData.animation
  }
}
