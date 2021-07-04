import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from "@app/store";

/**
 * Generated class for the EmpContactListModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'emp-contact-list-model',
  templateUrl: 'emp-contact-list-model.html'
})
export class EmpContactListModelComponent {
  list: Array<any> = [];
  title:String = null;
  selectedValue:any = null;
  // searchedData: any;


  constructor(private navParams: NavParams, private store: Store<fromStore.AppState>,
    private navCtrl: NavController, private viewCtrl: ViewController) {
    // this.store.dispatch(new fromStore.GetZenContactsResetAction());
    // this.params =this.navParams.get('reqParams');
    // this.getData();
    this.list = this.navParams.get('data');
    this.title = this.navParams.get('title');
    this.selectedValue = this.navParams.get('selectedValue');
  }

  // getData() {
  //   let url = "getEmployeeContactList";
  //   this.store.dispatch(new fromStore.GetZenContactsAction(url, this.params));

  //   this.store
  //     .select<any>(fromStore.getZenContactsState)
  //     .subscribe(
  //       response => {
  //         if (!response.pending && response.data) {
  //           this.searchedData = response.data;
  //         }
  //       },
  //       err => {
  //       }
  //     );
  // }

  // goToProfile(data: any) {
  //   // this.navCtrl.push('NewProfilePage', {
  //   //   'userId': parseInt(data.employeeId),
  //   //   'profileType': 'zencontacts'
  //   // });
  //   this.viewCtrl.dismiss(data);
  // }

  selectData(data) {
    this.viewCtrl.dismiss(data);
  }

  matchMilestone(selMilestone, milestoneObj){
    return JSON.stringify(selMilestone) === JSON.stringify(milestoneObj);
  }


}
