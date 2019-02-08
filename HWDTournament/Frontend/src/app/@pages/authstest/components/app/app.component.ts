import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { StateService, UserState } from '../../../../shared/utils/state.service';
import { ItemsService } from '../../../../shared/utils/items.service';
import { ConfigService } from '../../../../shared/utils/config.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    _baseUrl: string = '';
    constructor(public http: Http, stateService: StateService, /*@Inject('BASE_URL') public baseUrl: string*/
    private configService: ConfigService
    ) {
        this._baseUrl = configService.getApiURI();
        this.http.get(this._baseUrl + 'account/authenticated').subscribe(result => {
            this._baseUrl = configService.getApiURI();
            var state = result.json() as UserState;
            console.log(state);
            stateService.setAuthentication(state);
        }, error => console.error(error));
    }
}
