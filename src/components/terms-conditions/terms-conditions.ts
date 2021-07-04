import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

/**
 * Generated class for the TermsConditionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'terms-conditions',
  templateUrl: 'terms-conditions.html'
})
export class TermsConditionsComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello TermsConditionsComponent Component');
    this.text = 'Hello World';
  }

//   dismiss(){
//   this.viewCtrl.dismiss();
// }

dismiss(){
 // alert("hello");
  this.viewCtrl.dismiss();
}

}
