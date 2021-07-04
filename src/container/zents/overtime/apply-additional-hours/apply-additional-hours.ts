import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../../providers/http/http';
import { StdTaskListModalComponent } from '../../../../components/std-task-list-modal/std-task-list-modal';
/**
 * Generated class for the ApplyAdditionalHoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-additional-hours',
  templateUrl: 'apply-additional-hours.html',
})
export class ApplyAdditionalHoursPage implements OnInit {
  private projectForm: FormGroup;
  private projectList: Array<any> = [];
  private taskList: Array<any> = [];
  private compareFlag: boolean = false;
  private showTimeError: boolean = false;
  private resolve: Function;
  private dates: any;
  private projRelatedStdTasks: Array<any> = [];
  private orgRelatedStdTasks: Array<any> = [];
  private flags = {
    isSubmitted: false,
    showForm: false
  }
  private data = {
    pageTitle: null
  }


  constructor(private navCtrl: NavController, private navParams: NavParams, private fb: FormBuilder,
    private utility: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {

  }

  ngOnInit() {
    this.projectForm = this.fb.group({
      ProjName: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      time: ["00:00", Validators.required],
      ServiceName: [{ value: '', disabled: true }, Validators.required],
      TaskName: [{ value: '' }],
      tname: [{ value: '', disabled: true }, Validators.required],
      Remarks: '',
      taskID: [""]
    });
    this.getOTProjectList();

    this.dates = this.navParams.get('calendarDates');
    this.resolve = this.dates.resolve;
    this.data.pageTitle = this.dates.pageTitle;

  }

  /**
   * Get Project List
   */
  getOTProjectList() {
    const url = 'overtimeproject';
    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonGETService({ url, overtime: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res && res.data) {
        this.flags.showForm = true;
        let data = res.data;
        if (data.projects) {
          this.projectList = data.projects;
          this.projectList.map((projectData) => {
            this.taskList = [...this.taskList, ...projectData.overtimetasks];
          })
        }
        this.taskList = [...this.taskList, ...data.standardtaks];

        this.taskList.map(task => {
          if (task.serviceId == '201') {
            this.projRelatedStdTasks.push(task);
          } else if (task.serviceId == '202') {
            this.orgRelatedStdTasks.push(task);
          }
        })
        this.updateFormData();
      }
    })
  }

  /**
   * default select project if the associate is allocated to single project
   */
  updateFormData() {
    if (this.projectList && this.projectList.length == 1) {
      this.projectForm.patchValue({
        "ProjName": this.projectList[0]
      });
      this.projectForm.get('tname').enable();
    }
  }

  onProjectSelect(event) {
    this.projectForm.get('tname').enable();
  }

  onEndDateSelect(e) {
    this.compareFlag = new Date(this.projectForm.get('endDate').value) < new Date(this.projectForm.get('startDate').value);
  }

  onStartDateSelect(e) {
    this.compareFlag = new Date(this.projectForm.get('startDate').value) > new Date(this.projectForm.get('endDate').value);
  }

  onTimeChange(e) {
    this.showTimeError = this.projectForm.get('time').value == '00:00' ? true : false;
  }

  //Confirm save 
  addTaskConfirmAlert() {
    this.flags.isSubmitted = true;
    this.showTimeError = this.projectForm.get('time').value == '00:00' ? true : false;
    if (this.projectForm.valid && !this.compareFlag && !this.showTimeError) {
      let alert = this.utility.presentConfirmation('Are you sure you want to apply additional hours for the task ?');
      alert.then(() => {
        this.addTask();
      })
    }
  }

  /**
   * Method to apply OT
   */
  addTask() {
    this.utility.updateLoader(true);
    let formValue = this.projectForm.value;
    let data = {
      "projectId": formValue.ProjName.projectId,
      "estStartDate": formValue.startDate,
      "estEndDate": formValue.endDate,
      "workhr": parseFloat(this.transformTime(formValue.time)),
      "comments": formValue.Remarks,
      "serviceId": formValue.TaskName.serviceId,
      "taskId": formValue.TaskName.taskId,
      "taskName": formValue.TaskName.taskName,
      "projectName": formValue.ProjName.projectName
    }
    if (this.projectForm.valid) {
      let url: String = "overtime";
      this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {
        if (res && res.userMessage) {
          this.navCtrl.pop().then(() => this.resolve(res.userMessage));
        }
      }, (err) => {
        this.utility.updateLoader(false);
      })
    } else {
      return false;
    }

  }

  transformTime(value: string): string {
    return value.replace(":", '.');
  }

  //open task list modal
  async openTaskListModal() {
    if (this.projectForm.get('ProjName').value) {
      let listModal = this.modalCtrl.create(StdTaskListModalComponent, {
        projRelatedStdTasks: this.projRelatedStdTasks,
        orgRelatedStdTasks: this.orgRelatedStdTasks
      });
      listModal.present();
      listModal.onDidDismiss((res: any) => {
        if (res) {
          this.projectForm.get('TaskName').setValue(res);
          this.projectForm.get('tname').setValue(res.taskName);
        }
      });
    }
  }


}
