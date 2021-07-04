import { AppVersion } from '@ionic-native/app-version';
import { NavParams } from 'ionic-angular';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../providers/http/http';
import { Component } from '@angular/core';
import { Constants } from '../../constants/constants';
import { ViewController } from 'ionic-angular/navigation/view-controller';


/**
 * Generated class for the DigitalIdCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'digital-id-card',
  templateUrl: 'digital-id-card.html'
})
export class DigitalIdCardComponent
{

  private profileUrl: string = "getUserProfile";
  private userId: number;
  private role: any;
  private profileDetails: any;
  private profiles: any





  constructor(private httpProvider: HttpProvider, private navParams: NavParams, private appversion: AppVersion,
    private utility: CommonUtilities, private viewctrller: ViewController)
  {
    this.userId = this.navParams.get('dataParams').userId;
    this.role = this.navParams.get('dataParams').role;


  }

  ionViewWillEnter()
  {
    this.getProfileDetails();
  }
  getProfileDetails()
  {
    this.utility.updateLoader(true)
    if (this.utility.platformAvailable())
    {

      this.appversion.getVersionNumber().then(response =>
      {
        let profile = {
          url: this.profileUrl,
          data: {
            'userId': this.userId,
            'type': 'digitalId', //contacts, interaction  
            'role': this.role,
            'versionNo': response
            // 'versionNo': Constants.new_version
          },
          associate: true
        }


        // this.isServiceCallOn = true

        this.httpProvider.http.commonService(profile).subscribe((response) =>
        {

          if (response)
          {
            this.utility.updateLoader(false)
            this.profileDetails = response['details'];
            //console.log("profile details", this.profileDetails.userProfiledetails)
            this.profiles = this.profileDetails.userProfiledetails[0]
            //console.log("profiles", this.profiles)









          }

        }, (err) =>
        {
          this.utility.updateLoader(false)
          // this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
        })
      })
    }
    else
    {
      let profile = {
        url: this.profileUrl,
        data: {
          'userId': this.userId,
          'type': 'digitalId', //contacts, interaction  
          'role': this.role,
          'versionNo': Constants.new_version
        },
        associate: true
      }


      // this.isServiceCallOn = true

      this.httpProvider.http.commonService(profile).subscribe((response) =>
      {

        if (response)
        {
          this.utility.updateLoader(false)
          this.profileDetails = response['details'];
          //console.log("profile details", this.profileDetails.userProfiledetails)
          this.profiles = this.profileDetails.userProfiledetails[0]
          //console.log("profiles", this.profiles)
        }

      }, (err) =>
      {
        this.utility.updateLoader(false)
        // this.utility.showAlert('Goal Setting', Constants["Server_Error_Message"])
      })

    }

    // })
  }

  formatDate(obj)
  {
    return this.utility.formatDate(obj);
  }
  closeModal()
  {
    this.viewctrller.dismiss()
  }
}
