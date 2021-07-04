import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core'
import { IonicPage, NavController, ModalController, Navbar, Content, AlertController, Platform } from 'ionic-angular'
import { NavParams } from 'ionic-angular/navigation/nav-params'
import { HttpProvider } from '../../providers/http/http'
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { KraTrainingComponent } from '../../components/kra-training/kra-training'
import { Attachment } from '../../providers/attachment/attachment'
import { File } from '@ionic-native/file'
import { HttpAngularProvider } from '../../providers/http-angular/http-angular'
import { ActionSheetController } from 'ionic-angular'
import { Download } from '../../providers/download/download';
import { PromotionDetailsComponent } from '../../components/promotion-details/promotion-details';
import { PerformanceMeasuretextAreaComponent } from '../../components/performance-measuretext-area/performance-measuretext-area';
import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()
@Component({
  selector: 'page-zen-deavor-kra',
  templateUrl: 'zen-deavor-kra.html',
})
export class ZenDeavorKraPage implements OnInit
{

  // @ViewChild('achievRef') nameInputRef: any;
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Content) content: Content;
  @ViewChild('ratingForm') ratingForm;
  @ViewChild('KRAContainer', { read: ElementRef }) public widgetsContent: ElementRef;
  private KRADetails: any = {}
  private pageTitle: string = ""
  private KRADetailsUrl: any = "getKraDetails"
  private saveKRAUrl: any = "saveKRA"
  private attachmentList: any = []
  private kraId: string = '0'
  private subKraId: any = '0'
  private showWhenData: any
  private kraWeightage: any
  private uploadKRADetailsUrl: any = "uploadKraDetail"
  private deleteAttachmentUrl: any = "deleteAttachment"
  private submitUrl: string = "submitAppraisal"
  private selfRating: string
  private selfAppraisal: string
  private criticalIncident: string
  private managerSelfRating: any;
  private managerComments: string
  private userID: any
  private finalStatus: any
  private midTerm: any
  private userRole: any
  private regExp: any
  private kraType: any
  private isServiceCallOn: boolean = false
  private tooltipEvent: 'click' | 'press' = 'click'
  private activeToolTip: boolean = false
  private processType: any;
  private reviewerRating: any;
  private reviewerComment: any;
  private reviewerFieldList: any = [];
  private goalFeildList: any = [];
  private careerAspiration1: any;
  private careerAspiration2: any;
  private careerAspiration3: any;
  private achievement: any;
  private saveKra: any = {};
  private kraScoreUrl: any = "kraScore"
  private kraTarget: any;
  private kraFloor: any;
  private kraScore: any = '0';
  private goalsDetails: any;
  private designationListUrl: any = 'getDesignationList';
  private desingnationList: any;
  private decision: any;
  private designationTitle: any;
  private promotionJustificationByAppraiserValue: any;
  private mobilityTextarea: any = false;
  private isDirectApproveStatus: any = 'false';
  private initialKraScore: any = '0';
  private appraiserViewDetails: any = {};
  private appraiserViewRole: any;
  private appriaserViewDesignation: any;
  private appraiserViewJustification: any;
  private reviewerViewDetails: any = {};
  private reviewerViewRole: any;
  private reviewerViewDesignation: any;
  private reviewerViewJustification: any;
  private mobilityConstraintField: Array<any> = [];
  private mobilityDecision: any;
  private mobilitySpecification: any;
  private promotionAppraiserJustification: Array<any> = [];
  private promotionReviewerJustification: Array<any> = [];
  private appraiserJustification: any;
  private reviewerJustification: any;
  private reviewerPromoDecision: any;
  private reviewerGivenRole: any;
  private reviewerGivenDesig: any;
  private appraiserPromoView: boolean = false;
  private reviewerPromoView: boolean = false;
  private deleteAttachmentId = 0;

  private ic: string;
  private desig: string;
  private midTermDetails: any;
  private midtermfloorData: any
  private midtermTargetData: any
  private endTermDetails: any;
  private endtermfloorData: any
  private endtermTargetData: any
  private kraScoreUrlMidterm: any = 'totalScore'
  private kraConflictStatus: any
  private overrrideKraUrl: any = "overridingExistingKra"
  private midTermGuidelinePdfUrl: any
  private compentencyValues: any = [];
  //declare new variable for showing total score on header for both mid term & annual

  private showGlobalScore: any;
  private thirdUpComments: any = [];
  private isPromotionDetailsFilled: boolean = false;
  private firstUpComments: any = [];
  private promotionValues: any;
  private isComingFromHome: any;

  // show view profile icon
  private comingFromManager: boolean = false;



  // promotion details variables
  icTitle: any = "";
  titleDesig: any = "";
  icList: any = [];
  designationList: any = [];
  private options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'yes',
    shouldPauseOnSuspend: 'yes', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'yes',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only,
  };
  private isSaveSummaryCalled: boolean = false;


  constructor(private navCtrl: NavController, private navParams: NavParams, private httpProvider: HttpProvider,
    private utility: CommonUtilities, private modalCtrl: ModalController, private attachment: Attachment, private file: File,
    private httpAngularProvider: HttpAngularProvider, private zone: NgZone, private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController, private download: Download, private platform: Platform, private inappbrowser: InAppBrowser, private keyboard: Keyboard)
  {


    /**
     * getting required values as params from teamlistPage. 
     */
    this.pageTitle = this.navParams.get('pageTitle')
    this.userRole = this.navParams.get('role')
    this.userID = this.navParams.get('userID')
    this.finalStatus = this.navParams.get('finalStatus')
    this.kraType = this.navParams.get('kraType')
    this.isComingFromHome = this.navParams.get('isComingFromHome');
    this.comingFromManager = this.navParams.get('comingFromManager');
    console.log("userID", this.kraType);


    // when reviewer selects direct approve & is associate is eligible for promotion then show goals page
    if (this.navParams.get('showWhenData'))
    {
      // this.showWhenData = "Summary"
      this.kraId = "-2"
      this.isDirectApproveStatus = this.navParams.get('isDirectApprove') || 'false'

    }
    this.icList = [
      { "title": "IC", 'value': 'Individual Contributor' },
      { "title": "PM", 'value': 'People Manager' },
    ]

  }

  ionViewDidLoad()
  {
  }

  ionViewWillEnter()
  {

    let isSubmitted = this.navParams.get('submitStatus')
    let kraId = this.navParams.get('kraId')
    let title = this.navParams.get('title')



    /**
         * If the status of the KRA is submitted and the userRole is manager then user should redirected to TeamList page.
         */
    if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '2')
    {
      this.navCtrl.popTo('ZendeavorTeamListPage');
    }

    /**
         * If the status of the KRA is submitted and the userRole is reviewer then user should redirected to ReviewerList page.
         */
    if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '3')
    {
      this.navCtrl.popTo('ZendeavorReviewerListPage');
    }
    /**
     * If the status of the KRA is submitted and the userRole is associate then user should be redirected to preview message .
     */
    else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '1')
    {
      this.kraId = '-1'
      this.getKRADetails(this.kraId, this.subKraId)
    }
    /** 
      * If the status of the KRA is not submitted and the userRole is associate then user should be redirected to the respective kRA.
      */
    else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '1')
    {
      if (!this.utility.isEmptyOrNullOrUndefined(kraId))
      {
        this.kraId = kraId
      }

      /** 
            * gets the title of the KRA
            */
      if (!this.utility.isEmptyOrNullOrUndefined(title))
      {
        this.showWhenData = title
      }
      this.getKRADetails(this.kraId, this.subKraId)
    } else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '2')
    {
      if (!this.utility.isEmptyOrNullOrUndefined(kraId))
      {
        this.kraId = kraId
      }
      if (!this.utility.isEmptyOrNullOrUndefined(title))
      {
        this.showWhenData = title
      }
      this.getKRADetails(this.kraId, this.subKraId)
    }
    // role 3
    else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '3')
    {
      if (!this.utility.isEmptyOrNullOrUndefined(kraId))
      {

        this.showWhenData = title
        //console.log("title 3up", this.showWhenData)
        this.kraId = kraId
        this.getKRADetails(this.kraId, this.subKraId)
      }
    }
    else
    {
      this.getKRADetails(this.kraId, this.subKraId)
    }
  }

  ngOnInit()
  {
  }

  /**
   * this function gets the KRA details with the fields on clicking particular option in the header
   * @param kraId 
   */
  getKRADetails(kraId, subkraId)
  {
    this.isSaveSummaryCalled = false;

    // this.resetKraScore(this.kraId);

    // Clearing Data
    // this.KRADetails.fieldDetails = {}  

    /**
     * When reviewer(2UP) selects directapprove option from reviwers list he is redirected to goals page 
     * if associate is eligible for promotion and the isDirectApproveStatus is set to true ,if 2UP goes to next page isDirectApproveStatus is set to true
     * If 2UP goes backwards(i.e selects between KRA1 to KRA5 ) then set isDirectApproveStatus to false
     */
    let directapproveFlag = this.isDirectApproveStatus

    if (directapproveFlag)
    {
      if (kraId == '-2' || kraId == "-1")
      {
        directapproveFlag = true
      }
      else
        directapproveFlag = false
    }
    this.isDirectApproveStatus = directapproveFlag
    //console.log("isdirectapprove", directapproveFlag)


    this.utility.updateLoader(true)
    let kraDetails = {
      url: this.KRADetailsUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "kraId": kraId,
        "subKraId": subkraId,
        "role": this.userRole,
        "processType": this.kraType,
        "isDirectApprove": this.isDirectApproveStatus
      },
      zenDeavorURL: true
    }
    this.isServiceCallOn = true
    this.httpProvider.http.commonService(kraDetails).subscribe((response: any) =>
    {
      /**
       * extracting the kraList through which the user switches to different KRAs.
       */
      //console.log(response)

      this.isServiceCallOn = false
      if (response)
      {
        this.utility.updateLoader(false)
        if (response.details)
        {
          this.KRADetails = response.details
          this.midTerm = this.KRADetails.midtermMaxTtxn
          this.attachmentList = response.details.attachment
          console.log(this.attachmentList);
          this.userID = this.KRADetails.userId
          this.goalsDetails = this.KRADetails.goalsDetails
          this.kraConflictStatus = this.KRADetails.kra_conflict
          console.log("kraType", this.kraType)
          console.log("kraConflictStatus", this.kraConflictStatus)
          this.midTermGuidelinePdfUrl = this.KRADetails.midTermGuideLinePdf
          console.log("midTermGuidelinePdfUrl", this.midTermGuidelinePdfUrl)

          if (this.kraId == "-2" && this.kraType == 'Annual')
          {
            console.log(this.KRADetails.competencyFieldList.keyValueList[0]);
            if (this.KRADetails.competencyFieldList)
            {
              this.KRADetails.competencyFieldList.keyValueList[0].isOpen = true;
            }
          }


          // promotion details for the appraiser
          if (this.KRADetails.goalsDetails != null && this.kraType == 'Annual')
          {
            this.appraiserViewDetails = this.KRADetails.goalsDetails.AppraiserView
            //console.log("hello appraiser", this.appraiserViewDetails);

            this.appraiserViewRole = this.appraiserViewDetails.role
            this.appriaserViewDesignation = this.appraiserViewDetails.designation
            this.appraiserViewJustification = this.appraiserViewDetails.justification


          }

          // promotion details for the reviewer
          if (this.KRADetails.goalsDetails != null && this.kraType == 'Annual')
          {
            this.reviewerViewDetails = this.KRADetails.goalsDetails.ReviewerView
            //console.log("hello reviewer", this.reviewerViewDetails);


            this.reviewerViewRole = this.reviewerViewDetails.role
            this.reviewerViewDesignation = this.reviewerViewDetails.designation
            this.reviewerViewJustification = this.reviewerViewDetails.justification
          }

          /**
           * mobility constraint 
           */

          this.mobilityConstraintField = this.KRADetails.mobilityConstraintFieldList
          //console.log("mobility", this.mobilityConstraintField);

          this.promotionAppraiserJustification = this.KRADetails.promotionFieldListForAppraiser
          //console.log("promo", this.promotionAppraiserJustification)

          this.promotionReviewerJustification = this.KRADetails.promotionFieldListForReviewer
          //console.log("promo", this.promotionReviewerJustification)

          if (this.kraId == '0')
          {
            this.kraId = this.KRADetails.kraStatusList[0].kraId
            this.showWhenData = this.KRADetails.kraStatusList[0].title
            this.kraWeightage = this.KRADetails.kraStatusList[0].kraWeightage
            // this.kraFloor = this.KRADetails.kraStatusList[0].floor
            // this.kraTarget = this.KRADetails.kraStatusList[0].target
          }

          /**
           * extracting the floor and target values of each KRA 
           */
          if (this.KRADetails.fieldDetails != null)
          {
            this.KRADetails.fieldDetails.filter((floorTarget) =>
            {

              if (floorTarget.title == 'Floor')
              {
                this.kraFloor = floorTarget.titleValue
                //console.log("floorsss", this.kraFloor)
              }
              if (floorTarget.title == 'Target')
              {
                this.kraTarget = floorTarget.titleValue
                //console.log("target", this.kraTarget)
              }
              if (floorTarget.title == 'Weightage')
              {
                this.kraWeightage = floorTarget.titleValue
                //console.log("target", this.kraTarget)
              }
              // getting midterm and end term floor /target values
              if (floorTarget.bindWith == 'midTerm')
              {
                this.midTermDetails = floorTarget.midTermFieldList
              }
              if (floorTarget.bindWith == 'annual')
              {
                this.endTermDetails = floorTarget.annualFielList
              }
            })
          }

          // changed by chinmay for annual floor target calculation
          if (this.endTermDetails && this.kraType == 'Annual')
          {
            this.endTermDetails.filter((endTermData) =>
            {
              if (endTermData.bindWith == 'annualFloor')
              {
                this.kraFloor = endTermData.titleValue;
              }
              if (endTermData.bindWith == 'annualTarget')
              {
                this.kraTarget = endTermData.titleValue;
              }
            })
          }

          // Calculate score for associate if already given self rating
          if (this.KRADetails.associatesFeildList != null)
          {
            this.KRADetails.associatesFeildList.filter((associate) =>
            {

              if (associate.bindWith == 'achievement')
              {
                this.achievement = associate.titleValue
                //console.log("achievement", this.achievement)
              }
            })
          }

          if (!this.utility.isEmptyOrNullOrUndefined(this.achievement) && this.userRole == 1)
          {
            this.displayScore(event, this.achievement)
          } else if (!this.achievement)
          {
            this.displayScore(event, 0)
          }

          /**
           * Calculate score for 1up if already given self rating
           */
          if (this.KRADetails.managerFeildList != null)
          {
            this.KRADetails.managerFeildList.filter((managerItem) =>
            {

              if (managerItem.bindWith == 'appraiserRating')
              {
                this.managerSelfRating = managerItem.titleValue
              }
            })
          }
          if (!this.utility.isEmptyOrNullOrUndefined(this.achievement) && this.userRole == 2)
            this.displayScore(event, this.managerSelfRating)

          /**
            * Calculate score for 2up if already given rating
            */
          if (this.KRADetails.reviewerFieldList != null)
          {
            this.KRADetails.reviewerFieldList.filter((reviewerItem) =>
            {
              if (reviewerItem.bindWith == 'reviewerRating')
              {
                this.reviewerRating = reviewerItem.titleValue
              }
            })
          }
          if (!this.utility.isEmptyOrNullOrUndefined(this.achievement) && this.userRole == 3)
            this.displayScore(event, this.reviewerRating)



          if (!this.utility.isEmptyOrNullOrUndefined(this.midTermDetails))
          {
            this.midtermfloorData = this.midTermDetails[0]
            this.midtermTargetData = this.midTermDetails[1]
            // console.log("midtermfloorData", this.midtermfloorData)

          }
          if (!this.utility.isEmptyOrNullOrUndefined(this.endTermDetails))
          {
            console.log(this.endTermDetails)
            this.endtermfloorData = this.endTermDetails[0]
            this.endtermTargetData = this.endTermDetails[1]
            // console.log("midtermfloorData", this.endTermDetails)

          }
          if (this.kraConflictStatus == '1' && kraId == '0' && (this.kraType == 'Mid-Term' || this.kraType == 'Annual'))
          {
            this.showAlertOnKraConflict().then((response =>
            {
              // console.log("response", response)
              if (true)
              {
                // this.savekraForHomePage()
                // this.gotoNextButton()
                this.overrideExistingKRA(kraId)
              }

            }))
          }

        }
      }

    })
  }
  /**
   * Toggle the  button for selection
   * @param kraId contain the selceted KRA no.(unique)
   * @param subKraId contain the subKRA no. (unique)
   * @param kraTitle contain the selected KRA Name
   * @param kraWeightage contain the weightage of selceted KRA
   */
  _getSelectedData(kraId: string, kraTitle: string, kraWeightage: string, subkraId: string)
  {
    //console.log("hello id", this.kraId);
    this.kraId = kraId;
    this.showWhenData = kraTitle;
    this.kraWeightage = kraWeightage;
    this.subKraId = subkraId;
    if (kraTitle == 'Preview')
      this.KRADetailsUrl = 'getKraDetails'

    this.getKRADetails(kraId, this.subKraId)
    this.resetKraScore(this.kraId);
    // if (!this.utility.isEmptyOrNullOrUndefined(this.achievement))
    //   this.displayScore(event, this.achievement)
  }



  /**
    * This function saves the KRAs fields filled by the associates.
    */
  saveKRA(moveToNext)
  {
    this.isSaveSummaryCalled = true;
    const apprisalPromotionList = [];
    const reviewerPromotionList = [];
    let apprisalPromotionPrefilledData = [];
    let reviewerPromotionPrefilledData = [];

    if (this.showWhenData == 'Home')
    {
      this.gotoNextButton()
      // this.getKRADetails(1)
      return
    }
    if (this.kraId == '1' && this.kraType == 'Mid-Term')
    {
      this.gotoNextButton()
      return
    }





    /**
        * this iterates the fields of the form and stores the value entered by the associate.
        */
    if (this.KRADetails.associatesFeildList != null)
    {
      this.KRADetails.associatesFeildList.filter((item) =>
      {
        if (item.bindWith == 'achievement')
          this.achievement = item.titleValue

        if (item.bindWith == 'selfAppraisal')
          this.selfAppraisal = item.titleValue

        if (item.bindWith == 'criticalIncident')
          this.criticalIncident = item.titleValue

      })
    }

    /**
   * this iterates the fields of the form and stores the value entered by the 1-Up manager.
   */
    if (this.KRADetails.managerFeildList != null)
    {
      this.KRADetails.managerFeildList.filter((managerItem) =>
      {
        //console.log("manager", this.KRADetails.managerFeildList)
        if (managerItem.bindWith == 'appraiserRating')
        {
          this.managerSelfRating = managerItem.titleValue
        }
        if (managerItem.bindWith == 'appraiserComment')
        {
          this.managerComments = managerItem.titleValue
        }
      })
    }
    /**
    *  this iterates the fields of the form and stores the value entered by the 2-Up manager.
   */
    if (this.KRADetails.reviewerFieldList != null)
    {
      this.KRADetails.reviewerFieldList.filter((reviewerItem) =>
      {
        if (reviewerItem.bindWith == 'reviewerRating')
        {
          this.reviewerRating = reviewerItem.titleValue
        }
        if (reviewerItem.bindWith == 'reviewerComment')
        {
          this.reviewerComment = reviewerItem.titleValue
        }
      })
    }

    // if (!this.utility.isEmptyOrNullOrUndefined(this.achievement))
    //   this.displayScore(event, this.achievement)
    /**
     * this iterates the fields of the form and stores the goals set by the associate. 
     */
    //console.log("this.KRADetails", this.KRADetails.goalFeildList);
    if (this.KRADetails.goalFeildList != null)
    {
      this.KRADetails.goalFeildList.filter((goalsItem) =>
      {
        //console.log("goals", goalsItem);
        if (goalsItem.bindWith == 'careerAspiration1')
        {
          this.careerAspiration1 = goalsItem.titleValue
        }
        if (goalsItem.bindWith == 'careerAspiration2')
        {
          this.careerAspiration2 = goalsItem.titleValue
        }
        if (goalsItem.bindWith == 'careerAspiration3')
        {
          this.careerAspiration3 = goalsItem.titleValue
        }
      })
    }

    if (this.KRADetails.mobilityConstraintFieldList != null)
    {
      this.KRADetails.mobilityConstraintFieldList.filter((mobilityItems) =>
      {
        if (mobilityItems.bindWith == 'mobilitySpecification')
        {
          this.mobilitySpecification = mobilityItems.titleValue
        }
      })
    }


    if (this.KRADetails.promotionFieldListForAppraiser != null)
    {
      this.KRADetails.promotionFieldListForAppraiser.filter((promoItems) =>
      {

        if (promoItems.bindWith == 'promotionJustificationByAppraiser')
        {
          this.appraiserJustification = promoItems.titleValue;
        }
      })
    }
    if (this.KRADetails.promotionFieldListForReviewer != null)
    {
      this.KRADetails.promotionFieldListForReviewer.filter((promoItems) =>
      {


        if (promoItems.bindWith == 'promotionJustificationByReviewer')
        {
          this.reviewerJustification = promoItems.titleValue;
        }
      })
    }






    //validating competency for kra id = -2 and for associate 

    if (this.kraId == '-2' && this.userRole == '1')
    {
      for (const props in this.ratingForm.value)
      {
        if (this.ratingForm.value[props] == null)
        {
          this.utility.presentAlert("Please fill all the competency details");
          return;
        }
      }

      for (const props in this.ratingForm.value)
      {
        this.compentencyValues.push({ 'id': props, 'value': this.ratingForm.value[props] })
      }

    }

    // validating competency for kra id = -2 and for appraisal 
    if (this.kraId == '-2' && this.userRole == '2')
    {
      for (const props in this.ratingForm.value)
      {
        if (this.ratingForm.value[props] == null)
        {
          this.utility.presentAlert("Please fill all the details");
          return;
        }
      }
      for (const props in this.ratingForm.value)
      {
        this.compentencyValues.push({ 'id': props, 'value': this.ratingForm.value[props] })
      }
    }

    //    Check promotion details for appraisal
    if (this.kraId == '-2' && this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser && this.userRole == '2' && this.KRADetails.appraiserPromotionDetailList)
    {


      this.KRADetails.appraiserPromotionDetailList.forEach(element =>
      {
        if (element.titleValue != null && element.titleValue != '')
        {
          apprisalPromotionPrefilledData.push({ 'id': element.id, 'value': element.titleValue })
        }
      });
      console.log(apprisalPromotionPrefilledData);
      if (this.thirdUpComments.length == 0 && apprisalPromotionPrefilledData.length == 0)
      {
        this.isPromotionDetailsFilled = true;
        return;
      } else
      {
        this.isPromotionDetailsFilled = false;
      }


    }

    // 
    // if (this.userRole == '3') {
    //   this.KRADetails.reviewerPromotionDetailList.forEach(element => {
    //     if(element.titleValue == null || element.titleValue == ''){
    //       return;
    //     }else{
    //       reviewerPromotionList.push({'id':element.id,'value':element.titleValue})
    //     }
    //   });
    //   console.log(reviewerPromotionList)
    // }

    // Check promotion details for reviewer
    if (this.kraId == '-2' && this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer && this.userRole == '3' && this.KRADetails.reviewerPromotionDetailList)
    {
      this.KRADetails.reviewerPromotionDetailList.forEach(element =>
      {
        if (element.titleValue != null && element.titleValue != '')
        {
          reviewerPromotionPrefilledData.push({ 'id': element.id, 'value': element.titleValue })
        }
      });
      if (this.thirdUpComments.length == 0 && reviewerPromotionPrefilledData.length == 0)
      {
        this.isPromotionDetailsFilled = true;
        return;
      } else
      {
        this.isPromotionDetailsFilled = false;
      }


    }

    /**
         * We save KRA here for both the userRoles : associate and manager.
         */
    if (this.showWhenData == 'KRA')
    {
      this.saveKra = {
        url: this.saveKRAUrl,
        data: {
          "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
          "kraId": this.kraId,
          "subKraId": this.KRADetails.kraStatusList[this.kraId].subKraId,//changed hardcoded
          "role": this.KRADetails.role,
          "achievement": this.achievement,
          "criticalIncident": this.criticalIncident,
          "selfAppraisal": this.selfAppraisal,
          "appraiserRating": this.managerSelfRating,
          "appraiserComment": this.managerComments,
          "reviewerRating": this.reviewerRating,
          "reviewerComment": this.reviewerComment,
          "careerAspiration1": '',
          "careerAspiration2": '',
          "careerAspiration3": '',
          "processType": this.kraType,
          "maxTxn": this.KRADetails.maxTxn,
          "isPermotionRecommendedByAppraiser": "",
          "promotionRoleByAppraiser": "",
          "promotionDesignationByAppraiser": " ",
          "promotionJustificationByAppraiser": " ",
          "isPermotionRecommendedByReviewer": "",
          "promotionRoleByReviewer": "",
          "promotionDesignationByReviewer": "",
          "promotionJustificationByReviewer": "",
          "mobilityConstraint": "",
          "mobilitySpecification": ""

        },
        zenDeavorURL: true
      }

    }
    else if (this.kraId == '-2')
    {
      this.saveKra = {
        url: this.saveKRAUrl,
        data: {
          "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
          "kraId": this.kraId,
          "subKraId": "1432011",
          "role": this.KRADetails.role,
          "achievement": '',
          "criticalIncident": '',
          "selfAppraisal": '',
          "appraiserRating": '',
          "appraiserComment": '',
          "reviewerRating": '',
          "reviewerComment": '',
          "careerAspiration1": this.careerAspiration1,
          "careerAspiration2": this.careerAspiration2,
          "careerAspiration3": this.careerAspiration3,
          "processType": this.kraType,
          "maxTxn": this.KRADetails.maxTxn,
          "isPermotionRecommendedByAppraiser": this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser ? 'Yes' : 'No',
          "promotionRoleByAppraiser": this.appraiserViewRole,
          "promotionDesignationByAppraiser": this.appriaserViewDesignation,
          "promotionJustificationByAppraiser": this.appraiserViewJustification,
          //"promotionJustificationByAppraiser": this.appraiserJustification ? this.appraiserJustification : "",
          "isPermotionRecommendedByReviewer": this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer ? 'Yes' : 'No',
          "promotionRoleByReviewer": this.reviewerViewRole,
          "promotionDesignationByReviewer": this.reviewerViewDesignation,
          //"promotionJustificationByReviewer": this.reviewerJustification,
          "promotionJustificationByReviewer": this.reviewerViewJustification,

          "mobilityConstraint": this.mobilityDecision,
          "mobilitySpecification": this.mobilitySpecification,
          "competencyList": this.compentencyValues,
          "promotionFields": this.thirdUpComments.length > 0 ? this.thirdUpComments : apprisalPromotionPrefilledData,
          "isEligibleForPromotion": this.KRADetails.goalsDetails.isEligibleForPromotion

        },
        zenDeavorURL: true
      }
    }
    console.log("Save kra", this.saveKra)

    /**
     * A check is being applied on the fields of associate and manager to validate if any of these fields are empty then 
     * display a popup to alert the user about it.
     */
    if (this.KRADetails.associatesFeildList != null && this.userRole == '1')
    {
      if (this.achievement == '' || this.selfAppraisal == '' || this.criticalIncident == '')
      {
        // this.nameInputRef.setFocus();
        this.utility.presentAlert("Please fill all the mandatory fields.")
        return
      }
    } if (this.KRADetails.managerFeildList != null && this.userRole == '2')
    {
      if (this.managerSelfRating == '' || this.managerComments == '')
      {
        this.utility.presentAlert("Please fill all the mandatory fields.")
        return
      }
    }
    if (this.KRADetails.reviewerFieldList != null && this.userRole == '3')
    {
      if (this.reviewerRating == '' || this.reviewerComment == '')
      {
        this.utility.presentAlert("Please fill all the mandatory fields.")
        return
      }
    }
    if (this.KRADetails.goalFeildList != null && this.userRole == '1' || this.userRole == '2' && this.kraId == '-2')
    {
      if (this.careerAspiration1 == '' || this.careerAspiration2 == '')
      {
        this.utility.presentAlert("Please fill all the mandatory fields.")
        return;
      }
    }

    if (this.KRADetails.mobilityConstraintFieldList != null && this.userRole == '1' && this.kraId == '-2')
    {
      if (this.mobilityDecision == 'Yes' && this.mobilitySpecification == '')
      {
        this.utility.presentAlert("Please fill  the  justification.")
        return
      }
    }

    if (this.KRADetails.goalsDetails != null && this.userRole == '2' && this.kraId == '-2')
    {
      if (this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser == true && (this.appraiserViewRole == null || this.appraiserViewRole == ''))
      {
        this.utility.presentAlert("Please select role.")
        return
      }
    }

    if (this.KRADetails.goalsDetails != null && this.userRole == '3' && this.kraId == '-2')
    {
      if (this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer == true && (this.reviewerViewRole == null || this.reviewerViewRole == ''))
      {
        this.utility.presentAlert("Please select role.")
        return
      }
    }

    if (this.KRADetails.goalsDetails != null && this.userRole == '2' && this.kraId == '-2')
    {
      if (this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser == true && (this.appriaserViewDesignation == null || this.appriaserViewDesignation == ''))
      {
        this.utility.presentAlert("Please select designation.")
        return
      }
    }

    if (this.KRADetails.goalsDetails != null && this.userRole == '3' && this.kraId == '-2')
    {
      if (this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer == true && (this.reviewerViewDesignation == null || this.reviewerViewDesignation == ''))
      {
        this.utility.presentAlert("Please select designation.")
        return
      }
    }

    if (this.KRADetails.goalsDetails != null && this.userRole == '2' && this.kraId == '-2')
    {
      if (this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser == true && this.appraiserViewJustification.trim() == "")
      {
        this.utility.presentAlert("Please fill  the  justification.")
        return
      }
    }

    if (this.KRADetails.goalsDetails != null && this.userRole == '3' && this.kraId == '-2')
    {
      if (this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer == true && this.reviewerViewJustification.trim() == "")
      {
        this.utility.presentAlert("Please fill  the  justification.")
        return
      }
    }



    this.utility.updateLoader(true)

    this.httpProvider.http.commonService(this.saveKra).subscribe((response) =>
    {
      if (response)
      {
        this.utility.updateLoader(false)
        if (!this.utility.isEmptyOrNullOrUndefined(response['status']) && response['status'].statusCode == 1)
        {
          this.utility.presentAlert(response['status'].statusMessage).then(res =>
          {
            if (moveToNext || Number(this.kraId) <= 0)
            {
              this.gotoNextButton()
              this.resetKraScore(this.kraId)
            }
            else
            {
              this.getKRADetails(this.kraId, this.subKraId)
            }
          })
        }
      }
    },
      error =>
      {
        this.utility.updateLoader(false)
      });
  }

  // Scroll content to Top
  scrollContentToTop()
  {
    this.content.scrollToTop();
  }

  resetKraScore(kraId: any)
  {


    if (this.userRole == '1' && !this.utility.isEmptyOrNullOrUndefined(this.achievement))
      this.kraScore = 0;

    if (this.userRole == '2' && !this.utility.isEmptyOrNullOrUndefined(this.managerSelfRating))
      this.kraScore = 0;

    if (this.userRole == '3' && !this.utility.isEmptyOrNullOrUndefined(this.reviewerRating))
      this.kraScore = 0;
    //console.log("kra score resetscore", this.kraScore)
    this.scrollContentToTop();
  }


  /**
    *  Click for redirection on Query page 
    * where user can ask his/her query and post it.
    */
  goToQuestion()
  {
    // this.navCtrl.push("QuestionsPage")
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
  }

  pickFile(event)
  {
    this.attachment.openDocument('').then((response) =>
    {
      this.uploadFile(response)
    }).catch((error) =>
    {
    })
  }

  /**
   * Upload document service integration.
   * Associate upload the document as  supporting document while filling  KRAs. 
   */
  uploadFile(fileURI)
  {

    this.utility.updateLoader(true)

    let formData = new FormData()

    let uploadDocs = {
      url: this.uploadKRADetailsUrl,
      data: formData,
      zenDeavorURL: true
    }

    this.file.resolveLocalFilesystemUrl(fileURI).then((entry: any) =>
    {
      entry.file((file) =>
      {
        let s = this.getFileSize(file.size)
        if (s <= 5.00)
        {
          const fileReader = new FileReader()
          fileReader.readAsArrayBuffer(file)
          fileReader.onloadend = ev =>
          {
            let fileType = file.type
            console.log("file type", fileType)
            if (fileType != "image/gif" && fileType != 'video/mp4')
            {
              let imgBlob = new Blob([fileReader.result], { type: fileType })
              let fileExt = fileType.substring(fileType.indexOf('/') + 1)
              if (fileType == "application/msword")
              {
                fileExt = "doc"
              }
              else if (fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
              {
                fileExt = "docx"
              }
              else if (fileType == "application/pdf")
              {
                fileExt = "pdf"
              }
              else if (fileType == "application/vnd.oasis.opendocument.text")
              {
                fileExt = "odt"
              }
              else if (fileType == "application/vnd.ms-excel")
              {
                fileExt = "xls"
              }
              else if (fileType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
              {
                fileExt = "xlsx"
              }
              else if (fileType == "text/plain")
              {
                fileExt = "txt"
              }
              let fileName = new Date().getTime()
              console.log("filename", `${fileName}.${fileExt}`)
              formData.append("file", imgBlob, `${fileName}.${fileExt}`)
              formData.append("kraId", this.KRADetails.kraStatusList[this.kraId].kraId)
              formData.append("subKraId", this.KRADetails.kraStatusList[this.kraId].subKraId)
              formData.append("userId", this.KRADetails.userId)
              formData.append("processType", this.kraType)
              console.log("kraId", this.KRADetails.kraStatusList[this.kraId].kraId)
              console.log("subKraId", this.KRADetails.kraStatusList[this.kraId].subKraId)
              console.log("userId", this.KRADetails.userId)
              console.log("processType", this.kraType)
              /**
               * Upload documents service call : UploadKRADetails
               */
              this.httpAngularProvider.multimediaService(uploadDocs).subscribe((response: any) =>
              {
                this.utility.updateLoader(false)
                if (response)
                {
                  if (response.status.statusCode == 1)
                  {
                    this.utility.presentAlert("File uploaded successfully.")
                  }
                  if (response.details)
                  {
                    if (response.details.attachment)
                      this.attachmentList = response.details.attachment
                  }
                }
              })
            } else
            {
              this.utility.presentAlert("Please upload a photograph/file.")
              this.utility.updateLoader(false)
            }
          }
        } else
        {
          this.utility.presentAlert("Please upload a photograph/file less than 5 MB.")
          this.utility.updateLoader(false)
        }
      })
    }).catch((error) =>
    {
      this.utility.updateLoader(false)
    })

  }

  /**
    * delete service call integration.
    * associates can delete the document uploaded by them.
    */
  deleteUploadedAttachment(attachements: any)
  {
    this.utility.presentConfirmation('Are you sure you want to delete this attachment ?', 'Confirmation').then(() =>
    {
      let deleteDocuments = {
        url: this.deleteAttachmentUrl,
        zenDeavorURL: true,
        data: {
          "userId": this.KRADetails.userId,
          "kraId": this.KRADetails.kraStatusList[this.kraId].kraId,
          "subKraId": this.subKraId,
          "attachmentId": attachements.attachmentId,
          "processType": this.kraType

        }
      }
      this.httpProvider.http.commonService(deleteDocuments).subscribe((response: any) =>
      {
        this.attachmentList = response.details.attachment
      })

    })
  }

  openKraTrainingModal(kraTrainingData: any)
  {
    this.modalCtrl.create(KraTrainingComponent, {
      'data': {
        trainingData: kraTrainingData
      }
    }, { cssClass: 'kra-training-modal' }).present()
  }

  /**
   * this function opens the document which got uploaded
   * @param uploadKRADetailsUrl
   */
  openAsset(uploadKRADetailsUrl)
  {
    this.utility.openAsset(uploadKRADetailsUrl)
    // if (this.platform.is('ios')) {
    //   this.utility.openBrowserTab(uploadKRADetailsUrl)
    // }
    // else {
    //   this.download.downloadDocument(uploadKRADetailsUrl)
    // }
  }

  /**
   * Reset function : associate can reset his/her filled KRA details.
   * associates can perform this reset click when they want to modify their filled data.
   */
  resetData()
  {
    this.kraScore = 0;
    if (this.KRADetails.associatesFeildList != null && this.KRADetails.isManagerOption == false && this.KRADetails.isReviewerOption == false)
    {
      this.KRADetails.associatesFeildList.filter((item) =>
      {
        if (item.isShow)
          item.titleValue = ''
      })

      this.attachmentList = []
      if (this.KRADetails.attachment.length > 0)
      {
        for (let i = 0; i < this.KRADetails.attachment.length; i++)
        {

          this.resetAttachments(this.KRADetails.attachment[i]);
        }
      }
    }

    else if (this.KRADetails.managerFeildList != null && this.KRADetails.isManagerOption == true)
    {
      this.KRADetails.managerFeildList.filter((item) =>
      {
        item.titleValue = ''
      })


    } else if (this.KRADetails.reviewerFieldList != null && this.KRADetails.isReviewerOption == true)
    {
      this.KRADetails.reviewerFieldList.filter((item) =>
      {
        item.titleValue = ''
      })

    }

    else if (this.KRADetails.goalFeildList != null && this.kraId == '-2' && (this.userRole == '1'))
    {
      this.KRADetails.goalFeildList.filter((item) =>
      {
        item.titleValue = ''
      })
    }

    else if (this.KRADetails.goalsDetails.AppraiserView != null && this.kraId == '-2' && (this.userRole == '2'))
    {
      this.appraiserViewRole = ''
      this.appriaserViewDesignation = ''
      this.appraiserViewJustification = ''
    }

    else if (this.KRADetails.goalsDetails.ReviewerView != null && this.kraId == '-2' && (this.userRole == '3'))
    {
      this.reviewerViewRole = ''
      this.reviewerViewDesignation = ''
      this.reviewerViewJustification = ''
    }

    else if (this.KRADetails.mobilityConstraintFieldList != null && this.kraId == '-2' && (this.userRole == '1'))
    {
      this.KRADetails.mobilityConstraintFieldList.filter((item) =>
      {
        item.titleValue = ''
      })
    }
  }

  /**
 * clicked on next button to move to next section
 */
  gotoNextButton()
  {
    for (let i = 0; i < this.KRADetails.kraStatusList.length; i++)
    {
      if (this.KRADetails.kraStatusList[i].kraId == this.kraId)
      {
        let count = (i != this.KRADetails.kraStatusList.length - 1) ? (i + 1) : i
        this.showWhenData = this.KRADetails.kraStatusList[count].title;
        this.kraId = this.KRADetails.kraStatusList[count].kraId;
        this.subKraId = this.KRADetails.kraStatusList[count].subKraId;
        break
      }
    }
    this.getKRADetails(this.kraId, this.subKraId);
    this.scrollContentToTop();
    this.scrollRight();
    // //console.log("this.kraId", this.kraId);
    // this.resetKraScore(this.kraId);
  }

  /**
   * Open Summary / Review Page
   */
  openPreview()
  {
    if (!this.isDirectApproveStatus)
    {
      for (let i = 0; i < this.KRADetails.kraStatusList.length; i++)
      {

        if (this.KRADetails.kraStatusList.kraId != '0' && this.KRADetails.kraStatusList.kraId != '-1')
        {
          if (this.KRADetails.kraStatusList[i].status == "incomplete")
          {
            this.utility.presentAlert("Please fill the  " + this.kraType + " appraisal against all the KRAs")
            return
          }
        }
      }
    }

    this.navCtrl.push("ZendeavorPreviewPage", {
      userID: this.userID,
      // userID: this.KRADetails.userId,
      userRole: this.userRole,
      kraType: this.kraType,
      isDirectApprove: this.isDirectApproveStatus
    })

  }

  goToDashboard()
  {
    if (this.isComingFromHome)
    {
      this.navCtrl.popToRoot();
    } else
    {
      this.navCtrl.pop();
    }

  }

  numberOnly(index)
  {
    let exp = /^[0-9]+$/
    let value = this.KRADetails.associatesFeildList[index].titleValue
    if (index == 0 && !this.utility.isEmptyOrNullOrUndefined(this.KRADetails.associatesFeildList[index].regEx))
    {
      if (!value.match(exp))
      {
        // this.utility.presentAlert("Please fill rating in numbers");
        this.zone.run(() =>
        {
          this.KRADetails.associatesFeildList[index].titleValue = value.substring(0, value.length - 1)
        })
      }
    }
    // if (this.selfRating != '' && this.managerSelfRating != '') {
    //   this.utility.presentAlert("Please fill rating in numbers ");
    // }
  }

  /**
   * new annual appraisal code 
   */
  onTitle(selectedDesi)
  {
    // //console.log(this.ic);
    //console.log("desig", selectedDesi);
    if (!this.utility.isEmptyOrNullOrUndefined(selectedDesi))
    {
      this.titleDesig = selectedDesi
      this.appraiserViewRole = this.titleDesig;
      this.getDesignationList();
    }
  }
  onDesignation(selectedValue)
  {

    //console.log("onDesignation:", selectedValue);
    this.designationTitle = selectedValue
  }

  reviewerRoleSelection(selectedRole)
  {

    if (!this.utility.isEmptyOrNullOrUndefined(selectedRole))
    {
      this.reviewerGivenRole = selectedRole
      this.getDesignationList();
    }
  }

  reviewerDesigSelection(selectedDesig)
  {
    this.reviewerGivenDesig = selectedDesig
  }

  appraiserDecision(value)
  {
    console.log(value.trim());
    //this.KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser;
    if (value.trim() == 'Yes')
    {

      this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser = true;

      this.appraiserPromoView = true;
      this.decision = value;
      //console.log("decision", value);
      setTimeout(() =>
      {
        if (this.content.scrollToBottom)
        {
          this.content.scrollToBottom();
        }
      }, 400);
    } else if (value == 'No')
    {

      this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser = false;
      this.decision = value;
    }

  }
  reviewerDecision(value)
  {

    if (value == 'Yes')
    {
      this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer = true;
      this.reviewerPromoView = true;
      this.reviewerPromoDecision = value;
      setTimeout(() =>
      {
        if (this.content.scrollToBottom)
        {
          this.content.scrollToBottom();
        }
      }, 400);
    }
    else if (value == 'No')
    {
      this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer = false;
      this.reviewerPromoView = false;
      this.reviewerPromoDecision = value;
    }
  }

  mobilityChoice(value)
  {
    if (value == 'Yes')
    {
      this.KRADetails.goalsDetails.mobilityConstraint = true;
      // this.reviewerPromoView = true;
      this.mobilityDecision = value;
      setTimeout(() =>
      {
        if (this.content.scrollToBottom)
        {
          this.content.scrollToBottom();
        }
      }, 400);
    }
    else if (value == 'No')
    {
      this.KRADetails.goalsDetails.mobilityConstraint = false;
      // this.reviewerPromoView = false;
      this.mobilityDecision = value;
    }

  }

  // reviewerDeniel(value) {
  //   this.reviewerPromoView = false;
  //   this.reviewerPromoDecision = value;
  // }



  /**
   * kra score service integration
   */
  displayScore($event, value)
  {

    console.log(value);
    if (isNaN(value))
    {
      this.utility.presentAlert("Please enter numeric value.");
      return;

    }

    if (this.kraType == 'Mid-Term' && this.kraId > '0')
    {
      this.calculateScoreForMidterm(value)
    }
    else if (this.kraType == 'Annual')
    {
      let kraScoreData = {
        url: this.kraScoreUrl,
        data: {
          "userId": this.userID,
          "target": this.kraTarget,
          "floor": this.kraFloor,
          "weightage": this.kraWeightage,
          "achievement": value
        },
        zenDeavorURL: true
      }
      if (value != '' || value > 0)
      {
        this.httpProvider.http.commonService(kraScoreData).subscribe((response: any) =>
        {
          //console.log("kra score is here!!", response);
          if (response.details)
          {
            this.kraScore = response.details.score
            this.calculateScoreForMidterm(value);
            // this.initialKraScore = this.kraScore
          }
          err =>
          {
            this.utility.presentAlert("Please try again")
            //console.log("in error condition")
          }
        });
      }
    }
    else
    {
      let kraScoreData = {
        url: this.kraScoreUrl,
        data: {
          "userId": this.userID,
          "target": this.kraTarget,
          "floor": this.kraFloor,
          "weightage": this.kraWeightage,
          "achievement": value
        },
        zenDeavorURL: true
      }
      if (value != '' || value > 0)
      {
        this.httpProvider.http.commonService(kraScoreData).subscribe((response: any) =>
        {
          //console.log("kra score is here!!", response);
          if (response.details)
          {
            this.kraScore = response.details.score
            // this.initialKraScore = this.kraScore
          }
          err =>
          {
            this.utility.presentAlert("Please try again")
            //console.log("in error condition")
          }
        });
      }
    }

  }

  getDesignationList()
  {

    if (this.userRole == '2')
    {
      let designation = {
        url: this.designationListUrl,
        data: {
          "userId": this.userID,
          "contributor": this.titleDesig
        },
        zenDeavorURL: true
      }



      this.httpProvider.http.commonService(designation).subscribe((response: any) =>
      {
        //console.log("hello", response);
        this.designationList = response.details.designationList
      });
      err =>
      {
        this.utility.presentAlert("no designation available");
      }
    }
    else if (this.userRole == '3')
    {
      let designation = {
        url: this.designationListUrl,
        data: {
          "userId": this.userID,
          "contributor": this.reviewerGivenRole
        },
        zenDeavorURL: true
      }



      this.httpProvider.http.commonService(designation).subscribe((response: any) =>
      {
        //console.log("hello", response);
        this.designationList = response.details.designationList
      });
      err =>
      {
        this.utility.presentAlert("no designation available");
      }

    }
  }

  showSaveResetBtn()
  {
    if (this.kraType == 'Annual')
    {
      if (this.showWhenData == 'KRA' && this.kraId != '1')
      {
        return true
      } else if (this.kraId == '-2')
      {
        if (this.userRole == '1')
        {
          return true
        } else if (this.userRole == '2' || this.userRole == '3' && this.KRADetails.isEligibleForPromotion)
        {
          return true
        } else
        {
          return false
        }
      } else
      {
        return false
      }
    } else if (this.kraType == 'Mid-Term')
    {
      if (this.kraId == '-2' && this.userRole == '2')
      {
        return false;
      } else if (this.kraId == '0')
      {
        return false;
      } else if (this.kraId == '1')
      {
        return false;
      } else
      {
        return true;
      }
    }
    else
    {
      if (this.showWhenData == 'KRA' && this.kraId != '1')
      {
        return true
      } else if (this.kraId == '-2')
      {
        if (this.userRole == '1')
        {
          return true
        } else if (this.userRole == '2' || this.userRole == '3' && this.KRADetails.isEligibleForPromotion)
        {
          return true
        } else
        {
          return false
        }
      } else
      {
        return false
      }
    }

  }

  resetAttachments(attachements)
  {
    let deleteDocuments = {
      url: this.deleteAttachmentUrl,
      zenDeavorURL: true,
      data: {
        "userId": this.KRADetails.userId,
        "kraId": this.KRADetails.kraStatusList[this.kraId].kraId,
        "subKraId": "1432011",
        "attachmentId": attachements.attachmentId,
        "processType": this.kraType

      }
    }
    this.httpProvider.http.commonService(deleteDocuments).subscribe((response: any) =>
    {
      this.attachmentList = response.details.attachment
    })
  }

  // showSaveResetBtn() {
  //   if (this.showWhenData == 'KRA') {
  //     return true
  //   } else if (this.showWhenData == 'Goals') {
  //     if (this.userRole == '1') {
  //       return true
  //     } else if (this.userRole == '2' && this.KRADetails.isEligibleForPromotion) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   } else {
  //     return false
  //   }
  // }
  urlify(text)
  {
    if (text != undefined)
    {

      var newText = text.replace(/\n/g, "<br/>");
      //console.log(newText)
      return newText;
    }
  }



  gotoViewConsultation(title, showLink)
  {
    //console.log("title", title)
    if (title == 'Consultation' && showLink == true)
    {
      this.navCtrl.push("ZendeavorViewConsultationPage", {
        userID: this.userID,
        // userID: this.KRADetails.userId,
        userRole: this.userRole,
        kraType: this.kraType,
      })
    }
  }

  // // View Individual Sub KRAs screen
  // gotoAddSubKra(subKRAList, isNewKra) {
  //   // console.log("subKRAList", subKRAList)
  //   if (this.KRADetails.isMaxLimitReached) {
  //     this.utility.presentAlert(this.KRADetails.maxLimitAlert)
  //     return
  //   }
  //   this.navCtrl.push('ZendeavorAddSubKrasPage', {
  //     userID: this.userID,
  //     userRole: this.userRole,
  //     // kraYear: this.selectedGoalYear,
  //     // isDirectApprove: this.isDirectApprove,
  //     subKRAList: subKRAList,
  //     isNewSubKra: isNewKra,
  //     processType: 'midterm'
  //   })
  // }

  viewSubKra(subKRAList, isNewKra, isMandatoryKra)
  {
    this.navCtrl.push('ZendeavorAddSubKrasPage', {
      userID: this.userID,
      // userID: this.KRADetails.userId,
      userRole: this.userRole,
      // kraYear: this.selectedGoalYear,
      // isDirectApprove: this.isDirectApprove,
      subKRAList: subKRAList,
      isNewSubKra: isNewKra,
      isMandatoryKra: isMandatoryKra,
      showSaveKRA: false,
      processType: this.kraType,
      isManagerOption: this.KRADetails.isManagerOption,
      isReviewerOption: this.KRADetails.isReviewerOption
    })
  }

  calculateScoreForMidterm(value)
  {
    // alert("score called")
    if (!this.utility.isEmptyOrNullOrUndefined(value))
    {
      let kraScoreData = {
        url: this.kraScoreUrlMidterm,
        data: {
          "userId": this.userID,
          "target": this.kraTarget,
          // "floor": this.kraFloor,
          // "weightage": this.kraWeightage,
          "rating": value,
          "kraId": this.kraId,
          "role": this.userRole,
          "processType": this.kraType
        },
        zenDeavorURL: true
      }
      this.httpProvider.http.commonService(kraScoreData).subscribe((response: any) =>
      {
        //console.log("kra score is here!!", response);
        if (response.details)
        {
          // this.kraScore = response.details.score
          this.showGlobalScore = response.details.score;
          // this.initialKraScore = this.kraScore
        }
        err =>
        {
          this.utility.presentAlert("Please try again")
          //console.log("in error condition")
        }
      });
    }
    else
    {
      let kraScoreData = {
        url: this.kraScoreUrlMidterm,
        data: {
          "userId": this.userID,
          "target": this.kraTarget,
          // "floor": this.kraFloor,
          // "weightage": this.kraWeightage,
          "rating": 0,
          "kraId": this.kraId,
          "role": this.userRole,
          "processType": this.kraType
        },
        zenDeavorURL: true
      }
      this.httpProvider.http.commonService(kraScoreData).subscribe((response: any) =>
      {
        //console.log("kra score is here!!", response);
        if (response.details)
        {
          this.kraScore = response.details.score
          // this.initialKraScore = this.kraScore
        }
        err =>
        {
          // this.utility.presentAlert("Please try again")
          console.log("in error condition")
        }
      });
    }
  }

  overrideExistingKRA(kraId)
  {
    this.utility.updateLoader(true)
    let kraDetails = {
      url: this.overrrideKraUrl,
      data: {
        "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
        "kraId": kraId,
        // "subKraId": subkraId,
        "role": this.userRole,
        "processType": this.kraType,
        "isDirectApprove": this.isDirectApproveStatus
      },
      zenDeavorURL: true
    }

    this.httpProvider.http.commonService(kraDetails).subscribe((response: any) =>
    {

      if (response)
      {
        this.utility.updateLoader(false)
        console.log("resp", response)
        if (response.status && response['status'].statusCode == '1')
        {
          // this.utility.presentAlert(response['status'].statusMessage).then(res => {
          //   this.getKRADetails(this.kraId, this.subKraId)

          // })
          this.getKRADetails(this.kraId, this.subKraId)
        }
      }
    }, (err) =>
    {
      this.utility.updateLoader(false)
      this.utility.showAlert('ZenDeavor', "Something went wrong; \n please try again later")
    })
  }
  showAlertOnKraConflict()
  {

    return new Promise((resolve, reject) =>
    {
      let alert = this.alertCtrl.create({
        // title: 'Submit KRA',
        message: 'Do you want to over write newly approved KRA?',
        buttons: [
          {
            text: 'No',
            handler: () =>
            {
              // reject(false);
              // return 
              // reject();
            }
          },
          {
            text: 'Yes',
            handler: () =>
            {
              resolve(true);
              // return 


            }
          }
        ]
      });
      alert.present();
    })
  }
  openGuidelinesPdf()
  {
    let encodedUrl = encodeURI(this.midTermGuidelinePdfUrl);
    let target = "_system";
    const browser = this.inappbrowser.create(encodedUrl, target, this.options);
  }

  //code for competencies in annual apprisal by chinmay
  ngAfterViewInit()
  {
    console.log("called");
  }
  toggleAccordian(item, index)
  {
    if (item.isOpen)
    {
      item.isOpen = false
    } else
    {
      this.KRADetails.competencyFieldList.keyValueList.map((res, i) =>
      {
        if (i != index)
        {
          res.isOpen = false;
        }
      })
      item.isOpen = true;
    }
  }

  goToPromotionDetails()
  {
    this.thirdUpComments = [];
    let modalCtrl = this.modalCtrl.create(PromotionDetailsComponent, { 'promotionDetails': this.KRADetails.appraiserPromotionDetailList, 'isManagerOption': this.KRADetails.isManagerOption }, {
      cssClass: 'infoModal',
      enableBackdropDismiss: true,
      showBackdrop: true,
    })
    modalCtrl.present();
    modalCtrl.onDidDismiss(data =>
    {
      console.log(data);
      if (data)
      {
        if (data.length > 0)
        {
          this.thirdUpComments = data;
        }
      }

    })

  }

  reviewerPromotionDetails()
  {
    this.thirdUpComments = [];
    let modalCtrl = this.modalCtrl.create(PromotionDetailsComponent, { 'promotionDetails': this.KRADetails.reviewerPromotionDetailList, 'comingFromReviewer': true }, {
      cssClass: 'infoModal',
      enableBackdropDismiss: true,
      showBackdrop: true,
    })
    modalCtrl.present();
    modalCtrl.onDidDismiss(data =>
    {
      console.log(data);
      if (data)
      {
        if (data.length > 0)
        {
          this.thirdUpComments = data;
          this.isPromotionDetailsFilled = false;
        }
      }

    })

  }

  selectedCompetency(id, mainId)
  {
    // console.log(mainId);
    // //let dataValue = value.find(data => data.id == id);
    // //console.log(dataValue);
    // if (this.compentencyValues.length == 0) {
    //   this.compentencyValues.push({ 'id': mainId, 'value': id })
    // } else {

    //   let index = this.compentencyValues.filter(data => {

    //     return data.id.indexOf(mainId) != -1
    //   })


    //   if (index.length == 0) {
    //     this.compentencyValues.push({ 'id': mainId, 'value': id })
    //   } else {
    //     this.compentencyValues.filter(data => {
    //       if (data.id == mainId) {
    //         data.id = mainId,
    //           data.value = id;
    //       }
    //     })
    //   }
    // }
    // //console.log(this.compentencyValues)
  }

  // Expand TextArea to get results
  expandTextArea(pageTitle, val, index, sel, updateValue)
  {
    try
    {
      this.keyboard.hide();
    } catch (e)
    {
      console.log('Keyboard will not close', e)
    }
    let modal = this.modalCtrl.create(PerformanceMeasuretextAreaComponent, {
      'data': {
        performanceData: val,
        pageTitle: pageTitle,
      }
    }, { cssClass: '' })
    modal.onDidDismiss(data =>
    {
      if (data != null || data != undefined)
      {
        console.log("Updated value", data, this.KRADetails);
        this.KRADetails[sel].map((res, i) =>
        {
          if (i == index)
          {
            res[updateValue] = data;
          }
        })
      }
    });
    modal.present()
  }
  getFileSize(bytes)
  {
    if (bytes == 0) return 'n/a'
    else
    {
      let num = (bytes / (1024 ** 2)).toFixed(2);

      return parseFloat(num)
    }

  }

  public scrollRight(): void
  {
    try
    {
      this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 55), behavior: 'smooth' });
    } catch (e)
    {
      //Error handling
    }
  }

  public scrollLeft(): void
  {
    try
    {
      this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 55), behavior: 'smooth' });
    } catch (e)
    {
      //Error handling
    }
  }

  goToProfile()
  {
    this.navCtrl.push('NewProfilePage', {
      'userId': this.KRADetails.userId,
      'profileType': 'zendeavorProfile'
    });
  }
}





