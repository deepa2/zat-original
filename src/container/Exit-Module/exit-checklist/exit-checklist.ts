import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the ExitChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exit-checklist',
  templateUrl: 'exit-checklist.html',
})
export class ExitChecklistPage {

  exitCheckList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, private utility: CommonUtilities) {
  }

  ionViewDidLoad() {
    this.utility.updateLoader(true);
    let params = {
      url: 'exitCheckList',
      data: {},
      zenExit: true
    }
    this.http.http.commonService(params).subscribe((response: any) => {
      this.utility.updateLoader(false);
      if(response && response.details){

this.exitCheckList = response.details.exitCheckList;
      }
      console.log(response)
    },
      error => {
        this.utility.updateLoader(false);
      })
  }

}
