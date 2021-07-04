import { Component, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "ionic-angular";
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { ReportTsAssociateListModalComponent } from "../report-ts-associateList-modal/report-ts-associateList-modal";
import * as moment from 'moment';
import { SEND_FORMAT, TS_STATUS_LIST, TS_TYPE_LIST } from '../../../container/zents/zents_constants';
import { API_END_POINTS_REPORT, ZEN_REPORT_CONST } from '../../../providers/app-services-list/app.services-list';
import { ReportSelectedListModal } from "../report-selected-list-modal/report-selected-list-modal";

@Component({
    selector: 'report-overtime',
    templateUrl: 'report-overtime.html'
})
export class ReportOvertimeComponent {


    @Input() startDate: string;
    @Input() endDate: string;
    @Input() reportType: Object;
    @Input() reportNA: boolean = false;

    private reportForm: FormGroup;
    private sendFormat: Array<Object> = [];
    private timesheetTypeList: Array<Object> = [];
    private timesheetStatusList: Array<Object> = [];
    private selectedFormat: string = 'excel';
    // private selectedSite: string = 'onsite';
    private payrollList: Array<any> = [];
    private locationList: Array<Object> = [];
    private selectedList = {
        selectedLocationList: [],
        selectedselectedPayrollList: [],
        associateListFromModal: []
    }
    // private selectedclientCustomerList: Array<Object> = [];
    private projectList: Array<Object> = [];
    // private selectedprojectListFromModal: Array<Object> = [];
    private associateList: Array<Object> = [];
    // private associateListFromModal: Array<Object> = []


    constructor(private fb: FormBuilder, private httpProvider: HttpProvider, private utilities: CommonUtilities, private modalController: ModalController
    ) {
        this.reportForm = this.fb.group({
            payrolls: [{ value: [], disabled: false }, Validators.required],
            timesheetType: [{ value: '', disabled: true }, Validators.required],
            location: [{ value: [], disabled: true }, Validators.required],
            timesheetStatus: [{ value: '', disabled: true }, Validators.required],
            associates: [{ value: [], disabled: true }, Validators.required],
            startDate: [{ value: '' }],
            endDate: [{ value: '' }],
            selectedFormat: [{ value: 'excel' }],
        });

        this.timesheetTypeList = TS_TYPE_LIST
        this.timesheetStatusList = TS_STATUS_LIST
        this.sendFormat = SEND_FORMAT;
        this.getPayrollsList()
    }

    ngOnInit() {
        this.reportForm.value.startDate.value = this.startDate
        this.reportForm.value.endDate.value = this.endDate;
        console.log(this.reportForm.value)

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.startDate)
            this.reportForm.value.startDate.value = moment(changes.startDate.currentValue).format('YYYY-MM-DD');

        if (changes.endDate)
            this.reportForm.value.endDate.value = moment(changes.endDate.currentValue).format('YYYY-MM-DD');

        if (changes.reportNA)
            this.reportNA = changes.reportNA.currentValue
    }

    getPayrollsList() {
        // this.utilities.updateLoader(true);
        let data = {
            url: API_END_POINTS_REPORT.ADDITIONAL_HOUR_PAYROLL,
            data: {},
            zenTsReport: true
        }

        this.utilities.updateLoader(true);
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            console.log(response);
            if (response.data.payrolls) {
                this.payrollList = response.data.payrolls;
            }
            this.utilities.updateLoader(false);
        },
            error => {
                this.utilities.updateLoader(false);
                //console.log(error)
            })

        console.log(this.reportForm.value)

    }

    _selectPayroll(event) {
        let listFromRT: any = {
            list: this.payrollList,
            listOf: 'payroll'
        }
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });
        if (this.selectedList.selectedselectedPayrollList.length > 0) {
            listFromRT.selectedList = this.selectedList.selectedselectedPayrollList;
        }
        if (!event)
            modal.present();
        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                console.log(resFromModal)
                this.selectedList.selectedselectedPayrollList = resFromModal.selectedList;
                this.reportForm.value.payrolls.value = this.selectedList.selectedselectedPayrollList.map(({ payrollName }) => payrollName);
                this.onPayrollListSelect()
            }
        })
    }

    onPayrollListSelect() {

        let data = {
            url: API_END_POINTS_REPORT.ADDITIONAL_HOUR_LOCATION,
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "payrolls": this.reportForm.value.payrolls.value
            },
            zenTsReport: true
        }

        this.utilities.updateLoader(true);
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            // console.log(response);
            if (response.data.location) {
                this.locationList = response.data.location;
                this.selectedList.selectedLocationList.length = 0;
                
                this.associateList.length = 0
                this.selectedList.associateListFromModal.length = 0;
                this.reportForm.get('location').enable();
            }

            this.utilities.updateLoader(false);
        },
            error => {
                this.utilities.updateLoader(false);
                //console.log(error)
            })
        console.log(this.reportForm.value)

    }


    _selectLocation(event) {
        // let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
        //     listFromRT: {
        //         list: this.locationList,
        //         listOf: 'locationList'
        //     }

        // });

        let listFromRT: any = {
            list: this.locationList,
            listOf: 'locationList'
        }
        if (this.selectedList.selectedLocationList.length > 0) {
            listFromRT.selectedList = this.selectedList.selectedLocationList;
        }
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });

        if (!event)
            modal.present();
        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                this.selectedList.selectedLocationList = resFromModal.selectedList;
                this.reportForm.value.location.value = this.selectedList.selectedLocationList.map(({ locationId }) => locationId);
                this.getAssociateList();
            }
        })
    }

    _getTimesheetType(event) {
        console.log(event);
        this.reportForm.value.timesheetType = event;
        this.reportForm.get('timesheetStatus').enable();
    }

    _getTimesheetStatus(event) {
        console.log(event);
        this.reportForm.value.timesheetStatus = event;
        // this.getAssociateList();
    }

    getAssociateList() {
        console.log(this.reportForm.value)
        let data = {
            url: API_END_POINTS_REPORT.ADDITIONAL_HOUR_ASSOCIATES,
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "payrolls": this.reportForm.value.payrolls.value,
                "locations": this.reportForm.value.location.value
            },
            zenTsReport: true
        }

        this.utilities.updateLoader(true);
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            console.log(response);
            if (response.data.associates) {
                this.associateList = response.data.associates;
                this.reportForm.get('associates').enable();
                this.selectedList.associateListFromModal.length = 0;
            }

            this.utilities.updateLoader(false);
        },
            error => {
                this.utilities.updateLoader(false);
                //console.log(error)
            })
    }


    _selectedFormat(selectedFormat: string) {
        this.reportForm.value.selectedFormat.value = selectedFormat
    }


    _selectAssociates(event) {
        // let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
        //     listFromRT: {
        //         list: this.associateList,
        //         listOf: 'associates'
        //     }
        // });

        let listFromRT: any = {
            list: this.associateList,
            listOf: 'associates'
        }
        if (this.selectedList.associateListFromModal.length > 0) {
            listFromRT.selectedList = this.selectedList.associateListFromModal;
        }
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });

        if (!event)
            modal.present();
        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                console.log(resFromModal)
                this.selectedList.associateListFromModal = resFromModal.selectedList;
                this.reportForm.value.associates.value = this.selectedList.associateListFromModal.map(({ associateId }) => associateId);
                // this.getAssociateList()
                this.reportForm.get('timesheetType').enable();
            }
        })
    }

    onSubmit() {
        let data = {
            url: '',

            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "payrolls": this.reportForm.value.payrolls.value,
                "locations": this.reportForm.value.location.value,
                "associates": this.reportForm.value.associates.value,
                "timesheetType": this.reportForm.value.timesheetType,
                "reportaddhrsStatus": this.reportForm.value.timesheetStatus
            },
            // data: {
            //     "startDate": this.reportForm.value.startDate.value,
            //     "endDate": this.reportForm.value.endDate.value,
            //     "projects": this.reportForm.value.projects.value
            // },
            zenTsReport: true
        }

        if (this.reportForm.value.selectedFormat.value == 'excel') {
            data.url = API_END_POINTS_REPORT.ADDITIONAL_HOUR_CSV;
        } else {
            data.url = API_END_POINTS_REPORT.ADDITIONAL_HOUR_PDF;
        }

        this.utilities.presentConfirmation('Do you want to send mail').then(() => {

            this.utilities.updateLoader(true);
            let commonAlertFinished = false
            let reportAlert = setTimeout(() => {
                if (!commonAlertFinished) {
                    this.utilities.updateLoader(false);
                    this.utilities.showReportAlertMsg(ZEN_REPORT_CONST.WAIT_ALERT_MSG);
                    commonAlertFinished = true
                }
            }, 30000);
            this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
                // this.utilities.updateLoader(false);
                // // this.utilities.presentAlert(response.data);
                // this.utilities.showReportAlertMsg(ZEN_REPORT_CONST.ALERT_MSG); 
                clearTimeout(reportAlert);
                if (!commonAlertFinished) {
                    this.utilities.updateLoader(false);
                    this.utilities.showToast(ZEN_REPORT_CONST.ALERT_MSG);
                    commonAlertFinished = true
                }
            }, error => {
                clearTimeout(reportAlert)
                commonAlertFinished = true
                this.utilities.updateLoader(false)
            });
        }).catch(err => err);

    }

    _openSelectedListModal(listFrom: string) {
        let selectedList: any = []
        if (listFrom == 'Payrolls') {
            selectedList = this.selectedList.selectedselectedPayrollList
        } else if (listFrom == 'Locations') {
            selectedList = this.selectedList.selectedLocationList
        } else if ('Associates') {
            selectedList = this.selectedList.associateListFromModal
        }
        let modal = this.modalController.create(ReportSelectedListModal, { selectedList: selectedList, listFrom: listFrom });
        if (selectedList.length > 0)
            modal.present();
        // modal.onDidDismiss();
    }
}
