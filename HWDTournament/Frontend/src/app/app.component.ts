import { Component, Inject, OnDestroy } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = "";
  title = "app";
  _baseUrl: string = "";
  constructor(public http: Http) {}
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
  ngOnDestroy(): void {
    this.alive = false;
  }
}
