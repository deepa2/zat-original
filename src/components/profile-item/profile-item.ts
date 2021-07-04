import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';


@Component({
  selector: 'profile-item',
  templateUrl: 'profile-item.html'
})
export class ProfileItem {

  @Input() user: any;
  @Input() createdDate: string;


  constructor(private navCtrl: NavController, private utility: CommonUtilities) { }

  goToProfile(event) {
    event.stopPropagation();
    this.navCtrl.push('NewProfilePage', {
      'userId': this.user.employeeId
    });
  }

  formatDate(obj) {
    return obj.toString().replace(/\s/g, "T");
  }

  uppercase(name) {
    if (name != null || name != undefined) {
      return this.utility.uppercase(name);
    }

  }
}