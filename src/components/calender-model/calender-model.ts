// import { Component } from "@angular/core"
// import { ViewController, NavParams } from "ionic-angular"
// import * as fromStore from "@app/store"
// import { Subscription } from "rxjs"
// import { Store } from "@ngrx/store"
// import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities"

// @Component({
//     selector: "page-calender-model",
//     templateUrl: "calender-model.html"
// })

// export class CalenderModel {

//     private _getSwipeMissUrlListener: Subscription = new Subscription()
//     private url: string = "myLeaveSSO"
//     date: any
//     daysInThisMonth: any
//     daysInLastMonth: any
//     daysInNextMonth: any
//     monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     currentMonth: any
//     currentYear: any
//     currentDate: any
//     dates: any
//     isThisCurrentMonth: boolean
//     isThisPreviousMonth: boolean

//     constructor(private viewCtrl: ViewController, private navParams: NavParams, private store: Store<fromStore.AppState>, private commonUtils: CommonUtilities) {
//         this.dates = this.navParams.get("profileItem").dates.split("|")
//         this.date = new Date()
//         this.getDaysOfMonth()
//     }

//     getDaysOfMonth() {

//         this.daysInThisMonth = new Array()
//         this.daysInLastMonth = new Array()
//         this.daysInNextMonth = new Array()
//         this.currentMonth = this.monthNames[this.date.getMonth()]

//         this.currentYear = this.date.getFullYear()
//         if (this.date.getMonth() === new Date().getMonth()) {
//             this.currentDate = new Date().getDate()
//         } else {
//             this.currentDate = 999
//         }

//         let firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()
//         let prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate()
//         for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
//             this.daysInLastMonth.push({ day: i, isMissed: false })
//         }

//         let thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
//         for (let i = 0; i < thisNumOfDays; i++) {
//             this.daysInThisMonth.push({ day: i + 1, isMissed: false })
//         }

//         for (let i = 0; i < this.daysInThisMonth.length; i++) {
//             for (let j = 0; j < this.dates.length; j++) {
//                 let missedMonth = new Date(this.dates[j]).getMonth() + 1
//                 if (missedMonth == (this.date.getMonth() + 1)) {
//                     let missedDate = new Date(this.dates[j]).getDate()
//                     if (missedDate == this.daysInThisMonth[i].day) {
//                         this.daysInThisMonth[i].isMissed = true
//                     }
//                 }
//             }
//         }

//         let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay()
//         // let nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate()
//         for (let i = 0; i < (6 - lastDayThisMonth); i++) {
//             this.daysInNextMonth.push({ day: i + 1, isMissed: false })
//         }

//         let totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length
//         if (totalDays < 36) {
//             for (let i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
//                 this.daysInNextMonth.push({ day: i + 1, isMissed: false });
//             }
//         }
//         this.isThisPreviousMonth = (new Date().getMonth() - 1) >= this.date.getMonth()
//         this.isThisCurrentMonth = new Date().getMonth() <= this.date.getMonth()
//     }

//     goToLastMonth() {
//         this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0)
//         this.getDaysOfMonth()
//     }

//     goToNextMonth() {
//         this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0)
//         this.getDaysOfMonth()
//     }

//     dismiss() {
//         this.viewCtrl.dismiss()
//     }

//     Openswipmiss() {

//         this.store.dispatch(new fromStore.GetSwipeMissAction(this.url))
//         return new Promise(resolve => {
//             this._getSwipeMissUrlListener = this.store.select<any>(fromStore.getSwipeMissState)
//                 .subscribe(response => {
//                     if (response.pending == false && response && response.data) {
//                         
//                         this.commonUtils.openWithSystemBrowser(response.data.leaveUrl)
//                         this.dismiss()
//                         resolve()
//                     }
//                 }, err => 
//                 );
//         });
//     }

//     ionViewWillLeave() {
//         this._getSwipeMissUrlListener.unsubscribe
//     }
// }


import { Component } from "@angular/core"
import { ViewController, NavParams, NavController } from "ionic-angular"
import * as fromStore from "@app/store"
import { Subscription } from "rxjs"
import { Store } from "@ngrx/store"
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities"
import * as moment from 'moment';

@Component({
    selector: "page-calender-model",
    templateUrl: "calender-model.html"
})

export class CalenderModel {

    private _getSwipeMissUrlListener: Subscription = new Subscription()
    private url: string = "myLeaveSSO"
    date: any
    daysInThisMonth: any
    daysInLastMonth: any
    daysInNextMonth: any
    monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    currentMonth: any
    currentYear: any
    currentDate: any
    dates: any
    isThisCurrentMonth: boolean
    isThisPreviousMonth: boolean

    monthseq: string;
    rejectedDates: Array<any> = [];
    pendingDates: Array<any> = [];
    type: string
    percentage: string
    calendarDates: Array<any> = [];
    selectedDate: any;

    constructor(private viewCtrl: ViewController, private navParams: NavParams,
        private store: Store<fromStore.AppState>, private commonUtils: CommonUtilities, private navCtrl: NavController) {
        let dataParam = this.navParams.get("dataParams");
        if (dataParam) {
            this.date = new Date()
            this.dates = dataParam.swipeMissDates ? dataParam.swipeMissDates.split("|") : null;

            this.percentage = dataParam.percentage;
            this.rejectedDates = dataParam.rejectedDates ? dataParam.rejectedDates : null;
            this.pendingDates = dataParam.pendingDates ? dataParam.pendingDates : null;
            this.monthseq = dataParam.key ? dataParam.key : null;
            this.type = dataParam.type ? dataParam.type : null;
            this.calendarDates = dataParam.calendarDates ? dataParam.calendarDates : null;
            // if (dataParam.selectedDate) {
            //     this.selectedDate = moment(dataParam.selectedDate).format('DD');
            // }
            this.selectedDate = moment(new Date()).format('DD');
            this.monthseq == 'lastMonth' ? this.goToLastMonth() : this.getDaysOfMonth()
        }

    }

    getDaysOfMonth() {

        this.daysInThisMonth = new Array()
        this.daysInLastMonth = new Array()
        this.daysInNextMonth = new Array()
        this.currentMonth = this.monthNames[this.date.getMonth()]

        this.currentYear = this.date.getFullYear()
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate()
        } else {
            this.currentDate = 999
        }

        let firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay()
        let prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate()
        for (let i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push({ day: i, isMissed: false, isRejected: false, isPending: false, showColor: false })
        }

        let thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
        for (let i = 0; i < thisNumOfDays; i++) {
            let newDate = new Date(this.date.getFullYear(), this.date.getMonth(), i + 1);
            if (this.type == 'time-entry') {
                this.calendarDates.map((obj) => {
                    if (obj.date == moment(newDate).format('YYYY-MM-DD') && (newDate.getDay() != 6 && newDate.getDay() != 0)) {
                        this.daysInThisMonth.push({
                            day: i + 1, date: newDate,
                            isMissed: false, isRejected: false, isPending: false, showColor: false, isEnabled: true
                        })
                    }

                })
                if (!this.daysInThisMonth[i]) {
                    this.daysInThisMonth.push({
                        day: i + 1, date: newDate,
                        isMissed: false, isRejected: false, isPending: false, showColor: false, isEnabled: false
                    })
                }
            } else {
                this.daysInThisMonth.push({
                    day: i + 1, date: newDate,
                    isMissed: false, isRejected: false, isPending: false, showColor: false, isEnabled: true
                })
            }

        }

        // for (let i = 0; i < this.daysInThisMonth.length; i++) {
        //     for (let j = 0; j < this.dates.length; j++) {
        //         let missedMonth = new Date(this.dates[j]).getMonth() + 1
        //         if (missedMonth == (this.date.getMonth() + 1)) {
        //             let missedDate = new Date(this.dates[j]).getDate()
        //             if (missedDate == this.daysInThisMonth[i].day) {
        //                 this.daysInThisMonth[i].isMissed = true
        //             }
        //         }
        //     }
        // }
        this.highlightDates(this.dates, 'missed');
        this.highlightDates(this.rejectedDates, 'rejected');
        this.highlightDates(this.pendingDates, 'pending');

        let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay()
        // let nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate()
        for (let i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push({ day: i + 1, isMissed: false, isRejected: false, isPending: false, showColor: false })
        }

        let totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length
        if (totalDays < 36) {
            for (let i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push({ day: i + 1, isMissed: false, isRejected: false, isPending: false, showColor: false });
            }
        }
        this.isThisPreviousMonth = (new Date().getMonth() - 1) >= this.date.getMonth()
        this.isThisCurrentMonth = new Date().getMonth() <= this.date.getMonth()
    }

    goToLastMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0)
        this.getDaysOfMonth()
    }

    goToNextMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0)
        this.getDaysOfMonth()
    }

    dismiss() {
        this.viewCtrl.dismiss()
    }

    Openswipmiss() {

        this.store.dispatch(new fromStore.GetSwipeMissAction(this.url))
        return new Promise(resolve => {
            this._getSwipeMissUrlListener = this.store.select<any>(fromStore.getSwipeMissState)
                .subscribe(response => {
                    if (response.pending == false && response && response.data) {
                        this.commonUtils.openWithSystemBrowser(response.data.leaveUrl)
                        this.dismiss()
                        resolve()
                    }
                }, err => { }
                );
        });
    }

    ionViewWillLeave() {
        this._getSwipeMissUrlListener.unsubscribe
    }

    highlightDates(datesArr, flag) {
        if (datesArr) {
            for (let i = 0; i < this.daysInThisMonth.length; i++) {
                for (let j = 0; j < datesArr.length; j++) {
                    let highlightedMonth = new Date(datesArr[j]).getMonth() + 1
                    if (highlightedMonth == (this.date.getMonth() + 1)) {
                        let highlightedDate = new Date(datesArr[j]).getDate()
                        if (highlightedDate == this.daysInThisMonth[i].day) {
                            this.daysInThisMonth[i].showColor = true;
                            if (flag == 'rejected') {
                                this.daysInThisMonth[i].isRejected = true
                            } else if (flag == 'missed') {
                                this.daysInThisMonth[i].isMissed = true
                            } else if (flag == 'pending') {
                                this.daysInThisMonth[i].isPending = true
                            }
                        }
                    }
                }
            }
        }
    }

    redirectToTimeEntry(item) {
        if (item.isEnabled || item.showColor) { 
            this.selectedDate = item.day;
        }
        if (this.type == 'time-entry') {
            if (item.isRejected || item.isEnabled) {
                let date = moment(item.date).format('YYYY-MM-DD');
                this.viewCtrl.dismiss(date);
            } else if (!item.isEnabled && item.isPending) {
                this.commonUtils.presentAlert('You cannot fill timesheets prior to last 5 working days');
            }
        } else if (this.type == 'add-hrs') {
            if (item.isRejected) {
                let date = moment(item.date).format('YYYY-MM-DD');
                this.viewCtrl.dismiss(date);
            }
        }
    }
}

