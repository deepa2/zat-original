import { HttpAngularProvider } from './../../../../providers/http-angular/http-angular';
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController, ActionSheetController } from "ionic-angular";
import * as moment from "moment";
import { File } from '@ionic-native/file';
import { Crop } from '@ionic-native/crop';
import { Camera, CameraOptions } from '@ionic-native/camera';



/**
 * Generated class for the AddNonZensarianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-non-zensarian",
  templateUrl: "add-non-zensarian.html",
})
export class AddNonZensarianPage {
  private userForm: FormGroup;
  private isUpdate: boolean = false;
  private isFormSubmitted: boolean = false;
  private successMsg: any;
  private userData: any;
  private croppedImagepath = "";

  private newIMagePath: any
  private showUploadedImg: boolean = false
  private isPhotoUploaded: boolean = false;


  constructor(public navParams: NavParams, private formBuilder: FormBuilder, private utility: CommonUtilities,
    private viewCtrl: ViewController, private httpAngularProvider: HttpAngularProvider, public actionSheetController: ActionSheetController,
    private file: File, private crop: Crop, private camera: Camera) {
    if (
      !this.utility.isEmptyOrNullOrUndefined(this.navParams.get("userData")) &&
      !this.utility.isEmptyOrNullOrUndefined(this.navParams.get("isEdit"))
    ) {
      this.userData = this.navParams.get("userData");
      this.isUpdate = this.navParams.get("isEdit");
    }
  }

  ionViewDidLoad() {
    // console.log("ionViewDidLoad AddNewPassPage");
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      contact: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: ["", [Validators.required, Validators.email]],
      designation: ["", Validators.required],
    });

    // Set user data to update
    const { contact, designation, email, name } = this.userForm.controls;
    if (this.isUpdate) {
      name.setValue(this.userData.userName);
      contact.setValue(this.userData.contactNumber);
      designation.setValue(this.userData.designation);
      email.setValue(this.userData.emailId);
      this.croppedImagepath = this.userData.userProfilePic
    }
    // console.log("userform",this.userForm.controls)
  }

  submitUserData() {
    if (this.utility.isEmptyOrNullOrUndefined(this.croppedImagepath)) {
      this.utility.presentAlert("Kindly upload photo");
      return;
    }

    const { contact, designation, email, name } = this.userForm.value;
    const data = {
      updationType: "add",
      nzUserName: name,
      nzEmailId: email,
      nzContactNumber: contact,
      nzDesignation: designation,
    };

    if (this.isUpdate) {
      Object.assign(data, {
        updationType: "update",
        nzUserId: this.userData.userId,
        nzUserName: name,
        nzEmailId: email,
        nzContactNumber: contact,
        nzDesignation: designation,
      })
    }

    this.utility.updateLoader(true);

    // console.log("response ", this.croppedImagepath)
    let fileURI = this.croppedImagepath
    this.utility.updateLoader(true)

    let formData = new FormData();

    if (this.isUpdate) {
      formData.append("nzUserId", this.userData.userId)
      formData.append("updationType", this.isUpdate ? "update" : "add")
      formData.append("nzUserName", name)
      formData.append("nzEmailId", email)
      formData.append("nzContactNumber", contact)
      formData.append("nzDesignation", designation)
    } else {
      formData.append("updationType", this.isUpdate ? "update" : "add")
      formData.append("nzUserName", name)
      formData.append("nzEmailId", email)
      formData.append("nzContactNumber", contact)
      formData.append("nzDesignation", designation)
    }

    let uploadDocs = {
      url: 'getAdminAddUpdateNonZensarianDetails',
      data: formData,
      isZenAdmin: true
    }

    if (this.isPhotoUploaded) {
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
            formData.append("files", imgBlob, `${fileName}.${fileExt}`);
            this.uploadFileApi(uploadDocs);
          }
        })
      }).catch((error) => {
        this.utility.updateLoader(false)
        console.log("error", error)
      })
    } else {
      formData.append("files", '')
      this.uploadFileApi(uploadDocs)
    }
  }

  formValidator(group: FormGroup): any {
    if (group) {
      // console.log(group)
      let startDate = group.get("startDate").value;
      let dailyPassTypeVal = group.get("dailypassType").value;
      if (startDate) {
        if (startDate == "") {
          return { startDateIsempty: true };
        } else {
          let formatDate = moment(startDate).format("YYYY-MM-DD");
          const tempdate = moment(formatDate); // Thursday Feb 2015
          const dow = tempdate.day();
          // console.log(dow);
          if (dow == 0 || dow == 6) return { IsWeekend: true };
        }
      }

      if (group.get("passType").value != "") {
        if (group.get("passType").value == "Daily" && (dailyPassTypeVal == "" || dailyPassTypeVal == null)) {
          return { dailypassIsEmpty: true };
        }
      }
    }
    return null;
  }

  // to dismiss the modal for model closing
  dismiss(flag) {
    this.viewCtrl.dismiss(flag);
  }

  pickImage(sourceType) {
    // console.log("pick image", sourceType)
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      // console.log(" getPicture", imageData)
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
    this.crop.crop(fileUrl, { quality: 50, targetHeight: 200, targetWidth: 200 }).then(newPath => {
      // console.log("event on done", newPath)
      if (!this.utility.isEmptyOrNullOrUndefined(newPath)) {
        this.croppedImagepath = newPath.split('?')[0]
        // alert("pic captured")
        this.isPhotoUploaded = true;
      }
      // this.showCroppedImage(newPath.split('?')[0])
    }, error => {
      if (error.code == "userCancelled") {
        console.log("error", error)
      } else {
        alert('Error in showing image' + error.message);
      }
      this.utility.updateLoader(false)
      // this.isLoading = false;
      // alert('Error cropping image' + error);
    });
  }

  selectImage() {
    // alert("click")
    this.actionSheetController.create({
      title: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    }).present();
  }
  uploadFileApi(uploadDocs) {
    /**
              * Upload documents service call : UploadKRADatials
              */
    console.log("file ", uploadDocs)
    this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) => {
      this.utility.updateLoader(false)
      console.log("response ", response)

      if (response) {
        if (response.status["statusCode"] == 1) {
          this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
            this.viewCtrl.dismiss("add")
          })

          // this.showUploadedImg = true

          // this.getProfileDetails();

        }

      }
    })
  }

}
