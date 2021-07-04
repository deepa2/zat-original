import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { FilterJobComponent } from '../../components/filter-job/filter-job';
import { Clipboard } from '@ionic-native/clipboard';
import { e } from '@angular/core/src/render3';
/**
 * Generated class for the WowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zenrich',
  templateUrl: 'zenrich.html',
})
export class ZenrichPage {
  private mainData
  private openingsData: any = [];

  private referralsData
  private tabData: string = "Openings";
  private tabname: string;
  private infinteScroll: any = '';
  private parameters: any;
  private start = 0;
  private end = 10;
  private isDataAvailable: boolean = false;
  private isShown = true;
  private isFilter: boolean = false;
  private skills_data: any = [];
  private bu_data: any = [];
  private city_data: any = [];
  //private pd_data: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpProvider: HttpProvider, private modalCtrl: ModalController, private popoverctr: PopoverController, private utility: CommonUtilities, private clipBoard: Clipboard) {
    this.parameters = this.navParams.get('getData');
    if (this.navParams.get('paramsFromChatBot')) {
      this.parameters = this.navParams.get('paramsFromChatBot')
    }
    this.getZenrichData();
  }

  getZenrichData(type: any = '') {
    if (this.openingsData.length == 0) {
      this.utility.updateLoader(true);
    }
    let data: any;
    const url: string = "requestData";
    if (this.parameters.parameter == 'JOB_OPENINGS' && type == '') {
      data = {
        "searchKey": "",
        "start": this.start,
        "type": this.parameters.parameter,
        "end": this.end,
        "isFilter": this.isFilter,
        "skillCodes": this.skills_data,
        "buCodes": this.bu_data,
        "cities": this.city_data,
        // "postedDate": this.pd_data

      };
    } else if (this.parameters.parameter == 'JOB_OPENINGS' && type != '') {
      //console.log(type);
      data = {
        "searchKey": "",
        "start": this.start,
        "type": this.parameters.parameter,
        "end": this.end,
        "isFilter": this.isFilter,
        "skillCodes": type.data.skills,
        "buCodes": type.data.bu,
        "cities": type.data.city,
        'startDate': type.data.startDate,
        'endDate': type.data.endDate
      }
    } else if (this.parameters.parameter != 'JOB_OPENINGS') {
      data = {
        "searchKey": "",
        "start": this.start,
        "type": this.parameters.parameter,
        "end": this.end

      }
    }


    this.httpProvider.http
      .commonService({ url, data, zenRich: true })
      .subscribe(
        (res: any) => {
          if (res && res.details) {
            if (res.details.requestData && res.details.requestData.length > 0) {
              this.isDataAvailable = true;
              this.openingsData = this.openingsData.concat(res.details.requestData);
            }
          }
          if (this.infinteScroll) {
            this.infinteScroll.complete();
            this.infinteScroll = "";
            return;
          }

          if (!res.details.requestData) {
            this.isDataAvailable = true;
            this.openingsData = [];
          }
          this.utility.updateLoader(false);
        },
        error => {
          this.utility.updateLoader(false);
        })
  }
  presentpopover(myEvent, jobCode, jobtitle, item) {
    let popover = this
      .popoverctr
      .create('PopoverPage', { 'type': 'ZenRich' });
    popover.present({ ev: myEvent });
    popover.onDidDismiss((value) => {
      if (value != null) {
        if (value == 'CopyCode') {
          this.clipBoard.copy(jobCode).then(() => {
            this.utility.showToast("Copied to clipboard");
          })
        } else {
          let title = this.utility.formateData(item.jobTitle);
          let skillsStr = this.utility.formateData(item.skills);
          let str: string = `Title: ${title}\nGrade: ${item.grade}\nExperience:${item.experience}\nSkills: ${skillsStr}\nLocation: ${item.location}`;
          this.clipBoard.copy(str).then(() => {
            this.utility.showToast("Copied to clipboard");
          })
        }
      }

    })
  }

  goToJobDetails(srfNo) {
    this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo })
  }
  goToRefDetails(refId, srfNo) {
    this.navCtrl.push("ZenrichRefDetailPage", { 'referralMappingId': refId, 'srfNo': srfNo })
  }

  goToSavedProfileDetails(data) {
    this.navCtrl.push('ZenRichSavedProfilesPage', { 'profileDetails': data })
  }
  private goToCandidateProfile() {
    this.navCtrl.push('ReferralDetailsPage', {
      'candidateProfileId': 0,
      "createNew": true,
      'isCominFromProfile': true
    })
  }

  bookMarked(selectedItem, index) {
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

  goToSearchPage() {
    this.navCtrl.push('ZenRichSearchPage', {
      'type': this.parameters
    });
  }

  loadData(event) {
    this.infinteScroll = event;
    this.start = this.end;
    this.end += 10;
    this.getZenrichData();
  }

  removeItem(item, index) {
    let data = this.bookMarked(item, index);
    //console.log(data);
    this.openingsData = this.openingsData.filter(value => value.srfNo != item.srfNo)
    //console.log(this.openingsData);

  }

  formatDate(obj) {
    return this.utility.formatDate(obj);
  }


  goToJobFilter() {
    let modal = this.modalCtrl.create(FilterJobComponent)
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {
        if (data.data) {
          let param = {}
          this.isFilter = true;
          this.skills_data = data.data.skills;
          let startDate = data.data.startDate;
          let endDate = data.data.endDate;
          this.city_data = data.data.city,
            this.bu_data = data.data.bu,
            this.start = 0;
          this.end = 10;
          this.openingsData = [];
          this.isDataAvailable = false
          this.getZenrichData(data);
        } else {
          this.isFilter = true;
          this.skills_data = [];
          this.city_data = [],
            this.bu_data = [],
            this.start = 0;
          this.end = 10;
          this.openingsData = [];
          this.isDataAvailable = false
          this.getZenrichData();
        }
        //console.log(data);

      }
    })
  }

  getMainSkills(value) {
    return this.utility.formateData(value)
  }


}
