import { Component } from '@angular/core';
import { AlertController, Platform, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the ReimbursmentDeclarationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reimbursment-declaration',
  templateUrl: 'reimbursment-declaration.html'
})
export class ReimbursmentDeclarationComponent
{
  private signature: boolean = false;
  private declaration: boolean = false;
  leavePageOnBackbtn: boolean = false;
  constructor(
    private utility: CommonUtilities,
    private http: HttpProvider,
    private viewCtrl: ViewController,
    private platform: Platform,
    private alertCtrl: AlertController
  )
  { }

  dismiss(flag, status)
  {
    this.utility.updateLoader(false);
    this.presentModalAlert(status, '', flag);
  }

  presentModalAlert(message, title = '', hideModal = false)
  {
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: true,
      title: title,
      subTitle: message,
      cssClass: "error-alert-dialog",
      buttons: [
        {
          text: 'OK',
          handler: () =>
          {
            if (hideModal)
            {
              this.leavePageOnBackbtn = true;
              this.viewCtrl.dismiss();
            }
          }
        }
      ]
    });
    alert.onDidDismiss(() =>
    {
      if (hideModal)
      {
        this.leavePageOnBackbtn = true;
        this.viewCtrl.dismiss();
      }
    })
    alert.present();
  }

  // submitDeclration function triggered

  submitDeclration()
  {
    let url = "submitUSLeaveAndReimbursementDeclaration";

    this.utility.updateLoader(true)
    let data = {
      url: url,
      data: {
        type: "reimbursement"
      },
      miscellaneous: true
    }
    this.http.http.commonService(data).subscribe((response: any) =>
    {
      try
      {
        const { statusCode, statusMessage } = response.status;
        if (statusCode == 1)
        {
          this.dismiss(true, statusMessage);
        } else
        {
          this.dismiss(false, statusMessage);
        }
      } catch (e)
      {
        this.utility.updateLoader(false);
      }
    }, error =>
    {
      this.utility.updateLoader(false)
    })

  }

  ionViewCanLeave()
  {

    return this.leavePageOnBackbtn;

  }

}
