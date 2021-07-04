import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'

/**
 * Generated class for the DirectReportiesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'direct-reporties',
  templateUrl: 'direct-reporties.html'
})
export class DirectReportiesComponent implements OnInit {

  private type: string;
  private userId: string;
  private detailedData: any;
  private wholeData:any

  constructor(private navParams: NavParams, private http: HttpProvider, private utility: CommonUtilities, private viewCtrl: ViewController) {
    this.type = this.navParams.get('type');
    this.userId = this.navParams.get('userId');
    this.wholeData = this.navParams.get('wholedata');
  }

  ngOnInit() {
    let data = {
      url: 'zendeavorProfileData',
      data: {
        "userId": this.userId,
        "type": this.type
      },
      associate: true

    }
    this.utility.updateLoader(true);
    this.http.http.commonService(data).subscribe((response: any) => {
      if (response && response.details) {
        this.utility.updateLoader(false);
        this.detailedData = response.details;
      }

    },
      (error) => {
        this.utility.updateLoader(false);
      })

  }

  close() {
    this.viewCtrl.dismiss();
  }


}
