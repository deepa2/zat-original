import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HttpProvider } from '../../../providers/http/http';

@IonicPage()
@Component({
  selector: 'team-list',
  templateUrl: 'team-list.html',
})
export class TeamListPage {
  private pageTitle: string;
  private userRole: string;
  private teamData: any = [];
  private searchInput:string="";

  constructor(private viewCtrl: ViewController, private utilities: CommonUtilities, private modalCtrl: ModalController,
    private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController, private httpProvider: HttpProvider) {
    this.userRole = navParams.get("role")
  }
  ngOnInit() {
    //  Retriving Team List data
    this.getTeamListData();
  }
  getTeamListData() {

    this.utilities.updateLoader(true);
    let data = {
      url: 'getAllAssociatesDetailsList',
      data: {},
      zenLearn: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      //console.log(response);
      if (response.details) {
        this.utilities.updateLoader(false);
        this.teamData = response.details.responseList;
      }

    },
      error => {
        this.utilities.updateLoader(false);
        console.log(error)
      })
  }
  // ****************** Method for redirecting to specific associate detail page ***********/
  goToAssociateDetailPage(userId) {
    //console.log(learningTitle)
    // if (learningTitle.sectionTitle == 'DAP') {
      this.navCtrl.push("TeamListDetailPage", { 'userId': userId, 'role': this.userRole })
    // }

  }
}
