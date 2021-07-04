import { BusRulesModalComponent } from "./../../../components/zenadmin/bus-rules-modal/bus-rules-modal";
import { HttpProvider } from "./../../../providers/http/http";
import { CommonUtilities } from "./../../../providers/commonUtilities/commonUtilities";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import * as moment from "moment";

/**
 * Generated class for the AddNewPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-new-pass",
  templateUrl: "add-new-pass.html",
})
export class AddNewPassPage {
  private passForm: FormGroup;
  private shuttleForm: FormGroup;
  private busTypeList: any;
  private busDetails: any;
  private startDate: any;
  private passType: any;
  private routeList: any;
  private pickupPointList: any;
  private selectedPickupPtDetails: any;
  private pickupPointNames: Array<any> = [];
  private selectedAssociateList: Array<any> = [];
  private commentData: string = "";
  private isPassSubmitted: boolean = false;
  private successMsg: any;
  private checkBoxValue: boolean = false;
  private currentDate: any;
  private dailyPassType: any;
  private dailyPassOptions: any = [];
  private futureYear: any;
  private endDate: any;
  private submitted = false;
  private isSeatAvailable: boolean;
  private passReqType: any;
  private passSuccessData: any = {};
  private isNonZensarian: any = false;
  private nonZensarianID: any;
  private isDailyPassAllowed: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private modalCtrl: ModalController
  ) {

    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("passReqType"))) {
      this.passReqType = this.navParams.get("passReqType");
    }
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("isNonZensarian"))) {
      this.isNonZensarian = this.navParams.get("isNonZensarian") || false;
    }

    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("nonZensarianID"))) {
      this.nonZensarianID = this.navParams.get("nonZensarianID");
    }
  }

  ionViewDidLoad() { }

  ngOnInit() {
    this.currentDate = moment().format("YYYY-MM-DD")
    //generating controls for pass form 
    this.passForm = this.formBuilder.group({
      startDate: [{ value: "", disabled: true }, Validators.required],
      passType: [{ value: "", disabled: false }, Validators.required],
      routeName: [{ value: "", disabled: true }, Validators.required],
      pickupPoint: [{ value: "", disabled: true }, Validators.required],
      arrivalTime: [{ value: "", disabled: true }],
      comments: [{ value: "", disabled: false }],
      dailypassType: [""],
    },
      { validator: this.formValidator }
    );

    //generating controls for shuttle form 
    this.shuttleForm = this.formBuilder.group({
      startDate: [{ value: "", disabled: true }, Validators.required],
      passType: [{ value: "", disabled: false }, Validators.required],
      routeName: [{ value: "", disabled: true }, Validators.required],
      pickupPoint: [{ value: "", disabled: true }, Validators.required],
      dailypassType: [""],
    },
      { validator: this.shuttleformValidator }
    );

    this.getBusPassTypeList();
    this.getRouteList();

  }

  /**
   * Service call for bustype(Daily,Weekly,Monthly)
   */
  getBusPassTypeList() {
    this.utility.updateLoader(true);

    this.httpProvider.http.commonService({
      url: "getBusPassTypeList", data: { transportType: this.passReqType }, isZenAdmin: true
    }).subscribe((response) => {
      if (response) {
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
          this.busTypeList = response["data"];
          this.busDetails = response["data"].busPassDetailDO;
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  /**
   * Service call for daily bus passtype(Pickup,Drop,Pickup&Drop)
   */
  getDailyBusPassList() {
    this.utility.updateLoader(true);

    this.httpProvider.http.commonService({ url: "getBusPassSubTypeList", data: { transportType: this.passReqType, passType: this.passType }, isZenAdmin: true })
      .subscribe((response) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.dailyPassOptions = response["data"];
          }
        }
      }, (error) => {
        this.utility.updateLoader(false);
      });
  }

  /**
  * Handles pass type change event
  @param passType selected passtype
  */
  onPassTypeChange(passType) {
    // if passtype is daily get daily pass type list
    if (passType == "Daily") {
      this.getDailyBusPassList();
    }
    // calculating future dates for which pass can be aaplied for
    if (passType == "Monthly" || passType == "Daily" || passType == "Weekly") {
      // calculating dates for only current year
      var now = moment(new Date(), "DD-MM-YYYY");
      var month = now.format('M');
      var year = now.format('YYYY');
      if (parseInt(month) != 12) {
        this.endDate = moment().endOf("year").format("YYYY-MM-DD");
      } else {
        // if current month is December then show January month date
        var newDate = `${parseInt(year) + 1}-01-31`;
        this.endDate = moment(newDate.toString()).format("YYYY-MM-DD");
      }
    }
    // if pass type is changed then reset route name,arrival time 
    if (this.passForm.get("routeName").enabled) {
      this.passForm.get("routeName").reset();
      this.passForm.get("arrivalTime").reset();
    }
    if (this.passForm.get("pickupPoint").enabled) {
      this.passForm.get("pickupPoint").reset();
      this.passForm.get("arrivalTime").reset();
    }
    if (this.shuttleForm.get("routeName").enabled) {
      this.shuttleForm.get("routeName").reset();
    }
    if (this.shuttleForm.get("pickupPoint").enabled) {
      this.shuttleForm.get("pickupPoint").reset();
    }
    if (!this.utility.isEmptyOrNullOrUndefined(passType)) {
      this.passForm.controls.startDate.enable();
      this.shuttleForm.controls.startDate.enable();
    }
  }

  /**
  * Handles date change event
  @param date selected date
  */
  onDateChange(date) {
    // enable route name after date is selected
    if (!this.utility.isEmptyOrNullOrUndefined(date) && this.passReqType == "bus") {
      this.passForm.controls.routeName.enable();
    }

    if (this.passReqType == "bus") {
      // reset values on date change-for bus pass
      if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("pickupPoint").value)) {
        this.passForm.get("pickupPoint").reset();
        this.passForm.get("arrivalTime").reset();
      }
      if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("routeName").value)) {
        this.passForm.get("routeName").reset();
      }
    }
    // reset values on date change-for shuttle pass
    if (!this.utility.isEmptyOrNullOrUndefined(date) && this.passReqType == "shuttle") {
      this.shuttleForm.controls.routeName.enable();
    }
    if (this.passReqType == "shuttle") {
      if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("pickupPoint").value)) {
        this.shuttleForm.get("pickupPoint").reset();
      }
      if (!this.utility.isEmptyOrNullOrUndefined(this.passForm.get("routeName").value)) {
        this.shuttleForm.get("routeName").reset();
      }
    }
  }

  /**
 * Service call for route list-List of all the available routes
 */
  getRouteList() {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({ url: "getBusRouteList", data: { transportType: this.passReqType }, isZenAdmin: true })
      .subscribe((response) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.routeList = response["data"];
          }
        }
      }, (error) => {
        this.utility.updateLoader(false);
      });
  }

  /**
  * Handles route change event
  @param routeName selected route name
  */
  onRouteChange(routeName) {
    // reset values if route name is changed
    if (this.passForm.get("pickupPoint").enabled) {
      this.passForm.get("pickupPoint").reset()
      this.passForm.get("arrivalTime").reset()
    }
    if (!this.utility.isEmptyOrNullOrUndefined(routeName) && this.passReqType == "bus") {
      // service call to get route summary details
      this.getBusPassSummaryByRoute();
      // enabling pickup point control only after getting pickup point lists through getBusPassSummaryByRoute method
      this.passForm.controls.pickupPoint.enable();
    } else if (!this.utility.isEmptyOrNullOrUndefined(routeName) && this.passReqType == "shuttle") {
      this.getBusPassSummaryByRoute();
      this.shuttleForm.controls.pickupPoint.enable();
    }
  }

  /**
  * Handles pickup point change event
  @param pickupPt selected pickup point
  */
  onPickUpPtChange(pickupPt) {
    this.selectedPickupPtDetails = "";
    if (!this.utility.isEmptyOrNullOrUndefined(pickupPt)) {
      // returns selected pickup point detail and stores in selectedPickupPtDetails variable
      this.selectedPickupPtDetails = this.pickupPointList.find((item) => {
        if (item.pickupPointName == pickupPt) {
          return item;
        }
      });
      // set the arrival time for the selected pickup point
      if (this.passReqType == "bus")
        this.passForm.get("arrivalTime").setValue(this.selectedPickupPtDetails.arrivalTime);

      this.checkSeatAvailability(this.selectedPickupPtDetails.availableSeat);
    }
  }

  /**
   * Service call to retreive route details like cost,seats availablity and pickup points.
   * Called only after user has selected start date,route name and pass type
   */
  getBusPassSummaryByRoute() {
    this.pickupPointList = "";
    this.pickupPointNames = [];
    let home;
    this.utility.updateLoader(true);
    if (this.passReqType == "bus") {
      home = {
        url: "getBusPassSummaryByRoute",
        data: {
          routeName: this.passForm.get("routeName").value,
          passType: this.passForm.get("passType").value,
          startDate: this.passForm.get("startDate").value,
          transportType: this.passReqType,
          passSubType: this.passType.toLowerCase() == 'daily' ? this.passForm.get("dailypassType").value : ''

        },
        isZenAdmin: true,
      };
    }
    if (this.passReqType == "shuttle") {
      home = {
        url: "getBusPassSummaryByRoute",
        data: {
          routeName: this.shuttleForm.get("routeName").value,
          passType: this.shuttleForm.get("passType").value,
          startDate: this.shuttleForm.get("startDate").value,
          transportType: this.passReqType,
          passSubType: this.passType.toLowerCase() == 'daily' ? this.shuttleForm.get("dailypassType").value : '',
        },
        isZenAdmin: true,
      };
    }
    this.httpProvider.http.commonService(home).subscribe((response: any) => {
      if (response) {
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) &&
          response.status["statusCode"] == "1") {
          this.pickupPointList = response["data"];
          this.pickupPointList.forEach((item) => {
            this.pickupPointNames.push(item.pickupPointName);
          });
          console.log("pickupPointNames",this.pickupPointNames)

        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  /**
    * Service call for applying pass for Bus
    */
  submitPass() {
    this.utility.updateLoader(true);
    this.httpProvider.http.commonService({
      url: "applyBusPass",
      data: {
        startDate: this.passForm.get("startDate").value,
        passType: this.passForm.get("passType").value,
        routeName: this.passForm.get("routeName").value,
        pickupPointName: this.passForm.get("pickupPoint").value,
        arrivalTime: this.passForm.get("arrivalTime").value,
        comments: this.passForm.get("comments").value,
        isNonZensarian: this.isNonZensarian,
        transportType: this.passReqType,
        dailyPassType: this.passForm.get("dailypassType").value,
        userId: this.isNonZensarian ? this.nonZensarianID : null
      },
      isZenAdmin: true,
    }).subscribe((response: any) => {
      if (response) {
        this.submitted = false;
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
          this.passSuccessData = response["data"]
          this.successMsg = this.passSuccessData.busPassStatusMessageDetails
          this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
            this.isPassSubmitted = true;
          });
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  /**
   * Custom form validator for Bus pass.
   * Checks if selected date is a weekend for daily pass.
   * Also checks if daily pass type control is empty.
   * Checks if daily pass is applied after 6.30pm.
   * @param group all the bus pass form controls
   */
  formValidator(group: FormGroup): any {
    if (group) {
      let startDate = group.get("startDate").value;
      let dailyPassTypeVal = group.get("dailypassType").value;
      if (startDate) {
        if (startDate == "") {
          return { startDateIsempty: true };
        } else {
          let formatDate = moment(startDate).format("YYYY-MM-DD");
          const tempdate = moment(formatDate); // Thursday Feb 2015
          const dow = tempdate.day()
          if (dow == 0 || dow == 6) return { IsWeekend: true };
        }
      }
      if (group.get("passType").value != "") {
        if (group.get("passType").value == "Daily" && (dailyPassTypeVal == "" || dailyPassTypeVal == null)) {
          return { dailypassIsEmpty: true };
        }
      }
      if (group.get("passType").value != "") {
        if (group.get("passType").value == "Daily" && (group.get("startDate").value != '' || group.get("startDate").value != null)) {
          let time = moment().format('HH:mm');
          let timeArray = time.split(':')
          let startTime = group.get("startDate").value
          var today = moment();
          if ((startTime != '' || startTime != null) && moment(startTime).isSame(today, 'day')) {
            if (parseInt(timeArray[0]) >= 18) {
              if (parseInt(timeArray[1]) >= 30) {
                return { passNotAllowed: true };
              }
            }
          }
        }
      }
    }

    return null;
  }

  /**
   * Method checks whether form is valid or not;
   * If form is invalid show appropriate error messages else calls submitPass/bookShuttle method
   */
  verifySubmitDetails() {
    if (this.passForm.invalid && this.passReqType == "bus") {
      this.submitted = true;
      return;
    } else if (this.shuttleForm.invalid && this.passReqType == "shuttle") {
      this.submitted = true;
      return;
    }

    if (!this.isSeatAvailable) {
      this.utility.presentAlert("Seats not available");
      return;
    } else {
      this.utility.presentConfirmation("Do you want to add new pass?").then((res) => {
        if
        (this.passReqType == "bus") this.submitPass();
        else if
        (this.passReqType == "shuttle") this.bookShuttle();
      }, (err) => {

      });
    }
  }

  /**
   * Method returns string value(available or not available) based on seat count.
   * returns "available" if seat count is greater than 0.
   * @param seatCount number of seats available for particular pickup point
   */
  checkSeatAvailability(seatCount) {
    if (seatCount > 0) {
      this.isSeatAvailable = true;
      return "Available";
    } else if (seatCount == 0) {
      this.isSeatAvailable = false;
      return "Not Available";
    }
  }

  /**
   * Method to make call 
   * @param number number for call
   */
  call(number) {
    this.utility.callNumber(number);
  }

  /**
   * Custom form validator for Shuttle pass.
   * Checks if selected date is a weekend for daily pass.
   * Also checks if daily pass type control is empty.
   * @param group all the shuttle form controls
   */
  shuttleformValidator(group: FormGroup): any {
    if (group) {
      let startDate = group.get("startDate").value
      let dailyPassTypeVal = group.get("dailypassType").value

      if (startDate) {
        if (startDate == "") {
          return { startDateIsempty: true }
        } else {
          let formatDate = moment(startDate).format("YYYY-MM-DD")
          const tempdate = moment(formatDate) // Thursday Feb 2015
          const dow = tempdate.day()
          if (dow == 0 || dow == 6) return { IsWeekend: true }
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

  /**
   * Service call for applying pass for Shuttle
   */
  bookShuttle() {
    this.utility.updateLoader(true);

    this.httpProvider.http.commonService({
      url: "applyBusPass",
      data: {
        startDate: this.shuttleForm.get("startDate").value,
        passType: this.shuttleForm.get("passType").value,
        routeName: this.shuttleForm.get("routeName").value,
        pickupPointName: this.shuttleForm.get("pickupPoint").value,
        isNonZensarian: this.isNonZensarian,
        transportType: this.passReqType,
        dailyPassType: this.shuttleForm.get("dailypassType").value,
      },
      isZenAdmin: true,
    }).subscribe((response: any) => {
      if (response) {
        this.submitted = false;
        this.utility.updateLoader(false);
        if (!this.utility.isEmptyOrNullOrUndefined(response["data"]) && response.status["statusCode"] == "1") {
          this.passSuccessData = response["data"];
          this.successMsg = this.passSuccessData.busPassStatusMessageDetails;
          this.utility.presentAlert(response.status["statusMessage"]).then((res) => {
            this.isPassSubmitted = true;
          });
        }
      }
    }, (error) => {
      this.utility.updateLoader(false);
    });
  }

  /**
  * Opens modal for buss pass rules
  *
  */
  openRulesModal() {
    this.modalCtrl.create(BusRulesModalComponent, { dataParams: {}, }, { cssClass: "", }).present();
  }

  /**
 * Handles daily pass type change event
 @param passType  selected daily passtype
 */
  onDailyTypeChange(passType) {
    // Reset values if daily pass type is changed
    if (this.passForm.get("routeName").enabled && this.passForm.get("startDate").enabled) {
      this.passForm.get("pickupPoint").reset()
      this.passForm.get("arrivalTime").reset()
      this.passForm.get("routeName").reset()
      this.passForm.get("startDate").reset()


    }
  }

}
