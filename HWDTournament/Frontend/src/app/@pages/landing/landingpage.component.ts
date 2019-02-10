import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { StateService, UserState } from '../../shared/utils/state.service';
import { ItemsService } from '../../shared/utils/items.service';
import { ConfigService } from '../../shared/utils/config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-landingpage',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.scss']
})

export class LandingPageComponent implements OnInit {

    public dashCard1 = [
        {linknumber:1, colorDark: '#7e8acd', colorLight: '#919bd4', number: 1221, title: 'HWBTION COLLECT', icon: 'local_grocery_store' },
        {linknumber:2,  colorDark: '#86c5f9', colorLight: '#e7f3fe', number: 1221, title: 'HWBTION QUEUES', icon: 'new_releases' },
        {linknumber:3,  colorDark: '#44d5c6', colorLight: '#d5f6f2', number: 1221, title: 'CLOSED ACCOUNTS', icon: 'assignments' },
        { linknumber:4, colorDark: '#95d098', colorLight: '#cae7cc', number: 1221, title: 'ACCOUNT QUERIES', icon: 'account_balance' },      
    ];

    
    public dashCard2 = [      
        {linknumber:5,  colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1221, title: 'PTP', icon: 'local_grocery_store' },
        {linknumber:6,  colorDark: '#42A5F5', colorLight: '#64B5F6', number: 1221, title: 'USER ADMIN', icon: 'new_releases' },
        { linknumber:7, colorDark: '#26A69A', colorLight: '#4DB6AC', number: 1221, title: 'REPORTING', icon: 'assignments' },
        {linknumber:8,  colorDark: '#66BB6A', colorLight: '#81C784', number: 1221, title: 'SETTINGS', icon: 'account_balance' }
    ];

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];

   // constructor() { }
    _baseUrl: string = '';
    constructor(protected router: Router,private activatedRoute: ActivatedRoute,public http: Http, stateService: StateService, /*@Inject('BASE_URL') public baseUrl: string*/
    private configService: ConfigService
    ) {
        this._baseUrl = configService.getApiURI();      
    }

    ngOnInit() {
        var _auth = JSON.parse(localStorage.getItem('auth')); 
        if (_auth == null) { 
            this.router.navigate(['./logins']);  
        }       
    }
}
