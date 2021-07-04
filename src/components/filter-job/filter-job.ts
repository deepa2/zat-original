import { Component, } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, Platform } from "ionic-angular"
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the FilterJobComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter-job',
  templateUrl: 'filter-job.html'
})
export class FilterJobComponent {

  filterjob = [];
  filterDetails = [];
  skillsArray = [];
  buArray = [];
  cityArray = [];
  selectedtype = 'skills';
  selectedSkills = [];
  selectedBu = [];
  selectedCity = [];
  searchValue = '';
  isDataavailable = false;
  getStartDate: any;
  getEndDate: any;
  startDate: any = "";
  endDate: any = "";
  postedDate: any;
  isDateChanged: boolean = false;

  constructor(private utility: CommonUtilities, private http: HttpProvider, private viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    this.utility.updateLoader(true);
    var param = {
      url: 'getFilterData',
      data: {},
      zenRich: true
    };
    this.http.http.commonService(param).subscribe((response: any) => {
      //console.log(response);
      if (response && response.details) {
        this.utility.updateLoader(false);
        this.isDataavailable = true;
        this.filterjob = response.details.filterType;
        this.filterDetails = response.details.lovTypes;
        this.filterDetails.filter(value => {
          if (value.type == 'skills') {
            this.skillsArray = value.value;
          }
          if (value.type == 'bu') {
            this.buArray = value.value;
          }
          if (value.type == 'city') {
            this.cityArray = value.value;
          }
          if (value.type == 'postedDate') {
            this.postedDate = value.value;
          }
        });
        this.getStartDate = this.postedDate.minValue;
        this.getEndDate = this.postedDate.maxValue;
      }
    }, function (error) {
      this.utility.updateLoader(false);
    });
  }

  resetAll() {
    this.selectedSkills = [];
    this.selectedCity = [];
    this.selectedSkills = [];
    //console.log(this.skillsArray);
    // this.filterDetails.filter(value=> {
    //   if (value.type == 'skills') {
    //     this.skillsArray = value.value;
    //   }
    // });
    this.skillsArray.filter(value => { return value.checked = false; });
    this.buArray.filter(value => { return value.checked = false; });
    this.cityArray.filter(value => { return value.checked = false; });
  }


  updateFilterType(filterType) {
    this.selectedtype = filterType;
  }
  changed(data) {
    if (this.selectedtype == 'skills') {
      if (data.checked) {
        this.selectedSkills.push(data.key);
      }
      else {
        let value = this.selectedSkills.findIndex(item => { return item.key == data.key; });
        if (value) {
          this.selectedSkills.splice(value, 1);
        }
      }
    }
    else if (this.selectedtype == 'bu') {
      if (data.checked) {
        this.selectedBu.push(data.key);
      }
      else {
        let value = this.selectedBu.findIndex(item => { return item.key == data.key; });
        if (value) {
          this.selectedBu.splice(value, 1);
        }
      }
    }
    else if (this.selectedtype == 'city') {
      if (data.checked) {
        this.selectedCity.push(data.key);
      }
      else {
        let value = this.selectedCity.findIndex(item => { return item.key == data.key; });
        if (value) {
          this.selectedCity.splice(value, 1);
        }
      }
    }
  }

  searchText() {

    var tempArray = this.skillsArray;
    if (this.searchValue != null || this.searchValue != '') {
      this.skillsArray = this.skillsArray.filter(value => {
        if (value.value.toLowerCase().includes(this.searchValue.toLowerCase()))
          return value;
      });
      //console.log(this.skillsArray)
    }
    if (this.searchValue == null || this.searchValue == '') {
      this.filterDetails.filter(value => {
        if (value.type == 'skills') {
          this.skillsArray = value.value;
        }
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  changeDate(date, type) {
    this.isDateChanged = true;
    if (type == 'startDate') {
      this.startDate = date;
    }
    else {
      this.endDate = date;
    }
  }

  applyFilter() {
    if (this.selectedSkills.length == 0 && this.selectedCity.length == 0 && this.selectedBu.length == 0 && !this.isDateChanged) {
      this.viewCtrl.dismiss({ data: false });
    }
    else {
      var mainArray = {
        'skills': this.selectedSkills,
        'bu': this.selectedBu,
        'city': this.selectedCity,
        'startDate': this.startDate,
        'endDate': this.endDate
      };
      this.viewCtrl.dismiss({ data: mainArray });
    }
  }

}
