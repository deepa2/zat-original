import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HttpAngularProvider } from '../http-angular/http-angular';
import { HttpNativeProvider } from '../http-native/http-native';

@Injectable()
export class HttpProvider {
    public http: HttpAngularProvider | HttpNativeProvider;

    constructor(private platform: Platform, private angularHttp: HttpAngularProvider, private nativeHttp: HttpNativeProvider) {
        this.http = this.platform.is('cordova') ? this.nativeHttp : this.angularHttp;

        // if(this.platform.is('cordova')){
        //     this.http = this.nativeHttp;
        // }
    }
}