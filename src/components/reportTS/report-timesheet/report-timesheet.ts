import { Component, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "ionic-angular";
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { ReportTsStatusModalComponent } from "../report-ts-status-modal/report-ts-status-modal";
import * as moment from 'moment';
import { ReportTsAssociateListModalComponent } from "../report-ts-associateList-modal/report-ts-associateList-modal";
import { SEND_FORMAT } from '../../../container/zents/zents_constants';
import { API_END_POINTS_REPORT, ZEN_REPORT_CONST } from '../../../providers/app-services-list/app.services-list';
import { ReportSelectedListModal } from "../report-selected-list-modal/report-selected-list-modal";


@Component({
    selector: 'report-timesheet',
    templateUrl: 'report-timesheet.html'
})
export class ReportTimesheetComponent {
    @Input() startDate: string;
    @Input() endDate: string;
    @Input() reportType: Object;
    @Input() reportNA: boolean = false;

    private reportForm: FormGroup;
    private sendFormat: Array<Object> = [];
    private projectList: Array<Object> = [];
    private selectedProjectList: Array<any> = [];
    private selectedTimesheetStatus: any;
    private tsStatus: any;

    private selectedStatusValue = "View All";
    private selecetdStatusPreState: any;

    constructor(private fb: FormBuilder, private httpProvider: HttpProvider, private utilities: CommonUtilities, private modalController: ModalController
    ) {
        this.reportForm = this.fb.group({
            projects: [{ value: [], disabled: false }, Validators.required],
            startDate: [{ value: '' }],
            endDate: [{ value: '' }],
            selectedFormat: [{ value: 'excel' }],
            selectedTimesheetStatus: [{ value: ['-1', '1', '2', '3'] }]
        });


        this.sendFormat = SEND_FORMAT;
        // this.tsStatus = TS_STATUS;
        this.getProjectList()
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

    getProjectList() {
        let data = {
            url: API_END_POINTS_REPORT.TIMESHEET_STATUS_PROJECT,
            data: {},
            zenTsReport: true
        }

        this.utilities.updateLoader(true);

        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            if (response.data.projects) {
                this.projectList = response.data.projects
            }
            this.utilities.updateLoader(false);
        },
            error => {
                this.utilities.updateLoader(false);
                //console.log(error)
            })

        console.log(this.reportForm.value)

    }

    _selectProject(event) {
        let listFromRT: any = {
            list: this.projectList,
            listOf: 'projects'
        }
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });
        if (this.selectedProjectList.length > 0) {
            listFromRT.selectedList = this.selectedProjectList;
        }
        if (!event)
            modal.present();
        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                console.log(resFromModal)
                this.selectedProjectList = resFromModal.selectedList
                this.reportForm.value.projects = this.selectedProjectList.map(({ projectId }) => projectId);
            }
        })
    }

    _onProjectListChange(selectedProject: string) {
        console.log(selectedProject)
    }

    _selectedFormat(selectedFormat: string) {
        this.reportForm.value.selectedFormat.value = selectedFormat
    }

    _selectedTsStatusButtton(selectedStatus: any) {
        this.selectedTimesheetStatus = selectedStatus
        // this.selectedStatusValue = selectedStatus;
    }

    // _tsStatus() {
    //     console.log(this.value)
    // }


    _openModel(radioBtnSelected: boolean) {
        let modal = this.modalController.create(ReportTsStatusModalComponent, { selectedStatusValue: this.reportForm.value.selectedTimesheetStatus.value }, { cssClass: 'emailCSS' });

        if (radioBtnSelected)
            modal.present();

        modal.onDidDismiss((resFromModal) => {
            if (resFromModal) {
                this.reportForm.value.selectedTimesheetStatus.value = resFromModal.selectedStatus;
                // this.selecetdStatusPreState = resFromModal.selectedStatus;
                if (resFromModal.selectedStatus.length == 4)
                    this.selectedStatusValue = 'View All';
                else if (resFromModal.selectedStatus.length == 0) {
                    this.selectedStatusValue = resFromModal.selectedStatus.length
                } else {
                    this.selectedStatusValue = resFromModal.selectedStatus.length;
                }
            }
        })

    }

    onSubmit() {
        let data = {
            url: '',
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "projectIds": this.reportForm.value.projects,
                "status": []
            },
            zenTsReport: true
        }
        if (this.selectedTimesheetStatus == 'No timesheet report') {
            delete data.data.status;
            if (this.reportForm.value.selectedFormat.value == 'excel') {
                data.url = API_END_POINTS_REPORT.TIMESHEET_STATUS_NOTFIllED_CSV;
            } else {
                data.url = API_END_POINTS_REPORT.TIMESHEET_STATUS_NOTFIllED_PDF;
            }
        } else {
            data.data.status = this.reportForm.value.selectedTimesheetStatus.value
            if (this.reportForm.value.selectedFormat.value == 'excel') {
                data.url = API_END_POINTS_REPORT.TIMESHEET_STATUS_CSV;
            } else {
                data.url = API_END_POINTS_REPORT.TIMESHEET_STATUS_PDF;
            }
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

        let modal = this.modalController.create(ReportSelectedListModal, { selectedList: this.selectedProjectList, listFrom: listFrom });
        if (this.selectedProjectList.length > 0)
            modal.present();
        // modal.onDidDismiss();
    }
}