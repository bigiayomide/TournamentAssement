import { IAuthDetails } from './../../../../shared/interfaces/interfaces';
import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hwb-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

    Hari;

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}

  	constructor(protected router: Router,private activatedRoute: ActivatedRoute,private elementRef: ElementRef) { }

  	ngOnInit() {
		  ;
      this.currentUser = JSON.parse(localStorage.getItem("auth"));
	  }

	logout()
	{
		this.router.navigate(['./logins']);
	}

}
