import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    _apiBaseURI: string;

    constructor() {
        this._apiBaseURI = 'http://localhost:52940/api/';
       // this._apiBaseURI = 'http://172.17.128.138:5005/api/';
       // this._apiURI = '/api/';
     }

     getApiURI() {
         return this._apiBaseURI;
     }

     getApiHost() {
         return this._apiBaseURI.replace('api/', '');
     }
}



