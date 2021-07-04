import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
/**
 * Generated class for the SkillModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'skill-modal',
  templateUrl: 'skill-modal.html'
})
export class SkillModalComponent
{

  showNoPasstxt: boolean;
  responseList: any = [];
  resultPending: boolean = true;
  skill: any;
  startIndex: number = 0;
  endIndex: number = 20;
  infinteScroll: any;
  searchText: string = '';
  skillTypeId;

  constructor(private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
  )
  {
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('skillTypeId')))
    {
      this.skillTypeId = parseInt(this.navParams.get('skillTypeId'));
      console.log('Skill type', this.skillTypeId)
    }

  }
  dismiss(flag)
  {
    console.log('Flag maintained', flag)
    this.viewCtrl.dismiss(flag)
  }
  ngOnInit()
  {

    this.getSkillList()
  }

  checkSkill(data)
  {
    if (data.isPracticeMatched)
    {
      this.dismiss(data)
    } else
    {
      // this.utility.showToast('Practice is not matched')
      this.utility.presentAlert('Practice does not match, Please select another one', 'Skill Set')
    }
  }

  // Search
  _searchItems(event)
  {
    if (this.searchText.length >= 3 || this.searchText.length == 0)
    {
      this.responseList = [];
      this.startIndex = 0;
      this.endIndex = 20;
      this.getSkillList()
    }
  }


  getSkillList()
  {
    this.utility.updateLoader(true);
    let home = {
      url: "getCompleteSkillList",
      data: {
        start: this.startIndex,
        end: this.endIndex,
        searchFilter: this.searchText,
        skillType: this.skillTypeId
      },
      associate: true
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response) =>
      {
        if (response)
        {
          this.resultPending = true;
          this.showNoPasstxt = false;
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["details"]))
          {
            this.responseList = this.responseList.concat(response["details"]);
            console.log('Skill List', this.responseList)
          }
          if (response["statusCode"] == "16")
          {
            this.showNoPasstxt = true;
          }
          if (this.infinteScroll)
          {
            this.infinteScroll.complete();
            this.infinteScroll = '';
            return;
          }
        }
      },
      (error) =>
      {
        this.utility.updateLoader(false);
      }
    );
  }

  // Pgination function
  loadData(infiniteScroll)
  {
    this.infinteScroll = infiniteScroll;
    setTimeout(() =>
    {
      if (this.resultPending)
      {
        this.resultPending = false;
        this.startIndex = this.endIndex + 1;
        this.endIndex = this.endIndex + 20;
        this.getSkillList()
      }
      infiniteScroll.complete();
    }, 1000);
  }

}
