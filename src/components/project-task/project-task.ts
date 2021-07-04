import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the ProjectTaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project-task',
  templateUrl: 'project-task.html'
})
export class ProjectTaskComponent {

  @Input() projectData: any;
  @Output() selectedTaskData = new EventEmitter<string>();
  @Input() type: any;
  @Input() selectedDate: any;

  isSubmitted: boolean = false;
  serviceList: Array<any> = [];
  private projectForm: FormGroup;
  private taskList: Array<any> = [];
  private taskName: string = null;
  private dates ={
    Currentdate: null,
    maxEndDate: null
  }

  constructor(private fb: FormBuilder,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider) {

    this.projectForm = this.fb.group({
      projectId: ["", Validators.required],
      startDate: ["", Validators.required],
      taskStartDate: [""],
      endDate: ["", Validators.required],
      taskEndDate: [""],
      time: [""],
      serviceId: [{ value: '', disabled: true }, Validators.required],
      taskId: [{ value: '', disabled: true }, Validators.required],
      selectedDate: '',
      taskAlias1: '',
      taskAlias2: ''
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.projectForm) {
      //default select project if the associate is allocated to single project
      if (this.projectData && this.projectData.length == 1) {
        this.projectForm.get('projectId').setValue(this.projectData[0].projectId);
        this.projectForm.get('serviceId').enable();
        this.dates.maxEndDate = this.projectData[0].resourceAllocationEndDate;
        this.getServiceList(this.projectData[0].projectId);
      }
      if (this.selectedDate) {
        this.dates.Currentdate = this.selectedDate;
        this.projectForm.get('selectedDate').setValue(this.selectedDate)
      }
    }
  }

  onProjectSelect(e) {
    if (this.type == 'add-task') {
      this.projectData.map((item:any)=>{
        if(item.projectId == e){
          this.dates.maxEndDate = item.resourceAllocationEndDate;
        }
      })
      this.projectForm.get('serviceId').enable();
      this.getServiceList(e);
    }
  }

  onServiceSelect(e) {
    this.projectForm.get('taskId').enable();
    this.getTaskList(e);
  }

  onTaskSelect(e) {
    if (this.taskList) {
      this.taskList.map(item => {
        if (e == item.taskId) {
          this.taskName = item.taskName;
        }
      })
    }

  }

  onTaskEndDateSelect(e) {
    this.projectForm.get('taskStartDate').setValue(this.projectForm.get('startDate').value);
    this.projectForm.get('taskEndDate').setValue(this.projectForm.get('endDate').value);
  }

  addTask() {
    this.isSubmitted = true;
    if (this.projectForm.valid) {
      if (this.projectForm.get('taskAlias1').value == "") {
        this.projectForm.get('taskAlias1').setValue(this.taskName);
        this.projectForm.get('taskAlias2').setValue(this.taskName);
      } else {
        this.projectForm.get('taskAlias2').setValue(this.projectForm.get('taskAlias1').value);
      }
      this.showSaveConfirmAlert();
    } else {
      return false;
    }
  }


  //Confirm save 
  showSaveConfirmAlert() {
    let alert = this.utility.presentConfirmation('Are you sure you want to add the task ?');
    alert.then(() => {
      this.selectedTaskData.emit(this.projectForm.value);
    })
  }

  getServiceList(projectId: any) {
    const url = 'serviceList';
    const data = {
      "selectedProjectId": projectId,
      "selectedDate": this.selectedDate
    };
    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      if (res && res.data) {
        this.serviceList = res.data;
      }
    })
  }

  getTaskList(serviceId: any) {

    const url = 'taskList';
    const data = {
      "selectedServiceId": serviceId
    };
    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      if (res && res.data) {
        this.taskList = res.data;
      }
    })
  }

}
