import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../../providers/http/http';
import { StdTaskListModalComponent } from '../../../../components/std-task-list-modal/std-task-list-modal';

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage implements OnInit {

  private data = {
    type: "add-task",
    task: null,
    projectListForProjectTask: []
  }
  private projectList: Array<any> = [];
  private stdTaskList: Array<any> = [];
  private projRelatedStdTasks: Array<any> = [];
  private orgRelatedStdTasks: Array<any> = [];
  private standardForm: FormGroup;
  submitted = false;

  private currentDate: string;
  private billabilityList: Array<any> = [];
  private isFixedBidProject: string = null;
  private milestoneList: Array<any> = [];
  private selProjectObj: any;
  private stdTaskObj: any;
  private milestoneObj: any;
  private hideProjectTask: boolean = false;
  private taskAndtimesheetDetails: Array<any> = [];
  private isPayrollToBeFilledZeroHours: boolean = false;

  private resolve: Function;

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private fb: FormBuilder, private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private modalCtrl: ModalController) {
    this.data.task = 'project';
    let data = this.navParams.get('timeEntryData');

    if (data) {
      this.currentDate = data.selectedDate;
      this.hideProjectTask = data.hideProjectTask;
      this.data.task = this.hideProjectTask ? 'standard' : 'project';
      this.taskAndtimesheetDetails = data.taskAndTimesheetDetails;
      this.isPayrollToBeFilledZeroHours = data.isPayrollToBeFilledZeroHours;
      this.resolve = data.resolve;
    }
  }

  ionViewDidLoad() {

  }

  ngOnInit() {
    //console.log("this.hideProjectTask", this.hideProjectTask);
    this.getProjectList();
    if (this.hideProjectTask) {
      this.getStdTaskList();
    }
    this.standardForm = this.fb.group({
      stdProjectId: ['', Validators.required],
      stdTaskId: [{ value: '', disabled: true }, Validators.required],
      stdTaskName: [{ value: '', disabled: true }, Validators.required],
      stdBillabilityName: [{ value: '', disabled: true }, Validators.required],
      stdTime: [{ value: '', disabled: true }],
      stdRemarks: ['', Validators.required],
      stdMilestone: ['']
    });

    this.standardForm.get('stdTime').setValue(this.isPayrollToBeFilledZeroHours ? '00:00' : '01:00');
  }

  addTask(data: any) {
    this.addProjectTaskService(data);
  }

  onStdProjSelect() {
    this.standardForm.get('stdTaskId').enable();
    this.standardForm.get('stdTaskName').enable();
    let projId = this.standardForm.get('stdProjectId').value;
    if (this.projectList) {
      this.projectList.map(item => {
        if (projId == item.projectId) {
          this.selProjectObj = item;
          this.billabilityList = this.utility.checkBillability(item.projectBillability);
          if (this.billabilityList.length == 1) {
            this.standardForm.get('stdBillabilityName').setValue(this.billabilityList[0].value);
          } else {
            this.standardForm.get('stdBillabilityName').setValue('');
          }
          this.isFixedBidProject = item.isFixedBidProject;
          if (this.isFixedBidProject == 'YES' && item.milestoneDetailsDTOs.length > 0) {
            this.milestoneList = item.milestoneDetailsDTOs;
            this.standardForm.get('stdMilestone').setValue(this.milestoneList.length == 1 ? this.milestoneList[0] : '');
            this.milestoneObj = this.milestoneList[0];
            this.standardForm.get('stdMilestone').setValidators(Validators.required);
          } else {
            this.standardForm.get('stdMilestone').clearValidators();
            this.standardForm.get('stdMilestone').setValue('');
          }
        }
      });
    }
  }

  onStdTaskSelect(e) {

    this.standardForm.get('stdBillabilityName').enable();
    this.stdTaskList.map(data => {

      if (e == data.taskId) {
        this.stdTaskObj = data;

        if ((this.stdTaskObj.taskId == 1039 || this.stdTaskObj.taskId == 1040 ||
          this.stdTaskObj.taskId == 1041 || this.stdTaskObj.taskId == 1042) && this.stdTaskObj.zeroHrsCallWaitingFlag == 'YES') {
          this.standardForm.get('stdTime').setValue('00:00');
          this.standardForm.get('stdTime').disable();
          this.standardForm.get('stdRemarks').setValidators(Validators.required);
          this.standardForm.get('stdRemarks').updateValueAndValidity();
        } else {
          this.standardForm.get('stdTime').enable();
          this.standardForm.get('stdRemarks').clearValidators();
          this.standardForm.get('stdRemarks').updateValueAndValidity();
        }
      }
    })
  }

  onBillabilityChange(e) { }

  onSubmit() {

    if (this.isPayrollToBeFilledZeroHours && this.standardForm.get('stdTime').value == '00:00' && this.standardForm.get('stdRemarks').value == '') {
      this.standardForm.get('stdRemarks').setValidators(Validators.required);
      this.standardForm.get('stdRemarks').updateValueAndValidity();
    } else if (!this.isPayrollToBeFilledZeroHours && this.standardForm.get('stdTime').value == '00:00') {
      this.standardForm.get('stdTime').setValidators(Validators.min(1));
      this.standardForm.get('stdTime').updateValueAndValidity();
    } else {
      this.standardForm.get('stdRemarks').clearValidators();
      this.standardForm.get('stdRemarks').updateValueAndValidity();
    }
    this.submitted = true;
    if (this.standardForm.valid) {
      this.showSaveConfirmAlert();
    } else {
      return false;
    }
  }

  //Confirm save 
  showSaveConfirmAlert() {
    let alert = this.utility.presentConfirmation('Are you sure you want to save this timesheet ?');
    alert.then(() => {
      this.addTimesheet();
    })
  }

  /**
   * Get Project List
   */
  getProjectList() {
    const url = 'projectList';
    const data = {
      "currentDate": this.currentDate
    };
    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.data) {
        this.projectList = res.data;
        if (this.projectList && this.projectList.length > 0) {
          this.data.projectListForProjectTask = this.projectList.filter(item => item.isZencoreMigrated != 'YES');
          if (this.projectList.length == 1) {
            this.standardForm.get('stdProjectId').setValue(this.projectList[0].projectId);
            this.onStdProjSelect();
          }
        }
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
    //}
  }

  /**
   * Get Standard Task List
   */
  getStdTaskList() {
    const url = 'standardTask';
    const data = {
      "currentDate": this.currentDate
    };

    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      if (res && res.data) {
        this.stdTaskList = res.data;
        this.stdTaskList.map(task => {
          if (task.serviceId == '201') {
            this.projRelatedStdTasks.push(task);
          } else if (task.serviceId == '202') {
            this.orgRelatedStdTasks.push(task);
          }
        })
      }
    })
  }

  /**
   * Method to add ProjectTask
   * @param data 
   */
  addProjectTaskService(data) {
    this.utility.updateLoader(true);
    const url = 'projectTask';
    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      if (res && res.userMessage) {
        this.navCtrl.pop().then(() => this.resolve(res.userMessage));
      }
    }, err => {
      this.utility.updateLoader(false);
    })
  }

  onMilestoneChange(e: any) {
    if (this.milestoneList.length > 0) {
      this.milestoneList.map(data => {
        if (e.uuId == data.uuId) {
          this.milestoneObj = data;
        }
      })
    }
  }

  /**
   * Call to Save Timesheet
   * @param taskId 
   */
  saveTimesheet(taskId: string) {
    this.utility.updateLoader(true);
    const url: string = "processtimeentrytimesheet";
    const data = {
      "taskUpdateDate": this.currentDate,
      "taskName": this.stdTaskObj.taskName,
      "projectName": this.selProjectObj.projectName,
      "projectId": "",
      "totalEfforts": this.utility.convertTime(this.standardForm.get('stdTime').value, 1),
      "billablityFlag": this.standardForm.get('stdBillabilityName').value,
      "approvalStatus": "-1",
      "comments": this.standardForm.get('stdRemarks').value,
      "errorCode": 0,
      "taskId": taskId,
      "staffTaskUpdateCommentsTrackerId": 0,
      "taskInformationId": 0,
      "tokenId": 0,
      "nonbillableEffort": "0.00",
      "billableEffort": "0.00",
      "taskActualEffort": 0,
      "capping": 0,
      "previousEfforts": 0,
      "currentEfforts": 0,
      "approverId": "20542",
      "actualStartDate": "2019-04-30",
      "actualEfforts": 0,
      "startTime": "09:00:00",
      "endTime": "18:00:00",
      "complianceAccessFlag": "",
      "tsRejected": false,
      "billabilityFlag": this.standardForm.get('stdBillabilityName').value,
      "dateLockLimit": 0,
      "listSize": 4,
      "totalEffortsUS": 0,
      "taskEffortsUS": 0,
      "totalEffortsForSave": 0,
      "taskEffortsForSave": 0,
      "isDeleteFlag": 0,
      "isUpdateForDelete": 0,
      "rejectedFlag": "0",
      "validForPriv": "",
      "cappingHrs": 0,
      "callWaitingFlag": "NO",
      "flagForDeleteMealTime": "YES",
      "poInvoiceKey": this.selProjectObj.poInvoiceKey,
      "uuId": this.selProjectObj.uuId == '0' ? this.milestoneObj.uuId : this.selProjectObj.uuId,
      "timesheetStatus": "Saved",
      "effort": 0,
      "versionUpdated": false,
      "zenCoreMigrated": false,
      "selectedDate": this.currentDate,
      "staffId": null,
      "orgStdTask": this.standardForm.get('stdTaskId').value,
      "prjIdStdTask": this.selProjectObj.projectId,
      "effortTypeStdTask": this.standardForm.get('stdBillabilityName').value,
      "remarksStdTask": this.standardForm.get('stdRemarks').value,
      "orgTotalEfforts": this.utility.convertTime(this.standardForm.get('stdTime').value, 1),
      "orgStdTaskName": this.stdTaskObj.taskName,
      "bapPaymentScheduleKey": this.selProjectObj.isFixedBidProject == "YES" ? this.milestoneObj.bapPaymentScheduleKey : "0",
      "milestoneName": this.selProjectObj.isFixedBidProject == "YES" ? this.milestoneObj.milestoneName : "0",
      "mealTimeFlag": this.stdTaskObj.taskName == 'MEAL TIME' ? true : false,
      "resetTaskIds": this.taskAndtimesheetDetails ? this.getResetTaskIds(this.taskAndtimesheetDetails) : null
    }

    this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {
      if (res && res.userMessage) {
        this.navCtrl.pop().then(() => this.resolve(res.userMessage));
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  /**
   * Method to add Standard Task and then call saveTimesheet to save the task
   */
  addTimesheet() {
    const url = 'projectTask';
    const data = {
      "projectId": this.selProjectObj.projectId,
      "taskStartDate": this.currentDate,
      "taskEndDate": this.currentDate,
      "serviceId": this.stdTaskObj.serviceId,
      "taskId": this.standardForm.get('stdTaskId').value,
      "selectedDate": this.currentDate,
      "taskAlias1": this.stdTaskObj.taskName,
      "taskAlias2": this.stdTaskObj.taskName
    }

    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      let result = res.data;
      if (result && result.taskId) {
        this.saveTimesheet(result.taskId);
      }
    })
  }

  /**
  * Return all task id's except fixed holiday
  * @param timesheetList : Timesheet details list
  */
  public getResetTaskIds(timesheetList: Array<any>) {
    let taskIds = [];
    if (timesheetList.length > 0) {
      timesheetList.map((timesheet: any) => {
        if (timesheet && timesheet.taskList && timesheet.taskList.length > 0) {
          timesheet.taskList.map((task: any) => {
            if (task.approvalStatus == 2) {
              if (task.taskName !== 'FIXED HOLIDAY') {
                taskIds.push(task.taskId);
              }
            }
          })
        }
      })
    }
    if (taskIds.length > 0) {
      return taskIds;
    }
  }


  //Open Standard Task List modal
  async openStdTaskListModal() {
    if (this.selProjectObj) {
      let listModal = this.modalCtrl.create(StdTaskListModalComponent, {
        projRelatedStdTasks: this.selProjectObj.isZencoreMigrated == 'YES' ? [] : this.projRelatedStdTasks,
        orgRelatedStdTasks: this.orgRelatedStdTasks,
      });
      listModal.present();
      listModal.onDidDismiss((res: any) => {

        if (res) {
          this.standardForm.get('stdTaskId').setValue(res.taskId);
          this.standardForm.get('stdTaskName').setValue(res.taskName);
          this.onStdTaskSelect(res.taskId);
        }
      });
    }
  }

  getStdTasksData() {
    //console.log("Clicked Std Task");
    if (this.stdTaskList.length == 0) {
      this.getStdTaskList();
    }
  }

}
