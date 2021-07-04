import { Component } from '@angular/core';
import { NavController, App, ViewController, NavParams, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { Constants } from "@app/constants";
import { GoalListModelPage } from "../goalListModel/goalListModel";
import { SumbitPage } from "../sucessSumbit/sucessSumbit";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'addDigModel-page',
  templateUrl: 'addDigModel.html'
})

/**
 * Dashboard Page contains two Tabs.
 */
export class AddDigModelPage
{

  private goalLst: any;
  private sfData: any;
  private goalData: any
  private radioBtns: any = [];
  private selectedRadio: any;
  private selectedGoal: string = '';
  private title: string;
  private addDigForm: FormGroup;
  private successResponse: string;
  private selectedCatrgy: string = '';
  private selectedId: number = 0;
  private iskeyBoardOpen: boolean = false;
  constructor(private fb: FormBuilder, private navCtrl: NavController, private utilities: CommonUtilities, private navParams: NavParams,
    private viewCtrl: ViewController, public alertCtrl: AlertController, private httpProvider: HttpProvider, private modalCtrl: ModalController, private keyboard: Keyboard)
  {
    this.goalLst = this.navParams.get("goalList");
    this.selectedRadio = this.goalLst[0]
    this.sfData = this.navParams.get("data");
    this.keyboard.onKeyboardShow().subscribe((res: any) =>
    {
      this.iskeyBoardOpen = true;
    })
    this.keyboard.onKeyboardHide().subscribe((res: any) =>
    {
      this.iskeyBoardOpen = false;
    })
  }
  showConfirm()
  {
    if (this.title.trim().length <= 0)
    {
      this.utilities.showAlert('Title Field', 'title cannot be empty')
      return;
    }
    const confirm = this.alertCtrl.create({
      title: 'Submit Activity',
      message: 'Do you want to submit this activity?',
      buttons: [
        {
          text: 'No',
          handler: () =>
          {
          }
        },
        {
          text: 'Yes',
          handler: () =>
          {
            this.createDigData()
          }
        }
      ],
      cssClass: 'addDig-alert'

    });
    confirm.present();
  }


  createDigData()
  {

    const url: string = "addDialog";
    const data: any = {
      dialogTitle: this.title,
      dialogCategoryName: this.selectedRadio,
      goalName: this.selectedGoal,
      sfGoalCategory: this.selectedCatrgy,
      sfGoalId: this.selectedId
    };
    this.utilities.updateLoader(true);

    this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) =>
    {
      if (!this.utilities.isEmptyOrNullOrUndefined(res) && !this.utilities.isEmptyOrNullOrUndefined(res.details))
      {
        this.utilities.updateLoader(false);
        if (res.status.statusCode == 1)
        {
          this.dismiss();
          let responseDialog = {
            successResponse: res.details.responseList
          }

          let submitModal = this.modalCtrl.create(SumbitPage, responseDialog)
          submitModal.present();
        }
      } else
      {
        this.utilities.updateLoader(false);
        this.utilities.showAlert('SF', Constants["erroMessageFor No Data"])
      }
    }, err =>
    {
      this.utilities.updateLoader(false);
    });
  }


  dismiss()
  {
    this.viewCtrl.dismiss();

  }

  _selectedRadioBtn(item)
  {
    this.keyboard.hide();
    this.selectedRadio = item;
  }

  goalList(data)
  {
    if (this.iskeyBoardOpen)
    {
      this.keyboard.hide();
      return;
    }
    let goalModel = this.modalCtrl.create(GoalListModelPage, { data: this.sfData },)
    goalModel.present();

    goalModel.onDidDismiss(data => {
         this.selectedGoal = data.name;
      this.selectedCatrgy = data.category;
      this.selectedId = data.id
    })

  }
  deleteGoal()
  {
    this.selectedGoal = "",
      this.selectedCatrgy = "",
      this.selectedId = 0
  }
}
