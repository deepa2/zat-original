
import { DigitalIdCardComponent } from './../../components/digital-id-card/digital-id-card';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, PopoverController, Platform, ActionSheetController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { CalenderModel } from "../../components/calender-model/calender-model";
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Subscription } from 'rxjs/Subscription';
import { Constants } from '../../constants/constants';
import { AppVersion } from "@ionic-native/app-version";
import { BrowserTab } from '@ionic-native/browser-tab';
import { File } from '@ionic-native/file';
import { HttpAngularProvider } from './../../providers/http-angular/http-angular';
import { Crop } from '@ionic-native/crop';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { UserAssetDetailsModalComponent } from './../../components/user-asset-details-modal/user-asset-details-modal';
import { DirectReportiesComponent } from '../../components/direct-reporties/direct-reporties';



@IonicPage()
@Component({
  selector: 'page-new-profile',
  templateUrl: 'new-profile.html',
})
export class NewProfilePage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild('input') bloodGroupInput;
  private selectedTab: number = 0;
  private profileDetails: any;
  private profileUrl: string = "getUserProfile";
  private bloodGroups: Array<string> = [];
  private selectOptions: any;
  private userId: number;
  private profileType: any;
  private notificationCount: number;
  private role: any;
  private userProfileDetailsdates: any;
  private fromNotification: boolean;
  private fromHomeSkills: boolean;
  private fromZeno: boolean;
  private newSlide: string;
  private hideSwipeMiss: boolean = true;
  private versionNo: any;
  private userProfileDetails: any = {
    'key': 'Records'
  };
  private resolve: Function;
  private actionName: string;

  private _roleListener: Subscription = new Subscription();
  private _notificationListener: Subscription = new Subscription();
  private _profileListener: Subscription = new Subscription();

  private croppedImagepath = "";
  // private isLoading = false;
  private uploadImageUrl = 'uploadProfilePic'
  private newIMagePath: any
  private showUploadedImg: boolean = false

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities, private modalCtrl: ModalController, private popoverCtrl: PopoverController, private store: Store<fromStore.AppState>, private appversion: AppVersion, private browserTab: BrowserTab, private platform: Platform,
    private camera: Camera, private httpAngularProvider: HttpAngularProvider,
    public actionSheetController: ActionSheetController, private file: File, private crop: Crop) {

    this.userId = this.navParams.get('userId');
    this.profileType = this.navParams.get('profileType');
    this.fromNotification = this.navParams.get('fromNotification');
    this.fromHomeSkills = this.navParams.get('formSkills');
    this.fromZeno = this.navParams.get('fromZeno');
    this.resolve = this.navParams.get('resolve')
    if (this.navParams.get('paramsFromChatBot')) {
      let paramsFromChatBot = this.navParams.get('paramsFromChatBot')
      this.userId = paramsFromChatBot.userId
      this.profileType = paramsFromChatBot.profileType
      // this.fromZeno = paramsFromChatBot.fromZeno
      // this.fromZenoslideTo = paramsFromChatBot.slideTo
      this.actionName = paramsFromChatBot.actionName
    }
    if (this.profileType == undefined || this.profileType == null) {
      this.profileType = "interaction";
    }
  }

  ionViewDidLoad() { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getRole();
    this.getProfileDetails();
  }

  getRole() {
    this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((role) => {
      this.role = role;
    });
  }

  slideChanged() {
    if (this.slides.isEnd()) {
      this.slides.lockSwipeToNext(true);
    } else if (!this.slides.isEnd()) {
      this.slides.lockSwipeToNext(false);
    }
    let currentIndex = this.slides.getActiveIndex();
    this.selectedTab = currentIndex;
  }

  setSlide(index) {
    if (this.slides) {
      this.slides.slideTo(index, 500);
    }
  }

  getProfileDetails() {
    this.utility.updateLoader(true)
    if (this.utility.platformAvailable()) {
      this.appversion.getVersionNumber().then(response => {
        ////console.log(response)
        let profile = {
          url: this.profileUrl,
          data: {
            'userId': this.userId,
            'type': this.profileType, //contacts, interaction  
            'role': this.role,
            'versionNo': response
          },
          associate: true
        }

        this.httpProvider.http.commonService(profile).subscribe((response) => {
          if (response) {
            this.utility.updateLoader(false)
            this.profileDetails = response['details'];
            this.userProfileDetails = response['details'].userProfiledetails;

            setTimeout(() => {
              if (this.slides && this.fromNotification) {
                this.slides.slideTo(2, 0);
                this.openCalenderModel(this.userProfileDetails[2].value[0]);
              } else if (this.slides && this.fromHomeSkills) {
                this.slides.slideTo(3, 0);
                // ;
                // this.openCalenderModel(this.userProfileDetails[2].value[0]);
              } else if (this.slides && this.fromZeno) {
                this.slides.slideTo(3, 0);
              } else if (this.slides && this.actionName == 'getAssetDetails') {
                this.slides.slideTo(2, 0);
              }
            }, 500);

            // setTimeout(() => {
            //   if (this.slides && this.fromHomeSkills) {
            //     this.slides.slideTo(3, 0);
            //     // ;
            //     // this.openCalenderModel(this.userProfileDetails[2].value[0]);
            //   }
            // }, 1000);

            // setTimeout(() => {
            //   if (this.slides && this.fromZeno) {
            //     this.slides.slideTo(3, 0);
            //   }
            // }, 100);

          }

        }, error => {
          this.utility.updateLoader(false);
        }
        );

      })

    } else {

      let profile = {
        url: this.profileUrl,
        data: {
          'userId': this.userId,
          'type': this.profileType, //contacts, interaction  
          'role': this.role,
          'versionNo': Constants.new_version
        },
        associate: true
      }

      this.httpProvider.http.commonService(profile).subscribe((response) => {
        if (response) {
          this.utility.updateLoader(false)
          this.profileDetails = response['details'];
          this.userProfileDetails = response['details'].userProfiledetails;

          setTimeout(() => {
            // if (this.slides && this.fromNotification) {
            //   this.slides.slideTo(2, 0);
            //   this.openCalenderModel(this.userProfileDetails[2].value[0]);
            // }
            if (this.slides && this.fromNotification) {
              this.slides.slideTo(2, 0);
              this.openCalenderModel(this.userProfileDetails[2].value[0]);
            } else if (this.slides && this.fromHomeSkills) {
              this.slides.slideTo(3, 0);
              // ;
              // this.openCalenderModel(this.userProfileDetails[2].value[0]);
            } else if (this.slides && this.fromZeno) {
              this.slides.slideTo(3, 0);
            } else if (this.slides && this.actionName == 'getAssetDetails') {
              this.slides.slideTo(2, 0);
            }
          }, 500);

          //   setTimeout(() => {
          //     if (this.slides && this.fromHomeSkills) {
          //       this.slides.slideTo(3, 0);
          //       // ;
          //       // this.openCalenderModel(this.userProfileDetails[2].value[0]);
          //     }
          //   }, 1000);

          //   setTimeout(() => {
          //     if (this.slides && this.fromZeno) {
          //       this.slides.slideTo(3, 0);
          //     }
          //   }, 100);

        }

      }, error => {
        this.utility.updateLoader(false);
      }
      );


    }





  }

  openCalenderModel(tempProfileItem) {

    if (tempProfileItem.key == 'Swipe Miss') {
      let modal = this.modalCtrl.create(CalenderModel, {
        // profileItem: tempProfileItem,
        dataParams: {
          swipeMissDates: tempProfileItem.dates,
          type: 'profile'
        }
      }, {
        cssClass: 'calendermodel',
      });
      modal.present();
    }
    else {

    }
  }

  formatDate(obj) {
    return this.utility.formatDate(obj);
  }

  checkEditableField(values) {

    let editableFields = values.filter((item) => {
      if (item.isEditable == true) { return item }
    })

    if (editableFields.length > 0) {
      return true;
    } else {
      return false;
    }

  }

  action(data) {
    if (data.type == 'email' && data.value != "") {
      this.utility.openEmailClient(data.value)
    }

  }

  // gotToEditProfile(value: any) {
  //   

  //   let type: string = null;

  //   if (value.type == 'experience') {

  //     type = 'experience';

  //     this.navCtrl.push('EditProfilePage', {
  //       'type': type,
  //       'hasRequested': value.hasRequested,
  //       'hasRequestedShowMsg': value.hasRequestedShowMsg
  //     });

  //   } else {

  //     type = 'personal';

  //     let selectedfield = {
  //       'section': type,
  //       'formMessage': value.hasRequestedShowMsg,
  //       'isAvailableForFinalSubmit': value.hasRequested
  //     }
  //     this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });

  //   }

  // }


  /**
   * Edit profile click along with parameters pushing forward for experience data.
   * parameter isComingFromProfile separates this for only profile editors. 
   * @param value 
   */
  gotToEditProfile(value: any) {
    let experienceData: any;
    value.value.filter(item => {
      if (item.type == 'experience') {
        experienceData = item;
      }

    })
    let selectedfield = {
      'section': 'personal',
      'formMessage': value.hasRequestedShowMsg,
      'isAvailableForFinalSubmit': value.hasRequested,
      'isComingFromProfile': true,
      'experienceData': experienceData
    }
    this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });

  }

  call(number) {
    this.utility.callNumber(number);
  }

  goToMySkills(data, add) {
    let skillsData = {
      "section": "skills",
      "skillTypeId": data.skillTypeId,
      "competencyElementId": data.competencyElementId,
      "objectVersionId": null,
      "userSkillChangeRequestId": data.userSkillChangeRequestId,
      "from": data.from,
      "skillId": data.skillId,
      "mode": add,
      "isSkillAvailableForSubmit": data.hasRequested

    }
    if (data.hasRequested) {
      this.utility.confirmationMsgForSkills(data.hasRequestedShowMsg).then(() => {
        this.navCtrl.push('ObAddDetailsPage', { 'selectedField': skillsData });
      })
    } else {
      this.navCtrl.push('ObAddDetailsPage', { 'selectedField': skillsData });
    }

  }

  presentPopover(myEvent) {
    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'profile' });
    popover.present({ ev: myEvent });
  }

  ionViewWillLeave() {
    this._roleListener.unsubscribe();
    this._profileListener.unsubscribe();
    this._notificationListener.unsubscribe();

    if (this.resolve) {
      this.resolve();
    }
  }
  goToMail(data) {
    this.utility.openEmailClient(data);
  }

  skillUpdationMessage(data, $event) {
    $event.stopPropagation();
    this.utility.presentAlert(data.toolTip, data.key)
  }

  viewResume(resumeUrl) {
    //console.log(resumeUrl);
    if (this.platform.is('ios')) {
      this.browserTab.isAvailable().then(isAvailable => {
        if (isAvailable) {
          this.browserTab.openUrl(resumeUrl)
        } else {
          this.utility.openWithSystemBrowser(resumeUrl)
        }

      })
        .catch(() => {
          this.utility.openWithSystemBrowser(resumeUrl)
        })
    } else {
      this.utility.openAsset(resumeUrl)
    }
  }


  openDigitalIDModal() {


    let modal = this.modalCtrl.create(DigitalIdCardComponent, {
      // profileItem: tempProfileItem,
      dataParams: {
        // swipeMissDates: tempProfileItem.dates,
        role: this.role,
        userId: this.userId
      }
    }, {
      cssClass: 'digitalIdCard-modalCss',
    });
    modal.present();
  }

  uploadProfilepic() {
    this.selectImage()
  }
  selectImage() {
    // alert("click")
    const actionSheet = this.actionSheetController.create({
      title: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    actionSheet.present();
  }


  pickImage(sourceType) {
    console.log("pick image", sourceType)
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(" getPicture", imageData)

      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
      console.log("error", err)
    });
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50, targetHeight: 200, targetWidth: 200 })
      .then(
        newPath => {
          console.log("event on done", newPath)
          if (!this.utility.isEmptyOrNullOrUndefined(newPath)) {
            this.croppedImagepath = newPath.split('?')[0]
            // alert("pic captured")
            this.uploadFile()
          }
          // this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          if (error.code == "userCancelled") {
            console.log("error", error)
          }
          else {
            alert('Error in showing image' + error.message);
          }
          this.utility.updateLoader(false)
          // this.isLoading = false;
          // alert('Error cropping image' + error);
        }
      );
  }

  uploadFile() {
    console.log("response ", this.croppedImagepath)
    let fileURI = this.croppedImagepath
    this.utility.updateLoader(true)

    let formData = new FormData();

    let uploadDocs = {
      url: this.uploadImageUrl,
      data: formData,
      associate: true
    }

    this.file.resolveLocalFilesystemUrl(fileURI).then((entry: any) => {
      entry.file((file) => {
        // let s = this.getFileSize(file.size)
        // if (s <= 5.00) {
        const fileReader = new FileReader()
        fileReader.readAsArrayBuffer(file)
        fileReader.onloadend = ev => {
          let fileType = file.type

          // if (fileType != "image/gif") {
          let imgBlob = new Blob([fileReader.result], { type: fileType })
          let fileExt = fileType.substring(fileType.indexOf('/') + 1)
          let fileName = new Date().getTime()
          formData.append("file", imgBlob, `${fileName}.${fileExt}`)
          // formData.append("kraId", this.KRADetails.kraStatusList[this.kraId].kraId)
          // formData.append("subKraId", this.KRADetails.kraStatusList[this.kraId].subKraId)
          // formData.append("userId", this.KRADetails.userId)
          // formData.append("processType", this.kraType)

          /**
           * Upload documents service call : UploadKRADatials
           */
          console.log("file ", uploadDocs)
          this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) => {
            this.utility.updateLoader(false)
            console.log("response ", response)

            if (response) {
              if (response.status.statusCode == 1) {
                this.utility.presentAlert("Photo uploaded successfully.")
                this.showUploadedImg = true
                this.newIMagePath = response['details'].profilePicUrl

                // this.getProfileDetails();

              }

            }
          })
          // } else {
          //   this.utility.presentAlert("Please upload a photograph/file.")
          //   this.utility.updateLoader(false)
          // }
        }
        // } else {
        //   this.utility.presentAlert("Please upload a photograph less than 5mb.")
        //   this.utility.imageLoader(false)
        // }
      })
    }).catch((error) => {
      this.utility.updateLoader(false)
      console.log("error", error)
    })

  }
  openAssetDetailsModal(clickedTitle) {
    if (clickedTitle == 'assetCount' || clickedTitle == 'visaCount') {
      let modal = this.modalCtrl.create(UserAssetDetailsModalComponent, {
        // profileItem: tempProfileItem,
        dataParams: {
          // swipeMissDates: tempProfileItem.dates,
          // role: this.role,
          // userID: this.userId,
          // profileType: this.profileType,
          // versionNo: "11.0.0"
          requestName: clickedTitle

        }
      }, {
        cssClass: 'asset-details-modal',
      });
      modal.present();
    }
  }

  openZendeavorProfile(data) {
    if (data.type) {
      let modalCtrl = this.modalCtrl.create(DirectReportiesComponent, { 'type': data.type, 'userId': this.userId, 'wholedata': data });
      modalCtrl.present();
    }
  }
}




