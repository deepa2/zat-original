import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, PopoverController } from "ionic-angular";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../providers/http/http";
import { ZelearnPopoverPage } from "../../ZenLearn/zelearn-popover/zelearn-popover";
import { filter } from "rxjs/operators";
import { Constants } from "@app/constants";


/**
 * Generated class for the CourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-calendar",
  templateUrl: "calendar.html"
})
export class CalendarPage {
  private offeringList: any = [];
  private offeringData: any;
  private offeringType: any;
  private learningType= "Technical,Behavioural";
  private learningMode = "Classroom,V Learn"
  private filteredData: any;
  private showAllFilters: boolean
  private resultPending: boolean = false;
  private startList: number = 0;
  private errorMsg: any;
  private infinteScroll: any;
  private month="";
  private monthList:any=[];
  private isDataAvailable:boolean =false



  constructor(
    public navCtrl: NavController,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.offeringType = this.navParams.get("selectedCourse");
    // this.learningType = this.navParams.get("learningType");
    this.showAllFilters = this.navParams.get("showAllFilters")
    this.getOfferingList(this.learningType, this.learningMode);
  }

  getOfferingList(learningType, learningMode) {

    let url: string;
    let data: any
    let learningTypeList = learningType.split(',');
    let learningModeList = learningMode.split(',');

    url = "viewAllScheduledOfferings";
    data = {
      offeringType: "Calendar",
      start: this.startList,
      month:this.month,
      itemType:"",
      item_types:[],
      learning_Types:learningTypeList,
      learning_modes:learningModeList
    }

    data.learningType = learningType;
    data.learningMode = learningMode;


    if (this.offeringList.length == 0) {
      this.utility.updateLoader(true);
    }

    this.httpProvider.http.commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
            this.isDataAvailable = true;
            this.offeringData = res.details.responseList;
            this.monthList = res.details.monthList;
            if(this.month==''){
              this.month = this.monthList[0].value;
            }
            
            if (this.offeringData !== null) {
              this.resultPending = false
              this.offeringList = this.offeringList.concat(this.offeringData)

            } else {
              if (!this.infinteScroll) {
                this.resultPending = true
              } else if (this.offeringList.length == 0 && this.infinteScroll) {
                this.resultPending = true
              }

              // this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
            }
            this.utility.updateLoader(false);
          } else {
            this.utility.updateLoader(false);
            this.resultPending = true
            this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
          }
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
          // this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );
  }
  selctMonth(month){
    this.month = month;
    this.offeringList=[];
    this.startList = 0;
    this.getOfferingList(this.learningType, this.learningMode);

  }
  presentPopover(myEvent) {
    let filteredData: any = this.filteredData
    const popover = this.popoverCtrl.create(ZelearnPopoverPage, { data: { filteredData: filteredData, offeringType: this.offeringType, showAllFilters: this.showAllFilters, isFromCalendar: true } }, { cssClass: 'zenLearn-popover' });
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      if (!this.utility.isEmptyOrNullOrUndefined(data)) {
        this.filteredData = data;
        this.startList = 0;
        let learningType: any = []
        let learningMode: any = []
        data.filterArray.learningType.forEach(element => {
          if (element.checked == true)
            learningType.push(element.value)

        });
        data.filterArray.learningMode.forEach(element => {
          if (element.checked == true)
            learningMode.push(element.value)

        });
        data.filterArray.offeringType.forEach(element => {
          if (element.checked == true)
            this.offeringType = element.value
        });

        this.learningType = learningType.toString()
        this.learningMode = learningMode.toString()
        this.offeringList = [];
        this.getOfferingList(this.learningType, this.learningMode)
      }
    })
  }
  offeringDetails(selectedCourse: any) {
    //console.log(selectedCourse)
    this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse })
  }

  loadData(infiniteScroll) {
    // if (this.resultPending) {
    this.infinteScroll = infiniteScroll;
    setTimeout(() => {
      this.startList = this.startList + 10;
      // this.resultPending = false
      this.getOfferingList(this.learningType, this.learningMode);

      infiniteScroll.complete();
    }, 1000);
    // }
  }
}
