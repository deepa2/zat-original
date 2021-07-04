import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular'
/**
 * Generated class for the ExitRecoveryDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exit-recovery-details',
  templateUrl: 'exit-recovery-details.html'
})
export class ExitRecoveryDetailsComponent
{

  exitRecoveryData: any;

  constructor(private navParams: NavParams, private viewCtrl: ViewController)
  {
    this.exitRecoveryData = this.navParams.get("data");
  }

  dismiss()
  {
    this.viewCtrl.dismiss();
  }

}
