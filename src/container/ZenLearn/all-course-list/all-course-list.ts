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
  selector: "page-all-course-list",
  templateUrl: "all-course-list.html"
})
export class AllCourseListPage {
  @ViewChild(Slides) slides: Slides;
  private startList: number = 0;
  private errorMsg: any;
  private allCourseList: any;
  private dapCourseList: any=[];
  private interestBased: any=[];
  private poppularPeer: any=[];
  private ZensarPoppular: any=[];
  private slidePerView: any = "1.2";
  private type = 'All';
  private tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 5500;
  private dapBasedToolTip:any;
  private prefrrenceBasedToolTip:any;
  private peerBasedToolTip:any;
  private popularBasedToolTip:any;
  private showInterestLoader:boolean=true;
  private showDapLoader:boolean=true;
  private showPeerLoader:boolean=true;
  private showZensarLoader:boolean=true;
  private mainlist=[];

  constructor(
    public navCtrl: NavController,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
    this.viewAllCourses('BasedOnInterest');
    this.viewAllCourses('AmongPeers');
    this.viewAllCourses('PopularInZensar');
    this.viewAllCourses('BasedOnDap');
    
  }

  // **********Method for fetching practice list**************/
  viewAllCourses(recType) {
    const url: string = "viewAllCourses";
    const data: any = {
      offeringType: "RECOMMENDED",
      learningType: "Technical,Behavioural",
      learningMode: "Online,V Learn,Classroom",
      recommendationType: recType,
      itemType: "",
      item_types: [],
      learning_Types: ["Technical", "Behavioural"],
      learning_modes: ["Online", "Classroom", "V Learn"],
      start: 0,
      end: 10
    };
    // this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
           this.allCourseList = res.details.responseList;
            if(recType=="AmongPeers"){
              this.poppularPeer = this.allCourseList.popularPeerCourses;
              this.showPeerLoader = false;
            }
            else if(recType=="PopularInZensar"){
              this.ZensarPoppular = this.allCourseList.zensarPopularCourses;
              this.showZensarLoader = false;

            }
            else if(recType=="BasedOnDap"){
              this.dapCourseList = this.allCourseList.dapCourses;
              this.showDapLoader = false;

            }
            else if(recType=="BasedOnInterest"){
              this.interestBased = this.allCourseList.interestBasedCourses;
              this.showInterestLoader = false;

            }
            
            
            
            
            this.dapBasedToolTip = this.allCourseList.dapCourses_tooltip;
            this.peerBasedToolTip = this.allCourseList.popularPeerCourses_tooltip;
            this.prefrrenceBasedToolTip = this.allCourseList.interestBasedCourses_tooltip;
            this.popularBasedToolTip = this.allCourseList.zensarPopularCourses_tooltip;
            // this.utility.updateLoader(false);
          }
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Practice Data"])
        }
      );
  }
  likeDislike(clickType, index, value, listname, courseId) {


    // •******************•
    let actionFlag;
    let listnames;
    if(listname=="AmongPeers"){
      listnames = this.poppularPeer;
    }
    else if(listname=="PopularInZensar"){
      listnames = this.ZensarPoppular

    }
    else if(listname=="BasedOnDap"){
      listnames = this.dapCourseList

    }
    else if(listname=="BasedOnInterest"){
      listnames = this.interestBased
    }

    if (clickType == 'like') {
      if (value == 1) {
        listnames[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0) {
        listnames[index].isLike = 1;
        actionFlag = 1;
      }
      if (value == -1) {
        listnames[index].isLike = 1;
        actionFlag = 1;
      }
    }
    else if (clickType == 'dislike') {
      if (value == -1) {
        listnames[index].isLike = 0;
        actionFlag = 0;
      }
      else if (value == 0) {
        listnames[index].isLike = -1;
        actionFlag = -1;
      }
      if (value == 1) {
        listnames[index].isLike = -1;
        actionFlag = -1;
      }
    }
    if(listname=="AmongPeers"){
      this.poppularPeer = listnames;
    }
    else if(listname=="PopularInZensar"){
      this.ZensarPoppular = listnames;

    }
    else if(listname=="BasedOnDap"){
      this.dapCourseList = listnames;

    }
    else if(listname=="BasedOnInterest"){
      this.interestBased = listnames;
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
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {

            // this.zenLearnData = res.details.responseList;

          }
          this.utility.updateLoader(false);
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Data"])
        }
      );


  }

  offeringDetails(selectedCourse: any) {
    //console.log(selectedCourse)
    this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse })
  }

  getSpecificList(type, title, listype) {
    this.navCtrl.push("ViewCourseListPage", { 'courseType': type, 'listTitle': title, 'listType': listype })
  }

}
