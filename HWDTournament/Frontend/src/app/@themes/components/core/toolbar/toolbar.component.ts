import { Component, OnInit, Input } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'hwb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;

	isOpen: boolean = false;
  
	searchOpen: boolean = false;
		toolbarHelpers = ToolbarHelpers;
		currentUser : any;
		cansearch: boolean = false;
		constructor(protected router: Router,private activatedRoute: ActivatedRoute,
			private searchservice: SearchService,) 
		{ 
			 this.searchservice.getCanSearch().subscribe(
				cansearch => { 
					this.cansearch = cansearch; 
						//this.loadAccountsView() ;
					// this. SearchAccounts();
				});    
		}

  	ngOnInit() {			

			let  mycurrentUser = JSON.parse(localStorage.getItem('currentUser')); 
			let  currentUser;
			if (mycurrentUser != null)
			{
				  currentUser = {
					photoURL: '',
					currentUserName: mycurrentUser.currentUserName
				};
			}
			else{
				currentUser = {
					photoURL: '',
					currentUserName: ''
				};
			}
					
			if (currentUser != null) {			
				this.currentUser = currentUser;
			}
			else
			{			
				this.router.navigate(['./logins']);  
			}
		}
		
		mouseenter (event) {   
    
      //this.renderer2.addClass(event.target, 'mat-elevation-z10');
 }
   
 mouseleave (event) {
  //   this.renderer2.removeClass(event.target, 'mat-elevation-z10');
   //  this.renderer2.addClass(event.target, 'mat-elevation-z2');
 }


}
