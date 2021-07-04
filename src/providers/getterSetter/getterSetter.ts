import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

@Injectable()
export class GetterSetter {

    private _isFingerPrintCheckedVlaue: any;
    private _versionNumber: any;
    private _notificationData: any;
    private _loginDetails: any;
    private _userDetails: any;
    private _userChatListData: any;
    private _userKey: string;


    constructor() { }

    setValue(data) {
        this._isFingerPrintCheckedVlaue = data;
    }

    getValue() {
        return this._isFingerPrintCheckedVlaue
    }

    setVersionNo(data) {
        this._versionNumber = data;
    }
    getVersionNo() {
        return this._versionNumber;
    }

    setNotificationData(data) {
        this._notificationData = data
    }

    getNotificationData() {
        return this._notificationData;
    }
    setLoginDetails(data) {
        this._loginDetails = data;
    }
    getLoginDetails() {
        return this._loginDetails;
    }

    setUserData(userData) {
        this._userDetails = userData;
    }
    getUserData() {
        return this._userDetails;
    }

    setUserChatListData(chatData: any) {
        this._userChatListData = chatData
    }

    getUserChatListData() {
        return this._userChatListData
    }

    clearUserChatListData() {
        this._userChatListData = null;
    }
    setUserKey(key: string) {
        this._userKey = key
    }
    getUserKey() {
        return this._userKey
    }
    clearUserKey() {
        this._userKey = null
    }
}