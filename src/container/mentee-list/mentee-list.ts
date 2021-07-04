import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import * as faqModel from '../../models/faq.model';
import { FaqDetail } from '../../components/faq-detail/faq-detail';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HttpProvider } from '../../providers/http/http';
import { MenteeAlertComponent } from '../../components/mentee-alert/mentee-alert';

@IonicPage()
@Component({
  selector: 'page-mentee-list',
  templateUrl: 'mentee-list.html',
})
export class MenteeListPage {
  information: faqModel.Detail[];
  loading$: Observable<any>;
  url: string = 'getDepartmentListFaqs';
  pageTitle: string;
  private userData;
  private _faqListener: Subscription = new Subscription();
  private _faqLoading: Subscription = new Subscription();

  constructor(private viewCtrl: ViewController, private utilities: CommonUtilities, private modalCtrl: ModalController,
    private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController, private httpProvider: HttpProvider,
    private store: Store<fromStore.AppState>) {
    this.userData = this.navParams.get('userData');
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }
  ionViewDidLoad() {


  }

  ionViewWillEnter() {
    this.getMenteeData();
  }

  getMenteeData() {
    const url: string = "getMenteeList";
    const data: any = {};
    this.utilities.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utilities.isEmptyOrNullOrUndefined(res) && !this.utilities.isEmptyOrNullOrUndefined(res.details)) {

            this.information = res.details.responseList;
            this.utilities.updateLoader(false);
          }
        },
        err => {
          this.utilities.updateLoader(false);
        }
      );
  }

  openMenteeAlert(item) {

    if (item.currentStatus == 'Pending Mentor Approval') {
      let modalCtrl = this.modalCtrl.create(MenteeAlertComponent, { 'menteeItem': item },
        {
          cssClass: 'mentee-alert',
          enableBackdropDismiss: true,
          showBackdrop: true,

        })
      modalCtrl.onDidDismiss((isAccepted) => {
        if (isAccepted) {
          this.getMenteeData()
        }
      })
      modalCtrl.present();
    }
    else if (item.currentStatus == "In-progress" || item.currentStatus == 'Request Accepted By Mentor' || item.currentStatus == 'Completed' || item.currentStatus == 'Pending For Manager Review') {
      this.navCtrl.push("PeerLearnigPage", { 'menteeItem': item, 'role': "mentor", "userData": this.userData });
    }


  }

}
