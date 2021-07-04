import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Data } from '../../providers/data/data';
import { GetterSetter } from '../../providers/getterSetter/getterSetter';
import {CommonUtilities} from '../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the SwitchUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-switch-user',
  templateUrl: 'switch-user.html',
})
export class SwitchUserPage {
  private detail: Array<any> = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private data: Data, private getSet: GetterSetter,private utility:CommonUtilities) {
  }

  ionViewDidLoad() {
    this.data.getData('loginDetails').then((response:any)=>{
      if(response){
        
        this.utility.updateLoader(true);
       
        this.httpProvider.http.commonService({ url: 'getEdgeUsers', data: {'userId':response.details.userDetails.userId}, dashboard: true }).subscribe((response: any) => {
        
          if (response) {
            if (response.details.responseList.length > 0) {
              this.detail = response.details.responseList;
             
              this.utility.updateLoader(false);
            }
          }
        },err=>{
          this.utility.updateLoader(false);
        })
      }

    })
  
  }

  goToPage(userData) {
    let fingerprintValue;
   
    if (this.getSet.getValue() == 'undefined') {
      fingerprintValue = false
    } else {
      fingerprintValue = this.getSet.getValue();
    }
   
    this.data.saveData('loggedInIds',userData.userId)
    this.data.saveData('encryptedToken', userData.encryptedToken);
    this.navCtrl.setRoot('NewHomePage', { 'fromSwitchUser': fingerprintValue })


  }

}
