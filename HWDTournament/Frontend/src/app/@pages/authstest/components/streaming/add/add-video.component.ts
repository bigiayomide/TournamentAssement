import { Component, Inject,Renderer2 } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ItemsService } from '../../../../../shared/utils/items.service';
import { ConfigService } from '../../../../../shared/utils/config.service';

@Component({
    selector: 'add-video',
    templateUrl: './add-video.component.html',
    styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent {
    public categories: StreamingCategoryVM[] = [];
    public newVideo: VideoVM = { title : '', category : '', description: '', url : '' };
    _baseUrl: string = '';

    constructor(public http: Http,/* @Inject('BASE_URL') public baseUrl: string,*/
    private itemsService: ItemsService,
    private configService: ConfigService,
    private renderer2: Renderer2 ,
    private router: Router,) {
        this._baseUrl = configService.getApiURI();
        this.http.get(this._baseUrl + 'streaming/videos/register',{withCredentials:true}).subscribe(result => {
            this.categories = result.json() as StreamingCategoryVM[];
            this.newVideo.category = this.categories[0].category;
        }, error => console.error(error));
    }

    addVideo() {
        console.log(this.newVideo);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers ,withCredentials:true});
        this.http.post(this._baseUrl + 'streaming/videos/add', 
            JSON.stringify(this.newVideo), options).subscribe(result => {
                this.router.navigate(['videos', this.newVideo.category]);
        }, error => console.error(error));
    }
    mouseenter (event) {        
         this.renderer2.addClass(event.target, 'mat-elevation-z10');
    }
      
    mouseleave (event) {       
        this.renderer2.removeClass(event.target, 'mat-elevation-z10');
        this.renderer2.addClass(event.target, 'mat-elevation-z2');
    }
}

interface StreamingCategoryVM {
    category: string;
    value: number;
    registered: boolean;
}

interface VideoVM {
    url: string;
    title: string;
    description: string;
    category: string;
}
