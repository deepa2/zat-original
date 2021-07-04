import { Injectable } from '@angular/core';
import { AlertController, NavController, App, LoadingController, Loading, ToastController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { GalleryModal } from 'ionic-gallery-modal';
import { ModalController } from 'ionic-angular';
import { Download } from '../../providers/download/download';
import { Platform } from 'ionic-angular';
import * as environment from '@app/env';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { ApplicationDownComponent } from '../../components/application-down/application-down';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Toast } from '@ionic-native/toast';
import { Rating } from '../../components/rating/rating';
import * as CryptoJS from 'crypto-js';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Injectable()
export class CommonUtilities
{

    private connectivityStatus: boolean = true;
    private loading: any
    private navCtrl: NavController;
    loader: Loading;
    IsLoaderVisible: boolean = false;
    private key: any

    options: InAppBrowserOptions = {
        location: 'no',//Or 'no' 
        hidden: 'no', //Or  'yes'
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',//Android only ,shows browser zoom controls 
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no', //Android only 
        closebuttoncaption: 'Close', //iOS only
        disallowoverscroll: 'no', //iOS only 
        toolbar: 'yes', //iOS only 
        enableViewportScale: 'yes', //iOS only 
        allowInlineMediaPlayback: 'no',//iOS only 
        presentationstyle: 'pagesheet',//iOS only 
        fullscreen: 'yes',//Windows only    
    };

    constructor(private alertCtrl: AlertController, private iab: InAppBrowser, private app: App, private loadingController: LoadingController,
        private modalCtrl: ModalController, private downloadService: Download, private platform: Platform, private datePipe: DatePipe,
        private toastCtrl: ToastController, private browserTab: BrowserTab, private toast: Toast, private file: File,
        private fileOpener: FileOpener, private androidPermissions: AndroidPermissions)
    {
        this.navCtrl = app.getActiveNav();

    }

    decrptWithKey(encryptedText, key)
    {
        // var encrypted = CryptoJS.AES.encrypt(plaintext, key, { mode: CryptoJS.mode.ECB });
        // console.log("Ciphertext (Base64):\n" + encrypted.toString()); // Ciphertext

        if (this.isEmptyOrNullOrUndefined(encryptedText))
        {
            return 0
        }

        var reb64 = CryptoJS.enc.Hex.parse(encryptedText);
        var bytes = reb64.toString(CryptoJS.enc.Base64);
        var decrypted = CryptoJS.AES.decrypt(bytes, key, { mode: CryptoJS.mode.ECB });
        console.log("Decrypted:\n" + decrypted.toString(CryptoJS.enc.Utf8)); // Plaintext
        return decrypted.toString(CryptoJS.enc.Utf8)
    }

    openEmailClient = function (emailId)
    {
        window.open("mailto:" + emailId, '_system');
    }

    callNumber = function (phoneNumber)
    {
        window.open("tel:" + phoneNumber.replace(/\s/g, ''), '_system');
    }

    alert(title, message)
    {

        let alert = this.alertCtrl.create({
            enableBackdropDismiss: false,
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () =>
                    {
                    }
                },
                {
                    text: 'Yes',
                    handler: () =>
                    {
                    }
                }
            ]
        });
        alert.present();
    }

    presentAlert(message, title = '')
    {

        return new Promise<void>(resolve =>
        {
            let alert = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: title,
                subTitle: message,
                cssClass: "error-alert-dialog",
                buttons: [
                    {
                        text: 'OK',
                        handler: () =>
                        {
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        })

    }

    presentConfirmation(message, title = '')
    {

        return new Promise<void>((resolve, reject) =>
        {
            let alert = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: title,
                subTitle: message,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () =>
                        {
                            reject();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () =>
                        {
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        })

    }
    rootedAlert(message, title = '')
    {

        return new Promise((resolve, reject) =>
        {
            let alert = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: title,
                subTitle: message,
                buttons: [
                    // {
                    //     text: 'Cancel',
                    //     handler: () => {
                    //         reject();
                    //     }
                    // },
                    // {
                    //     text: 'Yes',
                    //     handler: () => {
                    //         resolve();
                    //     }
                    // }
                ]
            });
            alert.present();
        })

    }
    presentConfirmationNew(message, title)
    {

        return new Promise<void>((resolve, reject) =>
        {
            let alert = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: title,
                subTitle: message,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () =>
                        {
                            reject();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () =>
                        {
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        })

    }
    confirmationMsgForSkills(message, title = '')
    {

        return new Promise<void>((resolve, reject) =>
        {
            let alert = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: title,
                subTitle: message,
                buttons: [

                    {
                        text: 'Ok',
                        handler: () =>
                        {
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        })

    }


    goToPage(pageName, params: any = '')
    {
        this.app.getActiveNav().setRoot(pageName);
    }

    goToPageDetail(pageName, id, response)
    {
        console.log("Notification triggered")
        if (pageName == "NewProfilePage")
        {

            if (response.data.forSkill || response.data.forSkill == null)
            {
                if (response.data.forSkill == "true")
                {
                    response.data.forSkill = true
                }
                else if (response.data.forSkill == "false")
                {
                    response.data.forSkill = false
                }
                this.app.getRootNav().push('NewProfilePage', {
                    'userId': response.data.userId,
                    'profileType': 'userProfile',
                    'formSkills': response.data.forSkill
                });
            }
            else
            {
                this.app.getRootNav().push(pageName, {
                    'userId': id,
                    'profileType': 'userProfile',
                    'fromNotification': true
                })
            }

        } else if (pageName == 'TimeEntryPage')
        {
            this.app.getRootNav().push(pageName, {
                'isComingfromNotification': {
                    'pageTitle': 'Timesheet Entry',
                    'notificationData': response.data,
                    'subData': null
                }
            })
        } else if (pageName == 'Announcement' || pageName == 'DetailPage')
        {
            this.app.getRootNav().push(pageName, {
                'id': id
            })
        } else if (pageName == 'ApprovalDashboardPage')
        {
            this.app.getRootNav().push(pageName);
        } else if (pageName == 'QuestionsPage')
        {
            this.app.getRootNav().push(pageName);
        } else if (pageName == 'DapDetailPage')
        {
            this.app.getRootNav().push(pageName, {
                'dapItem': response.data.id, 'role': response.data.dapRole, 'userId': response.data.userId, 'status': response.data.status, 'isComingFromNotification': true
            })
        } else if (pageName == 'TeamListPage')
        {
            this.app.getRootNav().push(pageName, { 'role': response.data.dapRole })
        } else if (pageName == 'ZenLearnDashboardPage')
        {
            this.app.getRootNav().push(pageName)
        }
        else if (pageName == 'ZenLearnDashboardPage')
        {
            this.app.getRootNav().push(pageName)
        }
        else if (pageName == "ZenrichPage")
        {
            this.app.getRootNav().push(pageName, {
                'getData': {
                    'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
                    'key': response.data.pageTitle,
                    'parameter': response.data.status,
                    'type': null,
                    'value': response.data.pageTitle
                }
            });
        }
        else if (pageName == "ZenrichRefDetailPage")
        {
            this.app.getRootNav().push(pageName, {
                'referralMappingId': id, 'srfNo': ""
            })
        }
        else if (pageName == "ZenRichLandingPage")
        {
            if (response.data.status == "Draft")
            {
                this.app.getRootNav().push(response.data.pageName, { "fromNotification": true })
            }
            else
            {
                this.app.getRootNav().push(response.data.pageName)
            }
        }

    }

    formatDate(obj)
    {
        return obj.toString().replace(/\s/g, "T");
    }

    convertToBoolean(input): boolean | undefined
    {
        try
        {
            return JSON.parse(input);
        }
        catch (e)
        {
            return undefined;
        }
    }

    // openinsideBrowser(url: string) {
    //     this.iab.create(url, "_blank", this.options);
    // }

    openWithSystemBrowser(url: string)
    {
        this.iab.create(url, "_system", this.options)
    }

    isEmptyOrNullOrUndefined(variable: any)
    {
        try
        {
            if ((variable == null) || (variable == undefined))
            {
                return true
            } else if (typeof variable == 'object' && (variable.length == 0 || this.isEmpty(variable)))
            {
                return true
            } else if (variable == '' || variable == 'null')
            {
                return true
            } else
                return false
        } catch (error)
        {
        }
    }

    isEmpty(obj: any)
    {
        try
        {
            for (var key in obj)
            {
                if (obj.hasOwnProperty(key))
                {
                    return false
                }
            }
            return true
        } catch (error)
        {
        }
    }

    uppercase(str: any)
    {
        // ;
        if (str != undefined && str != null)
        {
            var array1 = str.toLowerCase().split(' ');
            var newarray1 = [];

            for (var x = 0; x < array1.length; x++)
            {
                newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
            }

            return newarray1.join(' ');
        }

    }

    openImageViewer(imageUrl)
    {
        let modal = this.modalCtrl.create(GalleryModal, {
            photos: [{ url: imageUrl }]
        });
        modal.present();
    }

    openPDF(url)
    {
        if (this.platform.is('ios'))
        {
            this.openWithSystemBrowser(url);
        }
        else
        {
            //this.downloadService.downloadDocument(url);
            //to open pdf file first we download and show the pdf or docx
            this.downloadService.downloadDocument(url);

        }
    }

    platformAvailable()
    {
        return this.platform.is('cordova')
    }

    openAsset(url)
    {

        if (url.substring(url.lastIndexOf('.') + 1) === 'pdf' || url.substring(url.lastIndexOf('.') + 1) === 'xlsx'
            || url.substring(url.lastIndexOf('.') + 1) === 'xls' || url.substring(url.lastIndexOf('.') + 1) === 'ppt' || url.substring(url.lastIndexOf('.') + 1) === 'pptx' || url.substring(url.lastIndexOf('.') + 1) === 'doc' || url.substring(url.lastIndexOf('.') + 1) === 'docx' || url.substring(url.lastIndexOf('.') + 1) === 'sheet' ||
            url.substring(url.lastIndexOf('.') + 1) === 'openxmlformats-officedocument.spreadsheetml.sheet' || url.substring(url.lastIndexOf('.') + 1) === 'ms-powerpoint' || url.substring(url.lastIndexOf('.') + 1) === 'rtf' || url.substring(url.lastIndexOf('.') + 1) === 'presentation' || url.substring(url.lastIndexOf('.') + 1) === 'document' || url.substring(url.lastIndexOf('.') + 1) === 'txt' ||
            url.substring(url.lastIndexOf('.') + 1) === 'openxmlformats-officedocument.wordprocessingml.document' || url.substring(url.lastIndexOf('.') + 1) === 'msword' || url.substring(url.lastIndexOf('.') + 1) === 'openxmlformats-officedocument.presentationml.presentation')
        {
            // this.openPDF(url);
            this.openWithSystemBrowser(url)
        } else
        {
            this.openImageViewer(url);
        }
    }

    updateLoader(loading)
    {

        if (loading && !this.IsLoaderVisible)
        {
            this.loader = this.loadingController.create({ content: "Please wait...", enableBackdropDismiss: false });
            this.IsLoaderVisible = true
            this.loader.present()
        } else
        {
            if (!loading && this.loader && this.IsLoaderVisible)
            {
                this.loader.dismiss();
                this.IsLoaderVisible = false
                this.loader = null;
            }
        }

    }

    validateLoader(loading)
    {
        if (loading && !this.IsLoaderVisible)
        {
            this.loader = this.loadingController.create({ content: "Validating experience in months...", enableBackdropDismiss: false });
            this.IsLoaderVisible = true
            this.loader.present()
        } else
        {
            if (!loading && this.loader && this.IsLoaderVisible)
            {
                this.loader.dismiss();
                this.IsLoaderVisible = false
                this.loader = null;
            }
        }
    }

    imageLoader(loading)
    {

        if (loading)
        {
            this.loader = this.loadingController.create({ content: "Please wait...", enableBackdropDismiss: false });
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

    getLocation()
    {
        var geolocationOptions = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };

        return new Promise((resolve, reject) =>
        {
            navigator.geolocation.getCurrentPosition(function (position)
            {
                resolve(position.coords);
            }, function onError(error)
            {
                reject(error);
            }, geolocationOptions);
        })
    }

    showDebugAlert(message)
    {
        if (environment.isDev)
        {
            alert(message)
        }
    }

    showDebugLog(message)
    {
        if (environment.isDev)
        {
        }
    }



    //***********==============ZenTS=============******************\\
    checkBillability(flag: string)
    {
        let list: Array<any> = [];
        if (flag == 'NO')
        {
            list = [
                { name: 'Non-Billable', value: 'NO' }
            ]
        } else if (flag == 'YES')
        {
            list = [
                { name: 'Billable', value: 'YES' },
                { name: 'Non-Billable', value: 'NO' }
            ]
        }
        return list;
    }

    showAppDownMsg()
    {
        let modal = this.modalCtrl.create(ApplicationDownComponent, {}, {
            cssClass: 'infoModal'
        });
        modal.present();
    }

    showReportAlertMsg(alertMsg: any)
    {
        let modal = this.modalCtrl.create(Rating, {
            fromReportModule: {
                alertMsg: alertMsg,
                fromReport: true
            }
        }, { cssClass: 'ratingCSS-report-process' });
        modal.present();
        modal.onDidDismiss((data) =>
        {
            if (data)
            {
                console.log(data);
                // this.exitStatusData.departmentList.filter((value) => {
                //   if (value.departmentId == data.departmentId) {
                //     value.rating = data.rating - 1;
                //   }
                // })
                // let param = {
                //     url: 'ratingAgainstDepartment',
                //     data: {
                //         "rating": data.rating - 1,
                //         "departmentId": data.departmentId,
                //         "comments": data.comments
                //     },
                //     zenExit: true
                // }
                // this.http.http.commonService(param).subscribe((response: any) => {
                //     if (response && response.status.statusCode == 1) {
                //         this.getExitStatusData();
                //     }
                // })
            }
        })
    }

    convertTime(time: string, type: number)
    {
        let outputTime = null;
        let effortsArray = [];
        let hour = null;
        let minute = null;

        if (type == 1)
        {
            effortsArray = time.split(':');
            outputTime = effortsArray[0] + '.' + effortsArray[1];
        } else if (type == 2)
        {
            effortsArray = time.split('.');
            if (new String(effortsArray[0]).length == 1)
            {
                hour = 0 + effortsArray[0];
            } else
            {
                hour = effortsArray[0];
            }
            if (new String(effortsArray[1]).length == 1)
            {
                minute = effortsArray[1] + 0;
            } else
            {
                minute = effortsArray[1];
            }
            outputTime = hour + ':' + minute;
        }

        return outputTime;
    }

    toCapitalize(word: string)
    {
        if (!word) return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    toTitleCase(word: String)
    {
        if (word !== null)
        {
            return word.toLowerCase().replace(/_/g, ' ').replace(/\b([a-z\u00C0-\u00ff])/g, function (_, initial)
            {
                return initial.toUpperCase();
            }).replace(/(\s(?:de|a|o|e|da|do|em|ou|[\u00C0-\u00ff]))\b/ig, function (_, match)
            {
                return match.toLowerCase();
            });
        }
    }

    openBrowserTab(url)
    {
        try
        {
            this.browserTab.isAvailable().then(isAvailable =>
            {
                if (isAvailable)
                {
                    this.browserTab.openUrl(url)
                } else
                {
                    this.openWithSystemBrowser(url)
                }

            })
                .catch(() =>
                {
                    this.openWithSystemBrowser(url)
                })
        } catch (e)
        {
            this.openWithSystemBrowser(url)
        }

    }

    omit_special_char(event)
    {
        var k;
        k = event.charCode;  //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }

    changeToDateString(dateObj: any)
    {
        //let dateStr = new Date(dateObj.year + '-' + dateObj.month + '-' + dateObj.day);
        let dateStr = this.datePipe.transform((dateObj.year + '-' + dateObj.month + '-' + dateObj.day), "MMM d, y, h:mm:ss a");
        let convertedDate = moment(dateStr).format('YYYY') + '-' + moment(dateStr).format('MM') + '-' + moment(dateStr).format('DD');
        return convertedDate;
    }

    showToast(message)
    {
        return new Promise((resolve, reject) =>
        {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        })
    }

    decrypt(data)
    {
        if (data)
        {
            return JSON.parse(atob(data))
        }

    }

    /**
        * present Toast function
        * @param message message for toast
        */
    presentToast(message: string)
    {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }
    /**      * function on alert call   
     *    * @param title title of alert
     *        * @param message message for alert      */
    async showAlert(title: string, message: string)
    {
        const alert = await this.alertCtrl.create({
            title: title, message: message, buttons: [{ text: 'OK', }]
        }); return await alert.present();
    }

    showToastMsg(msg)
    {
        this.toast.show(msg, 'short', 'bottom').subscribe(toast => { })
    }

    goToZenRichLanding()
    {
        // let getIndex = this.navCtrl.getViews();
        //////console.log(getIndex);
        this.navCtrl.push('ZenRichLandingPage');
        //////console.log(this.navCtrl.getActive().index)
        let pagesToRemove = this.navCtrl.getActive().index;
        let pushOnIndex = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(pagesToRemove - pushOnIndex, pagesToRemove)

    }

    formateData(value)
    {
        let str = value.toLowerCase().split(' ');
        //console.log(str)
        for (let i = 0; i < str.length; i++)
        {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1)
        }
        return str.join(' ');
    }

    consoleLog(value: any)
    {
        if (true)
        {
            // console.log(value)
        }
    }

    saveAndOpenPdf(pdf: any, filename: string)
    {

        let pdfBlob: any
        // if (filename.toLowerCase() == "form16") {
        //     pdfBlob = pdf
        // } else {
        pdfBlob = this.b64toBlob(pdf, 'data:application/pdf;base64', filename)
        // }

        filename = filename + ".pdf"

        const writeDirectory = this.platform.is('ios') ? this.file.dataDirectory : this.file.externalDataDirectory;
        this.file.writeFile(writeDirectory, filename, pdfBlob, { replace: true }).then(() =>
        {
            this.fileOpener.open(writeDirectory + filename, 'application/pdf').catch(() =>
            {
            });
        }).catch(() =>
        {
            console.error('Error writing pdf file');
        });
    }

    // _base64ToArrayBuffer(base64, type) {
    //     // let binary_string = atob(base64);
    //     // let len = base64.length;
    //     // let bytes = new Uint8Array(len);
    //     // for (let i = 0; i < len; i++) {
    //     //     bytes[i] = base64.charCodeAt(i);
    //     // }
    //     // return bytes.buffer;

    //     const byteNumbers = new Array(base64.length);
    //     for (let i = 0; i < base64.length; i++) {
    //         byteNumbers[i] = base64.charCodeAt(i);
    //     }
    //     const byteArray = new Uint8Array(byteNumbers);
    //     const blob = new Blob([byteArray], {type: type});
    //     return blob;
    // }

    b64toBlob(b64Data: any, contentType, filename)
    {

        let byteCharacters;

        contentType = contentType || '';
        let sliceSize = 512;

        // if (filename.toLowerCase() == "form16") {
        //     byteCharacters = b64Data
        // } else {
        byteCharacters = atob(b64Data);
        // }
        let byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize)
        {
            let slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++)
            {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            let byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        let blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    getPermissionsSaveAndOpenPdf(pdf: string, filename: string)
    {
        // if (this.platform.is('ios')) {
        this.saveAndOpenPdf(pdf, filename);
        // } else {
        //     this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {

        //         if (!(result.hasPermission)) {
        //             this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(response => {
        //                 this.saveAndOpenPdf(pdf, filename);
        //             })
        //         } else {
        //             this.saveAndOpenPdf(pdf, filename);
        //         }
        //     })
        // }
    }
}