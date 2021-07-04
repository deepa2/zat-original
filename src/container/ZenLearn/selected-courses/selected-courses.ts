import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the SelectedCoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selected-courses',
  templateUrl: 'selected-courses.html',
})
export class SelectedCoursesPage {

  private dapCoursesList: Array<any> = []
  private dapId: any;
  private userId: any;
  private otherList: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, private utils: CommonUtilities) {
    //console.log(this.navParams.get("data"))
    //console.log(this.navParams.get("dapId"))
    this.dapId = this.navParams.get("dapId")

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SelectedCoursesPage');
    if (this.navParams.get("data")) {
      this.dapCoursesList = this.navParams.get("data")
    } else if (this.navParams.get("otherList")) {
      this.otherList = this.navParams.get("otherList");
    } else if (this.dapId) {
      this.utils.updateLoader(true)
      let param = {
        url: "getAddedPrograms",
        data: {
          "dapId": this.dapId.dapId,
          "dapSectionId": this.dapId.dapSectionId,
          'userId': this.dapId.userId

        },
        zenLearn: true
      }

      this.http.http.commonService(param).subscribe((response: any) => {
        //console.log(response)
        if (response && response.details) {
          this.dapCoursesList = response.details.responseList;
        }
        this.utils.updateLoader(false);
      },
        error => {
          //console.log(error);
          this.utils.updateLoader(false);
        })

    }

  }

}
