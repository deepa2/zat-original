import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Data } from '../../providers/data/data';
import { HttpProvider } from '../../providers/http/http';



@IonicPage()
@Component({
  selector: 'page-job-posting',
  templateUrl: 'job-posting.html',
})
export class JobPostingPage {
  jobsData:Array<any>=[]
  constructor(private navCtrl: NavController, private navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider) {
    this.getJobsData()
  }
  getJobsData(){
    this.jobsData=[
      {
        "jobName": "Senior Business Analyst",
        "jobCode": "375360",
        "postedDate": "15th April,2020",
        "position": "1",
        "applicants": "5",
        "jobDetails":{
          "experience":"5-8 Years",
          "location":"PUNE ZENSAR PREMISES",
          "project":"JLP DEV MS FLEX",
          "primarySkills":"PRODUCT CONSULTING-PIM, STIBO",
          "secondarySkills":"BUSINESS ANALYSIS-BA, CONSULTING",
          "tertiarySkills":"BUSINESS ANALYSIS - DIGITAL-BA, CONSULTING - DIGITAL",
          "gradeBrand":"D2",
          "jobDescription":"",
          "rolesResponsibiliteis":"Evaluating business processes, anticipating requirements, uncovering areas for improvement Staying up-to-date on the latest process and IT advancements to automate and modernize systems Conducting meetings and presentations to share ideas and findings Performing requirements analysis Effectively communicating insights and plans to cross-functional team members and management Gathering critical information from meetings with various stakeholders and producing useful reports"
        },
        "applicantDetails": [
          {
            "userId": "38852",
            "userName": "Yogesh Kumar",
            "allocation": "Project",
            "onBoardingTime": "4 Weeks",
            "machingPercent": "90",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=403196&img_id_token=5VSrUw5pY7bR%2F2vHwWv3Jjj4t2c%3D&t=1587680776449"
          },
          {
            "userId": "51013",
            "userName": "Sushant Singg",
            "allocation": "Project",
            "onBoardingTime": "3 Weeks",
            "machingPercent": "85",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=221338313&img_id_token=zxJU6j4VCQ7JmjmGpuoPAiJ7UZc%3D&t=1587940555721"
          },
          {
            "userId": "52936",
            "userName": "Dinesh Vedpathak",
            "allocation": "Pool",
            "onBoardingTime": "2 Weeks",
            "machingPercent": "68",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=96751453&img_id_token=F7y2ERY4mbMZJKILCRmUUCuPt90%3D&t=1587680738856"
          },
          {
            "userId": "52977",
            "userName": "Anuj Agrawal",
            "allocation": "Project",
            "onBoardingTime": "5 Weeks",
            "machingPercent": "34",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=124520352&img_id_token=MKy3x5fEefvnLQcik7blr5w9INU%3D&t=1587940364585"
          },
          {
            "userId": "43663",
            "userName": "R Mahathi",
            "allocation": "Pool",
            "onBoardingTime": "1 Week",
            "machingPercent": "20",
            "userPic": "https://zenloungeplus.zensar.com/image/user_female_portrait?img_id=406373&img_id_token=rRPoNI7FF5ZcQSAbh%2Fw7Il8cN5o%3D&t=1587681018812"
          }
          ]
      },
      {
        "jobName": "Technical Specialist",
        "jobCode": "678905",
        "postedDate": "12th April,2020",
        "position": "2",
        "applicants": "8",
        "jobDetails":{
          "experience":"2-5 Years",
          "location":"SAN JOSE",
          "project":"FLUKE EBS AND DBA - MANAGED SERVICES",
          "primarySkills":"ORACLE APPS DBA-GOLDEN GATE",
          "secondarySkills":"ORACLE APPS DBA-RAC",
          "tertiarySkills":"ORACLE APPS DBA-ORACLE DATABASE SUPPORT",
          "gradeBrand":"E1",
          "jobDescription":"",
          "rolesResponsibiliteis":"Installation, configuration and upgrading of Oracle server software and related products Evaluate Oracle features and Oracle related products Establish and maintain sound backup and recovery policies and procedures. Take care of the Database design and implementation Implement and maintain database security (create and maintain users and roles, assign privileges) Perform database tuning and performance monitoring"
        },
        "applicantDetails": [
          {
            "userId": "18987",
            "userName": "Vijay Pandit",
            "allocation": "Pool",
            "onBoardingTime": "0.5 Week",
            "machingPercent": "90",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=126425880&img_id_token=Cvkg6P1XJyyksaQW7MT2bXgg5nU%3D&t=1587680831857"
          },
          {
            "userId": "53058",
            "userName": "Nishad Joshi",
            "allocation": "Pool",
            "onBoardingTime": "2 Weeks",
            "machingPercent": "87",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=161679392&img_id_token=176hZuH2crpEef6ilHL%2Bxtez89g%3D&t=1587680794800"
          },
          {
            "userId": "23635",
            "userName": "Sumil Kandare",
            "allocation": "Pool",
            "onBoardingTime": "1 Week",
            "machingPercent": "85",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=90488750&img_id_token=Y1PbOW91AK8FotxRjAW98al%2BMB4%3D&t=1587681068616"
          },
          {
            "userId": "23278",
            "userName": "Shekhar Gunjal",
            "allocation": "Project",
            "onBoardingTime": "2.5 Weeks",
            "machingPercent": "82",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=404415&img_id_token=MR4xATNXzQXLSMg6BcYfZUfNdgA%3D&t=1587680758515"
          },
          {
            "userId": "44195",
            "userName": "Amarendra Singh",
            "allocation": "Pool",
            "onBoardingTime": "1.3 Weeks",
            "machingPercent": "56",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=91019414&img_id_token=XCuuFRekriEiluSNoAJeZhpmCWk%3D&t=1587680945253"
          },
          {
            "userId": "52977",
            "userName": "Anuj Agrawal",
            "allocation": "Pool",
            "onBoardingTime": "2 Weeks",
            "machingPercent": "45",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=124520352&img_id_token=MKy3x5fEefvnLQcik7blr5w9INU%3D&t=1587681142381"
          },
          {
            "userId": "53378",
            "userName": "Ruta Kamble",
            "allocation": "Pool",
            "onBoardingTime": "1 Week",
            "machingPercent": "40",
            "userPic": "https://zenloungeplus.zensar.com/image/user_female_portrait?img_id=146514364&img_id_token=lL%2Fu%2FbAhbFjv50f1hOwMaG3dDkc%3D&t=1587681100297"
          },
          {
            "userId": "24629",
            "userName": "Radhakrishna Kandalgaonkar",
            "allocation": "Project",
            "onBoardingTime": "3 Weeks",
            "machingPercent": "12",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=232610076&img_id_token=EE2ZewR0y9kGii827DMfJqJq5hs%3D&t=1587680735594"
          }
          ]
      },
      {
        "jobName": "Technical Architect",
        "jobCode": "454338",
        "postedDate": "30th March,2020",
        "position": "1",
        "applicants": "6",
        "jobDetails":{
          "experience":"8-12 Years",
          "location":"HYDERABAD",
          "project":"SUNPOWER_CORPORATION_0023901002",
          "primarySkills":"ENTERPRISE ARCHITECTURE-EA CONSULTING",
          "secondarySkills":"SOLUTION ARCHITECTURE-SOLUTION ARCHITECTURE",
          "tertiarySkills":"ENTERPRISE INTEGRATION, SOLUTION ARCHITECTURE ASSESSMENT, DESIGN AUTHORITY",
          "gradeBrand":"D1",
          "jobDescription":"",
          "rolesResponsibiliteis":"Identifying the organisation’s needs Breaking down large scale projects into manageable chunks Working out which IT products to use based on cost benefit analysis and research Agreeing plans with the client Explaining to designers and developers what’s required and overseeing the progress Producing documents that monitor progress and ensure the quality of the project Advising the client on managing future IT needs"
        },
        "applicantDetails": [
          {
            "userId": "42768",
            "userName": "Raja Surya Doddi",
            "allocation": "Project",
            "onBoardingTime": "4 Weeks",
            "machingPercent": "95",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=92148910&img_id_token=%2B5WnXgF0kVkBhxt1oNhAcoQ%2BkTM%3D&t=1587680751444"
          },
          {
            "userId": "43001",
            "userName": "Arabi Mohammed",
            "allocation": "Pool",
            "onBoardingTime": "1 Week",
            "machingPercent": "92",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=410964&img_id_token=iwMrbYcG2k56Ca2TbOXGNfOPSqI%3D&t=1587680896575"
          },
          {
            "userId": "45434",
            "userName": "Nagendra Mirajkar",
            "allocation": "Pool",
            "onBoardingTime": "0.5 Week",
            "machingPercent": "82",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=331908139&img_id_token=a7cMjHWigTGgGVRDaMqNepifzrw%3D&t=1587681087539"
          },
          {
            "userId": "20838",
            "userName": "Sajeed Kazi",
            "allocation": "Pool",
            "onBoardingTime": "1 Week",
            "machingPercent": "72",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=126235226&img_id_token=YlpKghMC4UviR5Uck5VzroQWQlo%3D&t=1587680965140"
          },
          {
            "userId": "20888",
            "userName": "Kapil Dhanarale",
            "allocation": "Pool",
            "onBoardingTime": "0.5 Week",
            "machingPercent": "45",
            "userPic": "https://zenloungeplus.zensar.com/image/user_male_portrait?img_id=410138&img_id_token=OrtqVLkJFrRw2xYbWURqfypXBC4%3D&t=1587680882285"
          },
          {
            "userId": "21832",
            "userName": "Vaishali Hirve",
            "allocation": "Project",
            "onBoardingTime": "2 Weeks",
            "machingPercent": "23",
            "userPic": "https://zenloungeplus.zensar.com/image/user_female_portrait?img_id=289390068&img_id_token=hc6TXOxYaQEDtqLveUyFCsYTilg%3D&t=1587681109039"
          }
          ]
      }
  ]
  }
  goToDetailPage(jobitem){
    this.navCtrl.push("JobDetailsPage",{'jobItem':jobitem})
  }
  goToApplicantsPage(appliedData){
    this.navCtrl.push("JobApplicantsPage",{'appliedData':appliedData})
  }
}
