import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import moment from "moment";

@Component({
    selector: "report-model-page",
    templateUrl: "report-model.html"
})
export class ReportModelPage
{

    private loaderOn: boolean = false

    private passForm: FormGroup
    private startDate: any
    private endDate: any
    private empId: string = ""
    private reportType: any;
    private currDate;

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, private viewCtrl: ViewController,
        private formBuilder: FormBuilder, private utilities: CommonUtilities)
    {
        this.currDate = moment().format("YYYY-MM-DD");
        this.reportType = this.navParams.get("title")
    }

    dismiss()
    {
        this.viewCtrl.dismiss('data');
    }

    ngOnInit()
    {
        this.passForm = this.formBuilder.group({
            startDate: [{ value: '', disabled: false }, Validators.required],
            routeName: [{ value: '', disabled: true }, Validators.required],
            endDate: [{ value: '', disabled: false }, Validators.required],
            empID: [{ value: '', disabled: false }, Validators.required],
        })
    }

    getSearchData()
    {
        if (this.passForm.get("empID").value.trim().length <= 0 || this.utilities.isEmptyOrNullOrUndefined(this.startDate) || this.utilities.isEmptyOrNullOrUndefined(this.endDate))
        {
            this.utilities.showAlert('Reports', 'Field Cannot be Empty')
            return;
        } else
        {
            let getSerachData = {
                url: 'getReport',
                data: {
                    reportType: this.reportType,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    userId: this.passForm.get("empID").value,
                },
                isZenAdmin: true
            }

            this.loaderOn = true
            this.utility.updateLoader(this.loaderOn)

            this.httpProvider.http.commonService(getSerachData).subscribe((response: any) =>
            {
                this.loaderOn = false
                this.utility.updateLoader(this.loaderOn);
                if (!this.utilities.isEmptyOrNullOrUndefined(response))
                {
                    if (!this.utilities.isEmptyOrNullOrUndefined(response.status) && !this.utilities.isEmptyOrNullOrUndefined(response.status.statusCode)
                        && response.status.statusCode == 1)
                    {
                        this.utilities.showAlert('', response.data)
                        this.dismiss()
                        // } else if (response.status.statusCode == 0) {
                        // this.utilities.showAlert(response.status.statusMessage, '')
                    }
                }
            }, error =>
            {
                this.loaderOn = false
                this.utility.showDebugLog(error)
                this.utility.updateLoader(false)
            });
        }
    }

    onStartDateChange(date)
    {
        this.startDate = moment(this.passForm.get('startDate').value).format("YYYY-MM-DD");
    }

    onEndDateChange(date)
    {
        this.endDate = moment(this.passForm.get('endDate').value).format("YYYY-MM-DD");
        console.log("end date",this.endDate)
    }

}
