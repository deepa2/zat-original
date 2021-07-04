import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HttpProvider } from '../../../providers/http/http';
import { DapPopoverPage } from '../dap-popover/dap-popover';

@IonicPage()
@Component({
  selector: 'my-dap',
  templateUrl: 'my-dap.html',
})
export class MyDapPage {
  private role: string;
  private showAllFilters: boolean;
  private filteredData: any;
  private flowStatus = "Pending,Rejected,Approved"
  private learningType = "Technical,Behavioural"
  private dapData: any = [];
  constructor(private viewCtrl: ViewController, private utilities: CommonUtilities, private modalCtrl: ModalController,
    private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController, private httpProvider: HttpProvider) {
    this.role = navParams.get("role");


  }
  ngOnInit() {
    //  Retriving Team List data
    //this.getDapListData(this.learningType, this.flowStatus);
  }

  ionViewWillEnter() {
    this.getDapListData(this.learningType, this.flowStatus);
  }
  // Get My Dap Data
  getDapListData(learningType, flowStatus) {

    this.utilities.updateLoader(true);

    let data = {
      url: 'getMyDapsList',
      data: {
        "userId": 0,
        "flowStatus": flowStatus,
        "learningType": learningType
      },
      zenLearn: true
    }

    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      //console.log(response);
      if (response.details) {
        this.utilities.updateLoader(false);
        if (!response.details.isMyDapAvailable) {
          this.utilities.presentAlert(response.details.message).then(() => {
           /// this.navCtrl.pop();
          })
        } else {
          this.dapData = response.details.responseList;
        }
      }

    },
      error => {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }
  // Filter Popup
  presentPopover(myEvent) {
    let filteredData: any = this.filteredData
    const popover = this.popoverCtrl.create(DapPopoverPage, { data: { filteredData: filteredData, showAllFilters: this.showAllFilters } }, { cssClass: 'zenLearn-popover' });
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      if (!this.utilities.isEmptyOrNullOrUndefined(data)) {
        this.filteredData = data;
        let learningType: any = []
        let flowStatus: any = []
        data.filterArray.learningType.forEach(element => {
          if (element.checked == true)
            learningType.push(element.value)

        });
        data.filterArray.flowStatus.forEach(element => {
          if (element.checked == true)
            flowStatus.push(element.value)

        });


        learningType = learningType.toString()
        flowStatus = flowStatus.toString()
        this.getDapListData(learningType, flowStatus)
      }
    })
  }

  // Method for redirecting to dap page
  goToDapPage(dapItem) {
    //console.log(dapItem);
    if (dapItem.status != 'Pending') {
      this.navCtrl.push("DapDetailPage", { 'dapItemInfo': dapItem, 'role': this.role, 'prevPage': 'MyDapPage' })
    } else {
      this.navCtrl.push("CreateDapPage", { 'dapId': dapItem.dapId });
    }

  }

}
