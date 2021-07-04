import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class MoveToPageService {

    moveToPage = new Subject();
    updateProfile = new Subject();
    showLoader = new Subject();
    withDrawCourse = new Subject();
    sfList = new Subject();

    constructor() { }

    _updateProfile(dataObj: any, parentIndex: any) {
        this.updateProfile.next({ dataObj: dataObj, i: parentIndex });
    }

    _showLoader(show: boolean) {
        this.showLoader.next({ show: show })
    }

}
