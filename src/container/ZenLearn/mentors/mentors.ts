import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { FormControl, Validators } from '@angular/forms';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the MentorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mentors',
  templateUrl: 'mentors.html',
})
export class MentorsPage {

  

  private allMentorsList: any = [];
  private isMentor_Unavailable: boolean = false;
  private selectedMentor: any;
  private infiniteScroll: any = '';
  private searchItem: string='';
  private searchControl: FormControl;
  private limit: any = 9;
  private offset: any = 0;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider, private utilities: CommonUtilities) {
  this.searchControl = new FormControl('',Validators.required);

 
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(2000).subscribe((response:any)=>{
      if(response && response.trim() != ''){
        this.offset = 0;
        this.limit = 9;
        this.allMentorsList = [];
        this.searchItem = response;
        this.getMentorListData();
      }else{
        this.offset = 0;
        this.limit = 9;
        this.allMentorsList = [];
        this.searchItem = response;
        this.getMentorListData();
      }
    });
    this.getMentorListData();

  }

  getMentorListData() {
  
    if (this.allMentorsList.length == 0) {
      this.utilities.updateLoader(true);
    }


    let param = {
      url: 'mentorsList',
      data: {
        offset: this.offset,
        limit: this.limit,
        filter: this.searchItem
      },
      zenLearn: true
    }

    this.http.http.commonService(param).subscribe((response: any) => {
      console.log(response);
      if (response && response.details && response.details.responseList.length > 0) {
        this.isMentor_Unavailable = false;
        this.allMentorsList = this.allMentorsList.concat(response.details.responseList);
        this.utilities.updateLoader(false);
      }
      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
        this.infiniteScroll = "";
      } else if (response && response.details && response.details.responseList.length == 0) {
        if (this.infiniteScroll) {
         
          this.infiniteScroll.complete();
          
          this.infiniteScroll.enabled(false);
          this.infiniteScroll = "";
        }else{
          this.isMentor_Unavailable = true;
          this.utilities.updateLoader(false);
        }
      }
      // if(response && response.details && response.details.responseList.length == 0){
      //   this.utilities.updateLoader(false);
      //   this.isMentor_Unavailable = true;
      // }
    },
      error => {
        this.utilities.updateLoader(false);
      });

  }

  chooseMentor(data) {

    if (data.isAvailable) {
      this.utilities.presentConfirmation(`Do you want ${data.value} as your mentor? `).then(() => {
        this.selectedMentor = data;
        this.navCtrl.pop();
      })
        .catch(() => {
          this.selectedMentor = '';
        })
    }else{
      this.utilities.presentToast("Mentor not available as two Mentees already assigned.")
    }

  }
  ionViewWillLeave() {
    if (this.selectedMentor) {
      this.navCtrl.getPrevious().data.selectedMentor = this.selectedMentor;
    }
  }
  loadMore(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    console.log(this.infiniteScroll);
    this.offset = this.limit+1;
    this.limit = this.limit + 9;
    this.getMentorListData();
  }



}
