import { Component, Input, SimpleChanges } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";

@Component({
    selector: 'report-selected-list-modal',
    templateUrl: 'report-selected-list-modal.html'
})
export class ReportSelectedListModal {
    selectedList: Array<any> = [];
    listFrom: string = ''
    constructor(private viewCtrl: ViewController, private navParms: NavParams) {
        this.listFrom = this.navParms.get('listFrom');
        this.selectedList = this.navParms.get('selectedList');
    }

    _dismiss() {
        this.viewCtrl.dismiss();
    }

}
