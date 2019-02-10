import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'hwb-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	public bigMenu;
	@Input() open;
	public searchField: FormControl;
	selectedcriteria: string = "quick";

	constructor(private elementRef: ElementRef, private searchservice: SearchService)	
	{ 

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
}


// @HostListener('document:click', ['$event', '$event.target'])
// onClick(event: MouseEvent, targetElement: HTMLElement) {
//     if (!targetElement) {
//           return;
//     }
//     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
//     if (!clickedInside) {
//          this.isOpen = false;
//     }
// }

// constructor(private elementRef: ElementRef, private searchservice: SearchService,)
