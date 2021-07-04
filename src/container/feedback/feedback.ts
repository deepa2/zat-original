import { Component, OnInit } from '@angular/core';
import { ViewController, IonicPage, NavParams, NavController, AlertController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { Data } from '../../providers/data/data';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
    selector: 'page-feedback',
    templateUrl: 'feedback.html'
})
export class FeedbackPage implements OnInit {

    feedbackTitle: any;
    feedbackQuery: any;
    //queryList: any;
    addComment: string;
    rating: number;
    questionId: number;
    url: string = 'submitUserRate';
    loading$: Observable<any>;
    feedbackResponse$: Observable<any>;
    isenabled: boolean = true;
    ratingsData: any;
    userRateArray: Array<any> = [];

    private _addFeedbackDataListener: Subscription = new Subscription();

    ngOnInit() {
        this.feedbackTitle = 'How was your experience with us?';
        this.feedbackQuery = 'What went well?';
        this.rating = 5;
    }

    ionViewWillEnter() {

        this.getRatingData().then((success) => {
            this.onRatingChange(this.rating);
        });

        this.loading$ = this.store.select<any>(fromStore.getAddFeedbackLoading);

        this._addFeedbackDataListener = this.store.select<any>(fromStore.getAddFeedbackData).subscribe((response) => {
            if (response) {
                if (response.status.statusCode == 1) {
                    this.presentAlert();
                }

            }
        });

    }

    constructor(private viewCtrl: ViewController, params: NavParams,
        private store: Store<fromStore.AppState>, private data: Data,
        private alertCtrl: AlertController,
        private navCtrl: NavController) {
        this.questionId = params.get('queryId');
        this.addComment = '';

        // if (this.addComment !== '') {
        //     this.isenabled = true;
        // } else {
        //     this.isenabled = false;
        // }
    }

    submitFeedback() {
        let userRate = [];
        this.userRateArray.map((item) => {
            if (item.checked) {
                userRate.push({ 'key': item.key, 'value': item.value })
            }
        })

        let parameters = {
            'questionId': this.questionId,
            'userComment': this.addComment,
            "rate": this.rating,
            'userRate': userRate
        };

        this.store.dispatch(new fromStore.AddFeedbackAction(this.url, parameters));

    }

    dismiss(status) {
        this.viewCtrl.dismiss(status);
    }

    getRatingData() {
        return new Promise((resolve) => {
            this.data.getData('miscData').then((res:any) => {
                this.ratingsData = res.ratings;
                resolve();
            })
        })

    }

    onRatingChange(value: number) {
        this.rating = value;
        if (this.rating < 4) {
            this.feedbackQuery = 'What went wrong?';
        } else if (this.rating > 3) {
            this.feedbackQuery = 'What went well?';
        }
        switch (value) {
            case 1:
                this.userRateArray = this.ratingsData.userRateOne;
                break;
            case 2:
                this.userRateArray = this.ratingsData.userRateTwo;
                break;
            case 3:
                this.userRateArray = this.ratingsData.userRateThree;
                break;
            case 4:
                this.userRateArray = this.ratingsData.userRateFour;
                break;
            case 5:
                this.userRateArray = this.ratingsData.userRateFive;
                break;
            default:
                this.userRateArray = [];
                break;
        }

        this.userRateArray.map((item: any) => {
            item.checked = false;
        });

        this.isenabled = true;

    }

    presentAlert() {

        let alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
            // title: 'Confirmation',
            subTitle: 'Submitted Successfully',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.store.dispatch(new fromStore.ResetFeedbackAction());
                        this.addComment = '';
                        this.dismiss(true);
                    }
                }
            ]
        });
        alert.present();

    }

    CheckBoxChanged(i, e) {

        let checkedItems = this.userRateArray.filter((item) => {
            return item.checked == true;
        })

        if (checkedItems.length > 0)
            this.isenabled = false;
        else
            this.isenabled = true;  
    }

    ionViewWillLeave() {
        this._addFeedbackDataListener.unsubscribe();
    }

}
