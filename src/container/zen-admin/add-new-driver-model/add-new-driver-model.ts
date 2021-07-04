import { HttpAngularProvider } from './../../../providers/http-angular/http-angular';
import { Component } from "@angular/core";
import {
  Events,
  ModalController,
  NavController,
  NavParams,
  ViewController,
  ActionSheetController,
} from "ionic-angular";
import { HttpProvider } from "../../../providers/http/http";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { Constants } from "@app/constants";
import { Data } from "../../../providers/data/data";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { File } from '@ionic-native/file';
import { Crop } from '@ionic-native/crop';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: "add-new-driver-model-page",
  templateUrl: "add-new-driver-model.html",
})
export class AddDriverModelPage {
  private showNoPasstxt: boolean;
  private responseList: any;
  private busDetails: any;
  private user: FormGroup;
  driverName: any;
  private isAddNew: boolean;
  private isEdit: boolean;
  private croppedImagepath = "";
  private driverProfilePic: any;
  private isPhotoUploaded: boolean = false;


  constructor(
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private navParams: NavParams,
    private viewCtrl: ViewController,
    public dataService: Data,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private httpAngularProvider: HttpAngularProvider,
    private file: File,
    private crop: Crop,
    private camera: Camera,
    private actionSheetController: ActionSheetController
  ) {
    this.isAddNew = this.navParams.get("isAddNew");
    this.isEdit = this.navParams.get("isEdit");
    console.log("driverDtails", this.navParams.get("driverDetails"));
    console.log("isEdit", this.isEdit);

    this.user = this.formBuilder.group({
      username: ["", Validators.required],
      number: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    });
    if (this.isEdit) {
      let driverDetails = this.navParams.get("driverDetails");
      this.user.controls["username"].setValue(driverDetails.driverName);
      this.user.controls["number"].setValue(driverDetails.driverNumber);
      this.driverProfilePic = driverDetails.driverProfilePic
      console.log("driverProfilePic", this.driverProfilePic);
    }
  }
  ngOnInit() {
    this.checkLoginCredentials();
    //this.getAddNewDriver()
  }
  // for model closing
  dismiss(flag) {
    this.viewCtrl.dismiss(flag);
  }

  checkLoginCredentials() {
    let username = this.user.value;
    let number = this.user.value;
    if (
      this.utility.isEmptyOrNullOrUndefined(username) &&
      this.utility.isEmptyOrNullOrUndefined(number)
    ) {
      this.utility.showToast("User Name and Password can not be empty");
      console.log("username", this.user);
      return;
    } else if (this.utility.isEmptyOrNullOrUndefined(username)) {
      this.utility.showToast("User Name can not be empty");
      return;
    } else if (this.utility.isEmptyOrNullOrUndefined(number)) {
      this.utility.showToast("Password can not be empty");
      return;
    } else {
      // this.login()
    }
  }
  eventHandler(event) {
    ////console.log(event.keyCode);
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  }
  getAddNewDriver() {
    if (this.utility.isEmptyOrNullOrUndefined(this.driverProfilePic)) {
      this.utility.presentAlert("Kindly upload driver photo");
      return;
    }
    const { username, number } = this.user.value;
    let home = {
      url: "getAdminAddUpdateDriverDetails",
      data: {},
      isZenAdmin: true,
    };
    if (this.isAddNew) {
      home.data = {
        driverName: username,
        driverNumber: number,
        updationType: "add",
      };
    } else if (this.isEdit) {
      let driverDetails = this.navParams.get("driverDetails");
      home.data = {
        driverId: driverDetails.driverId,
        driverName: username,
        driverNumber: number,
        updationType: "update",
      };
    }
    console.log("response ", this.croppedImagepath)
    let fileURI = this.driverProfilePic
    let formData = new FormData();
    this.utility.updateLoader(true)
    if (this.isAddNew) {
      formData.append("driverName", username)
      formData.append("driverNumber", number)
      formData.append("updationType", "add")
    }
    else if (this.isEdit) {
      let driverDetails = this.navParams.get("driverDetails");
      formData.append("driverId", driverDetails.driverId)
      formData.append("driverName", username)
      formData.append("driverNumber", number)
      formData.append("updationType", "update")

    }
    let uploadDocs = {
      url: "getAdminAddUpdateDriverDetails",
      data: formData,
      isZenAdmin: true,
    };
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
            formData.append("files", imgBlob, `${fileName}.${fileExt}`)

            this.uploadFileApi(uploadDocs);
            // /**
            //  * Upload documents service call : UploadKRADatials
            //  */
            // console.log("file ", uploadDocs)
            // this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) => {
            //   this.utility.updateLoader(false)
            //   console.log("response ", response)

            //   if (response) {
            //     if (response.status["statusCode"] == 1) {
            //       this.utility.presentAlert(response.status["statusMessage"]).then((res)=>{
            //         this.viewCtrl.dismiss("add")
            //       })

            //       // this.showUploadedImg = true

            //       // this.getProfileDetails();

            //     }

            //   }
            // })

          }

        })
      }).catch((error) => {
        this.utility.updateLoader(false)
        console.log("error", error)
      })
    } else {
      formData.append("files",'')
      this.uploadFileApi(uploadDocs)
    }
    // this.httpProvider.http.commonService(home).subscribe(
    //   (response:any) => {
    //     if (response) {
    //       this.showNoPasstxt = false;
    //       this.utility.updateLoader(false);

    //       if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
    //         this.responseList = response["data"];
    //         this.driverName = this.responseList.busPassDetailDOs;
    //         let msg = this.isAddNew ? "add" : "";
    //         this.dismiss(msg);
    //       }
    //       if (response.status["statusCode"] == "16") {         
    //         this.showNoPasstxt = true;        
    //       }
    //     }
    //   },
    //   (error) => {
    //     this.utility.updateLoader(false);
    //   }
    // );
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
            this.driverProfilePic = this.croppedImagepath;
            this.isPhotoUploaded = true;
            // alert("pic captured")

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
