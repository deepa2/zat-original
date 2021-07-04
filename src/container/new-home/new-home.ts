import { ChatBotPopupComponent } from './../../components/chat-bot-popup/chat-bot-popup';
import { CoronaSafetyMeasuresAlertComponent } from './../../components/corona-safety-measures-alert/corona-safety-measures-alert';
import { AppUpdateAlertComponent } from './../../components/app-update-alert/app-update-alert';
import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Events, NavParams, Modal, App } from 'ionic-angular';
import { IonicPage, PopoverController, AlertController, Platform, ModalController, Slides, LoadingController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { Data } from '../../providers/data/data';
import { Subscription } from 'rxjs/Subscription';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { AppVersion } from "@ionic-native/app-version";
import { Market } from '@ionic-native/market';
import { Network } from '@ionic-native/network';
import { HttpProvider } from '../../providers/http/http';
import { ChatModelComponent } from '../../components/chat-model/chat-model';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { Constants } from '../../constants/constants';
import { GetterSetter } from '../../providers/getterSetter/getterSetter';
import { CovidInformationComponent } from '../../components/covid-information/covid-information';
import { Download } from '../../providers/download/download';
import { GatePassCheckComponent } from '../../components/gatepass-check/gatepass-check';
import { BrowserTab } from '@ionic-native/browser-tab';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { FinanceDashboardPage } from '../ZenFianance/finance-dashboard/finance-dashboard';
import { SouthAfricaImmigrationComplianceComponent } from '../../components/south-africa-immigration-compliance/south-africa-immigration-compliance';
import { SfDashbordPage } from '../../container/ZenSF/sfDaashbord';
import { LeaveDeclarationComponent } from '../../components/leave-declaration/leave-declaration';
import { ReimbursmentDeclarationComponent } from '../../components/reimbursment-declaration/reimbursment-declaration';


@IonicPage()
@Component({
  selector: 'page-new-home',
  templateUrl: 'new-home.html',
})
export class NewHomePage
{

  @ViewChild(Slides) slides: Slides;

  private userDetails: any = {};
  private isPopupVisble: boolean = false;
  private miscData: any = {};
  private loading$: Observable<any>;
  private unratedQuestion: boolean;
  private forceUpdate: boolean;
  private unratedQuestionMessage: string;
  private _resumeSubscription: any;
  private leaveData: Subscription = new Subscription();
  private homeBanner: Array<any> = [];
  private isDataAvalible: boolean = false;
  private isFingerPrintChecked: boolean = false;
  private isFirstTime: boolean = true;
  private timeEntryData = []
  private _loadingListner: Subscription = new Subscription();
  private isSurveyCompleted: boolean = false;
  private rtoUserDataUrl = "rtoUserData";
  private userData;
  private isRTOsurveySubmitted: boolean = false;
  private isUpdateAvailable: boolean = false
  private isUpdateSkipped: boolean = false
  private whatsNewData: any;
  private latestUpdateVersion: any;
  private showCovidPopup: boolean = false
  private coronaGuidelineData: any;
  private coronaGuidelinesAlertClosed: boolean = false;
  private isEligibleForCoronaSurvey: boolean = false;
  private isSAAgreement: boolean = false;
  private isSAAgreementSubmitted: boolean = false;
  private isZenDeavorOpened: boolean = false;
  private vaccineDashBoardData:any;

  private versionNo: any;
  //url1: string = "getHTMLParagraph";
  private param: any = {
    'type': 'onboarding_welcome'
  }
  // USLeaveDeclaration
  private showUSLeavePopupClosed: boolean = false;
  private showUSLeavePopup: any;

  // Reimbursment Declaration
  private showUSReimbursmentPopupClosed: boolean = false;
  private showUSReimbursmentPopup: boolean;

  private applicationList: Array<any> = [];

  private _miscListener: Subscription = new Subscription();
  //  private _bannerDetailsListener:Subscription=new Subscription();

  constructor(private navCtrl: NavController, private store: Store<fromStore.AppState>, private popoverCtrl: PopoverController, private data: Data, private utility: CommonUtilities,
    private appVersion: AppVersion, private alertCtrl: AlertController, private platform: Platform, private market: Market, private network: Network,
    private httpProvider: HttpProvider, private mdlCtrl: ModalController, private screenShot: Screenshot, private navParam: NavParams,
    private fingerPrint: FingerprintAIO, private androidFingerPrint: AndroidFingerprintAuth, private events: Events, private getSet: GetterSetter,
    private download: Download, private loadCtrl: LoadingController, private app: App, private browserTab: BrowserTab, private iab: InAppBrowser, private appAvailability: AppAvailability, private zone: NgZone, private cdr: ChangeDetectorRef)
  {
    let fromSWitchUser = this.navParam.get('fromSwitchUser')
    if (fromSWitchUser)
    {
      this.isFingerPrintChecked = fromSWitchUser;
    }


    this.platform.resume.subscribe((e) =>
    {
      if (this.forceUpdate && !this.isPopupVisble && this.isUpdateAvailable)
      {
        // this.presentAlert();
        this.openAppUpdateAlert()
      }
      this.getNotificationData()
    })


    this.events.subscribe('hide-loader', (data: any) =>
    {
      this.utility.updateLoader(false)
      //console.log('Hide loader')
    })
  }



  ngOnInit()
  {
    //clear previously stored home data
    this.store.dispatch(new fromStore.ResetHomeData())
  }

  ionViewWillEnter()
  {
    // here we check for the fingerprint auth on ios and android devices
    if (this.utility.platformAvailable())
    {
      // check only once when user open the app
      if (!this.isFingerPrintChecked)
      {
        //check for ios if its available then check
        if (this.platform.is('ios'))
        {
          try
          {
            this.fingerPrint.isAvailable().then((result: any) =>
            {
              //this.utility.presentAlert("success",JSON.stringify(result));
              // if avalible then call the function
              if (result)
              {
                this.showiOSfingerPrint();
              }
            })
              // if not available then catch block will execute
              .catch((error: any) =>
              {
                // this.utility.presentAlert("error catch",JSON.stringify(error));
                //console.log('error', error)
                if (this.getSet.getNotificationData())
                {
                  this.getNotificationData();
                  this.isFingerPrintChecked = true;
                  this.getSet.setValue(this.isFingerPrintChecked);
                  this.setRole();
                } else
                {
                  this.getMiscellaneousData();
                  this.isFingerPrintChecked = true;
                  this.getSet.setValue(this.isFingerPrintChecked);
                  this.setRole();
                }
                this.loading$ = this.store.select<any>(fromStore.getMiscLoading);
              })
          }
          catch (e)
          {
            //this.utility.presentAlert("catch ", JSON.stringify(e));
            this.utility.presentAlert("Error in fingerprint or faceDetection");

          }

        } else
        {
          //check for android  if its available then check
          this.androidFingerPrint.isAvailable().then(response =>
          {
            // if avalible then call the function
            if (response.isAvailable)
            {
              this.showfingerPrint();
            }
            // if avalible then call the function
            else if (!response.isAvailable)
            {

              if (this.getSet.getNotificationData())
              {
                this.getNotificationData()
                this.setRole();
                this.isFingerPrintChecked = true;
                this.getSet.setValue(this.isFingerPrintChecked);
              } else
              {
                this.isFingerPrintChecked = true;
                this.getSet.setValue(this.isFingerPrintChecked);
                this.getMiscellaneousData()
                this.setRole();
              }

              this.loading$ = this.store.select<any>(fromStore.getMiscLoading);
            }
          })// if not available then catch block will execute
            .catch((error: any) =>
            {
              //console.log("error", error)
              if (this.getSet.getNotificationData())
              {
                this.getNotificationData();
                this.isFingerPrintChecked = true;
                this.getSet.setValue(this.isFingerPrintChecked);
              } else
              {
                this.getMiscellaneousData()
                this.setRole();
                this.isFingerPrintChecked = true;
                this.getSet.setValue(this.isFingerPrintChecked);
              }

              this.loading$ = this.store.select<any>(fromStore.getMiscLoading);
            })
        }
        // if fingerprint is already checked then else block will exceute
      } else
      {

        this.getMiscellaneousData()
        this.setRole();
        this.loading$ = this.store.select<any>(fromStore.getMiscLoading);
        this.slides.startAutoplay();

      }
    } //if platform or cordova is not available below function will call
    else
    {

      this.getMiscellaneousData()
      this.setRole();
      this.loading$ = this.store.select<any>(fromStore.getMiscLoading);
      this.slides.startAutoplay();
      ///this.slides.slideTo(0)

    }

  }

  // this function will redirect to specific page based on user's selection
  goTojobsposting()
  {
    this.navCtrl.push("JobPostingPage", {});
  }
  goToMyPage(data)
  {
    if (data.isAvailable)
    {
      if (data.pageName == '')
      {
        if (data.isMyLeave)
        {
          this.getLeaveDetails();
        }
      } else if (data.pageName == 'ProfilePage')
      {
        this.gotToProfile();
      } else if (data.pageName == 'ICSS')
      {
        this.icss();
      } else if (data.pageName == 'SkillPage')
      {
        this.skillsProfile();
      } else if (data.pageName == 'zenwen')
      {
        this.goToZenwenDashboard()
        //this.utility.presentAlert("Coming soon !!")
      } else if (data.pageName == 'ZenLearn')
      {
        this.LearnDashboard()
        //this.utility.presentAlert("Coming soon !!")
      } else if (data.pageName == 'ZenRich')
      {
        this.navCtrl.push("ZenRichLandingPage");
      }
      else if (data.pageName == 'Manager Dashboard')
      {
        this.goTojobsposting()
        //this.utility.presentAlert("Coming soon !!")
      } else if (data.pageName == 'Zenlounge')
      {
        this.navCtrl.push("ZenloungePage", {
          'pageTitle': data.title,
        });

      } else if (data.homePageConfigrationName == 'Corona')
      {
        this.navCtrl.push("CoronaPage", { 'userDetails': this.userDetails });
      } else if (data.homePageConfigrationName == 'GatePass')
      {
        this.getData()

      } else if (data.homePageConfigrationName == 'ZenDeavor')
      {
        this.navCtrl.push("ZenDeavorDashboardPage");
      } else if (data.homePageConfigrationName == 'Approval Dashboard')
      {
        this.navCtrl.push("ApprovalDashboardPage");
      }
      else if (data.homePageConfigrationName == 'ZenTS')
      {
        // //console.log(this.timeEntryData)
        this.navCtrl.push("TimeEntryPage", {
          'pageTitle': data.title,
          'subData': this.timeEntryData
        });

      } else if (data.pageName == 'ChatBot')
      {
        this.navCtrl.push("ChatBotNew");
      }
      else if (data.pageName == 'ChatBotNew')
      {
        // let modalCtrl = this.mdlCtrl.create(ChatBotPopupComponent, { "userDetails": this.miscData.userDetails }, {
        //   cssClass: 'chatbot-popupCSS',
        //   enableBackdropDismiss: true,
        //   showBackdrop: true
        // })
        // modalCtrl.onDidDismiss((data) => {
        //   if (!this.utility.isEmptyOrNullOrUndefined(data) && !this.utility.isEmptyOrNullOrUndefined(data.moveToChatDetails)) {
        //     this.navCtrl.push("ChatBot", {
        //       data: data.data
        //     })
        //   }
        // })
        // modalCtrl.present();
        this.navCtrl.push('ChatBotNew');
      }
      else if (data.pageName == 'RTODashboard')
      {
        this.RtoPage();
      }
      else if (data.pageName == 'ZenVerse')
      {
        this.openApp();
      } else if (data.pageName == 'ZenFinance')
      {
        this.getSet.setUserKey(this.miscData.userKey)
        this.navCtrl.push(FinanceDashboardPage)
      }
      else if (data.pageName == 'Exit')
      {
        //this.navCtrl.push('ExitDashboardPage');
        this.goToExitDetails();
      }
      else if (data.pageName == 'ZenAdmin')
      {
        this.navCtrl.push('ZenadminHomePage');
      }
      // for zenDeavor redirection 
      else
      {
        this.setPage(data);
        this.navCtrl.push(data.pageName, {
          'pageTitle': data.title,
          'unratedQuestion': this.unratedQuestion,
          'unratedMessage': this.unratedQuestionMessage,
        });
      }
    }


  }
  getData()
  {

    this.utility.updateLoader(true)
    let params = {

    }
    let data = {
      url: this.rtoUserDataUrl, data: params, miscellaneous: true
    }
    return new Promise(resolve =>
    {
      this.httpProvider.http.commonService(data).subscribe((res: any) =>
      {

        if (res)
        {
          this.userData = res.details;
          ////console.log(this.userData);
          this.utility.updateLoader(false);
          if (this.userData.isSignAgreement == true && !this.userData.isUKLocation && !this.userData.isUSLocation)
          {
            this.navCtrl.push("GatePassPage", { 'userDetails': this.userData });
          } else if (this.userData.isSignAgreement == true && this.userData.isUKLocation)
          {
            this.goTogatepassCheck()
          } else if (this.userData.isSignAgreement == true && this.userData.isUSLocation)
          {
            this.goTogatepassCheck()
          }
          else
          {
            this.goTogatepassCheck()
          }
          // resolve();

        }
      },
        error =>
        {
          this.utility.updateLoader(false);
        })
    })
  }

  goTogatepassCheck()
  {
    this.navCtrl.push("ReturnToOfficePage", { 'userid': this.userData.userId, 'userDetails': this.userData })
  }

  //convert name to upper case
  uppercase(name)
  {
    return this.utility.uppercase(name);
  }



  // this function sets your default role for throughout the application.
  setRole()
  {
    this.zone.run(() =>
    {
      this.data.getData('role').then((data: any) =>
      {
        if (data)
        {
          this.store.dispatch(new fromStore.SetRole(data));
        } else
        {
          this.store.dispatch(new fromStore.SetRole('associates'));
        }
      });
    })
    this.cdr.detectChanges();
  }




  // here we call a service and get all the data and showing that data as a home screen
  getMiscellaneousData()
  {
    ////console.log('getMiscellaneousData')
    if (this.utility.platformAvailable())
    {
      this.utility.updateLoader(true)
      this.appVersion.getVersionNumber().then(response =>
      {

        let param = {
          "versionNo": response
        }
        return new Promise(resolve =>
        {
          this.store.dispatch(new fromStore.GetMiscDataAction('getAllTimeUseData', param))
          try
          {
            this._miscListener = this.store.select<any>(fromStore.getHomeState).subscribe(response =>
            {
              // if (response) {
              if (response.data)
              {

                this.applicationList = [];
                this.miscData = response.data
                this.userDetails = response.data.userDetails
                this.vaccineDashBoardData=response.data.vaccineDashBoardData
                this.events.publish('userDetails', this.userDetails)
                if (response.data.homeBannerList)
                {
                  let homebanners = response.data.homeBannerList;
                  homebanners.filter(value =>
                  {
                    if (value.homePageName == 'InternalJobPostingPage')
                    {
                      value.bannerImage = 'assets/menu_icons/ijp.png';
                    } else if (value.homePageName == 'Corona')
                    {
                      value.bannerImage = 'assets/menu_icons/COVID.jpg';
                    } else if (value.homePageName == 'ZenDeavorDashboardPage')
                    {
                      value.bannerImage = 'assets/menu_icons/ZendeavorBanner.jpg';
                    } else if (value.homePageName == 'ProfilePage')
                    {
                      value.bannerImage = 'assets/menu_icons/profile.png';
                    } else if (value.homePageName == 'ZencontactsPage')
                    {
                      value.bannerImage = 'assets/imgs/TAZ-ERT.jpg';
                    } else if (value.homePageName == 'ZenRich')
                    {
                      value.bannerImage = 'assets/imgs/referBanner.JPG';
                    } else if (value.homePageName == 'SkillPage')
                    {
                      value.bannerImage = 'assets/imgs/skillBanner.png';
                    }
                    else if (value.homePageName == 'Zencrypt')
                    {
                      value.bannerImage = 'assets/menu_icons/ZenCryptBanner-new.png';
                    } else if (value.homePageName == 'PlasmaDonation')
                    {
                      value.bannerImage = 'assets/menu_icons/PlasmaDonation.png';
                    }
                  })
                  this.zone.run((res) =>
                  {
                    this.homeBanner = homebanners;
                  });
                  this.cdr.detectChanges();
                }
                this.unratedQuestion = response.data.isUnratedQuestionAvailable
                this.unratedQuestionMessage = response.data.unratedQuestionMsg
                this.zone.run(() =>
                {
                  this.data.saveData('miscData', response.data);
                })
                this.cdr.detectChanges();
                this.utility.updateLoader(false)
                if (response.data.versionDetails.isForceUpdate)
                {
                  this.forceUpdate = response.data.versionDetails.isForceUpdate
                }
                // new key for skip update
                if (response.data.versionDetails.isUpdateAvailable)
                {
                  this.isUpdateAvailable = response.data.versionDetails.isUpdateAvailable
                }
                if (response.data.versionDetails.latestwhatsNew)
                {
                  this.whatsNewData = response.data.versionDetails.latestwhatsNew
                }
                if (response.data.versionDetails.latestVersionNo)
                {
                  this.latestUpdateVersion = response.data.versionDetails.latestVersionNo
                }

                if (response.data.isShowCovidPopUp)
                {
                  this.showCovidPopup = response.data.isShowCovidPopUp
                }
                if (response.data.covidPopupHtml)
                {
                  this.coronaGuidelineData = response.data.covidPopupHtml
                }
                if (response.data.isSAAgreement)
                {
                  this.isSAAgreement = response.data.isSAAgreement
                }
                this.applicationList = response.data.applicationList

                if (response.data.zenTSList)
                {
                  this.timeEntryData = response.data.zenTSList;
                }
                if (response.data.isEligibleForCoronaSurvey)
                {
                  this.isEligibleForCoronaSurvey = response.data.isEligibleForCoronaSurvey
                }
                if (!this.isDataAvalible)
                {
                  this.isDataAvalible = true;
                }

                // Leave Declration
                if (response.data.isUsLeavePopup)
                {
                  this.showUSLeavePopup = response.data.isUsLeavePopup;
                }

                // Reimbursment Declration
                if (response.data.isUSReimbursementPopup)
                {
                  this.showUSReimbursmentPopup = response.data.isUSReimbursementPopup;
                }



                if (this.forceUpdate && this.isUpdateAvailable)
                {
                  // this.isFirstTime = false;
                  // this.presentAlert();
                  this.openAppUpdateAlert()
                  return;
                }
                if (this.isFirstTime)
                {
                  // if (this.forceUpdate && this.isUpdateAvailable) {
                  //   this.isFirstTime = false;
                  //   // this.presentAlert();
                  //   this.openAppUpdateAlert()
                  //   return;
                  // }
                  if (!this.forceUpdate && this.isUpdateAvailable && !this.isUpdateSkipped)
                  {
                    this.isFirstTime = false;
                    // this.presentAlert();
                    this.openAppUpdateAlert()
                    return;
                  }

                  if (this.showCovidPopup && !this.coronaGuidelinesAlertClosed)
                  {
                    this.openCoronaGuidelinesAlert()
                    return;
                  }
                  // US leave Popup
                  if (this.showUSLeavePopup && !this.showUSLeavePopupClosed)
                  {
                    this.openLeaveDeclrationModal();
                    return;
                  }

                  // US Reimbursment
                  if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
                  {
                    this.openReimbursmentDeclrationModal();
                    return;
                  }
                }
                // show covid popup
                if (!this.isSurveyCompleted)
                {
                  if (!this.forceUpdate && response.data.isEligibleForCoronaSurvey)
                  {
                    this.presentInformation();
                    return;
                  }
                }
                if (!this.isZenDeavorOpened)
                {
                  if (this.miscData.isPopupVisible)
                  {
                    this.isZenDeavorOpened = true;
                    this.presentZenDeavorPopup(this.userDetails);
                    return;
                  }
                }



                if (this.isSAAgreement && !this.isSAAgreementSubmitted)
                {
                  this.openSAComplianceAlert();
                  return;
                }


                //show RTO popup
                if (!this.isRTOsurveySubmitted)
                {
                  this.checkRTOData();
                  return;
                }
                // resolve()
              }
            }, err =>
            {
              this.utility.updateLoader(false)
              ////console.log('Subscriber error block : ' + err)
            })
          } catch (error)
          {
            ////console.log('try catch error')
            this.utility.updateLoader(false)
          }
        })
      })
    } else
    {
      let param = {
        "versionNo": Constants.new_version
      }
      return new Promise(resolve =>
      {
        this.store.dispatch(new fromStore.GetMiscDataAction('getAllTimeUseData', param));
        this._miscListener = this.store.select<any>(fromStore.getHomeState).subscribe(response =>
        {
          // if (response) {
          if (response.data)
          {
            this.applicationList = [];
            this.miscData = response.data
            this.userDetails = response.data.userDetails
            this.vaccineDashBoardData=response.data.vaccineDashBoardData
            this.events.publish('userDetails', this.userDetails)
            // if (response.data.homeBannerList) {
            //   this.homeBanner = response.data.homeBannerList;
            // }
            // this.homeBanner = ['assets/menu_icons/ZendeavorBanner.jpg', 'assets/menu_icons/COVID.jpg', 'assets/menu_icons/profile.png', 'assets/menu_icons/ijp.png']
            // this.mostUsedOffering = response.data.mostUsedOfferingList

            if (response.data.homeBannerList)
            {
              let homebanners = response.data.homeBannerList;
              homebanners.filter(value =>
              {
                if (value.homePageName == 'InternalJobPostingPage')
                {
                  value.bannerImage = 'assets/menu_icons/ijp.png';
                } else if (value.homePageName == 'Corona')
                {
                  value.bannerImage = 'assets/menu_icons/COVID.jpg';
                } else if (value.homePageName == 'ZenDeavorDashboardPage')
                {
                  value.bannerImage = 'assets/menu_icons/ZendeavorBanner.jpg';
                } else if (value.homePageName == 'ProfilePage')
                {
                  value.bannerImage = 'assets/menu_icons/profile.png';
                } else if (value.homePageName == 'ZencontactsPage')
                {
                  value.bannerImage = 'assets/imgs/TAZ-ERT.jpg';
                } else if (value.homePageName == 'ZenRich')
                {
                  value.bannerImage = 'assets/imgs/referBanner.JPG';
                } else if (value.homePageName == 'SkillPage')
                {
                  value.bannerImage = 'assets/imgs/skillBanner.png';
                }
                else if (value.homePageName == 'Zencrypt')
                {
                  value.bannerImage = 'assets/menu_icons/ZenCryptBanner-new.png';
                } else if (value.homePageName == 'PlasmaDonation')
                {
                  value.bannerImage = 'assets/menu_icons/PlasmaDonation.png';
                }
              })
              this.zone.run((res) =>
              {
                this.homeBanner = homebanners;
              })
              this.cdr.detectChanges();
              ////console.log(this.homeBanner);
            }

            this.unratedQuestion = response.data.isUnratedQuestionAvailable
            this.unratedQuestionMessage = response.data.unratedQuestionMsg
            this.zone.run(() =>
            {
              this.data.saveData('miscData', response.data);
            })
            this.cdr.detectChanges();
            this.forceUpdate = response.data.versionDetails.isForceUpdate
            this.applicationList = response.data.applicationList;

            // new key for skip update
            this.isUpdateAvailable = response.data.versionDetails.isUpdateAvailable
            if (response.data.versionDetails.latestwhatsNew)
            {
              this.whatsNewData = response.data.versionDetails.latestwhatsNew
            }
            if (response.data.versionDetails.latestVersionNo)
            {
              this.latestUpdateVersion = response.data.versionDetails.latestVersionNo
            }
            if (response.data.isShowCovidPopUp)
            {
              this.showCovidPopup = response.data.isShowCovidPopUp
            }

            // Show US leave Popup
            if (response.data.isUsLeavePopup)
            {
              this.showUSLeavePopup = response.data.isUsLeavePopup;
            }
            if (response.data.isUSReimbursementPopup)
            {
              this.showUSReimbursmentPopup = response.data.isUSReimbursementPopup;
            }

            if (response.data.covidPopupHtml)
            {
              this.coronaGuidelineData = response.data.covidPopupHtml
            }
            if (response.data.isEligibleForCoronaSurvey)
            {
              this.isEligibleForCoronaSurvey = response.data.isEligibleForCoronaSurvey
            }
            if (response.data.isSAAgreement)
            {
              this.isSAAgreement = response.data.isSAAgreement
            }

            // let applist = response.data.applicationList
            this.utility.updateLoader(false)

            if (response.data.zenTSList)
            {
              this.timeEntryData = response.data.zenTSList;
            }
            // if (!this.isDataAvalible) {
            //   this.isDataAvalible = true;
            // }



            if (this.forceUpdate && this.isUpdateAvailable)
            {
              // this.presentAlert();
              this.openAppUpdateAlert()
              return;
            }

            if (this.isUpdateAvailable && !this.isUpdateSkipped && !this.forceUpdate)
            {
              // this.presentAlert();
              this.openAppUpdateAlert()
              return;
            }



            if (this.showCovidPopup && !this.coronaGuidelinesAlertClosed)
            {
              // this.presentAlert();
              this.openCoronaGuidelinesAlert()
              return;
            }

            // Show US leave popup
            if (this.showUSLeavePopup && !this.showUSLeavePopupClosed)
            {
              // this.presentAlert();
              this.openLeaveDeclrationModal();
              return;
            }

            // Show US leave popup
            if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
            {
              // this.presentAlert();
              this.openReimbursmentDeclrationModal();
              return;
            }

            if (!this.isSurveyCompleted)
            {
              if (!this.forceUpdate && response.data.isEligibleForCoronaSurvey)
              {
                this.presentInformation();
                return;
              }
            }

            if (!this.isZenDeavorOpened)
            {
              if (this.miscData.isPopupVisible)
              {
                this.isZenDeavorOpened = true;
                this.presentZenDeavorPopup(this.userDetails);
                return;
              }
            }

            if (this.isSAAgreement && !this.isSAAgreementSubmitted)
            {
              this.openSAComplianceAlert();
              return;
            }

            if (!this.isRTOsurveySubmitted)
            {
              this.checkRTOData();
              return;
            }



            // resolve()
          }
          // }
        }, err =>
        {
          this.utility.updateLoader(false)
        })
      })
    }
  }


  // on leaving the page, all the observable will be unsubscribed here
  ionViewWillLeave()
  {
    // this.utility.updateLoader(false);
    this._miscListener.unsubscribe();
    this.leaveData.unsubscribe();
    // this._bannerDetailsListener.unsubscribe();
  }

  //show the app update popup, if app update is available
  presentAlert()
  {
    this.isPopupVisble = true
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: false,
      title: 'Version Update',
      subTitle: 'App update available',
      buttons: [{
        text: 'Update now',
        handler: () =>
        {
          this.isPopupVisble = false;
          if (this.platform.is('ios'))
          {
            this.utility.openWithSystemBrowser("itms-services://?action=download-manifest&url=https://zenconverse.zensar.com/zenhelpupload/Appstore/Talent@Zensar/ipa/Talent@Zensar.plist");
          } else
          {
            this.download.downloadDocument("https://zenconverse.zensar.com/zenhelpupload/Appstore//Talent@Zensar/apk/TAZ.apk", true)
          }

        }
      }
      ]
    });
    alert.present();
  }

  ionViewWillUnload()
  {
    if (this._resumeSubscription)
      this._resumeSubscription.unsubscribe();
    this.leaveData.unsubscribe();
  }

  setPage(data)
  {
    this.store.dispatch(new fromStore.SetCurrentModule(data.homePageConfigrationName))
  }


  //
  getLeaveDetails()
  {
    let param = {
      "source": "leave"
    }

    this.store.dispatch(new fromStore.MyLeaveAction('myLeaveSSO', param));
    // this.loading$ = this.store.select<any>(fromStore.getMyLeaveLoading);
    return new Promise(resolve =>
    {
      this.utility.imageLoader(true);
      this.leaveData = this.store.select<any>(fromStore.getMyLeaveData).subscribe(response =>
      {
        if (response)
        {
          if (response.details)
          {
            this.utility.imageLoader(false)
            if (response.details.ResponseList.isEligible)
            {
              let url = response.details.ResponseList.leaveUrl;
              this.utility.openWithSystemBrowser(url);
            } else
            {
              this.utility.presentAlert(response.details.ResponseList.eligibleMessage)
            }

            this.store.dispatch(new fromStore.MyLeaveReset())
            this.leaveData.unsubscribe();
          } else
          {
            this.utility.imageLoader(false)
          }
        } else
        {
          this.utility.imageLoader(false)
        }

        // resolve();
      }, err =>
      {
        this.utility.imageLoader(false);
      })

    })
  }



  //TS navigations

  goToAprovalDashboard()
  {
    this.navCtrl.push('ApprovalDashboardPage', {
    });
  }

  goToMyAttendance()
  {
    this.navCtrl.push('MyAttendanceTimesheetPage', {
    });

  }


  // Directly go to skills tab of userprofile page 
  skillsProfile()
  {
    this.navCtrl.push('NewProfilePage', {
      'userId': this.userDetails.employeeId,
      'profileType': 'userProfile',
      'formSkills': true
    });
  }

  // Go to profile page with userid & profile type
  gotToProfile()
  {
    this.navCtrl.push('NewProfilePage', {
      'userId': this.userDetails.employeeId,
      'profileType': 'userProfile'
    });
  }

  //open chat modal 
  goToChatBot()
  {
    this.openChatModal();
  }
  // chat modal with some suggesstions
  openChatModal()
  {
    let modalCtrl = this.mdlCtrl.create(ChatModelComponent, { "userDetails": this.miscData.userDetails }, {
      cssClass: 'chatModalCSS',
      enableBackdropDismiss: true,
      showBackdrop: true
    })
    modalCtrl.onDidDismiss((data) =>
    {
      if (!this.utility.isEmptyOrNullOrUndefined(data) && !this.utility.isEmptyOrNullOrUndefined(data.moveToChatDetails))
      {
        this.navCtrl.push("ChatBotNew", {
          data: data.data
        })
      }
    })
    modalCtrl.present();
  }

  //This function shows fingerprint auth dialog 
  showfingerPrint()
  {
    this.androidFingerPrint.encrypt({ clientId: Constants.appName }).then(response =>
    {
      // //console.log(response)
      if (response.withBackup)
      {
        if (this.getSet.getNotificationData())
        {
          this.getNotificationData()
          this.setRole();
          this.isFingerPrintChecked = true;
          this.getSet.setValue(this.isFingerPrintChecked);
        } else
        {
          this.getMiscellaneousData();
          this.setRole();
          this.isFingerPrintChecked = true;
          this.getSet.setValue(this.isFingerPrintChecked);
        }
        this.loading$ = this.store.select<any>(fromStore.getMiscLoading);

      } else if (response.withFingerprint)
      {

        if (this.getSet.getNotificationData())
        {
          this.getNotificationData()
          this.setRole();
          this.isFingerPrintChecked = true;
          this.getSet.setValue(this.isFingerPrintChecked);
        } else
        {
          this.getMiscellaneousData();
          this.setRole();
          this.isFingerPrintChecked = true;
          this.getSet.setValue(this.isFingerPrintChecked);
        }
        this.loading$ = this.store.select<any>(fromStore.getMiscLoading);

      }
    })
      .catch(error =>
      {
        // //console.log(error)
        this.showfingerPrint();
      })
  }
  showiOSfingerPrint()
  {
    this.fingerPrint.show({
      clientId: Constants.appName,
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
      .then((result: any) =>
      {
        //this.utility.presentAlert(JSON.stringify(result))
        ////console.log("success", result)
        if (result == 'Success')
        {
          if (this.getSet.getNotificationData())
          {
            this.getNotificationData();
            this.setRole();
            this.isFingerPrintChecked = true;
            this.getSet.setValue(this.isFingerPrintChecked);
          } else
          {
            this.getMiscellaneousData()
            this.setRole();
            this.isFingerPrintChecked = true;
            this.getSet.setValue(this.isFingerPrintChecked);
          }
          this.loading$ = this.store.select<any>(fromStore.getMiscLoading);
        }
      })
      .catch((error: any) =>
      {
        // this.utility.presentAlert(JSON.stringify(error))
        //console.log('error', error)
        if (error.code == -108)
        {
          this.showiOSfingerPrint();
        }

      });
  }


  // zenlearn

  LearnDashboard()
  {
    this.getSet.setUserData(this.userDetails);
    this.navCtrl.push('ZenLearnDashboardPage', { 'userId': this.userDetails.employeeId, "userData": this.userDetails })
  }

  goToBanners(data)
  {

    if (data.homePageName == 'Corona')
    {
      this.navCtrl.push('ChatBotNew', {
        isComingFromBanner: true
      })
    } else if (data.homePageName == "InternalJobPostingPage")
    {
      this.navCtrl.push('InternalJobPostingPage', {
        'pageTitle': 'Job Openings',
      })
    } else if (data.homePageName == "ZenDeavorDashboardPage")
    {
      this.navCtrl.push('ZenDeavorDashboardPage')
    } else if (data.homePageName == 'ProfilePage')
    {
      this.gotToProfile();
    } else if (data.homePageName == 'ZencontactsPage')
    {
      this.navCtrl.push('NewProfilePage', {
        'userId': parseInt(data.userId),
        'profileType': 'zencontacts'
      });
    } else if (data.homePageName == "ZenRich")
    {
      this.navCtrl.push('ZenRichLandingPage', {
        'pageTitle': 'Job Openings'
      })
    }
    else if (data.homePageName == "SkillPage")
    {
      this.navCtrl.push('NewProfilePage', {
        'userId': this.userDetails.employeeId,
        'profileType': 'userProfile',
        'formSkills': true
      });
    }
    else if (data.homePageName == "Zencrypt")
    {
      if (data.isWebsite)
      {
        this.utility.openWithSystemBrowser(data.websiteUrl)
      }
    }
    else if (data.homePageName == "PlasmaDonation")
    {
      if (data.isWebsite)
      {
        this.utility.openWithSystemBrowser(data.websiteUrl)
      }
    }
    // open covid 19 component
    else if (data.bannerName == "VaccinationUpdate")
    {
     this.navCtrl.push("goToCovidServyPage()")
 
    }
  
  }
  presentInformation()
  {
    //this.navCtrl.push('CovidInformationPage');
    const modal = this.mdlCtrl.create(CovidInformationComponent, { "userDetails": this.miscData.userDetails }, {
      cssClass: 'infoModal'
    })
    modal.present();
    modal.onDidDismiss(() =>
    {
      this.isSurveyCompleted = true;
      // added additional condition for SA alert
      if (!this.isZenDeavorOpened)
      {
        if (this.miscData.isPopupVisible)
        {
          this.isZenDeavorOpened = true;
          this.presentZenDeavorPopup(this.userDetails);
          return;
        }
      }
      if (this.isSAAgreement && !this.isSAAgreementSubmitted)
      {
        this.openSAComplianceAlert();
        return;
      }
      else
      {
        // US leave Popup
        if (this.showUSLeavePopup && !this.showUSLeavePopupClosed)
        {
          this.openLeaveDeclrationModal();
          return;
        }

        // US Reimbursment
        if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
        {
          this.openReimbursmentDeclrationModal();
          return;
        }

        this.checkRTOData();
      }
    })

  }
  icss()
  {

    this.utility.updateLoader(true)
    let param = {
      url: 'myLeaveSSO',
      data: {
        source: 'icss'
      },
      miscellaneous: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) =>
    {
      //console.log(response)
      this.utility.updateLoader(false)
      if (response && response.details)
      {
        if (response.details.ResponseList.isEligible)
        {
          let url = response.details.ResponseList.leaveUrl;
          this.utility.openWithSystemBrowser(url);
        } else
        {
          this.utility.presentAlert(response.details.ResponseList.eligibleMessage)
        }
      }
    }, error =>
    {
      // console.log(error);
      this.utility.updateLoader(false)
    });
  }

  //ZenWEN 
  goToZenwenDashboard()
  {
    this.zone.run(() =>
    {
      this.data.getData('zenwenLoginDetails').then((res) =>
      {
        // console.log(res);
        if (res)
        {
          this.navCtrl.push('ZenwenDashboardPage');
        } else
        {
          this.utility.presentAlert('Unauthorised Access').then(() =>
          {
            this.data.getData('loginDetails').then((result: any) =>
            {
              this.store.dispatch(new fromStore.Logout(result));
            })
            this.data.clearData();
            this.app.getRootNav().setRoot('LoginPage')
          })
        }
      })
    })
    this.cdr.detectChanges();
  }

  getNotificationData()
  {
    let response = this.getSet.getNotificationData();
    //console.log(response);
    //console.log("response of new home");
    if (response)
    {
      this.getSet.setNotificationData(null);
      // if data available then set the role and redirect to spefic page
      if (response.role)
      {
        this.zone.run(() =>
        {
          this.data.saveData('role', response.role)
          this.store.dispatch(new fromStore.SetRole(response.role));
        })
        this.cdr.detectChanges();
      }

      if (response.type == "userProfile")
      {
        if (response.forSkill || response.forSkill == null)
        {
          if (response.forSkill == "true")
          {
            response.forSkill = true
          }
          else if (response.forSkill == "false")
          {
            response.forSkill = false
          }
          this.navCtrl.push('NewProfilePage', {
            'userId': response.userId,
            'profileType': 'userProfile',
            'formSkills': response.forSkill
          });
        }
        else
        {
          this.gotToProfile();
        }

      } else if (response.type == "question")
      {
        //this.utility.goToPageDetail('DetailPage', response.id, response);
        if (response.role == 'associates')
        {
          this.navCtrl.push('DetailPage', {
            'id': response.id
          })
        } else
        {
          this.navCtrl.push('QuestionsPage')
        }

      } else if (response.type == "Announcement")
      {
        this.utility.goToPageDetail('AnnouncementPage', response.id, response)
      } else if (response.type == 'Timesheet')
      {
        this.navCtrl.push("TimeEntryPage", {
          'isComingfromNotification': {
            'pageTitle': 'Timesheet Entry',
            'notificationData': response,
            'subData': null
          }
        });
      } else if (response.type == 'Approval')
      {
        this.navCtrl.push("ApprovalDashboardPage");
      } else if (response.type == 'TeamCompliance')
      {
        this.getMiscellaneousData();
      } else if (response.type == 'Zenlearn')
      {
        this.navCtrl.push("DapDetailPage", { 'dapItem': response.id, 'role': response.dapRole, 'userId': response.userId, 'status': response.status, 'isComingFromNotification': true })
      } else if (response.type == 'ZenlearnTeamList')
      {
        this.navCtrl.push("TeamListPage", { 'role': response.dapRole })
      } else if (response.type == 'ZenlearnOffering')
      {
        this.navCtrl.push("ZenLearnDashboardPage", { "userData": this.userDetails })
      } else if (response.type == 'ZenRich')
      {
        if (response.pageName == "ZenrichPage")
        {
          this.navCtrl.push(response.pageName, {
            'getData': {
              'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
              'key': response.pageTitle,
              'parameter': response.status,
              'type': null,
              'value': response.pageTitle
            }
          });
        }
        else if (response.pageName == "ZenrichRefDetailPage")
        {
          this.navCtrl.push(response.pageName, {
            'referralMappingId': response.id, 'srfNo': ""
          })
        }
        else if (response.pageName == "ZenRichLandingPage")
        {
          if (response.status == "Draft")
          {
            this.navCtrl.push(response.pageName, { "fromNotification": true })
          }
          else
          {
            this.navCtrl.push(response.pageName)
          }
        }

      }

    }
  }

  checkRTOData()
  {
    if (this.miscData.isRTO)
    {
      this.utility.updateLoader(true)
      let params = {

      }
      let data = {
        url: this.rtoUserDataUrl, data: params, miscellaneous: true
      }
      return new Promise(resolve =>
      {
        this.httpProvider.http.commonService(data).subscribe((res: any) =>
        {

          if (res)
          {
            this.isRTOsurveySubmitted = true;
            this.userData = res.details;
            //console.log(this.userData);
            this.utility.updateLoader(false);
            if (this.userData.isSignAgreement == true && !this.userData.isUKLocation && !this.userData.isUSLocation)
            {
              this.navCtrl.push("GatePassPage", { 'userDetails': this.userData });
            } else if (this.userData.isSignAgreement == true && this.userData.isUKLocation)
            {
              this.goTogatepassCheck()
            } else if (this.userData.isSignAgreement == true && this.userData.isUSLocation)
            {
              this.goTogatepassCheck()
            } else
            {
              this.navCtrl.push("ReturnToOfficePage", { 'userid': this.userData.userId, 'userDetails': this.userData })
            }
            // resolve();

          }
        },
          error =>
          {
            this.utility.updateLoader(false);
          })
      })
    }

  }

  RtoPage()
  {
    this.navCtrl.push('RtoHomePage')
  }

  // Open External app
  openApp()
  {
    let app;
    if (this.platform.is('ios'))
    {
      app = 'zenverse://';;
      //app= 'fb://'
    } else
    {
      app = 'com.zensar.zenaskapp';
    }
    this.appAvailability.check(app).then(
      () =>
      {
        if (this.platform.is('ios'))
        {
          this.iab.create(app, '_system')
        } else
        {
          this.iab.create('android-app://' + app, '_system')
        }

      }
    ).catch((error) =>
    {
      if (this.platform.is('ios'))
      {
        this.market.open('id1083912884');
      } else
      {
        this.market.open('com.zensar.zenaskapp')
      }
    })
  }

  // show the app update alert, if app update is available
  openAppUpdateAlert()
  {
    this.isPopupVisble = true

    let modalCtrl = this.mdlCtrl.create(AppUpdateAlertComponent,
      { 'showSkipbtn': !this.forceUpdate, 'whatsNewData': this.whatsNewData, 'updateVersion': this.latestUpdateVersion }, {
      cssClass: 'updateAppCSS',
      enableBackdropDismiss: false,
      showBackdrop: true,

    })
    modalCtrl.onDidDismiss((data) =>
    {
      //console.log("on dismiss response", data)
      if (!this.utility.isEmptyOrNullOrUndefined(data))
      {
        // this.navCtrl.push("ChatBot", {
        //   data: data.data
        // })
        if (data == 'update')
        {
          this.isPopupVisble = false;
          this.forceUpdate = false
          this.submitDeviceTypeDetails()
          if (this.platform.is('ios'))
          {
            this.utility.openWithSystemBrowser("itms-services://?action=download-manifest&url=https://zenconverse.zensar.com/zenhelpupload/Appstore/Talent@Zensar/ipa/Talent@Zensar.plist");
          } else
          {
            this.download.downloadDocument("https://zenconverse.zensar.com/zenhelpupload/Appstore//Talent@Zensar/apk/TAZ.apk", true)
          }
        }
        else if (data == 'skip')
        {
          this.isUpdateSkipped = true
          this.forceUpdate = false
          this.isPopupVisble = false;
          if (this.isUpdateSkipped && this.showCovidPopup)
          {
            this.openCoronaGuidelinesAlert()
          }
          if (!this.isSurveyCompleted)
          {
            if (!this.forceUpdate && this.isEligibleForCoronaSurvey)
            {
              this.presentInformation();
              return;
            }
          }
          if (this.isSAAgreement && !this.isSAAgreementSubmitted)
          {
            this.openSAComplianceAlert();
            return;
          }

          // US leave Popup
          if (this.showUSLeavePopup && !this.showUSLeavePopupClosed)
          {
            this.openLeaveDeclrationModal();
            return;
          }

          // US Reimbursment
          if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
          {
            this.openReimbursmentDeclrationModal();
            return;
          }
          //show RTO popup
          if (!this.isRTOsurveySubmitted)
          {
            this.checkRTOData();
            return;
          }
        }

      }
    })
    modalCtrl.present();
  }
  submitDeviceTypeDetails()
  {
    if (this.utility.platformAvailable())
    {
      let deviceType: any;
      if (this.platform.is('ios'))
      {
        deviceType = 'ios'
      }
      else if (this.platform.is('android'))
      {
        deviceType = 'android'
      }

      let param = {
        url: 'submitDeviceTypeDetails',
        data: {
          "deviceType": deviceType,
          "versionNumber": this.latestUpdateVersion
        },
        miscellaneous: true
      }
      console.log("params", param)

      this.httpProvider.http.commonService(param).subscribe((response: any) =>
      {
        // console.log(response)
      }, error =>
      {
        //console.log(error);
        // this.utility.updateLoader(false)
      });

    }
  }

  goToExitDetails()
  {
    this.utility.updateLoader(true);
    let param = {
      url: 'userDetails',
      data: {},
      zenExit: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) =>
    {
      //console.log(response);
      this.utility.updateLoader(false);
      if (response && response.details)
      {
        if (!response.details.isExitUserEntry)
        {
          this.navCtrl.push("ExitDashboardPage", {
            data: response.details
          })
        } else
        {
          this.navCtrl.push("ExitDashboardPage")
        }
      }
    },
      error =>
      {
        this.utility.updateLoader(false);
      })


  }
  openCoronaGuidelinesAlert()
  {

    let modalCtrl = this.mdlCtrl.create(CoronaSafetyMeasuresAlertComponent,
      { 'guidelinesData': this.coronaGuidelineData }, {
      cssClass: 'corona-safetyAlertCss',
      enableBackdropDismiss: true,
      showBackdrop: true,

    })
    modalCtrl.onDidDismiss((data) =>
    {
      //console.log("on dismiss response", data)
      if (!this.utility.isEmptyOrNullOrUndefined(data))
      {
        if (data == 'dismiss')
        {
          this.coronaGuidelinesAlertClosed = true
          // show covid popup

          if (!this.isSurveyCompleted)
          {
            if (!this.forceUpdate && this.isEligibleForCoronaSurvey)
            {
              this.presentInformation();
              return;
            }
          }
          if (!this.isZenDeavorOpened)
          {
            if (this.miscData.isPopupVisible)
            {
              this.isZenDeavorOpened = true;
              this.presentZenDeavorPopup(this.userDetails);
              return;
            }
          }


          if (this.isSAAgreement && !this.isSAAgreementSubmitted)
          {
            this.openSAComplianceAlert();
            return;
          }

          // // US leave Popup
          if (this.showUSLeavePopup && !this.showUSLeavePopupClosed)
          {
            this.openLeaveDeclrationModal();
            return;
          }

          // US Reimbursment
          if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
          {
            this.openReimbursmentDeclrationModal();
            return;
          }

          //show RTO popup
          if (!this.isRTOsurveySubmitted)
          {
            this.checkRTOData();
            return;
          }
        }


      }
    })
    modalCtrl.present();
  }

  openSAComplianceAlert()
  {

    let modalCtrl = this.mdlCtrl.create(SouthAfricaImmigrationComplianceComponent,
      { 'userDetails': this.userDetails }, {
      cssClass: 'SA-complianceModalCss',
      enableBackdropDismiss: true,
      showBackdrop: true,

    })
    modalCtrl.onDidDismiss((data) =>
    {
      //console.log("on dismiss response", data)
      if (!this.utility.isEmptyOrNullOrUndefined(data))
      {
        if (data == 'dismiss')
        {
          this.isSAAgreementSubmitted = true;

          if (!this.isSurveyCompleted)
          {
            if (!this.forceUpdate && this.isEligibleForCoronaSurvey)
            {
              this.presentInformation();
              return;
            }
          }
          //show RTO popup
          if (!this.isRTOsurveySubmitted)
          {
            this.checkRTOData();
            return;
          }
          if (this.showCovidPopup && !this.coronaGuidelinesAlertClosed)
          {
            this.openCoronaGuidelinesAlert()
            return;
          }
        }


      }
    })
    modalCtrl.present();
  }
  gotoAdmin()
  {
    this.navCtrl.push('ZenadminHomePage')
  }

  presentZenDeavorPopup(userDetails)
  {

    let alert = this.alertCtrl.create({
      title: userDetails.popupHeader,
      enableBackdropDismiss: false,
      message: `${userDetails.popupBody}`,
      cssClass: "zenDeavorPopup",
      buttons: [
        {
          text: userDetails.button2Caption,
          role: 'cancel',
          handler: () =>
          {
            if (this.isSAAgreement && !this.isSAAgreementSubmitted)
            {
              this.openSAComplianceAlert();
              return;
            }
            // US leave Popup
            if (this.showUSLeavePopup && !this.showUSLeavePopupClosed)
            {
              this.openLeaveDeclrationModal();
              return;
            }

            // US Reimbursment
            if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
            {
              this.openReimbursmentDeclrationModal();
              return;
            }

            //show RTO popup
            if (!this.isRTOsurveySubmitted)
            {
              this.checkRTOData();
              return;
            }
          }
        },
        {
          text: userDetails.button1Caption,
          handler: () =>
          {

            this.navCtrl.push("ZenDeavorKraPage", {

              userID: userDetails.employeeId,
              role: userDetails.role,
              kraType: userDetails.processType,
              isComingFromHome: true
            });

          }
        }
      ]
    });
    alert.present();
  }

  // Open Leave Declration Popup
  openLeaveDeclrationModal()
  {

    let modalCtrl = this.mdlCtrl.create(LeaveDeclarationComponent, {},
      {
        cssClass: 'leave-declration',
        enableBackdropDismiss: false,
        showBackdrop: true,
      })
    modalCtrl.onDidDismiss((data) =>
    {
      this.showUSLeavePopupClosed = true;
      if (this.showUSReimbursmentPopup && !this.showUSReimbursmentPopupClosed)
      {
        setTimeout(() =>
        {
          this.openReimbursmentDeclrationModal();
        }, 200);
      }
    })
    modalCtrl.present();
  }

  // Open Reimbursment Declration Popup
  openReimbursmentDeclrationModal()
  {

    let modalCtrl = this.mdlCtrl.create(ReimbursmentDeclarationComponent, {},
      {
        cssClass: 'reimburstment-declration',
        enableBackdropDismiss: false,
        showBackdrop: true,
      })
    modalCtrl.onDidDismiss((data) =>
    {
      this.showUSReimbursmentPopupClosed = true;
      console.log('Modal Dismiss of reimbursment')
    })
    this.zone.run(() =>
    {
      modalCtrl.present();
    });
    this.cdr.detectChanges()
  }
  

}

