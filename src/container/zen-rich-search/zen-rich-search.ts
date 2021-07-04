import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Clipboard } from '@ionic-native/clipboard';
/**
 * Generated class for the ZenRichSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zen-rich-search',
  templateUrl: 'zen-rich-search.html',
})
export class ZenRichSearchPage {

  private searchItem;
  private searchControl: FormControl;
  private showMessage: string = '';
  private infinteScroll: any = '';
  private openingsData: any = [];
  private pastSearches: any = [];
  private start = 0;
  private end = 10;
  private placeHolder = '';
  private paramsData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private clipBoard: Clipboard, private httpProvider: HttpProvider, private utility: CommonUtilities, private popoverctr: PopoverController) {
    this.searchControl = new FormControl('', Validators.required)
    this.paramsData = this.navParams.get('type');
    if (this.paramsData == 'MY_REFERRALS') {
      this.placeHolder = 'Search Candidate Name';
    } else {
      this.placeHolder = 'JobCode/Location/Grade/Job Title/skills';
    }
    //console.log(this.paramsData);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ZenRichSearchPage');
    this.getShowPastSearches();
    this.searchControl.valueChanges.debounceTime(1000).subscribe((search) => {
      if (search && search.trim() != '') {
        this.start = 0;
        this.end = 10;
        //console.log(search);
        this.pastSearches = [];
        this.openingsData = [];
        this.getSearchJobData()
      } else {
        this.showMessage = '';
      }

    })
  }

  getShowPastSearches() {

    let data = {
      url: 'getSearchHistory',
      data: {
        'start': 0,
        'end': 50
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      //console.log(response)
      if (response && response.details) {
        this.pastSearches = response.details;
      }

    })

  }

  getSearchJobData() {
    if (this.openingsData.length == 0) {
      this.utility.updateLoader(true)
    }

    let url = 'requestData';
    let param: any = {
      "searchKey": this.searchItem,
      "start": this.start,
      "type": this.paramsData.parameter,
      "end": this.end
    }
    this.httpProvider.http
      .commonService({ url, data: param, zenRich: true })
      .subscribe(
        (res: any) => {
          if (res && res.details) {
            if (res.details.requestData && res.details.requestData.length > 0) {
              //console.log(res.details.requestData)
              this.openingsData = this.openingsData.concat(res.details.requestData);
              this.showMessage = '';

            } if (this.infinteScroll) {
              this.infinteScroll.complete();
              this.infinteScroll = '';
              return;
            }
            if (!res.details.requestData) {
              this.openingsData = [];
              this.showMessage = `No data available.`
            }
          }
          this.utility.updateLoader(false);
        })
  }

  goToJobDetails(srfNo) {
    this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo })
  }

  private bookMarked(selectedItem, index) {
    let bookedmarkValue: boolean;
    this.openingsData.filter(value => {
      if (value.srfNo == selectedItem.srfNo) {
        bookedmarkValue = !value.isBookmarked;
        value.isBookmarked = !value.isBookmarked;

      }
    })
    let param = {
      url: 'bookmarkSpecificJob',
      data: {
        srfNo: selectedItem.srfNo,
        save: bookedmarkValue
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response)
      this.utility.showToast(response.details.toastMessage);
    })
  }

  searchJobs(jobData) {
    this.searchItem = jobData.searchText;
    this.pastSearches = [];
    //this.getSearchJobData();
  }
  private loadData(infinteScroll) {
    this.infinteScroll = infinteScroll;
    this.start = this.end;
    this.end += 10;
    this.getSearchJobData();
  }
  private goToCandidateProfile() {
    this.navCtrl.push('ReferralDetailsPage', {
      'candidateProfileId': 0
    })
  }
  presentpopover(myEvent,jobCode,jobtitle) {
    let popover = this
      .popoverctr
      .create('PopoverPage', { 'type': 'ZenRich' });
    popover.present({ ev: myEvent });
    popover.onDidDismiss((value)=>{
      if(value!=null){
        if(value == 'CopyCode'){
          this.clipBoard.copy(jobCode);
        }else{
          this.clipBoard.copy(jobtitle);
        }
      }
      
    })
  }
  formatDate(obj) {
    return this.utility.formatDate(obj);
  }

  goToRefDetails(refId, srfNo) {
    this.navCtrl.push("ZenrichRefDetailPage", { 'referralMappingId': refId, 'srfNo': srfNo })
  }

}

