import { Component, Input, Output, SimpleChanges, EventEmitter, ViewChild } from '@angular/core';
import { ModalController, Slides } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ReferralComponent component.
 */
@Component({
  selector: 'referral-component',
  templateUrl: 'referral-component.html'
})
export class ReferralComponent
{

  @Input() refferalDetails: any;
  @Input() dataOnly: any;
  @Output() moreReferralFlag: EventEmitter<any> = new EventEmitter();
  @ViewChild(Slides) slides: Slides;

  referralData: any;
  showMore: boolean = true;
  selectedSrfNo: number = null;
  slidePerView: string = "1";
  showError: boolean = false;
  showMoreReferral: boolean = true;
  start: any = 0;
  end: any = 5;

  constructor(private httpProvider: HttpProvider, private utilities: CommonUtilities, private modalCtrl: ModalController)
  {

  }

  ngOnInit()
  {
    //clear previously stored home data
    if (this.dataOnly == "false")
      this._getReferralList()
    else
    {
      this.showError = false
      this.referralData = this.refferalDetails;
      // if (this.referralData.length > 0)
      //   this.slidePerView = "1.2"
      if (this.refferalDetails)
      {
        this.selectedSrfNo = this.refferalDetails[0].srfNo;
        if (this.referralData.length > 0)
          this.slidePerView = "1.2";

      }

    }
  }

  _getReferralList()
  {
    this.utilities.updateLoader(true);
    let data = {
      url: this.refferalDetails.restApi,
      data: {
        "searchKey": "",
        "start": 0,
        "type": "MY_REFERRALS",
        "end": 10,

      },
      zenRich: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) =>
    {
      if (!this.utilities.isEmptyOrNullOrUndefined(response.details))
      {
        if (!this.utilities.isEmptyOrNullOrUndefined(response.details.requestData))
        {
          this.referralData = response.details.requestData;
          if (this.referralData.length > 0)
          {
            this.slidePerView = "1.2"
          }
          if (!this.showMoreReferral)
          {
            this.start = 0;
            this.end = this.referralData.length;
          }
          this.selectedSrfNo = this.referralData[0].srfNo
        } else
        {
          this.showError = true;
        }

        this.utilities.updateLoader(false);
      }


    },
      error =>
      {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // console.log(changes);
    if (!this.utilities.isEmptyOrNullOrUndefined(changes.refferalDetails.currentValue))
    {
      if (!this.utilities.isEmptyOrNullOrUndefined(changes.refferalDetails.currentValue.parameters))
        if (changes.refferalDetails.currentValue.parameters.endDate && changes.refferalDetails.currentValue.parameters.startDate)
        {
          this.showMoreReferral = false;
        }
    }
    if (changes.refferalDetails && this.dataOnly != "false")
    {
      this.referralData = changes.refferalDetails.currentValue;
      if (this.referralData)
      {
        if (this.referralData.length > 1)
        {
          this.slidePerView = "1.2";
          this.start = 0;
          this.end = this.referralData.length;
          this.selectedSrfNo = this.referralData[0].srfNo;

        }
        else
        {
          this.slidePerView = "1";
          this.selectedSrfNo = this.referralData[0].srfNo;
          this.slides.slideTo(0, 500);

        }
      }
    }
  }

  _showMore(srfNo)
  {
    this.selectedSrfNo = srfNo;
    this.showMore = !this.showMore
  }

  moreReferral()
  {
    this.moreReferralFlag.emit('More Referral')
  }

}


