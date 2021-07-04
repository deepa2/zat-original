import { Component } from "@angular/core";
import { ModalController, NavController, NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { AddDigModelPage } from "../ZenSF/addDigModel/addDigModel";
import { Constants } from "@app/constants";
import { SfDetailsPage } from "./sfDetails/sfDetails";
import { Subscription } from "rxjs";
import * as moment from 'moment';
import { MoveToPageService } from "../../container/chat-bot-new/chat-bot-new-services/moveToPage.service";
import { ManagerActivityListPage } from "./manager_Activity_List/manager_Activity_List";
import { Events } from 'ionic-angular';
import { Data } from "../../providers/data/data";
@Component({
    selector: "sfDashbord-page",
    templateUrl: "sfDashbord.html"
})

export class SfDashbordPage {
    private sfData: any = [];
    private gaolList: any = [];
    private renderList: any = [];
    private currentTab: string
    private teamList: any
    private roleAccess: any;
    private userID: any
    private isManager: any
    private searchInput: any = "";
    private limit: any = {
        start: 0,
        end: 15
    }
    private errorMessage: string;
    private resultPending: boolean = true;
    private $sfList: Subscription = new Subscription();
    private teamsListData: any;
    private searchResults: any = [];
    private hideview: boolean = false;
    private searchValue: boolean = false;
    private serchevent: any
    private searchInit: boolean = true;


    constructor(private moveToPageService: MoveToPageService,
        private utility: CommonUtilities,
        private httpProvider: HttpProvider,
        private navCtrl: NavController,
        private viewCtrl: ViewController,
        private modalCtrl: ModalController,
        public dataService: Data,

        private events: Events, private navPrams: NavParams) {
        this.$sfList = this.moveToPageService.sfList.subscribe((res: any) => {
            this.sfData = []
            this.getDashboardData(0, 15)
        })
        this.roleAccess = this.navPrams.get('paramsFromChatBot')
        this.isManager = this.roleAccess.mangerAcess
        this.dataService.saveData('roleAccess', this.roleAccess)
        this.userID = this.roleAccess.userId

        //this.getDashboardData(this.limit.start, this.limit.end)
        this.currentTab = 'Activities'
    }
    private _getOverallData() {
        throw new Error("Method not implemented.");
    }

    ionViewDidEnter() {
        if (this.searchInput == '') {
            this.sfData = []
            this.getDashboardData(this.limit.start, this.limit.end)
        } else {
            this.sfData = []
            this.renderList = this.sfData
            this._getSearchResults(this.limit.start, this.limit.end)
        }
    }

    getDashboardData(start, end) {
        const url: string = "getAllDialog";
        const data: any = {
            "start": start,
            "end": 10,
            userId: this.userID
        };
        this.utility.updateLoader(true);
        this.errorMessage = ''

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details) && res.status.statusCode == 1) {
                this.gaolList = res.details.dialogCategoryList
                if (!this.utility.isEmptyOrNullOrUndefined(res.details.responseList) && res.details.responseList.length > 0) {
                    this.sfData = this.sfData.concat(res.details.responseList)
                    this.renderList = this.sfData
                } else {
                    this.resultPending = false
                    this.errorMessage = 'No Activity Created!'
                }
            } else if (res.status.statusCode == -5) {
                this.utility.showAlert('Dialog', res.status.statusMessage)
                this.navCtrl.pop()
            } else if (res.status.statusCode == -6) {
                if (this.renderList.length <= 0) {
                    this.utility.showAlert('Dialog', res.status.statusMessage)
                }
            } else {
                this.errorMessage = 'No Data Available!'
                this.utility.showAlert('Dialog', res.status.statusMessage)
            }
            this.utility.updateLoader(false)
        }, err => {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false)
        });
    }

    getTeamList() {
        const url: string = "getTeamList";
        const data: any = {};
        this.utility.updateLoader(true);
        this.errorMessage = ''

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details) && res.status.statusCode == 1) {
                this.utility.updateLoader(false);
                if (res.details.responseList.length == 0) {
                    this.resultPending = false
                    this.errorMessage = 'No Data Available!'
                }
                this.teamsListData = res.details.responseList
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

    movetoaddDig() {
        let sfDigModel = this.modalCtrl.create(AddDigModelPage, { goalList: this.gaolList, data: this.sfData }, { cssClass: 'addDig-model' })
        sfDigModel.present();
    }

    movetoDigDetails(data) {
        this.navCtrl.push(SfDetailsPage, { data: data, roleAccess: this.roleAccess, userId: this.userID, currentTab: this.currentTab })
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
            userId: this.userID,
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

    /**
    *  infinite loader for scroll
    */
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
        return moment(date).format('DD MMM, YYYY');
    }

    segmentChanged(ev: any) {
        this.currentTab = ev._value
        if (ev._value == 'Teams') {
            this.getTeamList()
        } else if (ev._value == 'Activities') {
            this.sfData = []
            this.getDashboardData(this.limit.start, this.limit.end)
        }
    }

    moveToActivityList(data) {
        this.navCtrl.push(ManagerActivityListPage, { data: data, currentTab: this.currentTab })
    }
}