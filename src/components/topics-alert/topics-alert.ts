import { Component, NgZone, EventEmitter, Output } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, Platform } from "ionic-angular"
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions';
import { getValueFromFormat } from 'ionic-angular/umd/util/datetime-util';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Constants } from "@app/constants";
import { ValueTransformer } from '@angular/compiler/src/util';
/**
 * Generated class for the CoronaSafetyMeasuresAlertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'topics-alert',
  templateUrl: 'topics-alert.html'
})
export class TopicsAlertComponent {

  text: string;
  private leavePageOnBackbtn: boolean = false;
  private topicsList:any;
  private practiceList:any; 
  private showTopics : boolean = false; 
  private showPractice : boolean = true;
  private isSubmitted : boolean = false;
  private selectedPractice = [];
  private selectedTopics = [];
  private showPref:boolean;
  private technicalPractice;
  private behaviouralPractice;
  private practicemainList;
  private practiceKey:string='';
  private selectedType ='Technical'

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewctrller: ViewController, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform) {
     
      this.showPref = this.navParam.get('showPref');
      this.getpracticeData();
  }

   // **********Method for fetching topics list**************/
   getTopicsData() {
    let data: any
     if(this.selectedPractice.length > 0){
      data = {"practiceIds" :this.selectedPractice};
     }
     else{
     data= {};
     }
    const url: string = "topicsList";
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
           
            this.topicsList = res.details.responseList;
            if(!this.utility.isEmptyOrNullOrUndefined(this.topicsList)){
              this.selectedTopics = this.topicsList.filter(value=>{
                return value.isTopicSelected==true;
              }).map(value=>{
                return value.topicId
              })
              let value = this.selectedTopics.findIndex(item => { return item.topicId == data.topicId; });
              if (value) {
                this.selectedTopics.splice(value, 1);
              }
            }
            
          } else {
            
            this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Topics Data"])
          }
          this.utility.updateLoader(false);
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Topics Data"])

          // this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );
  }
  
  // **********Method for fetching practice list**************/
  getpracticeData() {
    const url: string = "practiceList";
    const data: any = {};
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
           
            this.practiceList = res.details.responseList;
            this.technicalPractice = this.practiceList.filter(value=>{
              return value.practiceType == "Technical";
            });
            this.behaviouralPractice = this.practiceList.filter(value=>{
              return value.practiceType == "Behavioural";
            })
            this.practicemainList = this.technicalPractice;
            this.selectedPractice = this.practiceList.filter(value=>{
              return value.isPracticeSelected==true;
            }).map(value=>{
              return value.practiceId
            })
          } else {
            this.utility.updateLoader(false);
            this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Practice Data"])
          }
          this.utility.updateLoader(false);
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Practice Data"])
        }
      );
  }
  changed(data) {
    if (this.showPractice) {
      if (data.isPracticeSelected) {
        this.selectedPractice.push(data.practiceId);
      }
      else {
        let value = this.selectedPractice.findIndex(item => { return item.practiceId == data.practiceId;});
        if (value) {
          this.selectedPractice.splice(value, 1);
        }
      }
    }
    else if (this.showTopics) {
      if (data.isTopicSelected) {
        this.selectedTopics.push(data.topicId);
      }
      else {
        let value = this.selectedTopics.findIndex(item => { return item.topicId == data.topicId; });
        if (value) {
          this.selectedTopics.splice(value, 1);
        }
      }
    }
    
  }
  selecteCoures(type){
    if(type=='Technical'){
      this.selectedType ='Technical'
      this.practicemainList = this.technicalPractice;
    }
    else if(type=='Behavioural'){
      this.selectedType ='Behavioural'
      this.practicemainList = this.behaviouralPractice;
    }
  }
  serchPractice(){
    let isAvailable;
    
      if(this.selectedType=='Technical'){
        if(this.practiceKey!=''){
          this.practicemainList = this.technicalPractice.filter(value=>{
            isAvailable= value.practiceName.search(new RegExp(this.practiceKey, "i"))
            return isAvailable > -1
          })
        }
        else{
          this.practicemainList = this.technicalPractice;
        }
      }
      if(this.selectedType=='Behavioural'){
        if(this.practiceKey!=''){
          this.practicemainList = this.behaviouralPractice.filter(value=>{
            isAvailable= value.practiceName.search(new RegExp(this.practiceKey, "i"))
            return isAvailable > -1
          })
        }
        else{
          this.practicemainList = this.behaviouralPractice;
        }
      }
    
  }
  next(){
    this.showTopics= true;
    this.showPractice= false;
    this.getTopicsData();
  }
  goBack(){
    this.showTopics= false;
    this.showPractice= true;
    this.selectedType ='Technical'
    this.selecteCoures('Technical')
  }
  // **********Method for save topics list**************/
  saveTopicsData() {
    const url: string = "saveUserPreferences";
    let data: any
     if(this.selectedPractice.length > 0){
      data = {"topicIds" :this.selectedTopics};
     }
     else{
     data= {};
     }
     this.isSubmitted = true;
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
           
            this.topicsList = res.details.responseList;
            
          } else {
            
            this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Topics Data"])
          }
          this.utility.updateLoader(false);
        },
        err => {
          this.utility.updateLoader(false);
          this.utility.showAlert('ZenLearn-DashBoard', Constants["erroMessageFor No Topics Data"])

          // this.errorMsg = Constants["erroMessageFor No Data"]
        }
      );
      this.dismiss() 
  }

  dismiss() {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss(this.isSubmitted)
  }
  ionViewCanLeave() {

    return this.leavePageOnBackbtn

  }
}
