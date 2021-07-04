import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'


@IonicPage()
@Component({
  selector: 'page-job-skill-data',
  templateUrl: 'job-skill-data.html',
})
export class JobSkillDataPage {
  jobSkillUrl: any = "jobSkillData"
  moreDetails: any = [];
  skillList: any = [];
  bestMatch: any;
  currentMatch: any;
  jobCode: any;
  data: any;
  isDataAvailable:boolean = false;
  icon: any;
  filledColor: any;
  nonFilledColor: any;
  jobDescription: any;
  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private commonUtil: CommonUtilities) {
    this.data = this.navParams.get('selectedJob')
    //console.log(this.data);
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {

  }
  ngOnInit() {
    this.getJobSkills();
  }

  /**
   * Service call for getting jobs skill data/job insights 
   */
  getJobSkills() {
    this.commonUtil.updateLoader(true)

    let jobSkills = {
      url: this.jobSkillUrl,
      data: {
        "jobCode": this.data.jobCode,
        "end": "30",
        "searchText": ""
      },
      ijp: true

    }

    this.httpProvider.http.commonService(jobSkills).subscribe((response) => {
      if (response) {
        this.moreDetails = response['details'].moreDetails;
        this.bestMatch = response['details'].bestMatch;
        this.currentMatch = response['details'].currentMatch;
        this.jobCode = response['details'].jobCode;
        this.icon = response['details'].icon;
        this.filledColor = response['details'].filledColor;
        this.nonFilledColor = response['details'].nonfilledColor;
        this.jobDescription = response['details'].jobDescription

        for (let i = 0; i < this.moreDetails.length; i++) {
          this.skillList = response['details'].moreDetails[i].skill;
        }
        this.isDataAvailable = true;
        this.commonUtil.updateLoader(false)
      }
    })
  }

  goToApplyJob() {
    let data = {
      'selectedJobCode': this.data.jobCode,
      'currentMatch': this.currentMatch,
      'filledColor': this.filledColor,
      'nonFilledColor': this.nonFilledColor
    }
    this.navCtrl.push("ApplyjobapplicationPage", {
      'data': data
    })
  }
  formatDate(obj) {
    return this.commonUtil.formatDate(obj);
  }

  enrollNow(){
    this.commonUtil.presentAlert("You have been successfully enrolled in this course. This has also been added in your learning calendar.")
  }
}
