import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StdTaskListModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'std-task-list-modal',
  templateUrl: 'std-task-list-modal.html'
})
export class StdTaskListModalComponent implements OnInit {

  private projectTasks: Array<any> = [];
  private orgStdTasks: Array<any> = [];
  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.initializeItems();
  }

  initializeItems() {
    this.projectTasks = this.navParams.get('projRelatedStdTasks');
    this.orgStdTasks = this.navParams.get('orgRelatedStdTasks');
  }

  onTaskSelect(taskObj: any) {
    this.viewCtrl.dismiss(taskObj);
  }

  filterTasks(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.projectTasks = this.projectTasks.filter((item) => {
        return (item.taskName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.orgStdTasks = this.orgStdTasks.filter((item) => {
        return (item.taskName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
