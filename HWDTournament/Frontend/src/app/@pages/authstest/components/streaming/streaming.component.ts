import { Component, Inject,Renderer2 } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ItemsService } from '../../../../shared/utils/items.service';
import { ConfigService } from '../../../../shared/utils/config.service';

@Component({
    selector: 'streaming',
    templateUrl: './streaming.component.html',
    styleUrls: ['./streaming.component.scss']
})
export class StreamingComponent {
    public videos: VideoVM[] = [];
    public category: string = '';
    private sub: any;
    _baseUrl: string = '';

    constructor(public http: Http, public sanitizer: DomSanitizer,
        private configService: ConfigService
       /* @Inject('BASE_URL') public baseUrl: string*/, private route: ActivatedRoute,private renderer2: Renderer2  ) {
        this._baseUrl = configService.getApiURI();
    }

    mouseenter (event) {
        //alert('enter ');
        this.renderer2.addClass(event.target, 'mat-elevation-z15')
     }
     
     mouseleave (event) {
      //   alert('leave ');
       this.renderer2.removeClass(event.target, 'mat-elevation-z15')
       this.renderer2.addClass(event.target, 'mat-elevation-z2')
     }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            // const headers = new Headers();
            // headers.append('accept', 'applicationCore.Identi/json');    
            // headers.append('Set-Cookie', '=CfDJ8AXKWQO6cJtMpgWCi90s_6bQtqeiK-nmoIsWLJqf3bRC3CaJUgCW2IIX4rTVre0AFZODVtNtFf9ej90p0TNbIEqW15YuSHF80dibrgt6eh5loDYzyJ0m3Oy7-EIDml7Ogf7b82oviTdKHjqXSKtL801XHQoFZa2HSOTQTp8I8NsCQS2ALmUzKs5xwlnwI0uAiCYcfE1eQGnbahEJJJdRN5RkaKR2g6Z8tH5by56cgHHeqPzS9GIs54EFz-EcBBynBkTX9ggRpOLoStbjJRcJwl6uoG0T9xvM3j8eNCkhvY0Hj_hOZkHyblGCUQxYYz6t_UAQhnKgqHJkT25gLIyhUCEZ9J9QYY9ncKh5VJ4ras_D_qv7Sg7DUFxNR0Y7CzlLgWO7rBCegdQJsS1mSM0-ckNO8ohVQa7tzY4ZL2CrW2IVucGz2QNPM9aoHxQijhzf6vTqWWaGVECXBo1kfV91wYgt1D0fmn2NQdB5gRMpRnyboDQXKw6Q2bhmxA2bD2hhPs2NhdWgBAshlY11Dcv-BMciPDbiLbULfq3hhVn85jW6d3oPqBut9d5YDV72TS4D4oscGr7pnulYuuAQJ7rS32WVQeMOQ0dyMl86a5oOKWpD1P2JJUiKFgqpMwGuSVddWtjEYabO-UR7Gl8aydNIK0M; expires=Tue, 14 Aug 2018 06:35:00 GMT; path=/; secure; samesite=lax; httponly;');   
            // headers.append('Content-Type', 'application/json');    
            this.category = params['id'] || '';
            var route = this.category.length === 0 ? 'videos' : this.category
            this.http.get(this._baseUrl + `streaming/${route}`,{withCredentials:true}).subscribe(result => {
                this.videos = result.json() as VideoVM[];
              //  console.log(this.videos);
            }, error => console.error(error));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    sanitizeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

interface VideoVM {
    url: string;
    title: string;
    description: string;
}
