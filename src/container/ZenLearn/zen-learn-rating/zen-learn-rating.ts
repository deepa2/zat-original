import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the ZenLearnRatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zen-learn-rating',
  templateUrl: 'zen-learn-rating.html',
})
export class ZenLearnRatingPage {
  private selectedStar: any
  private courseData: any
  private ratingData: any=[];
  private comment: string;
  private scheduleOfferingId: any
  private startlimit: any = 0;
  private endlimit: any = 1;
  private fromDashboard: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, private utility: CommonUtilities, private httpProvider: HttpProvider) {
    this.selectedStar = 4
    this.courseData = this.navParams.get("courseData");
    if (this.courseData) {
      this.scheduleOfferingId = this.courseData.scheduleOfferingId
    }
    this.fromDashboard = this.navParams.get("fromDashboard")
  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getrating();

  }

  getrating() {
    // const url: string = "FeedbackPage";
    // let data: any = {}
    // if (this.fromDashboard) {
    //   data.scheduleOfferingId = 0
    // } else {
    //   data.scheduleOfferingId = this.scheduleOfferingId
    // }
    // this.utility.updateLoader(true);
    // this.httpProvider.http
    //   .commonService({ url, data, zenLearn: true })
    //   .subscribe(
    //     (res: any) => {
    //       if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
    //         this.ratingData = res.details.responseList.trainingsList
           
    //         //console.log(this.ratingData)
    //         this.ratingData.forEach(element => {
    //           element.show = true
    //         });
    //         this.utility.updateLoader(false);
    //       }
    //     },
    //     err => {
    //       this.utility.updateLoader(false);
    //       // this.errorMsg = Constants["erroMessageFor No Data"]
    //     }
    //   );
    //console.log(this.courseData)
    this.ratingData.push(this.courseData);


  }
  



  _submitRating(selecetdItem: any) {
    this.startlimit++
    this.endlimit++
    const url: string = "addRating";
    const data: any = {
      "scheduleOfferingId": selecetdItem.scheduleOfferingId,
      "ratingId": this.selectedStar - 1,
      "itemId":this.ratingData[0].itemId
    };
    if (!this.utility.isEmptyOrNullOrUndefined(this.comment))
      data.comment = this.comment
    else
      data.comment = ""
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
            this.utility.updateLoader(false);
            this.comment = ""
            this.selectedStar = 4
            this.utility.presentAlert('Rating submitted successfully').then(()=>{
              this.navCtrl.pop();
            })
          }
        },
        err => {
          this.utility.updateLoader(false);
          // this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );
    }


  _rateStar(selectedStar) {
    this.selectedStar = selectedStar + 1
  }

  popPage(){
    this.navCtrl.pop();
  }
}
