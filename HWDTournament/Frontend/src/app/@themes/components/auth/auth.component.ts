import {Component, OnInit ,Input,ViewChild,ElementRef,Renderer} from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit/*,AfterViewInit*/{
  @ViewChild('sidenav') public sidenav: MatSidenav;
  @Input() isVisible: boolean = true;

  visibility = 'shown';
  ismobilemenu : boolean =false;

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';

   constructor(private media: ObservableMedia) { }
    HideMenu()
    {
       if (this.media.isActive('lt-sm') || this.media.isActive('gt-xs')) {
           this.sidenav.toggle();
       }
    }

	ngOnInit() {
		this.media.subscribe(() => {
            this.toggleView();
        });
    } 

    getRouteAnimation(outlet) {
       return outlet.activatedRouteData.animation;
    }

	toggleView() {
		if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
            this.ismobilemenu = false;  
        } else if(this.media.isActive('gt-xs')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
            this.ismobilemenu = false;  
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
            this.ismobilemenu = true;
        }
 }
}
