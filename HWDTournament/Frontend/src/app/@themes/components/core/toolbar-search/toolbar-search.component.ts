import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../../../shared/services/search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { fromEvent } from "rxjs/observable/fromEvent";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'hwb-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss']
})
export class ToolbarSearchComponent implements OnInit {
	cssPrefix = 'toolbar-search';
  	isOpen: boolean = false;
   // @Input() criterias = [];
   selectedcriteria: string = "account number";
    criterias = [
      // 'quick',
      'account number',
      'id number',
      'phone',
      'name',     
    ];
  
    public searchField: FormControl;

    constructor(private elementRef: ElementRef, private searchservice: SearchService,)
    {
    }

      public SearchText(searchtext: string): void {  
        this.searchservice.sendSearchText(searchtext);
      }

  	ngOnInit() {

      this.searchField = new FormControl();
      this.searchField.valueChanges.debounceTime(800)
                                  .distinctUntilChanged()
                                  .subscribe(results => {
   
              if (this.searchField.value.toString().length > 0)
              {            
                this.searchservice.sendSearchText(this.searchField.value +'1searchcriteria1'  + this.selectedcriteria);
              }      
      
          });
  	}

  	select() {
    	
  	}

  	delete(notification) {
    
    }
    
    mouseenter (event) {   
    
      //this.renderer2.addClass(event.target, 'mat-elevation-z10');
 }
   
 mouseleave (event) {   
    
  //   this.renderer2.removeClass(event.target, 'mat-elevation-z10');
   //  this.renderer2.addClass(event.target, 'mat-elevation-z2');
 }

}
