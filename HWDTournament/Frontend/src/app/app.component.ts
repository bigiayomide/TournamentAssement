// import { Component } from '@angular/core';
import {trigger,state, style, animate, transition, query,} from '@angular/animations';
import { Component, Inject, OnDestroy, enableProdMode } from '@angular/core';
import { Http } from '@angular/http';
import { StateService, UserState } from './shared/utils/state.service';
import { ItemsService } from './shared/utils/items.service';
import { ConfigService } from './shared/utils/config.service';
import { takeWhile } from 'rxjs/operators';
import { HwbAuthService } from './shared/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})

export class AppComponent  implements OnDestroy  {
  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';
  title = 'app';
  _baseUrl: string = '';
    constructor( //protected auth: HwbAuthService, 
      public http: Http, stateService: StateService, /*@Inject('BASE_URL') public baseUrl: string*/
    private configService: ConfigService
    ) {
    }
    getRouteAnimation(outlet) {
      
      return outlet.activatedRouteData.animation
  }
  ngOnDestroy(): void {
    this.alive = false;
  }
}

