import { Component, ViewChild } from "@angular/core";
import { ModalController, NavController, NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import { MoveToPageService } from "../../../container/chat-bot-new/chat-bot-new-services/moveToPage.service";
import { Subscription } from "rxjs";
import * as moment from 'moment';
import { SfDetailsPage } from "../sfDetails/sfDetails";

@Component({
    selector: "managerActivityList-page",
    templateUrl: "manager_Activity_List.html"
})

export class ManagerActivityListPage {

    private associateDetails: any
    private associateDialoge: any;
    private sfData: any = [];
    private gaolList: any = [];
    private renderList: any = [];
    private currentTab: string
    private teamList: any
    private searchInput: string = ""
    private limit: any = {
        start: 0,
        end: 15
    }
    private errorMessage: string;
    private resultPending: boolean = true;
    private searchValue: boolean = false;
    private serchevent: any
    private searchInit: boolean = true;
    private $sfList: Subscription = new Subscription();

    constructor(private moveToPageService: MoveToPageService, private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        private viewCtrl: ViewController, private modalCtrl: ModalController, private navCtrl: NavController) {

        this.$sfList = this.moveToPageService.sfList.subscribe((res: any) => {
            this.sfData = []
            this.getDashboardData(0, 15)
        })
        this.currentTab = this.navParams.get("currentTab")
        this.associateDetails = this.navParams.get("data")
       // this.getDashboardData(this.limit.start, this.limit.end)
    }

    ionViewDidEnter() {
        if (this.searchInput == '') {
            this.sfData = []
            this.getDashboardData(this.limit.start, this.limit.end)

        } else {
            this.sfData = [];
            this.renderList = this.sfData;
            this._getSearchResults(this.limit.start, this.limit.end)
        }
    }

    getDashboardData(start, end) {
        const url: string = "getAllDialog";
        const data: any = {
            start: start,
            end: 10,
            userId: this.associateDetails.userId
        };
        this.utility.updateLoader(true);
        this.errorMessage = ''

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details) && res.status.statusCode == 1) {
                this.utility.updateLoader(false);
                if (!this.utility.isEmptyOrNullOrUndefined(res.details.responseList) && res.details.responseList.length > 0) {
                    this.sfData = this.sfData.concat(res.details.responseList)
                    this.renderList = this.sfData
                } else {
                    this.resultPending = false
                }
                if (this.utility.isEmptyOrNullOrUndefined(this.sfData)) {
                    this.errorMessage = 'No Activity Created!'
                }
                this.gaolList = res.details.dialogCategoryList
            } else if (res.status.statusCode == -5) {
                this.utility.updateLoader(false);
                this.utility.showAlert('Dialog', res.status.statusMessage);
                this.navCtrl.pop();
            } else {
                this.errorMessage = 'No Data Available!'
                this.utility.updateLoader(false);
                this.utility.showAlert('Dialog', Constants["erroMessageFor No Data"])
            }
        }, err => {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false);
        });
    }

    _searchItems(ev: any) {
        this.searchInput = ev.target.value;
        if (this.searchInit)
            this.renderList = []
        if (this.searchInput && this.searchInput.trim() != '') {
            this.renderList = []
            this.limit.start = 0
            this._getSearchResults(0, 10)
        }
    }

    _getSearchResults(start, end) {
        this.searchValue = true;
        this.searchInit = false
        //const val = ev.target.value;
        const url: string = "searchDialog";
        const data: any = {
            start: start,
            end: 10,
            userId: this.associateDetails.userId,
            searchKeyword: this.searchInput
        };
        this.utility.updateLoader(true);
        this.errorMessage = ''

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details) && res.status.statusCode == 1) {
                this.utility.updateLoader(false);
                if (!this.utility.isEmptyOrNullOrUndefined(res.details.responseList) && res.details.responseList.length > 0) {
                    this.resultPending = true
                    this.renderList = this.renderList.concat(res.details.responseList)
                }
            } else if (res.status.statusCode == -6) {
                this.utility.updateLoader(false);
                this.renderList = this.sfData
                this.resultPending = false
            }

        }, err => {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false);
        });
    }

    onCancel(ev) {
        ev.target.value = '';
        this.searchInit = true
        this.renderList = []
        this.resultPending = true
        this.limit.start = 0
        this.getDashboardData(0, 10)
    }

    loadData(infiniteScroll) {
        if (this.resultPending) {
            setTimeout(() => {
                this.limit.start = this.limit.start + 10
                this.limit.end = 10;
                if (this.searchValue) {
                    this._getSearchResults(this.limit.start, this.limit.end)
                } else
                    this.getDashboardData(this.limit.start, this.limit.end)
                infiniteScroll.complete();
            }, 1000);
        } else {
            infiniteScroll.enable(false);
        }
    }

    _getFormatDate(date) {
        return moment(date).format('DD MMM YYYY');
    }

    movetoDigDetails(data) {
        this.navCtrl.push(SfDetailsPage, { data: data, userId: this.associateDetails.userId, currentTab: this.currentTab });
    }
}
