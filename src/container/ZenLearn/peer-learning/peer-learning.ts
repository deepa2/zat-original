import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HttpProvider } from '../../../providers/http/http';
import { DapPopoverPage } from '../dap-popover/dap-popover';
import { GetterSetter } from '../../../providers/getterSetter/getterSetter';
import { ZenlearnNewRequestComponent } from '../../../components/zenlearn-new-request/zenlearn-new-request';
import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'peer-learning',
  templateUrl: 'peer-learning.html',
})
export class PeerLearnigPage {
  private role: string;
  private menteeItem;
  private peerData;
  private inputMsg;
  private previousItem;
  private userData;
  private currentTime;
  private newmessageList = [];

  constructor(private viewCtrl: ViewController, private utilities: CommonUtilities, private modalCtrl: ModalController, private getSet: GetterSetter,
    private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController, private httpProvider: HttpProvider) {
    this.role = this.navParams.get("role");
    this.menteeItem = this.navParams.get('menteeItem');
    this.previousItem = this.navParams.get('isComingFromDAP');


    //this.userData = this.navParams.get('userData');
    this.userData = this.getSet.getUserData();
    console.log(this.getSet.getUserData());
    console.log(this.userData);
    this.getPeerData();
  }
  ngOnInit() {
  }

  // Get Peer Data
  getPeerData() {
    let data;
    this.utilities.updateLoader(true);
    if (this.previousItem && this.previousItem.isComingFromDAP) {

      data = {
        url: 'getPeerLearningLastPage',
        data: {
          message: "",
          status: "",
          menteeid: '0',
          role: this.role,
          category: 'PeerLearning',
          dapSectionMasterId: "2",
          dapId: this.previousItem.dapId
        },
        zenLearn: true
      }

    } else {
      data = {
        url: 'getPeerLearningLastPage',
        data: {
          message: "",
          status: "",
          menteeid: this.menteeItem.menteeid,
          role: this.role,
          category: 'PeerLearning',
          dapSectionMasterId: "2",
          dapId: this.menteeItem.dapId
        },
        zenLearn: true
      }
    }


    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      //console.log(response);
      if (response.details) {
        this.peerData = response.details.responseList;
      }
      this.utilities.updateLoader(false);

    },
      error => {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }
  // **********Method for mark as completed**************/
  markAsCompletedM() {
    const url: string = "getMarkComplete";
    let data: any
    data = {
      role: this.role,
      category: 'PeerLearning',
      dapId: this.menteeItem.dapId,
      userComment: ""

      // dapSectionId: this.peerData.dapSectionEntryId,
    }
    this.utilities.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          this.utilities.updateLoader(false);
          // this.isAccepted = true;
          this.utilities.showToast("Marked as completed successfully");
          this.navCtrl.pop()
        },
        err => {
          this.utilities.updateLoader(false);
        }
      );

  }
  // formatDate(obj) {
  //   let x =moment(obj).format('DD-MMM-YYYY, h:mm a');

  //   return x;
  // }
  // **********Method for mark as completed**************/
  markAsCompleted() {
    const url: string = "getMarkComplete";
    let data: any
    data = {
      role: this.role,
      category: 'PeerLearning',
      dapSectionId: this.peerData.dapSectionEntryId,
      // dapId: this.menteeItem.dapId
    };
    this.utilities.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          this.utilities.updateLoader(false);
          // this.isAccepted = true;
          this.utilities.showToast("Marked as completed successfully");
          this.navCtrl.pop();
        },
        err => {
          this.utilities.updateLoader(false);
        }
      );

  }

  // **********Method for send msg**************/
  sendMsg() {
    console.log(this.inputMsg)
    const url: string = "sendMessage";
    this.currentTime = Date.now();
    let data: any
    data = {
      role: this.role,
      message: this.inputMsg,
      mntorMappingId: this.peerData.mentorMappingId,
      // dapId: this.menteeItem.dapId
    };
    if (this.inputMsg != '') {
      this.utilities.updateLoader(true);
      this.httpProvider.http
        .commonService({ url, data, zenLearn: true })
        .subscribe(
          (res: any) => {
            this.utilities.updateLoader(false);
            // this.isAccepted = true;
            this.utilities.showToast("Message sent successfully");
            let msg = {
              message: this.inputMsg,
              name: this.userData.employeeName,
              profilePic: this.userData.employeeProfilePic,
              time: this.currentTime
            }
            this.newmessageList.push(msg)
            this.inputMsg = ""
          },
          err => {
            this.utilities.updateLoader(false);
          }
        );
    }
    else {
      this.utilities.showToast("Please enter some message");
    }


  }

  approveReject(type) {
    this.utilities.updateLoader(true);
    let data = {
      url: 'getMarkComplete',
      data: {
        role: this.role,
        category: 'PeerLearning',
        dapId: this.previousItem.dapId,
        userComment: "",
        isReject: type
      },
      zenLearn: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      console.log(response)
      this.utilities.updateLoader(false);
      if (type) {
        this.utilities.presentAlert(`DAP rejected successfully`).then(() => {
          this.navCtrl.pop();
        })
      } else {
        this.utilities.presentAlert(`DAP approved successfully`).then(() => {
          this.navCtrl.pop();
        })
      }

    }, error => {
      this.utilities.updateLoader(false);
    })
  }

  newRequest() {
    let data = {
      dapId: this.previousItem.dapId,
      dapEntryId: this.peerData.dapSectionEntryId
    }
    let modal = this.modalCtrl.create(ZenlearnNewRequestComponent, { dapDetails: data }, { cssClass: 'onTheJOb' })
    modal.present();
    modal.onDidDismiss(() => {
    //this.getPeerData();
    this.navCtrl.pop();
      // this.navCtrl.push("MyDaplistPage").then(()=>{
      //   let activeIndex = this.navCtrl.getActive().index - 1;
      //   this.navCtrl.remove(activeIndex , 4)
      // })
    })

  }
  dateConversion(input) {
    let date = moment(input).format('D-MMM-YYYY');
    return date;
  }

  formateDate(data:string){

    // let date = data.split(' ');
    // console.log(date[0]);
   return moment(data).format('D-MMM-YYYY h:mm a' );


  }

  

}
