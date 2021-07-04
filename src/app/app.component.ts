import { Component, ViewChild } from '@angular/core';
import { Platform, ToastController, NavController, IonicApp, App, Events, MenuController, AlertController, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';
import { FCMUtility } from '../providers/pushNotification/fcm';
import { HTTP } from '@ionic-native/http';
import { CommonUtilities } from '../providers/commonUtilities/commonUtilities';
import { Store } from "@ngrx/store";
import * as fromStore from '@app/store';
import { Constants } from '../constants/constants'
import { ChatModelComponent } from '../components/chat-model/chat-model';
import { GetterSetter } from '../providers/getterSetter/getterSetter';
import { AppVersion } from "@ionic-native/app-version";


declare var IRoot;


@Component({
  templateUrl: 'app.html'
})
export class MyApp
{

  @ViewChild('myNav') nav: NavController;
  private rootPage: any;
  private isInternetConnected: boolean = true;
  private empDeatils: any;
  private switchUser: boolean = false;
  private loginDetails: any;

  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private store: Store<fromStore.Login>, private dataService: Data, private getSet: GetterSetter,
    private fcm: FCMUtility,
    private app: App, private ionicApp: IonicApp,
    private http: HTTP,
    private events: Events,
    private toastCtrl: ToastController, private menuCtrl: MenuController, private mdlCtrl: ModalController, private alertCtrl: AlertController,

    private utility: CommonUtilities,
    private appversion: AppVersion)
  {

    platform.ready().then(() =>
    {
      // try
      // {
      //   console.log = function () { };
      // } catch (e)
      // {
      //   // catch error
      // }
      /**
       * SSL Pinning
       */
      // this.http.setSSLCertMode("pinned").then(() =>
      // {
      //   console.log("SSL pinnig enabled");
      //   // this.utility.presentAlert("SSL pinnig enabled");
      // }).catch(() =>
      // {
      //   //this.utility.presentAlert("SSL pinnig failed");
      //   console.log("SSL pinning failed");
      //   ;
      // });

      // Registration of push in Android Phone
      // IRoot.isRooted((isRooted) =>
      // {
      //   console.log('device is' + isRooted);
      //   if (isRooted)
      //   {
      //     this.utility.confirmationMsgForSkills('This app is not supported on rooted devices').then(() =>
      //     {
      //       platform.exitApp();
      //     })
      //   } else
      //   {
      //     splashScreen.hide();
      //     this.rootPage = 'LoginPage';
      //   }
      // })

      var lastTimeBackPress = 0;
      var timePeriodToExit = 2000;

      if (this.utility.platformAvailable())
      {
        this.appversion.getVersionNumber().then(response =>
        {
          this.getSet.setVersionNo(response);
        })
      }

      // back button handleNavController
      platform.registerBackButtonAction(() =>
      {
        //get current overlay view
        let overlayView = this.ionicApp._overlayPortal.getActive();
        let modalPopup = this.ionicApp._modalPortal.getActive();
        //get current active page
        let view = this.app.getActiveNav().getActive();

        //dissmiss overlay if open
        if (overlayView)
        {
          if (view.component.name == "NewHomePage")
          {
            return
          } else
          {
            overlayView.dismiss();
          }

        } else
        {
          if (modalPopup)
          {
            if (modalPopup.data.component.name == 'CovidInformationComponent')
            {
              return;
            }
          }
          if (view.component.name == "NewHomePage")
          {
            // Double check to exit app
            if (new Date().getTime() - lastTimeBackPress < timePeriodToExit)
            {
              platform.exitApp(); //Exit from app
            } else
            {
              let toast = this.toastCtrl.create({
                message: 'Press back again to exit',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              lastTimeBackPress = new Date().getTime();
            }
            // check on back button press, if modal open on active page then close the modal,otherwise go to back page
          } else if (view.component.name == "FaqPage")
          {
            let modal = this.ionicApp._modalPortal.getActive();

            if (modal)
            {
              modal.dismiss();
            } else
            {
              this.app.navPop();
            }
          } else if (view.component.name == "ProfilePage" || view.component.name == "DetailPage" || view.component.name == "AnnouncementPage" || view.component.name == "ObAddDetailsPage" || view.component.name == "ZenDeavorKraPage" || view.component.name == "ChatBot" || view.component.name == "ZendeavorTeamListPage")
          {
            let modal = this.ionicApp._modalPortal.getActive();

            if (modal)
            {
              modal.dismiss();
            } else
            {
              this.app.navPop();
            }
          } else if (view.component.name == "ObDashboardPage")
          {
            if (new Date().getTime() - lastTimeBackPress < timePeriodToExit)
            {
              platform.exitApp(); //Exit from app
            } else
            {
              let toast = this.toastCtrl.create({
                message: 'Press back again to exit',
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
              lastTimeBackPress = new Date().getTime();
            }
          } else
          {
            this.app.navPop();
          }
        }
      });

      //get userdata from home page for hamburger menu
      this.events.subscribe('userDetails', (data) =>
      {
        this.empDeatils = data;
        this.getUserData();
      })

      this.events.subscribe('loginUserType', (data) =>
      {
        this.loginDetails = data;
        this.getSet.setLoginDetails(this.loginDetails);
      })

      //get user login details
      this.dataService.getData('loginDetails').then((loginDetails: any) =>
      {
        if (loginDetails)
        {

          this.dataService.saveData('encryptedToken', loginDetails.details.encryptedToken)
          //check for user joined Zensar or not
          if (loginDetails.details.userDetails.userType == "PRE-ONBOARDING")
          {
            //check for user has not joined Zensar &   password has not changed then redirect to change password page
            if (!(loginDetails.details.userDetails.isPasswordChanged))
            {
              this.rootPage = 'OnBordingChangePasswordPage';
            }
            //check for user has not joined Zensar & the user is login for first time after changing the password. 
            if (loginDetails.details.userDetails.isPasswordChanged && loginDetails.details.userDetails.isFirstTimeLogin)
            {
              this.rootPage = 'ObLandingPage';
            }
            //check for user has not joined Zensar & the user is  not login for first time after changing the password.
            if (loginDetails.details.userDetails.isPasswordChanged && !(loginDetails.details.userDetails.isFirstTimeLogin))
            {
              this.rootPage = 'ObDashboardPage';
            }
            //check for user has joined Zensar & logged in  then redirect to home page
          } else if (loginDetails.details.userDetails.userType == "POST-ONBOARDING")
          {
            this.rootPage = 'NewHomePage';
            // this.rootPage = 'ReportPage'
          }
          //check for user is Security Personnel
          else if (loginDetails.details.userDetails.userType == "Security")
          {
            this.rootPage = 'SecurityPersonnelBuseslistPage';

          }
          //check for user has joined Zensar and didnt logged in then redirect to login page
        } else
        {
          this.rootPage = 'LoginPage';
          //this.getPageName();
        }
        splashScreen.hide();
      })

      this.getPushNotificationToken();
      this.getNotificationCallbacks();
    });
  }

  getPageName()
  {
    if (this.app.getActiveNav().getActive() != undefined)
      if (this.app.getActiveNav().getActive().id == 'LoginPage' || this.app.getActiveNav().getActive().id == 'ChatBot' || this.app.getActiveNav().getActive().id == 'SwitchUserPage' || this.app.getActiveNav().getActive().id == 'undefined')
      {
        return false;
      }
    //return this.app.getActiveNav().getActive()
  }

  //check for local and background notification
  getNotificationCallbacks()
  {
    if (this.utility.platformAvailable())
    {
      this.fcm.onNotification();
      this.fcm.onLocalNotification();
    }
  }

  //checking the notification token has been refreshed or not
  getPushNotificationToken()
  {
    if (this.utility.platformAvailable())
    {
      this.fcm.getTokenRefresh();
      this.fcm.getToken();
    }
  }

  goToPage(pageName)
  {
    this.menuCtrl.close();
    if (pageName == 'AboutPage')
    {
      // this.nav.push('AboutPage', { 'type': 'zentalent_onboarding_about' })
      this.app.getRootNav().push('AboutTazPage', { 'type': 'zenhelp_about' })
    } else if (pageName == 'WhatsNew')
    {
      // this.nav.push('AboutPage', { 'type': 'zentalent_onboarding_about' })
      this.app.getRootNav().push('AboutPage', { 'type': 'zenhelp_whats_new' })
    } else if (pageName == 'LoginPage')
    {
      this.rootPage = 'LoginPage'
    } else if (pageName == 'BackdoorEntryPage')
    {
      this.rootPage = 'BackdoorEntryPage'
    } else if (pageName == 'switchUser')
    {
      this.app.getRootNav().setRoot('SwitchUserPage')
    }
  }

  //opens system mail box
  contact()
  {
    this.menuCtrl.close();
    this.utility.openEmailClient(Constants.contactUs)
  }

  //logout from app
  logout()
  {
    this.menuCtrl.close();
    let alert = this.alertCtrl.create({
      // title: 'Confirmation',
      message: 'Do you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'no',
          handler: () =>
          {
          }
        }, {
          text: 'Yes',
          handler: () =>
          {
            this.dataService.getData('loginDetails').then((result: any) =>
            {
              this.store.dispatch(new fromStore.Logout(result));
            })
            this.dataService.clearData();
            // this.goToPage('LoginPage');
            //this.rootPage = 'LoginPage'
            this.app.getRootNav().setRoot('LoginPage')
          }
        }
      ],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }

  //get switch user Data
  getUserData()
  {
    this.dataService.getData('switchUser').then((response: any) =>
    {
      if (response)
      {
        this.switchUser = response;
      } else
      {
        this.switchUser = false;
      }
    })
  }

  // to go on user profile
  goToProfile()
  {
    this.menuCtrl.close();
    this.app.getRootNav().push('NewProfilePage', {
      'userId': this.empDeatils.employeeId,
      'profileType': 'userProfile'
    });
  }

  // for Zents Testing
  goToBackdoorEntry()
  {
    this.menuCtrl.close();
    this.dataService.getData('loginDetails').then((result: any) =>
    {
      this.store.dispatch(new fromStore.Logout(result));
    })

    this.dataService.clearData();
    this.app.getRootNav().setRoot('BackdoorEntryPage')
  }

  openChatModal()
  {
    let modalCtrl = this.mdlCtrl.create(ChatModelComponent, { "userDetails": this.empDeatils }, {
      cssClass: 'chatModalCSS',
      enableBackdropDismiss: true,
      showBackdrop: true
    })

    modalCtrl.onDidDismiss((data) =>
    {
      if (!this.utility.isEmptyOrNullOrUndefined(data) && !this.utility.isEmptyOrNullOrUndefined(data.moveToChatDetails))
      {
        this.app.getRootNav().push("ChatBotNew", {
          data: data.data
        })
        // this.app.getActiveNav().push('AboutPage', { data: data.data })
      }
    })
    modalCtrl.present();
  }

}
