import { Component, Inject ,Renderer2} from '@angular/core';
import { Http } from '@angular/http';
import { ItemsService } from '../../../../shared/utils/items.service';
import { ConfigService } from '../../../../shared/utils/config.service';

@Component({
    selector: 'claims',
    templateUrl: './claims.component.html',
    styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent {
    public claims: ClaimsVM[] = [];
    public userName: string = '';
    _baseUrl: string = '';
    constructor(public http: Http,
       // @Inject('BASE_URL') public baseUrl: string
        private itemsService: ItemsService,
        private renderer2: Renderer2 ,
        private configService: ConfigService)
     {
        this._baseUrl = configService.getApiURI();
        this.http.get(this._baseUrl + 'account/claims',{withCredentials: true}).subscribe(result => {
            var claimsResult = result.json() as UserClaims;
            this.claims = claimsResult.claims;
            this.userName = claimsResult.userName;
        }, error => console.error(error));
    }

    mouseenter (event) {       
         this.renderer2.addClass(event.target, 'mat-elevation-z10');
    }
      
    mouseleave (event) {       
        this.renderer2.removeClass(event.target, 'mat-elevation-z10');
        this.renderer2.addClass(event.target, 'mat-elevation-z2');
    }

}

interface ClaimsVM {
    type: string;
    value: string;
}

interface UserClaims {
    claims: ClaimsVM[];
    userName: string;
}