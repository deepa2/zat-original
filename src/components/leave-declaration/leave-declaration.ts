import { Component } from '@angular/core';
import { AlertController, Platform, ViewController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the LeaveDeclarationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'leave-declaration',
  templateUrl: 'leave-declaration.html'
})
export class LeaveDeclarationComponent
{
  private signature: boolean = false;
  private declaration: boolean = false;
  private leavePageOnBackbtn: boolean = false;
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
    this.presentModalAlert(status, flag);
  }

  presentModalAlert(message, hideModal = false)
  {
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: true,
      title: '',
      subTitle: message,
      cssClass: "error-alert-dialog",
      buttons: [
        {
          text: 'OK',
          handler: () =>
          {
            console.log('Leave declration popup issue:::')
            console.log('Leave declration popup issue:::', hideModal)
            if (hideModal)
            {
              this.leavePageOnBackbtn = true;
              try
              {
                this.viewCtrl.dismiss();
              } catch (e)
              {

              }
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
        try
        {
          this.viewCtrl.dismiss();
        } catch (e)
        {

        }
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
        type: "leave"
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
