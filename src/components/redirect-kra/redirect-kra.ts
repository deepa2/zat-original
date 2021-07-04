import { SearchAssociatesConsultationModalComponent } from '../../components/search-associates-consultation-modal/search-associates-consultation-modal';
import { Component } from '@angular/core';
import { ViewController, NavController, ModalController, PopoverController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the RedirectKraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'redirect-kra',
  templateUrl: 'redirect-kra.html'
})
export class RedirectKraComponent
{

  private text: string;
  // redirectURL: string = "redirectMidTerm";
  private redirectURL: string = "redirectAppraisal";
  private type: any;
  private cmmtData: any;
  private selectOptions: any;
  private userID: any;
  private processType: any;
  private redirectGoalsUrl: string = 'redirectKra'
  private showRedirectForGoals: any
  private associateDetailsList: any = []
  private displaySearchOptions: boolean = false
  private redirectMode: any
  private kraYear: string;


  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private popoverCtrl: PopoverController,
    private modalCtrl: ModalController, private utilitiy: CommonUtilities, private viewCtrl: ViewController)
  {
    this.selectOptions = {
      title: 'Select issue type ',
      // subTitle: 'Select your toppings',
      // mode: 'md'
    };


    this.userID = this.navParams.get('data').userData;
    this.processType = this.navParams.get('data').processType;
    this.kraYear = this.navParams.get('data').year || '2021-2022';
    this.showRedirectForGoals = this.navParams.get('data').redirectGoals || false;
  }

  dismiss()
  {
    this.viewCtrl.dismiss()
  }

  submit(type)
  {
    if ((type == "" || type == undefined) && (this.cmmtData == "" || this.cmmtData == undefined))
    {
      this.utilitiy.presentAlert("Please enter both the fields")

      return
    }
    else if (this.cmmtData == "" || this.cmmtData == undefined)
    {
      this.utilitiy.presentAlert("Please enter comments")
      return
    }
    else if (type == "" || type == undefined)
    {
      this.utilitiy.presentAlert("Please select issue type")
      return
    }
    if (this.processType == 'Mid-Term')
    {
      this.submitForMidterm(type)
    }
    if (this.processType == 'Annual')
    {
      this.submitForMidterm(type)
    }
    else
    {

      this.utilitiy.updateLoader(true)
      let data = {
        // zenDeavorURL: this.url
        url: this.redirectURL,
        zenDeavorURL: true,
        data: {
          "rejectedComments": this.cmmtData,
          "issueType": this.type,
          "userId": this.userID,
          "processType": this.processType
        }
      }
      this.httpProvider.http.commonService(data).subscribe((res) =>
      {
        this.utilitiy.updateLoader(false)
        this.utilitiy.presentAlert(res['status'].statusMessage).then(res =>
        {
          this.viewCtrl.dismiss('SUBMITTED_DATA_SUCCESSFULLY');
        })
      }, (err) =>
      {
        this.utilitiy.updateLoader(false)
      })

    }
  }


  redirectGoalsService(type)
  {

    if ((type == "" || type == undefined) && (this.cmmtData == "" || this.cmmtData == undefined))
    {
      this.utilitiy.presentAlert("Please enter both the fields")

      return
    }
    else if (this.cmmtData == "" || this.cmmtData == undefined)
    {
      this.utilitiy.presentAlert("Please enter comments")
      return
    }
    else if (type == "" || type == undefined)
    {
      this.utilitiy.presentAlert("Please select issue type")
      return
    }
    this.utilitiy.updateLoader(true)
    let data = {
      // zenDeavorURL: this.url
      url: this.redirectGoalsUrl,
      zenDeavorURL: true,
      data: {
        "rejectedComments": this.cmmtData,
        "issueType": type,
        "userId": this.userID,
        "year": this.kraYear





      }
    }
    this.httpProvider.http.commonService(data).subscribe((res) =>
    {
      this.utilitiy.updateLoader(false)
      this.utilitiy.presentAlert(res['status'].statusMessage).then(res =>
      {
        this.viewCtrl.dismiss('SUBMITTED_DATA_SUCCESSFULLY');
      })
    }, (err) =>
    {
      this.utilitiy.updateLoader(false)
    })



  }
  onSelectChange(selectedIssuetype)
  {
    // alert("called")
    if (selectedIssuetype == '2')
    {
      this.displaySearchOptions = true
    }
    else
    {
      this.displaySearchOptions = false
    }

  }

  openAssociateSearchModal()
  {
    let associateSearchModal = this.modalCtrl.create(SearchAssociatesConsultationModalComponent, {
    }, {});
    associateSearchModal.present()
    associateSearchModal.onDidDismiss((response: any) =>
    {
      if (!this.utilitiy.isEmptyOrNullOrUndefined(response))
      {
        this.associateDetailsList = []
        this.associateDetailsList.push(response);
      }
    })
  }

  deleteAssociate(associateData, index)
  {
    if (!this.utilitiy.isEmptyOrNullOrUndefined(associateData))
    {
      this.associateDetailsList.splice(index, 1)
      this.utilitiy.presentToast("Associate deleted successfully")

    }

  }

  submitForMidterm(selectedIssuetype)
  {
    let userIDArray = []
    if (selectedIssuetype == '1')
      this.redirectMode = 'redirect'
    else if (selectedIssuetype == '2')
    {
      this.associateDetailsList.forEach(userItem =>
      {
        userIDArray = userItem.employeeId
      })
      if (this.utilitiy.isEmptyOrNullOrUndefined(userIDArray))
      {
        this.utilitiy.presentAlert("Please select associate to redirect")
        return
      } else
      {
        this.redirectMode = 'manager_request'

      }

    }
    else if (selectedIssuetype == '3')
      this.redirectMode = 'send_to_ar'

    this.utilitiy.updateLoader(true)
    let data = {
      // zenDeavorURL: this.url
      url: this.redirectURL,
      zenDeavorURL: true,
      data: {
        "rejectedComments": this.cmmtData,
        "issueType": "1",
        "userId": this.userID,
        "processType": this.processType,

        "mode": this.redirectMode,
        "newAppraiserId": selectedIssuetype == '2' ? userIDArray : 0



      }
    }
    this.httpProvider.http.commonService(data).subscribe((res) =>
    {
      this.utilitiy.updateLoader(false)
      this.utilitiy.presentAlert(res['status'].statusMessage).then(res =>
      {
        this.viewCtrl.dismiss('SUBMITTED_DATA_SUCCESSFULLY');
      })
    }, (err) =>
    {
      this.utilitiy.updateLoader(false)
    })


  }
}
