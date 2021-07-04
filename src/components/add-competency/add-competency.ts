import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the FaqModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-competency',
  templateUrl: 'add-competency.html'
})
export class AddCompetancyComponent
{
  private data;
  private expDescValue;
  private skillDescValue;
  private compValidate: boolean;
  @ViewChild('addCompetency') form;
  constructor(private navParams: NavParams, private viewCtrl: ViewController, private navCtrl: NavController, private utility: CommonUtilities)
  {
    this.data = this.navParams.get('compdata');
    if (this.data.compItem == undefined)
    {
      this.data.compItem = {
        "skillId": null,
        "proficiency": null,
        "experience": null,
        "lastUsed": null,
        "interest": null
      }
    }
  }

  dismiss(isBack)
  {
    if (!isBack)
    {
      this.competencyValidate(this.data.compItem)
      if (this.data.compItem.skillId != null && this.form.value.experience != "" && this.form.value.experience != null)
      {
        this.expDescValue = this.data.experienceLov.filter(data =>
        {
          return data.key == this.form.value.experience
        });
        this.data.compItem.expDesc = this.expDescValue[0].value;

        this.skillDescValue = this.data.prolangLov.filter(data =>
        {
          return data.key == this.form.value.skillId
        });
        this.data.compItem.skillDesc = this.skillDescValue[0].value;
        let changeData = {
          "data": this.data.compItem,
          "index": this.data.index
        }
        // alert("hello");

        if (this.compValidate)
        {
          this.viewCtrl.dismiss(changeData);
        }

      }

    }
    else
    {
      let changeData;
      this.viewCtrl.dismiss(changeData = undefined);
    }
  }
  competencyValidate(competencies)
  {
    this.compValidate = false;

    if (competencies.skillId == undefined || competencies.skillId == null || competencies.skillId == "")
    {
      this.utility.presentAlert("Please select Programing Language");
      return;
    }
    else if (competencies.proficiency == undefined || competencies.proficiency == null || competencies.proficiency == "")
    {
      this.utility.presentAlert("Please select Proficiency");
      return;
    }
    else if (competencies.experience == undefined || competencies.experience == null || competencies.experience == "")
    {
      this.utility.presentAlert("Please select Experience");
      return;
    }
    else if (competencies.lastUsed == undefined || competencies.lastUsed == null || competencies.lastUsed == "")
    {
      this.utility.presentAlert("Please select Last Used");
      return;
    }
    else if (competencies.interest == undefined || competencies.interest == null || competencies.interest == "")
    {
      this.utility.presentAlert("Please select Interest");
      return;
    }
    this.compValidate = true;

  }

}
