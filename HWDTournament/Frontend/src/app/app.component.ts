// import { Component } from '@angular/core';
import {trigger,state, style, animate, transition, query,} from '@angular/animations';
import { Component, Inject, OnDestroy, enableProdMode } from '@angular/core';
import { Http } from '@angular/http';
import { StateService, UserState } from './shared/utils/state.service';
import { ItemsService } from './shared/utils/items.service';
import { ConfigService } from './shared/utils/config.service';
import { takeWhile } from 'rxjs/operators';
import { TraqAuthService } from './shared/auth';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnDestroy  {
  private alive = true;

  subscription: any;

  authenticated = false;
  token = '';
  title = 'app';
  _baseUrl = '';
    constructor( // protected auth: TraqAuthService,
      public http: Http, stateService: StateService, /*@Inject('BASE_URL') public baseUrl: string*/
    private configService: ConfigService,
   // private environment: Env
    ) {

      // console.log( environment.production); // Logs false for default environment
      //enableProdMode();
        // this._baseUrl = configService.getApiURI();
        // this.http.get(this._baseUrl + 'account/authenticated').subscribe(result => {
        //     this._baseUrl = configService.getApiURI();
        //     var state = result.json() as UserState;
        //     console.log(state);
        //     stateService.setAuthentication(state);
        // }, error => console.error(error));

        // this.subscription = auth.onAuthenticationChange()
        // .pipe(takeWhile(() => this.alive))
        // .subscribe((authenticated: boolean) => {
        //   this.authenticated = authenticated;
        // });
    }
    getRouteAnimation(outlet) {
      return outlet.activatedRouteData.animation;
  }
  ngOnDestroy(): void {
    this.alive = false;
  }
}

