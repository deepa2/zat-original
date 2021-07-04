import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from "@app/store";

/**
 * Generated class for the UserProfileListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile-list',
  templateUrl: 'user-profile-list.html',
})
export class UserProfileListPage {
  private params:any;
  private searchedData: any;
  private resolve: Function;

  constructor(private navParams:NavParams,private store: Store<fromStore.AppState>,
    private navCtrl:NavController,private viewCtrl:ViewController) {
    this.store.dispatch(new fromStore.GetZenContactsResetAction());
    this.params =this.navParams.get('reqParams');
    this.resolve = this.navParams.get('resolve');
    this.getData();
  }

  getData() {
    let url = "getEmployeeContactList";
    this.store.dispatch(new fromStore.GetZenContactsAction(url, this.params));

     this.store
        .select<any>(fromStore.getZenContactsState)
        .subscribe(
          response => {
            if (!response.pending && response.data) {
              this.searchedData = response.data;
            }
          },
          err => {
          }
        );
  }

  goToProfile(data: any) {
      this.navCtrl.push('NewProfilePage', {
        'userId': parseInt(data.employeeId),
        'profileType': 'zencontacts'
      });
  }

  ionViewWillLeave(){
    if(this.resolve){
      this.resolve();
    }
  }
}
