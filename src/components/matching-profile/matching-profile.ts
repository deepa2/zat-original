import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ReferralComponent component.
 */
@Component({
  selector: 'matching-profile',
  templateUrl: 'matching-profile.html'
})
export class MatchingProfileComponent
{

  @Input() matchingProfile: any;
  @Output() candidateProfileId: EventEmitter<any> = new EventEmitter();
  @Output() moveToPageAllow: EventEmitter<any> = new EventEmitter();

  referralList: Array<object> = null;
  referralData: Array<object> = null;
  errorMsg: string;
  noJobsAvailable: string = '';

  constructor(private httpProvider: HttpProvider, private utilities: CommonUtilities)
  {

  }

  ngOnInit()
  {
    //clear previously stored home data
    this._getMatchingProfile()
  }

  _getMatchingProfile()
  {
    this.utilities.updateLoader(true);
    let data = {
      url: this.matchingProfile.restApi.split(",")[0],
      data: {
        "searchKey": "",
        "start": 0,
        "type": "SAVED_PROFILES",
        "end": 10,

      },
      zenRich: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) =>
    {
      console.log(response);
      if (response.details)
      {
        this.referralList = response.details.requestData;
        this.errorMsg = 'No Data Available';
        this.utilities.updateLoader(false);
      }


    },
      error =>
      {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }

  _getCandidateProfileId(candidateProfile)
  {
    this.utilities.updateLoader(true);
    let data = {
      url: this.matchingProfile.restApi.split(",")[1],
      data: {
        "candidateProfileId": candidateProfile.candidateProfileId,
        "type": "MATCHING_JOBS",
        "start": 0,
        "end": 10
      },
      zenRich: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) =>
    {
      if (response.details)
      {
        this.noJobsAvailable = candidateProfile.jobMatch;
        this.referralData = response.details[0].value;
        this.utilities.updateLoader(false);
      }


    },
      error =>
      {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }

  _getReferralList()
  {

  }

  _moveToPage()
  {
    // this.navCtrl.push(ZenDeavorDashboardPage)
    this.moveToPageAllow.emit('moveToPage');
  }

}


