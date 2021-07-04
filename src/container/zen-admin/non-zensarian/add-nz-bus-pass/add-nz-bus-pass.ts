import { BusRulesModalComponent } from "../../../../components/zenadmin/bus-rules-modal/bus-rules-modal";
import { HttpProvider } from "../../../../providers/http/http";
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Item,
  AlertController,
  ModalController,
} from "ionic-angular";
import * as moment from "moment";

/**
 * Generated class for the AddNzBusPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-nz-bus-pass",
  templateUrl: "add-nz-bus-pass.html",
})
export class AddNzBusPassPage {
  private passForm: FormGroup;
  private shuttleForm: FormGroup;
  private busTypeList: any;
  private busDetails: any;
  private startDate: any;
  private passType: any;
  private routeList: any;
  private pickupPointList: any;
  private selectedPickupPtDetails: any;
  private selectedAssociateList: Array<any> = [];
  // private valueList: any = ['Qualitative', 'Quantitative']
  private commentData: string = "";
  private isPassSubmitted: boolean = false;
  private successMsg: any;
  private checkBoxValue: boolean = false;
  private currentDate: any;
  private dailyPassType: any;
  private dailyPassOptions: any = [];
  private selectedPickupIndex = 0;
  private futureYear: any;
  private endDate: any;
  private submitted = false;
  private isSeatAvailable: boolean;
  private passReqType: any;
  private passSuccessData: any = {};

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private modalCtrl: ModalController
  ) {
    if (
      !this.utility.isEmptyOrNullOrUndefined(this.navParams.get("passReqType"))
    ) {
      this.passReqType = this.navParams.get("passReqType");
      console.log("passs type", this.passReqType);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddNewPassPage");
  }
  ngOnInit() {
    this.currentDate = moment().format("YYYY-MM-DD");
    this.passForm = this.formBuilder.group({
      startdate: ["", Validators.required],
      passtype: ["", Validators.required],
      routename: ["", Validators.required],
      pickuppoint: ["", Validators.required],
      arrivalTime: ["", Validators.required],
      comments: [""],
    });
    this.getBusPassTypeList();
    this.getRouteList();
  }
  getBusPassTypeList() {
    this.utility.updateLoader(true);
    let home = {
      url: "getBusPassTypeList",
      data: {},
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.busTypeList = response["data"];
            this.busDetails = response["data"].busPassDetailDO;
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }

  onPassTypeChange() {
    console.log("User Form Values::", this.passForm);
    this.passType = this.passForm.value.passtype;

    if (this.passType == "Daily" || this.passType == "Weekly") {
      let newDate = moment().add(1, "years");
      this.futureYear = moment(newDate).format("YYYY-MM-DD");
      console.log("End Date:::", this.futureYear);
      this.endDate = this.futureYear;
    }
    if (this.passType == "Monthly") {
      let newDate = moment().add(2, "months");
      console.log("newDate", newDate);
      let futureMonths = moment(newDate).format("YYYY-MM-DD");
      this.endDate = futureMonths;
    }
    // if (this.passForm.get("routeName").enabled) {
    //   this.passForm.get("routeName").reset();
    //   this.passForm.get("arrivalTime").reset();
    // }
    // if (this.passForm.get("pickupPoint").enabled) {
    //   this.passForm.get("pickupPoint").reset();
    //   this.passForm.get("arrivalTime").reset();
    // }
    // if (this.shuttleForm.get("routeName").enabled) {
    //   this.shuttleForm.get("routeName").reset();
    // }
    // if (this.shuttleForm.get("pickupPoint").enabled) {
    //   this.shuttleForm.get("pickupPoint").reset();
    // }
  }

  onDateChange(date) {
    console.log("date", date);

    if (
      !this.utility.isEmptyOrNullOrUndefined(date) &&
      this.passReqType == "bus"
    ) {
      this.passForm.controls.routeName.enable();
    }
    if (this.passReqType == "bus") {
      if (
        !this.utility.isEmptyOrNullOrUndefined(
          this.passForm.get("pickupPoint").value
        )
      ) {
        this.passForm.get("pickupPoint").reset();
        this.passForm.get("arrivalTime").reset();
      }
      if (
        !this.utility.isEmptyOrNullOrUndefined(
          this.passForm.get("routeName").value
        )
      ) {
        this.passForm.get("routeName").reset();
      }
    }

    if (
      !this.utility.isEmptyOrNullOrUndefined(date) &&
      this.passReqType == "shuttle"
    ) {
      this.shuttleForm.controls.routeName.enable();
    }
    if (this.passReqType == "shuttle") {
      if (
        !this.utility.isEmptyOrNullOrUndefined(
          this.passForm.get("pickupPoint").value
        )
      ) {
        this.shuttleForm.get("pickupPoint").reset();
      }
      if (
        !this.utility.isEmptyOrNullOrUndefined(
          this.passForm.get("routeName").value
        )
      ) {
        this.shuttleForm.get("routeName").reset();
      }
    }
  }
  getRouteList() {
    this.utility.updateLoader(true);
    let home = {
      url: "getBusRouteList",
      data: {
        transportType :this.passReqType
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.routeList = response["data"];
            console.log("passDetails", this.routeList);
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  getBusPassSummaryByRoute() {
    this.pickupPointList = "";
    let home;
    this.utility.updateLoader(true);
    home = {
      url: "getBusPassSummaryByRoute",
      data: {
        routeName: this.passForm.get("routename").value,
        passType: this.passForm.get("passtype").value,
        startDate: this.passForm.get("startdate").value,
      },
      isZenAdmin: true,
    };
    this.httpProvider.http.commonService(home).subscribe(
      (response) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.pickupPointList = response["data"];
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  getBusPassSubTypeList() {
    this.pickupPointList = "";
    let home;
    this.utility.updateLoader(true);
    if (this.passReqType == "bus") {
      home = {
        url: "getBusPassSubTypeList",
        data: {
          passType: "Daily",
        },
        isZenAdmin: true,
      };
    }
    this.httpProvider.http.commonService(home).subscribe(
      (response) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.pickupPointList = response["data"];
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  submitPass() {
    this.utility.updateLoader(true);
    let home = {
      url: "applyBusPass",
      data: {
        startDate: this.passForm.get("startdate").value,
        passType: this.passForm.get("passtype").value,
        routeName: this.passForm.get("routename").value,
        pickupPointName: this.passForm.get("pickuppoint").value,
        arrivalTime: this.passForm.get("arrivalTime").value,
        comments: this.passForm.get("comments").value,
      },
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response:any) => {
        if (response) {
          this.submitted = false;
          this.utility.updateLoader(false);
          if (
            !this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
            response.status["statusCode"] == "1"
          ) {
            this.passSuccessData = response["data"];
            this.successMsg = this.passSuccessData.busPassStatusMessageDetails;
            console.log("successMsg", this.successMsg);
            this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
              this.isPassSubmitted = true;
            });
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }
  onPickUpPtChange(pickupPt) {
    this.selectedPickupPtDetails = "";
    if (!this.utility.isEmptyOrNullOrUndefined(pickupPt)) {
      this.selectedPickupPtDetails = this.pickupPointList.find((item) => {
        if (item.pickupPointName == pickupPt) {
          return item;
        }
      });
    }
  }
  call(number) {
    this.utility.callNumber(number);
  }

  openRulesModal() {
    let modal = this.modalCtrl.create(
      BusRulesModalComponent,
      {
        dataParams: {},
      },
      {
        cssClass: "",
      }
    );

    modal.present();
  }
}
