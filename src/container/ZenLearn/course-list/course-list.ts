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
  selector: "page-course-list",
  templateUrl: "course-list.html"
})
export class CourseListPage
{
  private offeringList: any = [];
  private offeringData: any;
  private offeringType: any;
  private learningType: any;
  private learningMode = "Classroom,Online,V Learn"
  private filteredData: any;
  private showAllFilters: boolean
  private resultPending: boolean = false;
  private startList: number = 0;
  private endlist: number = 10;
  private errorMsg: any;
  private infinteScroll: any;
  isHistoryData: boolean = false;
  private recomdationType: string;
  private item_types: any = [];
  private itemType: any = "";
  private isLearningHistory: boolean = false;
  private isFilterApplied: boolean = false;
  private pagetitle: string;
  filterYear: any;



  constructor(
    public navCtrl: NavController,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  )
  {
    this.offeringType = this.navParams.get("selectedCourse");
    this.filterYear = this.navParams.get("filterYear");
    console.log(this.offeringType);
    if (this.offeringType == 'Recommendations')
    {
      this.recomdationType = 'BasedOnDap';
      this.offeringType = "Recommended";
      this.pagetitle = "Course List"
    } else
    {
      this.recomdationType = "";
      this.pagetitle = "Course List"
    }
    if (this.offeringType == 'enrolled')
    {
      this.pagetitle = "Enrolled List"
    }
    this.learningType = this.navParams.get("learningType");
    if (!this.learningType)
    {
      this.learningType = "Technical,Behavioural";
    }

    // Page title change
    if (this.filterYear)
    {
      this.pagetitle = this.pagetitle + ` - FY${this.filterYear}`
    }
    this.showAllFilters = this.navParams.get("showAllFilters")
    this.getOfferingList(this.learningType, this.learningMode);
  }

  getOfferingList(learningType, learningMode)
  {

    let url: string;
    let data: any

    if (!this.showAllFilters)
    {
      let learningTypeList, learningModeList;

      url = "viewAllScheduledOfferings";
      data = {
        recommendationType: this.recomdationType,
        offeringType: this.offeringType,
        itemType: this.itemType,
        start: this.startList,
        end: this.endlist,
        item_types: this.item_types,
        learningType: learningType,
        learningMode: learningMode

      }
      if (this.isFilterApplied)
      {
        data.learning_Types = learningType.split(',');
        data.learning_modes = learningMode.split(',');
      }

    } else
    {

      this.isLearningHistory = true;
      if (this.filterYear)
      {
        url = "learningHistory";
        data = {
          type: this.offeringType,
          start: this.startList,
          end: this.endlist,
          itemType: this.itemType,
          filterYear: this.filterYear
        }
      } else
      {
        url = "learningHistory";
        data = {
          type: this.offeringType,
          start: this.startList,
          end: this.endlist,
          itemType: this.itemType
        }
      }

      if (this.isFilterApplied)
      {
        if (!this.utility.isEmptyOrNullOrUndefined(learningType))
        {
          data.type = learningType
        }
      }

      if (learningMode)
      {
        data.learningMode = learningMode;
      } else
      {
        data.learningMode = "Classroom,Online,V Learn";
      }
      this.isHistoryData = true;
    }
    if (this.offeringList.length == 0)
    {
      this.utility.updateLoader(true);
    }

    this.httpProvider.http.commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) =>
        {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details))
          {
            this.offeringData = res.details.responseList;
            if (this.offeringData !== null && this.offeringData.length > 0)
            {
              this.resultPending = false
              this.offeringList = this.offeringList.concat(this.offeringData)

            } else
            {
              if (!this.infinteScroll)
              {
                this.resultPending = true
              } else if (this.offeringList.length == 0 && this.infinteScroll)
              {
                this.resultPending = true
              }

              // this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
            }
            this.utility.updateLoader(false);
          } else
          {
            this.utility.updateLoader(false);
            this.resultPending = true
            this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
          }
        },
        err =>
        {
          this.utility.updateLoader(false);
          this.utility.showAlert('Course-List', Constants["erroMessageFor No Data"])
          // this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );
  }
  presentPopover(myEvent)
  {
    let filteredData: any = this.filteredData
    const popover = this.popoverCtrl.create(ZelearnPopoverPage, { data: { filteredData: filteredData, offeringType: this.offeringType, showAllFilters: this.showAllFilters } }, { cssClass: 'zenLearn-popover' });
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data =>
    {

      if (!this.utility.isEmptyOrNullOrUndefined(data))
      {
        console.log(data);
        this.filteredData = data;
        this.startList = 0;
        let learningType: any = []
        let learningMode: any = []
        let subtypes: any = [];
        this.itemType = '';
        this.item_types = [];
        data.filterArray.learningType.forEach(element =>
        {
          if (element.checked == true)
            learningType.push(element.value)

        });
        data.filterArray.learningMode.forEach(element =>
        {
          if (element.checked == true)
            learningMode.push(element.value)

        });
        data.filterArray.offeringType.forEach(element =>
        {
          if (element.checked == true)
            this.offeringType = element.value
        });
        if (data.filterArray.SubTypes.length > 0)
        {
          subtypes = data.filterArray.SubTypes.filter(data =>
          {
            if (data.checked)
            {
              this.item_types.push(data.value);
            }
          });
          this.itemType = this.item_types.toString();

        } else
        {
          this.item_types = [];
          this.itemType = "";
        }



        this.learningType = learningType.toString()
        this.learningMode = learningMode.toString()
        this.offeringList = [];
        this.isFilterApplied = true;
        this.getOfferingList(this.learningType, this.learningMode)
      }
    })
  }
  offeringDetails(selectedCourse: any)
  {
    //console.log(selectedCourse)
    this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse, isHistoryData: this.isHistoryData })
  }
  likeDislike(clickType, index, value, courseId)
  {
    let actionFlag;

    if (clickType == 'like')
    {
      if (value == 1)
      {
        this.offeringList[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0)
      {
        this.offeringList[index].isLike = 1;
        actionFlag = 1;
      }
      if (value == -1)
      {
        this.offeringList[index].isLike = 1;
        actionFlag = 1;
      }
    }
    else if (clickType == 'dislike')
    {
      if (value == -1)
      {
        this.offeringList[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0)
      {
        this.offeringList[index].isLike = -1;
        actionFlag = -1;
      }
      if (value == 1)
      {
        this.offeringList[index].isLike = -1;
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
  loadData(infiniteScroll)
  {
    // if (this.resultPending) {
    this.infinteScroll = infiniteScroll;
    setTimeout(() =>
    {
      this.startList = this.endlist;
      this.endlist = this.endlist + 10;
      // this.resultPending = false
      this.getOfferingList(this.learningType, this.learningMode);

      infiniteScroll.complete();
    }, 1000);
    // }
  }
}
