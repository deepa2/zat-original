import { Component, OnInit } from '@angular/core';
import { ViewController, IonicPage, NavParams, LoadingController, Loading, NavController, AlertController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

@IonicPage()
@Component({
    selector: 'page-editProfile',
    templateUrl: 'editProfile.html'
})
export class EditProfilePage {

    profileArray: FormArray;
    myGroup: FormGroup = this.formBuilder.group({});
    profileDetails: any = {};
    loading$: Observable<any>;
    feedbackResponse$: Observable<any>;
    userId: number;
    persnalInfoDetails: Array<any> = [];
    expDetails: Array<any> = [];
    list: Array<any> = [];
    selectOptions: any;
    uploadMariageCertificate: boolean = false;
    uploadBirthCertificate: boolean = false;
    minDate: string;
    maxDate: string;
    docList: any;
    formData: FormData;
    editType: string = null;
    items: any = [];
    hide = [];
    private _addLoadingListener: Subscription = new Subscription();
    private _addSuccessListener: Subscription = new Subscription();
    private _profileDetailsListener: Subscription = new Subscription();
    private _uploadLoadingListener: Subscription = new Subscription();
    private _getobUploadData: Subscription = new Subscription();
    fieldLists: any;
    degreeStyle: any;
    hasRequested: any;
    hasRequestedShowMsg: string;
    loader: Loading;
    showForm: boolean = false;
    _submitExperienceLoading: Subscription = new Subscription();
    _submitExperienceData: Subscription = new Subscription();
    showSubmit: boolean = true;

    constructor(private navCtrl: NavController,
        private viewCtrl: ViewController,
        private navParams: NavParams,
        private store: Store<fromStore.AppState>,
        private formBuilder: FormBuilder,
        private loadingController: LoadingController,
        private utility: CommonUtilities,
        private alertCtrl: AlertController) {
    }

    getAssociatePersonalData() {

        let url;

        if (this.editType == 'experience') {
            url = 'getAssociateExperienceData';
        } else {
            url = 'getAssociatePersonalData';
        }

        this.store.dispatch(new fromStore.EditProfileDataAction(url, {}));

        this._profileDetailsListener = this.store.select<any>(fromStore.getProfileEditData).subscribe((res) => {
            if (res) {
                if (res.details) {
                    this.expDetails = res.details;
                }
                this.showSubmit = res.showSubmit;

            }

        }, (err) => {
        })
    }

    goToAddDetails(item) {

        let selectedfield = {
            "experienceId": item.experienceId,
            "referenceId": item.experienceId,
            "previousEmployerId": item.previousEmployerId,
            'section': 'experience',
            'formMessage': this.hasRequestedShowMsg,
            'isAvailableForFinalSubmit': this.hasRequested
        }

        this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });

    }

    ionViewWillEnter() {
        this.editType = this.navParams.get('type');
        this.hasRequested = this.navParams.get('hasRequested');
        this.hasRequestedShowMsg = this.navParams.get('hasRequestedShowMsg');
        this.getAssociatePersonalData();
        this.loading$ = this.store.select<any>(fromStore.getProfileLoading);
        this._submitExperienceLoading = this.store.select<any>(fromStore.getEditProfileLoading).subscribe(loading => {
            this.updateLoader(loading);
        })
        console.log(this.navCtrl.getActive().index)
    }

    ionViewWillLeave() {
        this._addLoadingListener.unsubscribe();
        this._addSuccessListener.unsubscribe();
        this._profileDetailsListener.unsubscribe();
        this._uploadLoadingListener.unsubscribe();
        this._getobUploadData.unsubscribe();
        this._submitExperienceLoading.unsubscribe();
        this._submitExperienceData.unsubscribe();
    }

    addForm() {

        let selectedfield = {
            "experienceId": 0,
            "previousEmployerId": 0,
            'section': 'experience',
            "mode": "add",
            "addReferenceId": this.expDetails.length == 0 ? 0 : this.expDetails[this.expDetails.length - 1].experienceId,
            'formMessage': '',
            'isAvailableForFinalSubmit': this.hasRequested

        }

        this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
    }

    submitExperience() {
        let alert = this.alertCtrl.create({
            message: 'After submitting the experience(s),you will not be able to add/edit the experience for next 48 hours.<br> Are you sure you want to submit the experience?',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: () => {

                    }

                },
                {
                    text: 'Yes',
                    handler: () => {

                        this.store.dispatch(new fromStore.SubmitExperienceAction('submitExperienceData'))
                    }
                }
            ],

        });

        alert.present();
        
        this._submitExperienceData = this.store.select<any>(fromStore.getEditProfileData).subscribe(data => {
            //  this.updateLoader(true)
            this.store.dispatch(new fromStore.SubmitResetData());
            if (data) {
                // this.updateLoader(false)
                this.utility.presentAlert("Experience submitted successfully").then(() => {
                    //this.store.dispatch(new fromStore.SubmitResetData());
                   // this.navCtrl.pop();
                   let currentIndex = this.navCtrl.getActive().index - 1;
                   this.navCtrl.remove(currentIndex, 2);

                })
            }
        })
    }

    updateLoader(loading) {

        if (loading) {
            this.loader = this.loadingController.create();
            this.loader.present()
        } else {
            if (this.loader) {
                this.loader.dismiss();
                this.loader = null;
            }
        }

    }

}
