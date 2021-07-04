import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KraTrainingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kra-training',
  templateUrl: 'kra-training.html'
})
export class KraTrainingComponent {

  text: string;
  modalParams: any;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.modalParams = this.navParams.get('data').trainingData;
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
