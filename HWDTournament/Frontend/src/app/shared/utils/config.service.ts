import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    _apiURI: string;

    constructor() {
        this._apiURI = 'http://localhost:52940/api/';    
      //this._apiURI = 'http://localhost:59942/api/';  
     // this._apiURI = 'https://localhost:44393/api/';    
       //this._apiURI = 'http://localhost:50438/api/';   
       // this._apiURI = '/api/';   
     }

     getApiURI() {
         return this._apiURI;
     }

     getApiHost() {
         return this._apiURI.replace('api/', '');
     }
}



