import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, PopoverController } from "ionic-angular";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../providers/http/http";
import { ZelearnPopoverPage } from "../../ZenLearn/zelearn-popover/zelearn-popover";
import { filter } from "rxjs/operators";
import { Constants } from "@app/constants";
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";
/**
 * Generated class for the CourseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-view-course-list",
  templateUrl: "view-course-list.html"
})
export class ViewCourseListPage
{
  @ViewChild(Slides) slides: Slides;
  private startList: number = 0;
  private errorMsg: any;
  private allCourseList: any;
  private dapCourseList: any;
  private interestBased: any;
  private poppularPeer: any;
  private ZensarPoppular: any;
  private slidePerView: any = "1.2";
  private courseType: any;
  private courseTitle: any;
  private listType: any;
  private infiniteScroll: any = '';
  private start: any = 0;
  private end: any = 10;
  private loadedData: any = [];
  private courseData: any = [];
  private filteredData: any;
  private learningMode: any = 'Online,V Learn,Classroom';
  private learningType: any = 'Technical,Behavioural';
  private item_types: any = [];
  private itemType: any = "";
  private isFilterApplied: boolean = false;
  private isDataUnAvailable: boolean = false;

  constructor(
    public navCtrl: NavController,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  )
  {

    this.courseType = this.navParams.get('courseType');
    this.courseTitle = this.navParams.get('listTitle');
    this.listType = this.navParams.get('listType');
    this.viewAllCourses();
  }

  // **********Method for fetching practice list**************/
  viewAllCourses()
  {
    const url: string = "viewAllCourses";
    const data: any = {
      offeringType: "RECOMMENDED",
      learningType: this.learningType,
      learningMode: this.learningMode,
      recommendationType: this.listType,
      start: this.start,
      end: this.end,
      itemType: this.itemType,
      item_types: this.item_types
    };
    if (this.isFilterApplied)
    {
      data.learning_Types = data.learningType.split(',');
      data.learning_modes = data.learningMode.split(',');
    }
    if (this.courseData.length == 0)
    {
      this.utility.updateLoader(true);
    }

    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) =>
        {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details))
          {

            // this.allCourseList = res.details.responseList;

            this.isDataUnAvailable = false;
            this.allCourseList = res.details.responseList;

            this.dapCourseList = this.allCourseList.dapCourses;
            this.interestBased = this.allCourseList.interestBasedCourses;
            this.poppularPeer = this.allCourseList.popularPeerCourses;
            this.ZensarPoppular = this.allCourseList.zensarPopularCourses;
            if (this.dapCourseList != null)
            {
              this.loadedData = this.dapCourseList;
            }
            else if (this.interestBased != null)
            {
              this.loadedData = this.interestBased;
            }
            else if (this.poppularPeer != null)
            {
              this.loadedData = this.poppularPeer;
            }
            else if (this.ZensarPoppular != null)
            {
              this.loadedData = this.ZensarPoppular;
            }
            this.courseData = this.courseData.concat(this.loadedData);

            this.utility.updateLoader(false);
            if (!this.infiniteScroll)
            {
              if (!this.loadedData || this.loadedData.length == 0)
              {
                this.isDataUnAvailable = true;
              }
            }

            if (this.infiniteScroll)
            {
              this.infiniteScroll.complete();
              this.infiniteScroll = "";
            }
          }
        },
        err =>
        {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Practice Data"])
        }
      );
  }
  likeDislike(clickType, index, value, courseId)
  {
    let actionFlag;

    if (clickType == 'like')
    {
      if (value == 1)
      {
        this.loadedData[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0)
      {
        this.loadedData[index].isLike = 1;
        actionFlag = 1;
      }
      if (value == -1)
      {
        this.loadedData[index].isLike = 1;
        actionFlag = 1;
      }
    }
    else if (clickType == 'dislike')
    {
      if (value == -1)
      {
        this.loadedData[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0)
      {
        this.loadedData[index].isLike = -1;
        actionFlag = -1;
      }
      if (value == 1)
      {
        this.loadedData[index].isLike = -1;
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
  loadCourses(infiniteScroll)
  {
    this.infiniteScroll = infiniteScroll;
    this.start = this.end;
    this.end = this.end + 10;
    this.viewAllCourses();
  }
  offeringDetails(selectedCourse: any)
  {
    //console.log(selectedCourse)
    this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse })
  }


  presentPopover(myEvent)
  {
    let filteredData: any = this.filteredData
    const popover = this.popoverCtrl.create(ZelearnPopoverPage, { data: { filteredData: filteredData, offeringType: 'Recommended', showAllFilters: false, isComingFromRecommendations: true } }, { cssClass: 'zenLearn-popover' });
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss((data) =>
    {
      if (!this.utility.isEmptyOrNullOrUndefined(data))
      {
        this.filteredData = data;
        this.start = 0;
        this.end = 10;
        let learningType: any = [];
        let learningMode: any = [];
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

        this.learningType = learningType.toString();
        this.learningMode = learningMode.toString();
        this.courseData = [];
        this.isFilterApplied = true;
        this.viewAllCourses();
      }
    })
  }
}
