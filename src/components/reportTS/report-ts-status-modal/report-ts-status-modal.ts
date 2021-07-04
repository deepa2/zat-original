import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { ViewController } from "ionic-angular/navigation/view-controller";
import { TIMESHEET_STATUS } from "../../../container/zents/zents_constants";

@Component({
    selector: 'report-ts-status-modal',
    templateUrl: 'report-ts-status-modal.html'
})
export class ReportTsStatusModalComponent {

    private tsStatusList: Array<any>;
    private viewAll: boolean = true;
    private selectedStatusValue: any;

    constructor(private viewCtrl: ViewController, private navParams: NavParams) {
        this.tsStatusList = TIMESHEET_STATUS
        this.tsStatusList.forEach(item => item.checked = false)
        this.selectedStatusValue = this.navParams.get('selectedStatusValue');
        console.log(this.selectedStatusValue)
        if (this.selectedStatusValue) {
            for (let i = 0; i < this.tsStatusList.length; i++) {
                for (let j = 0; j < this.selectedStatusValue.length; j++) {
                    if (this.tsStatusList[i].approvalStatusId == this.selectedStatusValue[j]) {
                        console.log(this.tsStatusList[i].checked = true, this.tsStatusList[i].approvalStatusId);
                        // } else {
                        //     this.tsStatusList[i].checked = false;
                    }

                }

            }
            this._everyElement();
        }

    }

    _viewAll() {
        this.tsStatusList.map(item => {
            item.checked = this.viewAll
            return item
        });
    }

    _everyElement() {
        // this.clientCustomerList.forEach(item => {
        //     if (item.customerName == selected.customerName)
        //         item.isChecked = !selected.isChecked
        // })

        // setTimeout(() => {
        if (this.tsStatusList.every(item => item.checked == true))
            this.viewAll = true;
        else if (this.tsStatusList.some(item => item.checked == false))
            this.viewAll = false;
        // }, 100);

    }

    _dismiss() {
        this.viewCtrl.dismiss();
    }

    _submitStatus() {
        let selectedStatus: any;
        if (this.viewAll) {
            selectedStatus = ['-1', '1', '2', '3']
        }
        selectedStatus = this.tsStatusList.filter((item) => {
            if (item.checked)
                return item
        }).map(function (item) {
            return item.approvalStatusId;
        })
        this.viewCtrl.dismiss({ 'selectedStatus': selectedStatus });
    }
    // _selectedTsStatus(selectedStatus: Object) {
    //     this.viewCtrl.dismiss({ 'selectedStatus': selectedStatus });
    // }
}
