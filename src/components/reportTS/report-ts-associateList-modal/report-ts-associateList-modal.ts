import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { ViewController } from "ionic-angular/navigation/view-controller";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../providers/http/http";
import { API_END_POINTS_REPORT } from '../../../providers/app-services-list/app.services-list';

@Component({
    selector: 'report-ts-associateList-modal',
    templateUrl: 'report-ts-associateList-modal.html'
})
export class ReportTsAssociateListModalComponent {

    private selectAll: boolean = true;
    private list: Array<any> = [];
    private listFrom: string = null;
    private associateSelectedList: any = [];
    private searchInput = '';
    offset = 0;
    startLimit = 100
    endLimit = 200;

    resultPending: boolean = true;
    renderList: any = [];

    constructor(private viewCtrl: ViewController, private httpProvider: HttpProvider, private utilities: CommonUtilities, private navParms: NavParams) {
        this.utilities.updateLoader(true);
        let listFromRT = this.navParms.get('listFromRT');
        this.listFrom = listFromRT.listOf;
        if (listFromRT.list) {
            listFromRT.list.forEach(i => {
                i.isChecked = true
            });
            this.list = listFromRT.list;
            this.associateSelectedList = this.list
        }
        if (listFromRT.selectedList) {
            if (this.listFrom == 'projects') {
                for (let i = 0; i < listFromRT.list.length; i++) {
                    for (let j = 0; j < listFromRT.selectedList.length; j++) {
                        if (listFromRT.list[i].projectId == listFromRT.selectedList[j].projectId) {
                            listFromRT.list[i].isChecked = true;
                        }

                    }

                }
            } else if (this.listFrom == 'associates') {
                for (let i = 0; i < listFromRT.list.length; i++) {
                    for (let j = 0; j < listFromRT.selectedList.length; j++) {
                        if (listFromRT.list[i].associateId == listFromRT.selectedList[j].associateId) {
                            listFromRT.list[i].isChecked = true;
                        }

                    }

                }
            } else if (this.listFrom == 'customer') {
                for (let i = 0; i < listFromRT.list.length; i++) {
                    for (let j = 0; j < listFromRT.selectedList.length; j++) {
                        if (listFromRT.list[i].customerId == listFromRT.selectedList[j].customerId) {
                            listFromRT.list[i].isChecked = true;
                        }

                    }

                }
            } else if (this.listFrom == 'locationList') {
                for (let i = 0; i < listFromRT.list.length; i++) {
                    for (let j = 0; j < listFromRT.selectedList.length; j++) {
                        if (listFromRT.list[i].locationId == listFromRT.selectedList[j].locationId) {
                            listFromRT.list[i].isChecked = true;
                        }

                    }

                }
            } else if (this.listFrom == 'payroll') {
                for (let i = 0; i < listFromRT.list.length; i++) {
                    for (let j = 0; j < listFromRT.selectedList.length; j++) {
                        if (listFromRT.list[i].payrollName == listFromRT.selectedList[j].payrollName) {
                            listFromRT.list[i].isChecked = true;
                        }

                    }

                }
            }
            this._everyElement();
            this.renderList = []
        }
    }

    ionViewDidLoad() {
        this.utilities.updateLoader(false);
    }

    ionViewWillEnter() {
        this.setData(0, 100)
    }

    _dismiss() {
        this.viewCtrl.dismiss({ 'selectedList': [] });
    }


    _selectAll() {
        this.list.map(item => {
            item.isChecked = this.selectAll
            return item
        });

    }

    _everyElement() {
        // this.clientCustomerList.forEach(item => {
        //     if (item.customerName == selected.customerName)
        //         item.isChecked = !selected.isChecked
        // })

        // setTimeout(() => {
        if (this.list.every(item => item.isChecked == true))
            this.selectAll = true;
        else if (this.list.some(item => item.isChecked == false))
            this.selectAll = false;
        // }, 100);

    }


    _add() {
        let selectedList: any;
        if (this.selectAll) {
            selectedList = this.list.filter(ass => ass.isChecked == true)
        } else {
            selectedList = this.renderList.filter(ass => ass.isChecked == true)
        }
        this.viewCtrl.dismiss({ 'selectedList': selectedList });


    }

    /**
  * on input Service Call Based on NAME
  */
    getItems() {

        // if the value is an empty string don't filter the items
        this.renderList = this.list
        if (this.searchInput && this.searchInput.trim() != '') {
            this.renderList = this.list.filter((item) => {
                if (this.listFrom == 'projects') {
                    return (item.projectName.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);

                } else if (this.listFrom == 'associates') {
                    return (item.associateName.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);

                } else if (this.listFrom == 'customer') {
                    return (item.customerName.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);
                } else if (this.listFrom == 'locationList') {
                    return (item.locationName.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);

                } else if (this.listFrom == 'payroll' || this.listFrom == 'clients') {
                    return (item.payrollName.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1);

                }

            })
        } else {
            this.renderList = this.list
        }

    }

    /**
   *  infinite loader for scroll
   */
    loadData(infiniteScroll) {

        setTimeout(() => {
            // this.startList = this.startList + 10;
            // // this.resultPending = false
            // this.getOfferingList(this.learningType, this.learningMode);

            // infiniteScroll.complete();
            if (this.resultPending) {
                // this.startLimit = this.offset;
                this.offset = this.endLimit + 100;
                this.setData(this.offset - 100, this.offset);
                console.log(this.renderList)
                // infiniteScroll.complete();
            }
            infiniteScroll.complete();
        }, 1000);
    }

    setData(start, end) {
        if (end > this.associateSelectedList.length) {
            end = this.associateSelectedList.length;
            this.resultPending = false;
        }
        for (let i = start; i < end; i++) {
            this.renderList.push(this.associateSelectedList[i]);
        }

    }
}
