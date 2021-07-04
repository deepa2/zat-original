import { Component, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Loading, LoadingController, ModalController } from "ionic-angular";
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { ReportTsAssociateListModalComponent } from "../report-ts-associateList-modal/report-ts-associateList-modal";
import * as moment from 'moment';
import { url } from "@app/env";
import { NOT_FILLED_BY, SEND_FORMAT } from '../../../container/zents/zents_constants';
import { API_END_POINTS_REPORT, ZEN_REPORT_CONST } from '../../../providers/app-services-list/app.services-list';
import { ReportSelectedListModal } from "../report-selected-list-modal/report-selected-list-modal";


@Component({
    selector: 'report-not-filledTS',
    templateUrl: 'report-not-filledTS.html'
})
export class ReportNotFilledTSComponent {

    @Input() startDate: string;
    @Input() endDate: string;
    @Input() reportType: any;
    @Input() reportNA: boolean = false;

    private reportForm: FormGroup;
    private sendFormat: Array<Object> = [];
    private clientList: Array<Object> = [];
    private selectedClientList: Array<any> = [];
    private notFilledByRadio: Array<any> = [];
    private notFilledBySelected: string;
    private selectedStatusValue = "View All";
    private associateId: string;
    loader: Loading;


    constructor(private loadingController: LoadingController, private fb: FormBuilder, private httpProvider: HttpProvider, private utilities: CommonUtilities, private modalController: ModalController
    ) {
        this.reportForm = this.fb.group({
            clients: [{ value: '', disabled: false }, Validators.required],
            startDate: [{ value: '' }],
            endDate: [{ value: '' }],
            selectedFormat: [{ value: 'excel' }],
            selectedNotFilledBy: [{ value: 'By customers' }],
            associateId: [{ value: '' }]
        });

        this.notFilledByRadio = NOT_FILLED_BY;
        this.notFilledBySelected = NOT_FILLED_BY[0].name;
        this.sendFormat = SEND_FORMAT;
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
        // this.utilities.updateLoader(true);
        let data = {
            url: API_END_POINTS_REPORT.NOTFILLED_TS_CUSTOMER,
            data: {},
            zenTsReport: true
        }
        this.utilities.updateLoader(true)
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            if (response.data) {
                this.clientList = response.data
            }
            this.utilities.updateLoader(false);
        },
            error => {
                this.utilities.updateLoader(false);
                //console.log(error)
            })

    }

    _selectProject(event) {
        // let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
        //     listFromRT: {
        //         list: this.clientList,
        //         listOf: 'clientCustomer'
        //     }
        // });

        let listFromRT: any = {
            list: this.clientList,
            listOf: 'customer'
        }
        if (this.selectedClientList.length > 0) {
            listFromRT.selectedList = this.selectedClientList;
        }
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });

        if (!event)
            modal.present();
        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                console.log(resFromModal)
                this.selectedClientList = resFromModal.selectedList;
                this.reportForm.value.clients = this.selectedClientList.map(({ customerId }) => customerId);
            }
        })
    }

    _onProjectListChange(selectedProject: string) {
        console.log(selectedProject)
    }

    _selectedNotFilledBy(selectedNotFilledBy) {
        // this.notFilledBySelected = selectedNotFilledBy.value;
        this.reportForm.value.selectedNotFilledBy.value = selectedNotFilledBy;
        if (selectedNotFilledBy.value != this.notFilledByRadio[0].name) {
            this.associateId = null
        } else {
            this.selectedClientList.length = 0;
            this.reportForm.value.clients = this.selectedClientList;
        }
    }

    _selectedFormat(selectedFormat: string) {
        this.reportForm.value.selectedFormat.value = selectedFormat
    }

    onSubmit() {
        console.log(this.reportType)
        let data = {
            url: '',
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "staffId": '',
                "customerIds": []
            },
            zenTsReport: true
        }
        if (this.reportForm.value.selectedNotFilledBy.value == this.notFilledByRadio[0].name) {
            data.data.customerIds = this.reportForm.value.clients;
            delete data.data.staffId;
            if (this.reportForm.value.selectedFormat.value == 'excel') {
                data.url = API_END_POINTS_REPORT.NOTFILLED_TS_CUST_CSV
            } else {
                data.url = API_END_POINTS_REPORT.NOTFILLED_TS_CUST_PDF;
            }
        } else {
            data.data.staffId = this.associateId;
            delete data.data.customerIds
            if (this.reportForm.value.selectedFormat.value == 'excel') {
                data.url = API_END_POINTS_REPORT.NOTFILLED_TS_ASSO_CSV
            } else {
                data.url = API_END_POINTS_REPORT.NOTFILLED_TS_ASSO_PDF;
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
                clearTimeout(reportAlert);
                if (!commonAlertFinished) {
                    this.utilities.updateLoader(false);
                    this.utilities.showToast(ZEN_REPORT_CONST.ALERT_MSG);
                    commonAlertFinished = true
                }
            },error => {
                clearTimeout(reportAlert)
                commonAlertFinished = true
                this.utilities.updateLoader(false)
            });
        }).catch(err => err);

    }

    _openSelectedListModal(listFrom: string) {
        let modal = this.modalController.create(ReportSelectedListModal, { selectedList: this.selectedClientList, listFrom: listFrom });
        if (this.selectedClientList.length > 0)
            modal.present();
        // modal.onDidDismiss();
    }
}
