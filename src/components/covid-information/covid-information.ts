import { Component, Input, ViewChild } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, InfiniteScrollContent, Content } from "ionic-angular"
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions';
import * as moment from 'moment';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Keyboard } from '@ionic-native/keyboard';


/**
 * Generated class for the CovidInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'covid-information',
  templateUrl: 'covid-information.html'
})
export class CovidInformationComponent
{

  personStatus: string;
  travelStatus: string;
  markStatus: boolean = false;
  markStatus2: boolean = false;
  selectedDate: string;
  selectedCountry: string = '';
  isDateFieldCorrect: boolean = true;
  isCountryFieldCorrect: boolean = true;
  showfooter: boolean = true
  userDetails: any;
  setDate: any;
  isdataAvailable: boolean = false;
  checkBoxValue: boolean = false;
  checkboxStatus: boolean = false;
  submittedDateTime: any;
  selectedLocation: any;
  ContactNumber: any;
  isContactEntered: boolean = false;
  isLocationEntered: boolean = false;
  submittedDateOnly: any;
  isAlreadyMarkedNeedHelp: boolean = false;
  userName: any;
  dateandTime: string;
  isVaccinated: any;
  listofVaccines: any;
  vaccineStatus: boolean = false;
  firstDose: any = '';
  secondDose: any = '';
  doseTaken: boolean = false;
  vaccineID: boolean;
  endDate;
  showSecondDose: boolean = true;
  currentCity: any = '';
  currentCityStatus: boolean = false;
  isIndiaPayroll: boolean = false;
  @ViewChild(Content) covidContent: Content;
  @ViewChild('currentCityCtrl') currentCityCtrl;

  constructor(
    private utility: CommonUtilities,
    private http: HttpProvider,
    private viewCtrl: ViewController,
    private navParam: NavParams,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private browserTab: BrowserTab,
    private keyBoard: Keyboard

  )
  {
    this.userDetails = this.navParam.get('userDetails');
    this.setDate = new Date().toISOString();
    let self = this;
    window.addEventListener('native.keyboardshow', keyboardShowHandler);

    function keyboardShowHandler(e)
    {
      self.showfooter = false;
    }
    window.addEventListener('native.keyboardhide', keyboardHideHandler);
    function keyboardHideHandler(e)
    {
      self.showfooter = true;
    }
    this.endDate = moment().format('YYYY-MM-DD').toString();
    this.getDetails();
  }

  //get user's already filled the survey or not
  getDetails()
  {
    this.utility.updateLoader(true)
    let data = {
      url: 'getCoronaSurveyDetails',
      data: {},
      miscellaneous: true
    }
    this.http.http.commonService(data).subscribe((response: any) =>
    {
      let data = response.details;
      this.listofVaccines = data.listOfVaccines;
      this.isIndiaPayroll = data.isIndiaPayroll;
      this.currentCity = data.currentCity;

      this.isAlreadyMarkedNeedHelp = data.isAlreadyMarkedNeedHelp;
      if (data.isAlreadySubmitted && !data.isAlreadyMarkedNeedHelp)
      {
        this.isdataAvailable = true;
        this.personStatus = data.markYourself;
        this.travelStatus = data.isTravelled;
        this.selectedCountry = data.country;
        this.selectedDate = data.travelledDate;
        this.checkBoxValue = data.isLicenceAgreementSubmitted;
        this.selectedLocation = data.location;
        this.ContactNumber = data.contactNumber;
        this.submittedDateTime = moment(data.lastSubmittedDate).format('DD-MMM-YYYY, h:mm a');
        this.submittedDateOnly = moment(data.lastSubmittedDate).format('DD-MMM-YYYY');

        this.markStatus = false;
        this.markStatus2 = false;
      } else if (!data.isAlreadySubmitted)
      {
        this.isdataAvailable = true;
      }

      if (data.isAlreadyMarkedNeedHelp)
      {
        this.travelStatus = data.isTravelled;
        this.selectedCountry = data.country;
        this.selectedDate = data.travelledDate;
        this.checkBoxValue = data.isLicenceAgreementSubmitted;
        this.selectedLocation = data.location;
        this.ContactNumber = data.contactNumber;
        this.userName = data.userName;
        this.dateandTime = moment(data.lastSubmittedDate).format('DD MMM, YYYY');
      }

      if (this.isdataAvailable)
      {
        //Vacination Details
        if (data.isVaccinated)
        {
          this.isVaccinated = data.isVaccinated ? 'Yes' : 'No';
        }
        this.vaccineID = data.vaccineId;
        this.firstDose = data.dose1Date;
        this.secondDose = data.dose2Date;
        this.doseTaken = !data.isDose2Taken;
        this.checkVaccine();
      }
      this.utility.updateLoader(false)

    }, error =>
    {
      this.utility.updateLoader(false)
    })
  }
  checkValue()
  {
  }
  changedItem(status)
  {
    this.travelStatus = status;
    this.markStatus = false
  }

  personstatus(status)
  {
    this.personStatus = status;
    this.markStatus2 = false;
    if (status.toLowerCase() == 'Need Help'.toLowerCase())
    {
      this.selectedLocation = this.currentCity;
    }

    // Check if Need help location triggered a mail
    // if (status.toLowerCase() == 'I am well and healthy'.toLowerCase())
    // {
    //   this.selectedLocation = '';
    // }
  }

  vaccinationStatus(status)
  {
    this.isVaccinated = status;
    this.vaccineStatus = false;
    if (status.trim().toLowerCase() == 'yes')
    {
      this.scrollToID('vaccination-container');
    }

  }

  scrollToID(id)
  {
    setTimeout(() =>
    {
      try
      {
        var yPos = document.getElementById(id).offsetTop - 20;
        this.covidContent.scrollTo(0, yPos, 1000)
      } catch (e)
      {
        // Do some operation
      }
    }, 100);
  }

  changeDate()
  {
    if (this.selectedDate)
    {
      this.isDateFieldCorrect = true;
    }
  }


  onInput()
  {
    if (this.selectedCountry)
    {
      this.isCountryFieldCorrect = true;
    } else
    {
      this.isCountryFieldCorrect = false;
    }
  }

  submitServey()
  {
    if (this.isAlreadyMarkedNeedHelp)
    {
      this.needHelpSurvey();
    } else
    {
      this.submitSurveyDetails()
    }
  }
  // Call this function when isAlreadyMarkedNeedHelp check is False
  submitSurveyDetails()
  {
    let data = {
      userId: this.userDetails.employeeId,
      source: 'Talent@Zensar',
      isLicenceAgreementSubmitted: this.checkboxStatus,
      isIndiaPayroll: this.isIndiaPayroll
    };

    if (this.isIndiaPayroll)
    {
      if (this.currentCity)
      {
        this.currentCityStatus = false;
        data['currentCity'] = this.currentCity;
      } else
      {
        this.currentCityStatus = true;
        this.covidContent.scrollToTop(600);
        // this.currentCityCtrl.setFocus()
        return;
      }
    }



    if (this.travelStatus)
    {
      this.markStatus = false
      data['isTravelled'] = this.travelStatus;
    } else
    {
      this.markStatus = true;
      return;
    }


    if (this.personStatus)
    {
      this.markStatus2 = false
      data['markYourself'] = this.personStatus;
    } else
    {
      this.markStatus2 = true;
      return;
    }
    // Vaccine Status
    if (this.isIndiaPayroll)
    {
      if (this.isVaccinated)
      {
        if (this.vaccineID)
        {
          if (this.isVaccinated.trim().toLowerCase() == 'yes')
          {
            data['isVaccinated'] = true;
            data['vaccineId'] = this.vaccineID;
            if (this.firstDose)
            {
              data['dose1Date'] = this.firstDose;
              if (this.doseTaken)
              {
                data['dose2Date'] = this.secondDose ? this.secondDose : null;
                this.vaccineStatus = false;
              } else
              {
                if (this.secondDose)
                {
                  data['dose2Date'] = this.secondDose;
                  this.vaccineStatus = false;
                } else
                {
                  this.vaccineStatus = true;
                  return;
                }
              }
            } else
            {
              this.vaccineStatus = true;
              return;
            }
          } else
          {
            data["isVaccinated"] = false;
            data["dose1Date"] = null;
            data["dose2Date"] = null;
          }
        } else
        {
          if (this.isVaccinated.trim().toLowerCase() == 'no')
          {
            this.vaccineStatus = false;
            data["isVaccinated"] = false;
          } else
          {
            this.vaccineStatus = true;
            return;
          }
        }
      } else
      {
        this.vaccineStatus = true;
        return;
      }
    }

    if (this.travelStatus == 'YES' && this.selectedCountry && this.selectedDate)
    {
      data['travelledDate'] = this.selectedDate;
      data['country'] = this.selectedCountry;
      this.isCountryFieldCorrect = true;
      this.isDateFieldCorrect = true
      data['location'] = this.selectedLocation;
      data['contactNumber'] = this.ContactNumber;

    } else if (this.travelStatus == 'NO')
    {

      data['location'] = this.selectedLocation;
      data['contactNumber'] = this.ContactNumber;

    }
    else
    {
      if (!this.selectedCountry)
      {
        this.isCountryFieldCorrect = false;
      }

      if (!this.selectedDate)
      {
        this.isDateFieldCorrect = false;
      }
    }

    if (this.travelStatus == 'YES')
    {
      if (this.travelStatus && this.personStatus && this.selectedCountry && this.selectedDate)
      {
        if (this.personStatus == 'Need Help')
        {
          this.utility.presentConfirmation('You have selected “Need Help”, this will trigger an email to ERT team. Do you want to continue?').then(() =>
          {
            this.utility.updateLoader(true);
            // data['travelledDate'] = "";
            // data['country'] = "";



            let param = {
              url: 'coronaSurvey',
              data: data,
              miscellaneous: true
            }
            this.http.http.commonService(param).subscribe((response: any) =>
            {
              this.utility.updateLoader(false);
              if (response && response.status && response.status.statusCode == 1)
              {
                this.utility.presentAlert("Thank you for submitting your response").then(() =>
                {
                  this.viewCtrl.dismiss();
                })


              }

            })
          })
            .catch(() => { })
        } else
        {
          this.utility.updateLoader(true);

          let param = {
            url: 'coronaSurvey',
            data: data,
            miscellaneous: true
          }
          this.http.http.commonService(param).subscribe((response: any) =>
          {
            this.utility.updateLoader(false);
            if (response && response.status && response.status.statusCode == 1)
            {
              this.utility.presentAlert("Thank you for submitting your response").then(() =>
              {
                this.viewCtrl.dismiss();
              })
            }
          })
        }

      }
    } else if (this.travelStatus == 'NO')
    {
      if (this.travelStatus && this.personStatus)
      {

        if (this.personStatus == 'Need Help')
        {
          this.utility.presentConfirmation('You have selected “Need Help”, this will trigger an email to ERT team. Do you want to continue?').then(() =>
          {
            this.utility.updateLoader(true);
            data['travelledDate'] = "";
            data['country'] = ""

            let param = {
              url: 'coronaSurvey',
              data: data,
              miscellaneous: true
            }
            this.http.http.commonService(param).subscribe((response: any) =>
            {
              this.utility.updateLoader(false);
              if (response && response.status && response.status.statusCode == 1)
              {
                this.utility.presentAlert("Thank you for submitting your response").then(() =>
                {
                  this.viewCtrl.dismiss();
                })


              }

            })
          })
            .catch(() => { })
        } else
        {
          this.utility.updateLoader(true);
          data['travelledDate'] = "";
          data['country'] = ""

          let param = {
            url: 'coronaSurvey',
            data: data,
            miscellaneous: true
          }
          this.http.http.commonService(param).subscribe((response: any) =>
          {
            this.utility.updateLoader(false);
            if (response && response.status && response.status.statusCode == 1)
            {
              this.utility.presentAlert("Thank you for submitting your response").then(() =>
              {
                this.viewCtrl.dismiss();
              })


            }

          })
        }

      }
    }
  }

  needHelpSurvey()
  {

    if (this.utility.isEmptyOrNullOrUndefined(this.personStatus))
    {
      this.markStatus2 = true;
    } else
    {
      if (this.isCallApi())
      {
        this.markStatus2 = false;
        this.utility.presentConfirmation('Do you want to continue?').then(() =>
        {

          this.utility.updateLoader(true);
          let param = {
            url: 'coronaSurvey',
            data: {
              markYourself: this.getMarkYourStatus(),
              travelledDate: this.selectedDate,
              country: this.selectedCountry,
              isTravelled: this.travelStatus,
              source: "Talent",
              location: this.selectedLocation,
              myHelpAssesment: this.personStatus,
              contactNumber: this.ContactNumber,
              currentCity: this.currentCity
            },
            miscellaneous: true
          }
          this.utility.updateLoader(false);
          this.http.http.commonService(param).subscribe((response: any) =>
          {
            if (response && response.status && response.status.statusCode == 1)
            {
              this.utility.presentAlert("Thank you for submitting your response").then(() =>
              {
                this.viewCtrl.dismiss();
              })


            }

          })
        })
          .catch(() => { })
      }

    }
  }

  // isCallApi
  isCallApi()
  {
    if (this.personStatus == 'I need more help')
    {
      this.markStatus2 = false;
      // Contact number and Loctaion is not compulsary
    }
    return !this.markStatus2;
  }

  getMarkYourStatus()
  {
    if (this.personStatus == "I need more help" || this.personStatus == "I am recovering")
    {
      return "Need Help"
    } else
    {
      return "I am well and healthy"
    }
  }

  goToTermsConditions()
  {
    let modal = this.modalCtrl.create(TermsConditionsComponent, {}, {
      cssClass: 'infoModal'
    });
    modal.present();
  }

  openRTOVedio()
  {
    this.browserTab.isAvailable().then(isAvaliable =>
    {
      if (isAvaliable)
      {
        this.browserTab.openUrl("https://zenconverse.zensar.com/zenhelpupload/NewNormalSafeRTOeLearningModule/story_html5.html")
      } else
      {
        this.utility.openWithSystemBrowser("https://zenconverse.zensar.com/zenhelpupload/NewNormalSafeRTOeLearningModule/story_html5.html")
      }

    }).catch(() =>
    {
      this.utility.openWithSystemBrowser("https://zenconverse.zensar.com/zenhelpupload/NewNormalSafeRTOeLearningModule/story_html5.html")
    })
  }

  // get selected vaccine
  checkVaccine()
  {
    try
    {
      this.listofVaccines.map((obj) =>
      {
        if (this.vaccineID == obj.vaccineId && obj.vaccineDoses == 1)
        {
          this.showSecondDose = false;
          this.doseTaken = true;
        } else
        {
          this.showSecondDose = true;
        }
      })
    } catch (e)
    {
      return;
    }

  }

  // Second does taken or not
  secondDoseSelected(val)
  {
    if (!this.utility.isEmptyOrNullOrUndefined(val))
    {
      try
      {
        var date1 = moment(this.firstDose);
        var date2 = moment(this.secondDose);
        var diffDays = date2.diff(date1, 'days');
        if (!diffDays)
        {
          this.secondDose = '';
          this.doseTaken = true;
          this.utility.presentAlert('Dose 2 date should be greater than Dose 1 date').then(() =>
          {
            this.secondDose = '';
            this.doseTaken = true;
          })
        } else
        {
          this.doseTaken = false;
        }
      } catch (e)
      {
        // Do some operation
      }
    }
  }

  // Dose 2 taken or not checkbox
  _fnDoseTaken(val)
  {
    if (val.checked)
    {
      this.secondDose = '';
    }
  }

}
