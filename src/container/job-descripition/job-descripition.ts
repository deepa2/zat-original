import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';

@IonicPage()
@Component({
  selector: 'page-job-descripition',
  templateUrl: 'job-descripition.html',
})
export class JobDescripitionPage {

  selectedJob: any;
  jobDescripitionUrl: string = "";
  _jobDescripition: any;
  jobDesc: any;
  applybutton: boolean;

  constructor(private navCtrl: NavController, private navParams: NavParams, private utility: CommonUtilities, private store: Store<fromStore.AppState>, private popoverCtrl: PopoverController) {
    this.selectedJob = this.navParams.get('selectedJob');
    this.applybutton = this.navParams.get('showApplyButton')

    let parser = new DOMParser();

    let data = parser.parseFromString(this.selectedJob.jobDescription, 'text/html');
  }
  ionViewDidLoad() {

  }

  gotoJobDescriptionPage() {
    //this.utility.openWithBrowser(Constants.IJP_URL);
    this.navCtrl.push("ApplyjobPage", { 'jobDetails': this.selectedJob });
  }
  getData() {


    let params = {}

    this.store.dispatch(new fromStore.GetJobDescriptionAction(this.jobDescripitionUrl, params));

    return new Promise(resolve => {
      this._jobDescripition = this.store
        .select<any>(fromStore.getInternalJobPostingState)
        .subscribe(
          response => {
            if (response.pending == false) {
              this.jobDesc = response.data;
              resolve();
            }
          },
          err => {
          }
        );
    });
  }
  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  goBack() {
    this.navCtrl.pop();
  }
}
