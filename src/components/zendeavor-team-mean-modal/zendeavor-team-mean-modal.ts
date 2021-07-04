import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { TooltipsModule } from 'ionic-tooltips';


/**
 * Generated class for the ZendeavorTeamMeanModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zendeavor-team-mean-modal',
  templateUrl: 'zendeavor-team-mean-modal.html'
})
export class ZendeavorTeamMeanModalComponent {

  teamMeanData: any = {}
  tooltipData: any;
  private tooltipEvent: 'click' | 'press' = 'click'
  tooltipDataforActualMean:any;
  toolTipDataForPermissibleLimit:any
  toolTipDataForApplicableMean:any


  constructor(private viewCtrl: ViewController, private navParams: NavParams, private utilitiy: CommonUtilities) {
    if (!this.utilitiy.isEmptyOrNullOrUndefined(this.navParams.get('data'))) {
      this.teamMeanData = this.navParams.get('data');
      //console.log("navparams data", this.teamMeanData)
      this.tooltipData = this.navParams.get('data').toolTipData
      // this.tooltipActualMean=this.tooltipData.toolTipForActualMean
      this.tooltipDataforActualMean=this.tooltipData.toolTipForActualMean
      this.toolTipDataForPermissibleLimit=this.tooltipData.toolTipForPermissibleLimit
      this.toolTipDataForApplicableMean=this.tooltipData.toolTipForApplicableMean
      
    }

  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

}
