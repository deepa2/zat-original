import { Component, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "ionic-angular";
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { ReportTsAssociateListModalComponent } from "../report-ts-associateList-modal/report-ts-associateList-modal";
import * as moment from 'moment';
import { SEND_FORMAT, SITE_LIST } from '../../../container/zents/zents_constants';
import { API_END_POINTS_REPORT, ZEN_REPORT_CONST } from '../../../providers/app-services-list/app.services-list';
import { ReportSelectedListModal } from "../report-selected-list-modal/report-selected-list-modal";


@Component({
    selector: 'report-timecard',
    templateUrl: 'report-timecard.html'
})
export class ReportTimecardComponent {

    @Input() startDate: string;
    @Input() endDate: string;
    @Input() reportType: Object;
    @Input() reportNA: boolean = false;

    private reportForm: FormGroup;
    private siteList: Array<Object> = [];
    private sendFormat: Array<Object> = [];
    // private selectedFormat: string = 'excel';
    // private selectedSite: string = 'onsite';
    private territoryList: Array<any> = [];
    private clientCustomerList: Array<Object> = [];
    private selectedList = {
        selectedclientCustomerList: [],
        selectedprojectListFromModal: [],
        associateListFromModal: []
    }
    // private selectedclientCustomerList: Array<Object> = [];
    private projectList: Array<Object> = [];
    // private selectedprojectListFromModal: Array<Object> = [];
    private associateList: Array<Object> = [];
    // private associateListFromModal: Array<Object> = []


    constructor(private fb: FormBuilder, private httpProvider: HttpProvider, private utilities: CommonUtilities, private modalController: ModalController) {
        
        this.reportForm = this.fb.group({
            deliveryTerritory: [{ value: '', disabled: false }, Validators.required],
            clientCustomers: [{ value: [], disabled: true }, Validators.required],
            projects: [{ value: [], disabled: true }, Validators.required],
            startDate: [{ value: '' }],
            endDate: [{ value: '' }],
            site: [{ value: 'onsite' }],
            selectedFormat: [{ value: 'excel' }],
            associates: [{ value: [], disabled: true }, Validators.required],
        });

        this.siteList = SITE_LIST;
        this.sendFormat = SEND_FORMAT;

        this.getTerritoryList()
    }

    ngOnInit() {
        this.reportForm.value.startDate.value = this.startDate
        this.reportForm.value.endDate.value = this.endDate;
        // console.log(this.reportForm.value)
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.startDate)
            this.reportForm.value.startDate.value = moment(changes.startDate.currentValue).format('YYYY-MM-DD');

        if (changes.endDate)
            this.reportForm.value.endDate.value = moment(changes.endDate.currentValue).format('YYYY-MM-DD');

        if (changes.reportNA)
            this.reportNA = changes.reportNA.currentValue
    }

    getTerritoryList() {
        this.utilities.updateLoader(true);
        let data = {
            url: API_END_POINTS_REPORT.TIMECARD_TERRITORY,
            data: {},
            zenTsReport: true
        }
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            // console.log(response);
            if (response.data.territories) {
                this.territoryList = response.data.territories
            }
            this.utilities.updateLoader(false);
        }, error => {
            this.utilities.updateLoader(false);
            //console.log(error)
        })
    }

    onDeliveryTerritorySelect(selectedTerritory: string) {

        let data = {
            url: API_END_POINTS_REPORT.TIMECARD_CLIENT_CUSTOMER,
            data: {
                "territory": selectedTerritory
            },
            zenTsReport: true
        }
        this.utilities.updateLoader(true);

        this.selectedList.selectedclientCustomerList.length = 0

        this.selectedList.selectedprojectListFromModal.length = 0
        this.projectList.length = 0;

        this.selectedList.associateListFromModal.length = 0
        this.associateList.length = 0

        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            // console.log(response);
            if (response.data.clients) {
                this.clientCustomerList = response.data.clients;
                this.reportForm.get('clientCustomers').enable();
            }

            this.utilities.updateLoader(false);
        }, error => {
            this.utilities.updateLoader(false);
            //console.log(error)
        })
        // console.log(this.reportForm.value)
    }


    _selectCLientCustomer(event) {
        // console.log(event)
        let listFromRT: any = {
            list: this.clientCustomerList,
            listOf: 'customer'
        }

        if (this.selectedList.selectedclientCustomerList.length > 0) {
            listFromRT.selectedList = this.selectedList.selectedclientCustomerList;
        }

        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });

        if (!event)
            modal.present();

        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                this.selectedList.selectedclientCustomerList = resFromModal.selectedList
                this.reportForm.value.clientCustomers.value = this.selectedList.selectedclientCustomerList.map(({ customerId }) => customerId);;
                this.getProjectList(this.reportForm.value.clientCustomers.value);
            }
        })
    }

    getProjectList(selectedclientCustomerList: any) {
        let data = {
            url: API_END_POINTS_REPORT.TIMECARD_PROJECTS,
            data: { clients: selectedclientCustomerList },
            zenTsReport: true
        }
        this.utilities.updateLoader(true);

        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            // console.log(response);
            if (response.data.projects) {
                this.projectList = response.data.projects;
                this.reportForm.get('projects').enable();
              }

            this.utilities.updateLoader(false);
        },  error => {
                this.utilities.updateLoader(false);
                //console.log(error)
            })
    }

    _selectProjects(event) {

        let listFromRT: any = {
            list: this.projectList,
            listOf: 'projects'
        }
        
        if (this.selectedList.selectedprojectListFromModal.length > 0) {
            listFromRT.selectedList = this.selectedList.selectedprojectListFromModal;
        }
        
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });
        
        if (!event)
            modal.present();

        modal.onDidDismiss((resFromModal) => {
            if (resFromModal.selectedList.length > 0) {
                this.selectedList.selectedprojectListFromModal = resFromModal.selectedList;
                this.reportForm.value.projects.value = this.selectedList.selectedprojectListFromModal.map(({ projectId }) => projectId);
                this.getAssociateList()
            }
        })
    }

    _selectedSiteButtton(selectedSite: string) {
        this.reportForm.value.site.value = selectedSite;
        if (this.selectedList.selectedprojectListFromModal.length > 0) {
            this.getAssociateList();
            this.selectedList.associateListFromModal = []
        }
    }

    _selectedFormat(selectedFormat: string) {
        this.reportForm.value.selectedFormat.value = selectedFormat
    }

    getAssociateList() {
        // console.log(this.reportForm.value)
        let data = {
            url: '',
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "projects": this.reportForm.value.projects.value
            },
            zenTsReport: true
        }
        if (this.reportForm.value.site.value == 'onsite') {
            data.url = API_END_POINTS_REPORT.TIMECARD_ASSOCIATES_ONSITE;
        } else if (this.reportForm.value.site.value == 'offshore') {
            data.url = API_END_POINTS_REPORT.TIMECARD_ASSOCIATES_OFFSHORE;
        } else {
            data.url = API_END_POINTS_REPORT.TIMECARD_ASSOCIATE_ALL;
        }

        this.utilities.updateLoader(true);
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) => {
            // console.log(response);
            if (response.data.staffs) {
                this.associateList = response.data.staffs;
                this.reportForm.get('associates').enable();
            }

            this.utilities.updateLoader(false);
        }, error => {
            this.utilities.updateLoader(false);
            //console.log(error)
        })
    }

    _selectAssociates(event) {

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
            }
        })
    }

    onSubmit() {
        let data = {
            url: '',
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "projects": this.reportForm.value.projects.value,
                "staffs": this.reportForm.value.associates.value,
                "territory": this.reportForm.value.deliveryTerritory
            },
            zenTsReport: true
        }

        if (this.reportForm.value.selectedFormat.value == 'excel') {
            data.url = API_END_POINTS_REPORT.TIMECARD_CSV;
        } else {
            data.url = API_END_POINTS_REPORT.TIMECARD_PDF;
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
        if (listFrom == 'Customers') {
            selectedList = this.selectedList.selectedclientCustomerList
        } else if (listFrom == 'Projects') {
            selectedList = this.selectedList.selectedprojectListFromModal
        } else if ('Associates') {
            selectedList = this.selectedList.associateListFromModal
        }

        let modal = this.modalController.create(ReportSelectedListModal, { selectedList: selectedList, listFrom: listFrom });
        if (selectedList.length > 0)
            modal.present();
        // modal.onDidDismiss();
    }
}
