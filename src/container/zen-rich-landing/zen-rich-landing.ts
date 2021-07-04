import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, PopoverController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { Clipboard } from '@ionic-native/clipboard';
import { CarnivalAlertComponent } from './../../components/carnival-alert/carnival-alert';

/**
 * Generated class for the ZenRichLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zen-rich-landing',
  templateUrl: 'zen-rich-landing.html',
})
export class ZenRichLandingPage {

  private record: any = [];
  private slides: any = [];
  private allTabs: any = [];
  private selectedSection;
  private slideData;
  private fromNotification;
  private selectedTabValue: string = '';
  private isDataAvailble: boolean = false
  private isShowCarnival:boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, private mdlCtrl: ModalController, private http: HttpProvider, private utility: CommonUtilities, private popoverctr: PopoverController, private clipBoard :Clipboard) {
    
    this.fromNotification = this.navParams.get('fromNotification');
  }

  ionViewDidLoad() {

  }
  ionViewWillEnter() {
    this.getZenRichData();

  }


  goToZenRichList(data) {
    if (data) {
      this.navCtrl.push('ZenrichPage', {
        'getData': data
      })
    } else {
      this.navCtrl.push('ZenrichPage', {
        'getData': {
          'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
          'key': "All Openings",
          'parameter': "JOB_OPENINGS",
          'type': null,
          'value': "All Openings"
        }
      })
    }
  }

  changeSlide(index, value) {
    this.selectedSection = index;
    this.slides = this.slideData[index];
    this.selectedTabValue = value;
  }

  private goToJobDetails(srfNo) {
    this.navCtrl.push("ZenrichJobDetailPage", { 'srfNo': srfNo })
  }

  getZenRichData() {
    this.utility.updateLoader(true)

    let param = {
      url: 'zenrichLandingPageDetails',
      data: {},
      zenRich: true
    }

    this.http.http.commonService(param).subscribe((response: any) => {
      //console.log(response)
      if (response && response.details) {
        if(response.details.isCarnival && this.isShowCarnival){
          this.isShowCarnival = false;
          this.openCarnival(response.details.carnivalImage)
        }

        if(this.fromNotification==true){
          this.selectedSection = 1;
          this.selectedTabValue = 'Drafts';
        }
        else{
          this.selectedSection = 0;
          this.selectedTabValue = 'Recent Openings';
        }
        
        this.isDataAvailble = true
        this.record = response.details.records;
        this.slideData = response.details.middleSection;
        this.slides = this.slideData[this.selectedSection];
        this.allTabs = response.details.types;
        
      }
      this.utility.updateLoader(false)
    },
      error => {
        this.utility.updateLoader(false)
      })
  }

  goToReferralDetails(item) {
    this.navCtrl.push("ReferralDetailsPage", { 'candidateProfileId': item.candidateProfileId, 'srfNo': item.srfNo, "createNew": false })
  }

  bookMarked(selectedItem, index) {
    let bookedmarkValue: boolean;
    this.slides.value.filter(value => {
      if (value.srfNo == selectedItem.srfNo) {
        bookedmarkValue = !value.isBookmarked;
        value.isBookmarked = !value.isBookmarked;

      }
    })
    //console.log(this.slides.value);
    let param = {
      url: 'bookmarkSpecificJob',
      data: {
        srfNo: selectedItem.srfNo,
        save: bookedmarkValue
      },
      zenRich: true
    }
    this.http.http.commonService(param).subscribe((response: any) => {
      //console.log(response)
      this.utility.showToast(response.details.toastMessage);
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
          console.log(str);
          this.clipBoard.copy(str).then(() => {
            this.utility.showToast("Copied to clipboard");
          })
        }
      }

    })
  }

  goToHelp() {
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null })
  }
  removeDraft(item) {
    console.log(item)
    this.utility.presentConfirmation("Do you want to delete the draft ?").then(() => {
      let url = 'deleteDraft'
      this.http.http.commonService({ url, data: { referralMappingId: item.referralMappingId }, zenRich: true }).subscribe((response: any) => {
        console.log(response)
        this.utility.showToast('Darft deleted');
      })
      this.slides.value = this.slides.value.filter(value => value.referralMappingId != item.referralMappingId)
    }).catch(() => { })
  }

  getMainSkills(value) {
    return this.utility.formateData(value)
  }
  openCarnival(carnivalimgUrl) {

    let modalCtrl = this.mdlCtrl.create(CarnivalAlertComponent,
      { "imgUrl": carnivalimgUrl}, {
        cssClass: 'corona-safetyAlertCss',
        enableBackdropDismiss: true,
        showBackdrop: true,

      })
    modalCtrl.onDidDismiss((data) => {
    })
    modalCtrl.present();
  }
}
