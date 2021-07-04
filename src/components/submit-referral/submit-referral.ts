import { Component } from '@angular/core';
import { NavController,NavParams,ViewController,App, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { ZenrichStarPointsComponent } from '../../components/zenrich-star-points/zenrich-star-points';
/**
 * Generated class for the FaqModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submit-referral',
  templateUrl: 'submit-referral.html'
})
export class SubmitReferralComponent {
  private points;
  private data;
  private msg;
  constructor(private navParams:NavParams, private viewCtrl : ViewController,private modalCtrl:ModalController, private utility : CommonUtilities, private navCtrl: NavController, private app:App) {
    this.data = this.navParams.get('response');
    this.msg = this.data.status.statusMessage;
    this.points = this.data.details.earnedPointsMessage;
    if(this.data.details.earnedPoints==true){
      this.openStarModal()
    }
    
    
    // this.utility.presentAlert("You have earned 20 star points for referraing your friend");
    
  }
 
  dismiss(){
     this.viewCtrl.dismiss('home');
   }
   goToHome(data){
    
    this.viewCtrl.dismiss(data);
    
   }
   goToReferral(data){
    this.viewCtrl.dismiss(data);
    
   }
   openStarModal(){
     setTimeout(() => {
      let modal = this.modalCtrl.create(ZenrichStarPointsComponent, {"points":this.points},{
        cssClass: 'starModal'
      });
      modal.present();
     }, 2000);
    
    
   }

}
