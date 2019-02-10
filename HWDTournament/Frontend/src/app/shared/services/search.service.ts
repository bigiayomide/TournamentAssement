import { Injectable } from '@angular/core';
//import { Subject }    from 'rxjs';
import { Observable, Subject } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class SearchService {

  private searchTextChanged = new Subject<string>();
  //private searchTextChangedSource = new Subject<string>();
  searchTextChanged$ = this.searchTextChanged.asObservable();
  private componentcansearch = new Subject<boolean>();
  //componentcansearch$ = this.componentcansearch.asObservable();


  sendSearchText(message: string) {
    this.searchTextChanged.next(message);
    // this.subject.next({ text: message });
     
  }

  clearSearchText() {
    this.searchTextChanged.next();
    //  this.subject.next();
  }

  getSearchText(): Observable<any> {  
      return this.searchTextChanged.asObservable();
  }

  getCanSearch()
  {
    return  this.componentcansearch.asObservable();
  }

  setCanSearch(cansearch:boolean)
  {
     this.componentcansearch.next(cansearch);
  }
 
}