import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hwb-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isOpen = false;
  // currentUser = null;
  isAdmin = false;
  auth;

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

  constructor(private elementRef: ElementRef, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.auth = JSON.parse(localStorage.getItem('auth'));
    if (this.auth) {
      this.isAdmin = this.auth.roles.includes('Admin');
    }
  }

  manageUsers() {
	 this.router.navigate(['./auth/recordings/users'] /*, { relativeTo: this.route.root }*/);
  }

  logout() {
    if (this.auth) {
      localStorage.removeItem('auth');
    }
    this.router.navigate(['/logins']);
  }
}
