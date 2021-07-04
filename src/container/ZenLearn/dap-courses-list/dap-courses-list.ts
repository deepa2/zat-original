import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the DapCoursesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dap-courses-list',
  templateUrl: 'dap-courses-list.html',
})
export class DapCoursesListPage {

  private getData: any;
  private dapCoursesList: Array<any> = [];
  private selectedCourses: Array<any> = [];
  private infiniteScroll: any = ''
  private loadedData: Array<any> = [];
  private start: any = 0;
  private end: any = 10;
  private learningMode: any = '';
  private showMsg: string = '';
  private ismsgAvailable: boolean = false;
  private otherData: string;
  private otherDataMsg: boolean = false;
  private filteredData: any = [];
  private noDataAvaiable: boolean = false;
  private dapID:any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities,
    private popoverCtrl: PopoverController) {
    this.getData = this.navParams.get('listData');
    if(this.getData.dapID){
      this.dapID= this.getData.dapID
    }else{
      this.dapID = 0;
    }
    //console.log(this.getData);
  }

  ionViewDidLoad() {
    if (!this.getData.isOtherSelected) {
      this.getCourseData()
    }

  }

  getCourseData() {
    if (this.loadedData.length == 0) {
      this.utility.updateLoader(true);
    }

    let params;
    //console.log('ionViewDidLoad DapCoursesListPage');

    params = {
      url: 'courses',
      data: {
        "learningId": this.getData.learningId,
        "start": this.start,
        "end": this.end,
        "competencyId": this.getData.competencyId,
        "learningMode": this.learningMode
      },
      zenLearn: true
    };

    this.httpProvider.http.commonService(params).subscribe((response: any) => {
      //console.log(response);
      this.utility.updateLoader(false);
      if (response.status.statusCode == -3) {
        this.ismsgAvailable = true;
        this.showMsg = response.details.responseList;
      } else if (response && response.details && response.details.responseList.length > 0) {
        this.loadedData = response.details.responseList;
        this.noDataAvaiable = false;
        this.dapCoursesList = this.dapCoursesList.concat(this.loadedData);
      } else if (response.details.responseList.length == 0 && !this.infiniteScroll) {
        this.noDataAvaiable = true;
      }else if(this.infiniteScroll && response.details.responseList.length == 0){
        this.noDataAvaiable = false;
      }

      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
        this.infiniteScroll = '';
      }
    }, error => {
      //console.log(error);
      this.utility.updateLoader(false);
    })
  }

  selectedCourse(course, index) {

    //console.log(course);
    this.dapCoursesList.filter((value) => {

      if (this.selectedCourses.length == 0) {
        if (value.itemId == course.itemId) {
          value.selectedItem = true;
          this.selectedCourses.push(course)
        }
      } else if (this.selectedCourses.length > 0) {
        //console.log(this.selectedCourses.indexOf(course))
        if (this.selectedCourses.indexOf(course) == -1) {
          if (value.itemId == course.itemId) {
            value.selectedItem = true;
            this.selectedCourses.push(course)
          }
        } else if (this.selectedCourses.indexOf(course) != -1) {
          let index = this.selectedCourses.indexOf(course);
          if (value.itemId == course.itemId) {
            this.selectedCourses.splice(index, 1)
            value.selectedItem = false;
          }

        }
      }
    })
    //console.log(this.dapCoursesList)
    //console.log(this.selectedCourses)

  }

  addCouses() {
    if (this.getData.isOtherSelected && !this.otherData) {
      this.otherDataMsg = true;
      return;
    }
    this.utility.updateLoader(true);
    let uniqueCourseIds: Array<any> = [];
    let data: string;
    if (this.selectedCourses.length > 0) {
      this.selectedCourses.filter(value => {
        uniqueCourseIds.push(value.itemId)
      })
    } else {
      uniqueCourseIds = this.otherData.split(",");

    }

    //console.log(uniqueCourseIds);
    let param = {
      url: 'addPrograms',
      data: {
        uniqueIdsList: uniqueCourseIds,
        dapId: this.dapID
      },
      zenLearn: true
    }

    this.httpProvider.http.commonService(param).subscribe((response: any) => {

      //console.log(response)
      if (response && response.status.statusCode == 1) {
        this.utility.updateLoader(false);
        this.utility.presentAlert("Your course(s) have been added successfully").then(() =>
          this.navCtrl.pop()
        )
      }
    }, error => {
      //console.log(error);
      this.utility.updateLoader(false);
    })
  }

  loadCourses(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.start = this.end;
    this.end = this.end + 10;
    this.getCourseData();
  }

  ionViewWillLeave() {
    if (this.selectedCourses.length > 0) {
      this.navCtrl.getPrevious().data.dapCourseList = this.selectedCourses;
      this.navCtrl.getPrevious().data.otherList = "";
    } else if (this.otherData) {
      this.navCtrl.getPrevious().data.otherList = this.otherData
      this.navCtrl.getPrevious().data.dapCourseList = [];
    }

  }

  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { data: { 'type': 'dapCourseList', 'filteredData': this.filteredData } });

    popover.present({ ev: myEvent });

    popover.onDidDismiss((value) => {
      
      //console.log(value)
      if (value) {
        this.filteredData = value;
        let learningModes: Array<any> = [];
        this.filteredData.filteredValues.filter(val => {
          if (val.checked) {
            learningModes.push(val.value)
          }
        })
        if (learningModes.length > 0) {
          this.learningMode = learningModes.toString();
          this.start = 0;
          this.end = 10;
          this.dapCoursesList = [];
          this.loadedData = [];
          this.getCourseData()
        }
      }


    })
  }

}
