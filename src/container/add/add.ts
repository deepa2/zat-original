import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { LoadingController, NavController, PopoverController, AlertController, Loading, NavParams, Navbar } from 'ionic-angular';
import { Attachment } from '../../providers/attachment/attachment';
import { IonicPage } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { File } from '@ionic-native/file';
import { Subscription } from 'rxjs/Subscription';
import { EmojiService } from 'angular-emojione';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
    selector: 'page-add',
    templateUrl: 'add.html'
})
export class AddPage implements OnInit
{

    private degreeStyle;
    private addType;
    private addText = '';
    private addMessege = '';
    private addmsgType;
    private currentURL: string = null;
    private imagesList: any = [];
    private formData: FormData;
    private loader: Loading;
    private navType: string;
    private questionId: string;
    private role: string;
    private answerType: string;
    private title: string = '';
    private btnTitle: string;
    private maxLength: any = 0;
    private maxImageCount: number = 4;
    private errorMsg: any = false;
    private userType: any;
    private placeholderContent: string;
    private emoji: any


    @ViewChild('inputToFocus') inputToFocus;
    @ViewChild(Navbar) navBar: Navbar;

    private _addLoadingListener: Subscription = new Subscription();
    private _addSuccessListener: Subscription = new Subscription();
    private _roleListener: Subscription = new Subscription();


    constructor(
        private navCtrl: NavController,
        private attachment: Attachment,
        private store: Store<fromStore.AppState>,
        private loadingController: LoadingController,
        private popoverCtrl: PopoverController,
        private alertCtrl: AlertController,
        private file: File,
        private navParams: NavParams,
        private emojiService: EmojiService,
        private data: Data)
    {

        // get logged in user data & check for user type (associate or admin)
        this.data.getData('loginDetails').then((loginData: any) =>
        {
            if (loginData.details)
            {
                this.userType = loginData.details.userDetails.userType;
            }
        })

    }
    // on page load, all the data initialization takes place here
    ngOnInit()
    {
        this.maxLength = 350;
        this.degreeStyle = 'rotate(' + -45 + 'deg)';
        this.formData = new FormData();
        this.navType = this.navParams.get('type');
        this.questionId = this.navParams.get('questionId');
        this.answerType = this.navParams.get('answerType');
        console.log(this.answerType);

        if (this.answerType == 'reject')
        {
            // this.title = "Discard";
        } else if (this.answerType == 'accept')
        {
            // this.title = "Reply";
        } else
        {
            // this.title = "Add";
        }

        if (this.navType == 'addQuestion')
        {
            this.addType = 'Question';
            this.placeholderContent = "Type your question";
        } else if (this.navType == 'addAnswer')
        {
            if (this.answerType == 'reject')
            {
                this.addType = 'Question';
                this.placeholderContent = "Reason for discarding question";
            } else
            {
                this.addType = 'Answer';
                this.placeholderContent = "Type your answer";
            }
        } else if (this.navType == "addAnnouncement")
        {
            this.addType = 'Announcement';

        }

        this.data.getData(this.addType).then((data: any) =>
        {
            this.addText = data;
        })

        this.data.getData(this.addmsgType).then((message: any) =>
        {
            this.addMessege = message;
        })

        this.title = this.title.concat(' ' + this.addType);
    }

    ionViewDidEnter()
    {
        // on entering set focus on input field
        setTimeout(() =>
        {
            this.inputToFocus.setFocus();
        });
    }

    //this will call every time by Ionic whenever we enter into the page, subscribing all the data here. 
    ionViewWillEnter()
    {

        this._addLoadingListener = this.store.select<any>(fromStore.getAddLoading).subscribe(loading =>
        {
            this.updateLoader(loading);
        });

        this._addSuccessListener = this.store.select<any>(fromStore.getAddData).subscribe(data =>
        {
            if (data)
            {
                this.store.dispatch(new fromStore.AddResetAction());
                this.presentAlert();
            }
        });


        this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((res) =>
        {
            if (res)
            {
                this.role = res;
            }
        });

        this.setBackButtonAction();
    }

    // this method save all the data as draft on back button click
    setBackButtonAction()
    {
        this.navBar.backButtonClick = () =>
        {
            if (this.addText != undefined && this.addText != null && this.addText != '')
            {
                if (this.addText.length > 0)
                {
                    let alert = this.alertCtrl.create({
                        message: 'Do you want to save as drafts?',
                        enableBackdropDismiss: false,

                        buttons: [
                            {
                                text: 'No',
                                role: 'no',
                                handler: () =>
                                {
                                    this.navCtrl.pop();
                                    this.data.saveData(this.addType, '');
                                    this.data.saveData(this.addmsgType, '');
                                }
                            },
                            {
                                text: 'Yes',
                                handler: () =>
                                {
                                    this.navCtrl.pop();
                                    this.data.saveData(this.addType, this.addText);
                                    this.data.saveData(this.addmsgType, this.addMessege);
                                }
                            }
                        ],

                    });
                    alert.present();
                }
                else
                {
                    this.navCtrl.pop();
                }
            }
            else
            {
                this.navCtrl.pop();
            }

        }

    }
    // on leaving this page, all observable has be unsubscribed here..
    ionViewWillLeave()
    {
        this._addLoadingListener.unsubscribe();
        this._addSuccessListener.unsubscribe();
        this._roleListener.unsubscribe();
    }

    // attach images from camera or gallery
    attach(myEvent)
    {
        if (this.imagesList.length < this.maxImageCount)
        {
            let popover = this
                .popoverCtrl
                .create('PopoverPage', { 'type': 'attach' });
            // enableBackdropDismiss: false;
            popover.present({ ev: myEvent });
            popover.onDidDismiss((type) =>
            {

                if (type == 'gallery')
                {

                    let count = this.maxImageCount - this.imagesList.length;
                    this.attachment.openGallery(count).then((response) =>
                    {

                        if (response)
                        {
                            if (response != "OK")
                            {
                                this.imagesList = this.imagesList.concat(response);
                            }
                        }

                    });

                } else if (type == 'camera')
                {

                    this.attachment.openCamera().then((response) =>
                    {
                        if (response)
                        {
                            this.imagesList = this.imagesList.concat([response]);
                        }
                    });
                }
            })

        } else
        {
            let alert = this.alertCtrl.create({
                title: '',
                message: `Cannot add more than ${this.maxImageCount} images`,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () =>
                        {
                        }
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            alert.present();
        }


    }

    // To remove attached image while adding question or announcement
    removeAttach(id)
    {
        this.imagesList = this.imagesList.filter((item, i) =>
        {
            if (id != i)
            {
                return item;
            }
        })

    }

    // Removing un-necessary spacing from entered text 
    trim()
    {
        this.addText = this.addText.trim();

        if (this.addText.length > 0)
        {
            this.errorMsg = false;
        }
        //  else {
        //     this.errorMsg = true;
        // }
    }


    // To post a question with the attachment
    send()
    {

        this.addText = this.addText.trim();
        this.formData = new FormData();



        if (this.addText.length > 0)
        {
            this.errorMsg = false;
        } else
        {
            this.errorMsg = true;

        }

        if (this.addText.length > 0)
        {
            this.errorMsg = false;
            const textsend = this.emojiService.unicodeToShortname(this.addText);

            let message: string = null;
            if (this.navType == 'addQuestion')
            {
                message = 'Do you want to submit ?';
                this.currentURL = 'addQuestion';
                this.formData.append('question', textsend);
            } else if (this.navType == 'addAnswer')
            {
                this.currentURL = 'addAnswer';
                this.formData.append('questionId', this.questionId);
                this.formData.append('answer', textsend);
                this.formData.append('answerType', this.answerType);
                this.formData.append('role', this.role);

                if (this.answerType == 'reject')
                {
                    // this.btnTitle = "Discard";
                    message = 'Do you really want to discard this question?';
                } else if (this.answerType == 'accept')
                {
                    // this.btnTitle = "Reply";
                    message = 'Do you want to reply ?';
                }
            } else if (this.navType == "addAnnouncement")
            {
                if (this.addMessege.length > 0)
                {
                    const textAnnouncement = this.emojiService.unicodeToShortname(this.addMessege);
                    message = 'Do you want to submit ?';
                    this.currentURL = 'addAnnouncements';
                    this.formData.append('announcementSubject', textsend);
                    this.formData.append('announcementText', textAnnouncement);
                }

            }

            let alert = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: this.btnTitle,

                message: message,
                buttons: [
                    {
                        text: 'No',
                        role: 'no',
                        handler: () =>
                        {
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () =>
                        {

                            if (this.imagesList.length > 0)
                            {

                                Promise.all(
                                    this.imagesList.map(element =>
                                    {

                                        return new Promise((resolve, reject) =>
                                        {

                                            this.file.resolveLocalFilesystemUrl(element).then((entry: any) =>
                                            {
                                                entry.file((file) =>
                                                {
                                                    const fileReader = new FileReader();
                                                    fileReader.readAsArrayBuffer(file);
                                                    fileReader.onload = ev =>
                                                    {

                                                        let imgBlob = new Blob([fileReader.result], { type: file.type });
                                                        this.formData.append('file', imgBlob, file.name);
                                                        resolve(element);

                                                    }

                                                })
                                            })


                                        })

                                    })
                                ).then(() =>
                                {
                                    this.store.dispatch(new fromStore.AddMultimediaAction(this.currentURL, this.formData, this.navType));
                                }).catch(
                                    function ()
                                    {
                                    }
                                );

                            } else
                            {
                                this.store.dispatch(new fromStore.AddMultimediaAction(this.currentURL, this.formData, this.navType));
                                this.data.saveData(this.addType, "");
                                this.data.saveData(this.addmsgType, "");
                            }
                        }
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            alert.present();
        }
        else
        {
            this.errorMsg = true;
        }

    }


    // create, show and hide loader 
    updateLoader(loading)
    {

        if (loading)
        {
            this.loader = this.loadingController.create();
            this.loader.present()
        } else
        {
            if (this.loader)
            {
                this.loader.dismiss();
                this.loader = null;
            }
        }

    }

    // Show success, faliure of service call messages...
    presentAlert()
    {

        let subTitle: any;
        if (this.answerType == 'reject')
        {
            subTitle = "Question discarded successfully";
        } else if (this.answerType == 'accept')
        {
            subTitle = "You have successfully responded to the query."
        } else
        {
            subTitle = "Your query has been successfully posted. Please expect a response within 48 hours.";
        }

        let alert = this.alertCtrl.create({
            // title: 'Confirmation',
            enableBackdropDismiss: false,
            // title: 'Confirmation',
            subTitle: subTitle,

            buttons: [
                {
                    text: 'OK',
                    handler: () =>
                    {

                        if (this.navType == 'addQuestion' || this.navType == "addAnnouncement")
                        {
                            if (this.userType == "PRE-ONBOARDING")
                            {
                                let lastIndex = this.navCtrl.getActive().index - 1;
                                let lastPageName = this.navCtrl.getByIndex(lastIndex).name;

                                if (lastPageName == "ObDashboardPage")
                                {
                                    this.navCtrl.push('QuestionsPage')
                                    let currentIndex = this.navCtrl.getActive().index;
                                    this.navCtrl.remove(currentIndex, 1);
                                } else
                                {
                                    this.navCtrl.push('QuestionsPage')
                                    let currentIndex = this.navCtrl.getActive().index - 1;
                                    this.navCtrl.remove(currentIndex, 2);
                                }


                            } else
                            {
                                this.navCtrl.pop();
                            }

                        } else if (this.navType == 'addAnswer')
                        {

                            let currentIndex = this.navCtrl.getActive().index - 1;
                            this.navCtrl.remove(currentIndex, 2);
                        }

                    }
                }
            ]
        });
        alert.present();

    }


    //Show popup menu
    presentOptions(myEvent)
    {
        let popover = this.popoverCtrl.create('PopoverPage', { 'type': 'obAdd' });
        popover.present({ ev: myEvent });
    }



}