import { Component, Inject } from '@angular/core';
import { StateService } from '../../../../shared/utils/state.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { ItemsService } from '../../../../shared/utils/items.service';
import { ConfigService } from '../../../../shared/utils/config.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.scss']
})
export class NavMenuSComponent {
    _baseUrl: string = '';
    constructor(public stateService: StateService, public router: Router,
        public http: Http,
        //@Inject('BASE_URL') public baseUrl: string,
        private itemsService: ItemsService,
        private configService: ConfigService
    ) {
        this._baseUrl = configService.getApiURI();
    }

    logout() {
        this.http.post(this._baseUrl + 'account/signout', {}).subscribe(result => {
            this.stateService.setAuthentication({ userName: '', isAuthenticated: false });
            this.router.navigate(['/auth/auths/home']);
        }, error => console.error(error));

    }
}
