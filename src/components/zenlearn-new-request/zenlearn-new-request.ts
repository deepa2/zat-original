import { Component } from '@angular/core';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ZenlearnNewRequestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zenlearn-new-request',
  templateUrl: 'zenlearn-new-request.html'
})
export class ZenlearnNewRequestComponent {
  allMentorsList:any;
  mentorDetails: any;
  dapData;
  message;

  constructor(private http: HttpProvider, private utilities: CommonUtilities, private navCtrl: NavController, private navParams: NavParams,
    private viewCtrl:ViewController) {
    this.dapData = this.navParams.get('dapDetails');
    
  }
  ionViewWillEnter() {
    console.log(this.navParams.get('selectedMentor'))
    this.mentorDetails = this.navParams.get('selectedMentor');
    console.log(this.mentorDetails);
  }



  submit() {
    this.utilities.updateLoader(true);
    let data = {
      url: 'newMentorRequest',
      data: {
        mentorId: this.mentorDetails.key,
        dapId: this.dapData.dapId,
        dapSectionEntryId: this.dapData.dapEntryId,
        message: this.message
      },
      zenLearn: true
    }
    this.http.http.commonService(data).subscribe((response)=>{
      this.utilities.updateLoader(false);
      this.utilities.presentAlert("Mentor added successfully!!").then(()=>{
        this.viewCtrl.dismiss();
      })
    },eror=>{
      this.utilities.updateLoader(false);
    })
  }
  openMentor() {
    this.navCtrl.push("MentorsPage");
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
