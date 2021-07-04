import { Component, Input, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "ionic-angular";
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { ReportTsAssociateListModalComponent } from "../report-ts-associateList-modal/report-ts-associateList-modal";
import * as moment from 'moment';
import { url } from "@app/env";
import { SEND_FORMAT } from '../../../container/zents/zents_constants';
import { API_END_POINTS_REPORT, ZEN_REPORT_CONST } from '../../../providers/app-services-list/app.services-list';
import { ReportSelectedListModal } from "../report-selected-list-modal/report-selected-list-modal";


@Component({
    selector: 'report-common',
    templateUrl: 'report-common.html'
})
export class ReportCommonComponent
{

    @Input() startDate: string;
    @Input() endDate: string;
    @Input() reportType: any;
    @Input() reportNA: boolean = false;

    private reportForm: FormGroup;
    private sendFormat: Array<Object> = [];
    private projectList: Array<Object> = [];
    private selectedProjectList: Array<any> = []

    constructor(private fb: FormBuilder, private httpProvider: HttpProvider, private utilities: CommonUtilities, private modalController: ModalController
    )
    {
        this.reportForm = this.fb.group({
            projects: [{ value: '', disabled: false }, Validators.required],
            startDate: [{ value: '' }],
            endDate: [{ value: '' }],
            selectedFormat: [{ value: 'excel' }],
        });
        this.sendFormat = SEND_FORMAT;
    }

    ngOnInit()
    {
        this.reportForm.value.startDate.value = this.startDate
        this.reportForm.value.endDate.value = this.endDate;
        if (this.reportType.accessId != 5)
            this.getProjectList()

    }
    ngOnChanges(changes: SimpleChanges)
    {
        if (changes.startDate)
            this.reportForm.value.startDate.value = moment(changes.startDate.currentValue).format('YYYY-MM-DD');

        if (changes.endDate)
            this.reportForm.value.endDate.value = moment(changes.endDate.currentValue).format('YYYY-MM-DD');

        if (changes.reportNA)
            this.reportNA = changes.reportNA.currentValue
    }

    getProjectList()
    {
        // this.utilities.updateLoader(true);
        let data = {
            url: API_END_POINTS_REPORT.APPROVAL_TS_PROJECT,
            data: {},
            zenTsReport: true
        }
        this.utilities.updateLoader(true)
        this.httpProvider.http.zentsCommonService(data).subscribe((response: any) =>
        {
            if (response.data.projects)
            {
                this.projectList = response.data.projects
            }
            this.utilities.updateLoader(false);
        },
            error =>
            {
                this.utilities.updateLoader(false);
                //console.log(error)
            })

    }

    _selectProject(event)
    {
        let listFromRT: any = {
            list: this.projectList,
            listOf: 'projects'
        }
        if (this.selectedProjectList.length > 0)
        {
            listFromRT.selectedList = this.selectedProjectList;
        }
        let modal = this.modalController.create(ReportTsAssociateListModalComponent, {
            listFromRT: listFromRT
        });
        if (!event && this.projectList.length > 0)
            modal.present();
        modal.onDidDismiss((resFromModal) =>
        {
            if (resFromModal.selectedList.length > 0 || resFromModal.selectedList.length == 0)
            {
                this.selectedProjectList = resFromModal.selectedList;
                this.reportForm.value.projects = this.selectedProjectList.map(({ projectId }) => projectId)
            }
        })
    }

    _onProjectListChange(selectedProject: string)
    {
    }

    _selectedFormat(selectedFormat: string)
    {
        this.reportForm.value.selectedFormat.value = selectedFormat
    }

    onSubmit()
    {
        let data = {
            url: '',
            data: {
                "startDate": this.reportForm.value.startDate.value,
                "endDate": this.reportForm.value.endDate.value,
                "projects": this.reportForm.value.projects
            },
            zenTsReport: true
        }
        // params?.accessId == 2 || params?.accessId == 4 || params?.accessId == 5">
        if (this.reportType.accessId == 1)
        {
            if (this.reportForm.value.selectedFormat.value == 'excel')
            {
                data.url = API_END_POINTS_REPORT.APPROVAL_TS_CSV;
            } else
            {
                data.url = API_END_POINTS_REPORT.APPROVAL_TS_PDF;
            }
        } else if (this.reportType.accessId == 2)
        {
            if (this.reportForm.value.selectedFormat.value == 'excel')
            {
                data.url = API_END_POINTS_REPORT.MYPROJECT_EFFORTS_CSV;
            } else
            {
                data.url = API_END_POINTS_REPORT.MYPROJECT_EFFORTS_PDF;
            }
        } else if (this.reportType.accessId == 4)
        {
            if (this.reportForm.value.selectedFormat.value == 'excel')
            {
                data.url = API_END_POINTS_REPORT.MYTEAM_ATT_CSV;
            } else
            {
                data.url = API_END_POINTS_REPORT.MYTEAM_ATT_PDF;
            }
        } else if (this.reportType.accessId == 5)
        {
            delete data.data.projects;
            if (this.reportForm.value.selectedFormat.value == 'excel')
            {
                data.url = API_END_POINTS_REPORT.IBU_CSV;
            } else
            {
                data.url = API_END_POINTS_REPORT.IBU_PDF;
            }
        }

        this.utilities.presentConfirmation('Do you want to send mail').then(() =>
        {
            this.utilities.updateLoader(true);
            let commonAlertFinished = false
            let reportAlert = setTimeout(() =>
            {
                if (!commonAlertFinished)
                {
                    this.utilities.updateLoader(false);
                    this.utilities.showReportAlertMsg(ZEN_REPORT_CONST.WAIT_ALERT_MSG);
                    commonAlertFinished = true
                }
            }, 30000);
            this.httpProvider.http.zentsCommonService(data).subscribe((response: any) =>
            {
                clearTimeout(reportAlert);
                if (!commonAlertFinished)
                {
                    this.utilities.updateLoader(false);
                    this.utilities.showToast(ZEN_REPORT_CONST.ALERT_MSG);
                    commonAlertFinished = true
                }
                // this.utilities.presentAlert(response.data);
            }, error =>
            {
                clearTimeout(reportAlert)
                commonAlertFinished = true
                this.utilities.updateLoader(false)
            })
        }).catch(err => err);
    }

    _openSelectedListModal(listFrom: string)
    {

        let modal = this.modalController.create(ReportSelectedListModal, { selectedList: this.selectedProjectList, listFrom: listFrom });
        if (this.selectedProjectList.length > 0)
            modal.present();
        // modal.onDidDismiss();
    }

}
