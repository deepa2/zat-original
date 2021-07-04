import { Component } from "@angular/core";
import { NavController, ViewController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import * as faqModel from '../../models/faq.model';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { HttpProvider } from '../../providers/http/http';

@Component({
    selector: "page-faqDetail",
    templateUrl: "faq-detail.html"
})

export class FaqDetail {

    information: faqModel.Detail[];
    loading$: Observable<any>;
    url: string = 'getFaqsData';
    deptId: number;
    pageTitle: string;
    item: any
    private _faqListener: Subscription = new Subscription();

    constructor(private viewCtrl: ViewController, private navCtrl: NavController, private navParams: NavParams, private popoverCtrl: PopoverController,
        private store: Store<fromStore.AppState>, private httpProvider: HttpProvider, private utilities: CommonUtilities) {
        this.item = this.navParams.get('item');
    }

    ionViewDidLoad() {
        this.loading$ = this.store.select<any>(fromStore.getFAQLoading);
        this.deptId = this.item.departmentId
        this.getFaqData();
        this.pageTitle = this.item.departmentName;
    }

    getFaqData() {
        let data = {
            url: 'getFaqsData',
            data: { "departmentId": this.deptId },
            miscellaneous: true
        }
        // let data={
        //     "departmentId": this.deptId
        // }

        // this.store.dispatch(new fromStore.GetFaqDetailsAction(this.url, data));

        // return new Promise(resolve => {
        //     this._faqListener = this.store.select<any>(fromStore.getFAQState).subscribe((response: faqModel.faqState) => {
        //         if (response.pending == false) {
        //             this.information = response.detailData;
        //             resolve();
        //         }
        //     }, err => {
        //     })
        // })
        this.utilities.updateLoader(true);

        this.httpProvider.http.commonService(data).subscribe((response: any) => {
            this.utilities.updateLoader(false);
            if (response.details) {
                this.information = response.details;

            }
        }, error => {
            this.utilities.updateLoader(false);

            //console.log(error);

        })
    }


    presentOptions(myEvent) {
        let popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    }

    ionViewWillLeave() {
        this._faqListener.unsubscribe();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}
