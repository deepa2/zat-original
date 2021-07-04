import { Component } from '@angular/core';
import { NavController,NavParams,ViewController,App } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the FaqModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zenrich-star-points',
  templateUrl: 'zenrich-star-points.html'
})
export class ZenrichStarPointsComponent {
private points;
  constructor(private navParams:NavParams, private viewCtrl : ViewController, private utility : CommonUtilities, private navCtrl: NavController, private app:App) {
    this.points = this.navParams.get('points');
  }

  dismiss(){
     this.viewCtrl.dismiss();
   }

}
