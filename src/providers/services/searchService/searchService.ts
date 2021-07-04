import {Injectable} from '@angular/core';
import {HttpAngularProvider} from '../../http-angular/http-angular';
import * as environment from '@app/env';

@Injectable()
export class searchService extends HttpAngularProvider {
    
    constructor(private baseService:HttpAngularProvider){
        super();
    }

    changeBaseUrl(){
        this.baseService.baseURL = environment.notificationURL;
    }

}