import { Component, Inject, ViewContainerRef ,Renderer2} from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ItemsService } from '../../../../../shared/utils/items.service';
import { ConfigService } from '../../../../../shared/utils/config.service';


@Component({
    selector: 'streaming-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class StreamingRegisterComponent {
    public categories: StreamingCategoryVM[] = [];
    public checkedAll: boolean = false;
    public displayVideoForm: boolean = false;
    _baseUrl: string = '';
    constructor(public http: Http,/* @Inject('BASE_URL') public baseUrl: string,*/
    private configService: ConfigService,
    private renderer2: Renderer2 ,
    private router: Router,/*public toastr: ToastsManager,*/ vcr: ViewContainerRef) {
       // this.toastr.setRootViewContainerRef(vcr);
       this._baseUrl = configService.getApiURI();
        this.http.get(this._baseUrl + 'streaming/videos/register',{withCredentials:true}).subscribe(result => {
            this.categories = result.json() as StreamingCategoryVM[];
            console.log(this.categories);
        }, error => console.error(error));
        
    }

    mouseenter (event) {
       // alert('enter');
        this.renderer2.addClass(event.target, 'mat-elevation-z10');
     }
     
     mouseleave (event) {
        // alert('leave');
       this.renderer2.removeClass(event.target, 'mat-elevation-z10');
       this.renderer2.addClass(event.target, 'mat-elevation-z2');
     }
    
    toggleCategories($event: any) {
        var check = $event.target.checked;
        
        this.categories.forEach(c => c.registered = check);
    }

    toggleCategory(category: StreamingCategoryVM) {
        category.registered = !category.registered;

        if(!category.registered) {
            this.checkedAll = false;
        }
    }

    update() {
        var categories = this.categories.filter(c => c.registered === true).map(c => c.category);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('withCredentials', 'true');
        let options = new RequestOptions({ headers: headers ,withCredentials:true});
        this.http.post(this._baseUrl + 'streaming/videos/register', 
            JSON.stringify(categories),options).subscribe(result => {
               // this.toastr.success('Categories updated', 'Success!');
               alert('Categories updated Success!');
        }, error => console.error(error));
    }

    viewCategory(event: any, category: string) {
        event.stopPropagation();
        this.router.navigate(['/auth/authstest/videos', category]);
    }
}

interface StreamingCategoryVM {
    category: string;
    value: number;
    registered: boolean;
}
