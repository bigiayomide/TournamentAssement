import { Component, Inject,Renderer2 } from '@angular/core';
//import { Http } from '@angular/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ItemsService } from '../../../../shared/utils/items.service';
import { ConfigService } from '../../../../shared/utils/config.service';

@Component({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
    public users: UserVM[] = [];
    _baseUrl: string = '';

    constructor(public http: Http,// @Inject('BASE_URL') public baseUrl: string
    private itemsService: ItemsService,
    private renderer2: Renderer2 ,
    private configService: ConfigService)
    {
        this._baseUrl = configService.getApiURI();
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
       // headers.append('withCredentials', 'true');
       // headers.append(' Access-Control-Allow-Origin', 'true');
      // alert('test one');
        //let options = new RequestOptions({ headers: headers });
        this.http.get(this._baseUrl + 'manage/users',{withCredentials: true}).subscribe(result => {
            this.users = result.json() as UserVM[];
            console.log(this.users);
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

interface UserVM {
    id: string;
    email: string;
    userName: string;
    lockoutEnabled: boolean;
    twoFactorEnabled: boolean;
}
