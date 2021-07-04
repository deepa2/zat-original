import { Component, NgZone, OnInit, ChangeDetectorRef } from "@angular/core";
import { IonicPage, NavController, NavParams, Events, ModalController, Thumbnail, AlertController } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../providers/http/http";
import { Constants } from "@app/constants";
import { TopicsAlertComponent } from "../../../components/topics-alert/topics-alert";
import { DapAlertComponent } from "../../../components/dap-alert/dap-alert";
import { NgOnChangesFeature } from "@angular/core/src/render3";

/**
 * Generated class for the ZenLearnDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-zen-learn-dashboard",
  templateUrl: "zen-learn-dashboard.html"
})
export class ZenLearnDashboardPage implements OnInit
{
  @ViewChild('mySlider') slider: Slides;
  private coursesName: any = ["Recommendations", "enrolled"];
  private selectedCourse: any;
  private zenLearnData: any;
  private segmentlearnData: any;
  private dapCardData: any;
  private midCartData: any;
  private leaderCardData: any;
  private enrolledCardData: any;
  private offeringDetails: any
  private learningHistory: any;
  private errorMsg: any;
  private showFeedbackPage: any;
  private slidePerView: any = "1.2";
  private userData;
  toogleCourseHeading: boolean = true
  private highlightField: boolean = false;
  private isLike: boolean = false;
  private isDisLike: boolean = false;
  private resolve: Function;
  yearList: any;
  selYear: any = '';
  financialAlert: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private mdlCtrl: ModalController,
    private events2: Events,
    private zone: NgZone,
    private cd: ChangeDetectorRef,
    public alertCtrl: AlertController,
  )
  {
    if (this.navParams.get('paramsFromChatBot'))
    {
      this.highlightField = this.navParams.get('paramsFromChatBot').highlightField;

    }
    this.userData = this.navParams.get('userData');
    this.selectedCourse = this.coursesName[0];
    this.events2.subscribe('selecetedItem', (data) =>
    {
      //console.log(data); // 
      this.selectedCourse = data

    });
    //this.getDashboardData();

  }

  ngOnInit()
  {

  }

  ionViewWillEnter()
  {

    this.selectedCourse = this.coursesName[0];
    this.toogleCourseHeading = true;
    this.events2.subscribe('selecetedItem', (data) =>
    {
      //console.log(data); // 
      this.selectedCourse = data

    });
    this.getDashboardData();

  }


  ionViewDidLoad()
  {
    //console.log("ionViewDidLoad ZenLearnDashboardPage");

    this.resolve = this.navParams.get('resolve');
  }
  goToSlide()
  {
    this.slider.slideTo(0);
  }
  _selecteCoures(selectedCourse: any)
  {

    let selectedValue;
    if (selectedCourse == 'Recommendations')
    {
      selectedValue = 'dapCourses'
    }
    else
    {
      selectedValue = selectedCourse;
    }
    this.toogleCourseHeading = !this.toogleCourseHeading
    this.selectedCourse = selectedCourse;
    let segmentData = this.zenLearnData[selectedValue];
    this.segmentlearnData = '';
    this.segmentlearnData = segmentData;
    this.slider.slideTo(0);
    //  this.slides.slideTo(0);
    //this.slider.startAutoplay();

    // this.zone.run(() => {
    //   let segmentData = this.zenLearnData[selectedValue];
    //    this.segmentlearnData = segmentData;
    //    this.cd.detectChanges();
    // });



    // this.getDashboardData()
  }

  // ngOnChanges(){

  // }


  getDashboardData()
  {
    const url: string = "getLandingPageDetails";
    const data: any = {};
    this.utility.updateLoader(true);

    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) =>
        {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details))
          {
            setTimeout(() =>
            {
              this.highlightField = false;
            }, 8000);
            this.zenLearnData = res.details.responseList;
            this.yearList = this.zenLearnData.yearList;
            try
            {
              this.selYear = this.yearList[0];
            } catch (e)
            {
              // Show alert message if needed
            }
            this.segmentlearnData = this.zenLearnData.dapCourses;
            setTimeout(() =>
            {
              this.highlightField = false;
            }, 5000);

            this.learningHistory = this.zenLearnData.learningHistory;
            this.dapCardData = this.zenLearnData.dap;
            this.midCartData = this.zenLearnData.midCart.cartItems;
            this.leaderCardData = this.zenLearnData.leaderBoard;
            this.enrolledCardData = this.zenLearnData.enrolledCourses.detailList;
            this.utility.updateLoader(false);
            if (this.zenLearnData.showPreferencePopup)
            {
              this.openTopicsPref(true);
            }

            if (this.zenLearnData.showFeedbackPage == true)
            {
              let fromDashboard = true;
              this.navCtrl.push("ZenLearnRatingPage", { fromDashboard: fromDashboard })
            }
          } else
          {
            this.utility.updateLoader(false);
            this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Data"])
          }
        },
        err =>
        {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Data"])
        }
      );
  }

  //************* Method for redirecting DAP pages***************/

  goToDetailPage(pageTitle, role, item, slideData)
  {

    if (pageTitle == "My DAP")
    {
      // this.navCtrl.push("MyDapPage", { 'role': 'associate' })
      this.navCtrl.push('MyDaplistPage', { 'role': 'Associate' })
    }
    else if (pageTitle == "DAP")
    {
      this.openDapAlert(item);
    }
    else if (pageTitle == "Preferences")
    {
      this.openTopicsPref(false);
    }
    else if (pageTitle == "Mentorship")
    {
      this.navCtrl.push("MenteeListPage", { "userData": this.userData });
    }
    else if (pageTitle == "Learning Calendar")
    {
      this.showCalender("recommended")
    }
    else if (pageTitle == "More Recommendations")
    {
      this.goToALlCourses();
    }
    else if (pageTitle == "Need Action")
    {
      this.navCtrl.push("TeamListPage");
    }
    else if (pageTitle == "Create New")
    {
      this.navCtrl.push("CreateDapPage");
    }
    else if (pageTitle == "Team List")
    {
      this.navCtrl.push("TeamListPage", { 'role': role });
    } else if (item.title == 'Technical')
    {
      this.utility.openWithSystemBrowser(item.urlValue)
    } else if (item.title == 'Behavioural')
    {
      this.utility.openWithSystemBrowser(item.urlValue)
    } else if (slideData.title == "Fresher")
    {
      this.utility.openWithSystemBrowser(item.urlValue)
    }
  }
  likeDislike(clickType, index, value, courseId)
  {
    let actionFlag;

    if (clickType == 'like')
    {
      if (value == 1)
      {
        this.segmentlearnData[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0)
      {
        this.segmentlearnData[index].isLike = 1;
        actionFlag = 1;
      }
      if (value == -1)
      {
        this.segmentlearnData[index].isLike = 1;
        actionFlag = 1;
      }
    }
    else if (clickType == 'dislike')
    {
      if (value == -1)
      {
        this.segmentlearnData[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0)
      {
        this.segmentlearnData[index].isLike = -1;
        actionFlag = -1;
      }
      if (value == 1)
      {
        this.segmentlearnData[index].isLike = -1;
        actionFlag = -1;
      }
    }
    const url: string = "likeOrDislike";
    const data: any = {
      courseId: courseId,
      action: actionFlag
    };
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) =>
        {
          this.utility.updateLoader(false);
        },
        err =>
        {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Data"])
        }
      );


  }

  allOffering(selectedCourse: any)
  {
    let showAllFilters: boolean = true
    if (this.utility.isEmptyOrNullOrUndefined(selectedCourse))
    {
      selectedCourse = this.selectedCourse;
      showAllFilters = false

    }
    this.navCtrl.push("CourseListPage", { selectedCourse: selectedCourse, showAllFilters: showAllFilters, filterYear: this.selYear })
  }
  goToEnrolled()
  {
    let showAllFilters: boolean = false;

    this.navCtrl.push("CourseListPage", { selectedCourse: this.selectedCourse, showAllFilters: showAllFilters })
  }

  showCalender(selectedCourse: any)
  {
    let showAllFilters: boolean = true
    if (this.utility.isEmptyOrNullOrUndefined(selectedCourse))
    {
      selectedCourse = this.selectedCourse;
      showAllFilters = false

    }
    this.navCtrl.push("CalendarPage", { selectedCourse: selectedCourse, showAllFilters: showAllFilters })
  }

  offeringDetail(selectedCourse: any)
  {
    this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse })
  }
  goToALlCourses()
  {
    this.navCtrl.push("AllCourseListPage")
  }
  dap()
  {
    this.navCtrl.push('MyDaplistPage')
  }

  ionViewWillLeave()
  {
    if (this.resolve)
    {
      this.resolve();
    }
  }
  openTopicsPref(showPreferencePopup)
  {

    let modalCtrl = this.mdlCtrl.create(TopicsAlertComponent, { 'showPref': showPreferencePopup },
      {
        cssClass: 'topics-alert',
        enableBackdropDismiss: true,
        showBackdrop: true,

      })
    modalCtrl.onDidDismiss((data) =>
    {
      if (data)
      {
        this.goToALlCourses()
      }
    })
    modalCtrl.present();
  }
  openDapAlert(data)
  {

    let modalCtrl = this.mdlCtrl.create(DapAlertComponent, { 'data': data },
      {
        cssClass: 'dap-alert',
        enableBackdropDismiss: true,
        showBackdrop: false,

      })
    modalCtrl.onDidDismiss((data) =>
    {
      if (data == "Dap")
      {
        this.navCtrl.push("MyDaplistPage", { 'role': 'Associate' })
      }
      else if (data == "Team")
      {
        this.navCtrl.push("TeamListPage", { 'role': 'manager' });
      }
      else if (data == "Mentorship")
      {
        this.navCtrl.push("MenteeListPage");
      }
    })
    modalCtrl.present();
  }

  goToMyDapList(dapType)
  {
    this.navCtrl.push('MyDaplistPage', { 'role': 'Associate', 'dapType': dapType });
  }

  goToEnrolledCourses(type, value)
  {
    if (value > 0)
    {
      let showAllFilters: boolean = false
      this.navCtrl.push("CourseListPage", { selectedCourse: 'enrolled', showAllFilters: showAllFilters, learningType: type });
    }
  }
  // Display Financial years
  openFinancialYears()
  {
    this.openFinancialAlert()
  }
  openFinancialAlert()
  {
    let alert = this.alertCtrl.create();
    alert.setTitle('Financial Year');
    this.yearList.map((val) =>
    {
      alert.addInput({
        type: 'radio',
        label: val,
        value: val,
        checked: this.selYear == val
      });
    })

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data =>
      {
        this.selYear = data;
        this.getLearningYearHistory()
      }
    });
    alert.present()
  }

  // Get Learning History
  getLearningYearHistory()
  {
    let url = "learningYearHistory";
    let data = {
      type: "Technical",
      start: 0,
      end: 10,
      itemType: "",
      learningMode: "Classroom,Online,V Learn",
      filterYear: this.selYear.toString()
    }
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({ url, data, zenLearn: true })
      .subscribe((res) =>
      {
        if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res['details']))
        {
          this.utility.updateLoader(false);
          this.learningHistory = res['details'].responseList;
        } else
        {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Data"])
        }
      },
        err =>
        {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Data"])
        }
      );
  }
}
