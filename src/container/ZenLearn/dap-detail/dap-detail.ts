import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HttpProvider } from '../../../providers/http/http';
import { ZenlearnOnTheJobComponent } from '../../../components/zenlearn-on-the-job/zenlearn-on-the-job';
import { GetterSetter } from '../../../providers/getterSetter/getterSetter';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'dap-detail',
  templateUrl: 'dap-detail.html',
})
export class DapDetailPage {

  // old code
  // private pageTitle: string;
  // private userId: number;
  // private role: string;
  // private dapItemsts;
  // private dapItemstsData;
  // private dapListItem;
  // private prevPage: string;
  // private dapItemInfo: any = {}
  // private dapDetailData: any = {}
  // private selectedTab = 0;
  // private dapStatus;
  // private isComingFromNotification;


  // ********************new code *******

  private dapDetailedData: any;
  private role: string;
  private dapList: any;
  private dapSection: any;
  private userDetails: any;
  private managersComments: string = '';
  private employeeId:string;


  constructor(private viewCtrl: ViewController, private utilities: CommonUtilities, private modalCtrl: ModalController,
    private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController, private httpProvider: HttpProvider, private getSet: GetterSetter) {

    

    //************************* new code ***************************/
    let detailedData = this.navParams.get('viewDapDetails');
    this.role = detailedData.role
    this.dapDetailedData = detailedData.data;
    this.userDetails = this.getSet.getUserData()
    
    if(this.navParams.get('isAssociateDataAvailable')){
      this.employeeId = this.navParams.get('isAssociateDataAvailable');
    }else{
      this.employeeId = this.userDetails.employeeId;
    }
    

  }
  

  // ****************new code***************************
  ionViewWillEnter() {
    this.getDapDetailedData();
  }

  getDapDetailedData() {
    let param;
    this.utilities.updateLoader(true);
    if (!this.dapList) {
      param = {
        url: 'viewDAP',
        data: {
          dapId: this.dapDetailedData.dapId,
          role: this.role,
          status: this.dapDetailedData.status
        },
        zenLearn: true
      }
    } else {
      param = {
        url: 'viewDAP',
        data: {
          dapId: this.dapDetailedData.dapId,
          role: this.role,
          status: this.dapList.status
        },
        zenLearn: true
      }
    }


    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response);
      this.utilities.updateLoader(false);
      if (response && response.details) {
        this.dapList = response.details.responseList.dap;
        this.dapSection = response.details.responseList.dapSections

      } else {

      }
    }, error => {
      this.utilities.updateLoader(false);
    })
  }

  getDapDetail(dapData) {
    console.log(dapData);
    if (dapData.sectionTitle == 'On the Job') {
      let selectedDapData = {
        'selectedDapId': this.dapDetailedData.dapId,
        'dapDetails': dapData,
        'role': this.role,
        'dapStatus': dapData.isSubmitAvailable
      }
      let modal = this.modalCtrl.create(ZenlearnOnTheJobComponent, { 'zenLearnData': selectedDapData }, { cssClass: 'onTheJOb' })
      modal.present();
      modal.onDidDismiss((data) => {
        if (data) {
          this.navCtrl.pop();
        } else {
          this.getDapDetailedData();
        }

      });

    } else if (dapData.sectionTitle == 'Peer Learning') {
      let isComingFromDAP = {
        isComingFromDAP: true,
        dapId: this.dapDetailedData.dapId,
        dapStatus: dapData.isSubmitAvailable
      }
      this.navCtrl.push('PeerLearnigPage', { 'isComingFromDAP': isComingFromDAP, 'role': this.role })
    } else if (dapData.sectionTitle == 'Classroom/Online') {
      //this.navCtrl.push("CourseListPage", { selectedCourse: 'recommended', showAllFilters: false })
    }
  }
  getStatusValue(item, arrValue) {
    //console.log(arrValue)
    let statusObj = arrValue.lov.filter((data) => {
      if (data.key == item) {
        return data
      }

    })
    // console.log(statusObj)
    return statusObj[0].value
  }

  approveReject(type: string) {
    let message: string;
    if (type == 'Approved') {
      message = 'Do you want to approve DAP?';
    } else {
      message = 'Do you want to reject DAP?'
    }
    this.utilities.presentConfirmation(message).then(() => {
      this.utilities.updateLoader(true);
      let data = {
        url: 'approveOrRejectDap',
        data: {
          dapId: this.dapDetailedData.dapId,
          managerComments: this.managersComments,
          approvedOrRejected: type
        },
        zenLearn: true
      }
      this.httpProvider.http.commonService(data).subscribe((response: any) => {
        console.log(response)
        this.utilities.updateLoader(false);
        if (response && response.status) {
          if (response.status.statusCode == 1) {
            this.utilities.presentAlert(`DAP ${type.toLowerCase()} successfully !!!!`).then(() => {
              this.navCtrl.pop();
            })
          }
        }
      }, error => {
        this.utilities.updateLoader(false);
      })
    })
      .catch(() => { })

  }

  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', { 'type': 'dapDetails' })
    popover.present({ ev: myEvent });
    popover.onDidDismiss(() => {
      this.exportDap()
    })
  }


  exportDap() {
    this.utilities.updateLoader(true);
    let data = {
      url: 'sendDAPDetails',
      data: {
        "userId": this.userDetails.employeeId,
        "dapId":this.dapDetailedData.dapId,
        "learningType": ""
      },
      zenLearn: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      console.log(response)
      this.utilities.updateLoader(false);
      this.utilities.showToast("Please check your Email for DAP report.");
    },
      error => {
        this.utilities.updateLoader(false);
      })
  }

  openCourses(data) {
    console.log(data);
    if(data == 'addProgram'){
      let dapDetails = {
        dapId: this.dapDetailedData.dapId,
        dapSectionId: 3,
        userId: this.employeeId
      }
      this.navCtrl.push('SelectedCoursesPage', { 'dapId': dapDetails })
    }
   
  }

  dateConversion(input) {
    let date = moment(input).format('D-MMM-YYYY');
    return date;
  }
}
