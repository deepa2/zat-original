import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, PopoverController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Subscription } from 'rxjs/Subscription';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  private profileImg: string;
  private dashboardData: any;
  private userDashboardData: any;
  private pageTitle: string;
  private loading$: Observable<any>;
  private notificationCount: number;
  private showDashboard: boolean = true;
  private userDetails: any;
  private dashboardDetail: any;
  @ViewChild(Navbar) navBar: Navbar;

  private _dashboardListener: Subscription = new Subscription();
  private _notificationListener: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams, private data: Data, private popoverCtrl: PopoverController,
    private store: Store<fromStore.AppState> , private utilitiy:CommonUtilities) {
      this.utilitiy.updateLoader(true)
    this.dashboardDetail = {
      "type": "My Dashboard",
    }
  }

  setBackButtonAction() {
    this.navBar.backButtonClick = () => {

      if (!this.showDashboard) {
        this.showDashboard = true;
      } else {
        this.navCtrl.pop();
      }

    }
  }

  ionViewDidLoad() {
    this.getLoginStateFromStore();
    this.getDashboardData();
    this.utilitiy.updateLoader(false)
    this.setBackButtonAction();
    this.getHomeData();

    this.pageTitle = this.navParams.get('pageTitle');
  }

  ionViewWillEnter() {
    // this.loading$ = this.store.select<any>(fromStore.getDashboardLoading);
  }

  getLoginStateFromStore() {

    this.data.getData('loginDetails').then((res:any) => {
      if (res.userRolesDetails && res.userRolesDetails.userDetails) {
        this.profileImg = res.userRolesDetails.userDetails.profileImage;
      }

    })
  }

  getDashboardData() {
    this.store.dispatch(new fromStore.GetDashboardDataAction('getDashboardData'));
    return new Promise(resolve => {
      this._dashboardListener = this.store.select<any>(fromStore.getDashboardState).subscribe(response => {
        if (response.pending == false) {
          this.dashboardData = response.data;
          resolve();
        }
      }, err => {
      })
    })
  }

  getUserDashboardData(dashboardItem) {

    if (dashboardItem.isClickable) {

      this.showDashboard = false;



      this.store.dispatch(new fromStore.GetUserDashboardDataAction('getMyDashboardData'));

      this._dashboardListener = this.store.select<any>(fromStore.getDashboardState).subscribe(response => {
        if (response) {

          this.userDashboardData = response.userData;
        }

      })

    }


  }

  goToProfile() {
    this.navCtrl.push(' NewProfilePage', {
      'profileType': this.dashboardDetail.type,
      'userId': this.dashboardDetail.employeeId
    });
  }

  redirectTo() {
    this.navCtrl.push('DashboardDetailPage');
  }

  goToPage(page) {
    if (page == 'SearchPage') {
      this.navCtrl.push(page, { 'searchType': 'query' });
    } else {
      this.navCtrl.push(page);
    }

  }

  getNotificationCount() {
    this._notificationListener = this.store.select<any>(fromStore.getMiscData).subscribe((res) => {
      this.notificationCount = res.myUnreadNotificationCount;
    });
  }


  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  ionViewWillLeave() {
    this._dashboardListener.unsubscribe();
    this._notificationListener.unsubscribe();
  }

  getHomeData() {
    this.store.select<any>(fromStore.getMiscData).subscribe(response => {
      if (response && response.userDetails) {
        this.userDetails = response.userDetails
        this.dashboardDetail.employeeName = this.userDetails.employeeName.substring(0, this.userDetails.employeeName.indexOf(" "))
        this.dashboardDetail.employeeProfilePic = this.userDetails.employeeProfilePic
        this.dashboardDetail.employeeId = this.userDetails.employeeId
      }
    });
  }

}
