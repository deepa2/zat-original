import { Component, ViewChild } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, Form } from "ionic-angular";
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the PromotionDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'promotion-details',
  templateUrl: 'promotion-details.html'
})
export class PromotionDetailsComponent
{

  private promotionDetails: any = [];
  private userData: any = [];
  private iscomingFromPreview: boolean;
  private isManagerOption: boolean;
  private comingFromReviewer: boolean;
  @ViewChild('promotionForm') form;
  constructor(private viewCtrl: ViewController, private navParams: NavParams, private utilities: CommonUtilities)
  {


    this.promotionDetails = this.navParams.get('promotionDetails');
    this.iscomingFromPreview = this.navParams.get('isComingfromPreview');
    this.isManagerOption = this.navParams.get('isManagerOption');
    this.comingFromReviewer = this.navParams.get('comingFromReviewer');

  }
  closePopup()
  {
    this.viewCtrl.dismiss();
  }

  saveData()
  {
    this.userData = [];
    for (let val in this.form.value)
    {
      this.userData.push({ 'id': val, 'value': this.form.value[val] })
    }
    this.viewCtrl.dismiss(this.userData);
  }

  myForm(data)
  {
    if (this.form.untouched && this.form.status == 'INVALID')
    {
      this.utilities.presentAlert("Please fill all the required fields");
      return;
    }
    if (this.form.valid)
    {
      for (let val in this.form.value)
      {
        this.userData.push({ 'id': val, 'value': this.form.value[val] })
      }
      this.viewCtrl.dismiss(this.userData);
    }
  }

  checkFooterVisility()
  {
    if (this.iscomingFromPreview)
    {
      return false;
    } else if (!this.iscomingFromPreview && this.isManagerOption)
    {
      return true;
    } else if (!this.iscomingFromPreview && !this.isManagerOption && this.comingFromReviewer)
    {
      return true;
    }
  }

}
