import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import{HttpProvider} from '../../../providers/http/http';
import { DapPopoverPage } from '../dap-popover/dap-popover';
@IonicPage()
@Component({
  selector: 'team-list-detail',
  templateUrl: 'team-list-detail.html',
})
export class TeamListDetailPage {
    private pageTitle: string;
    private userId: number;
    private role :string;
    private teamData:any={};
    private dapData:any=[];
    private selectedTab = 0;
    private showAllFilters: boolean;
    private filteredData: any;
    private flowStatus = "In-progress,Completed,Approved,Manager Rejected,Pending Manager Approval,Pending For Manager Review,Mentor Rejected,Not Approved";
    private learningType = "Technical,Behavioural"
 
  constructor(private viewCtrl: ViewController,private utilities: CommonUtilities, private modalCtrl: ModalController, 
    private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController,private httpProvider:HttpProvider,
    ) {
      this.userId = navParams.get("userId")
      this.role = navParams.get("role")
      
  }
  ngOnInit() {
  //  Retriving Team List data
   // this.getTeamListData();
   // this.getDapListData(this.learningType, this.flowStatus)
  }
  ionViewWillEnter() {
    this.filteredData = "";
    this.getTeamListData();
    this.getDapListData(this.learningType, this.flowStatus)
  }

  
  getTeamListData() {
    
    this.utilities.updateLoader(true);
    let data={
      url: 'specificAssociateDetails',
      data:{
        'associateId':  this.userId
      },
      zenLearn: true
    }
    this.httpProvider.http.commonService(data).subscribe((response:any)=>{
      ////console.log(response);
      if(response.details){
        this.utilities.updateLoader(false);
        this.teamData = response.details.responseList;
      }
      
    },
    error=>{
      this.utilities.updateLoader(false);
      ////console.log(error)
    })
  }

  // Get My Dap Data
  getDapListData(learningType, flowStatus) {
   
    this.utilities.updateLoader(true);
    let data={
      url: 'getMyDapsList',
      data:{
        "userId" : this.userId,
        "flowStatus" : flowStatus,
        "learningType" : learningType
    },
      zenLearn: true
    }
    this.httpProvider.http.commonService(data).subscribe((response:any)=>{
      //console.log(response);
      if(response.details){
        this.utilities.updateLoader(false);
        this.dapData = response.details.responseList;
      }
      
    },
    error=>{
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
  // Method for selecting Tab
  // selectTab(activeTab){
  //   this.selectedTab = activeTab
  //   if(this.dapData!=null && this.teamData != {}){
  //     if(activeTab==0 && this.teamData.userId==undefined){
  //       this.getTeamListData()
  //     }else if(activeTab==1 && this.dapData.length==0){
  //       this.getDapListData(this.learningType, this.flowStatus)
  //     }
  //   }
    
  // }
  // Method for redirecting to dap page
  goToDapPage(dapItem){
    let selectedDap = {
      role :this.role,
      data:dapItem
    }
    this.navCtrl.push("DapDetailPage",{'viewDapDetails':selectedDap, isAssociateDataAvailable:this.teamData.userId})
  }

}
