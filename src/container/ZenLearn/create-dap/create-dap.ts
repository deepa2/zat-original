import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, DateTime, Navbar } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { FormControlService } from '../../../providers/formService/form-control.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { IonicSelectableComponent } from 'ionic-selectable';




/**
 * Generated class for the CreateDapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-dap',
  templateUrl: 'create-dap.html',
})
export class CreateDapPage {
  private isEdit: boolean = false;
  private dapItemInfo;
  private dapId: number = 0;
  private isDataAvailable: boolean = false;
  private list: Array<any> = [];
  private dapList: Array<any> = [];
  private learningId: any;
  private compentancyId: any;
  private isCourseListAvaliable: boolean = false
  private addProgram: string;
  private isBehavioural: boolean = false;
  private dapCoursesList: Array<any> = [];
  private listDap: Array<any> = [];
  private tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 5500;
  private otherList: string;
  private isOtherSelected: boolean = false;
  private showDateMessage: boolean = false;
  private selectedLearning: string;
  private selectedMilestoneDate: any;
  private maxDate: any;
  private maxDateValidation: boolean = false;
  private isComingFromNotification;
  private mentor;
  private dapStatus: string;
  private previousData: any;
  private editedMsg: any;

  private selectedCompetancyName: string;
  @ViewChild('createDap') form;
  @ViewChild(Content) content: Content;
  @ViewChildren(DateTime) dateTime: QueryList<DateTime>
  @ViewChild(Navbar) nav: Navbar

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private formControlService: FormControlService, private formBuilder: FormBuilder, private utilities: CommonUtilities) {
    this.dapItemInfo = navParams.get("dapId");
    this.dapStatus = navParams.get("dapStatus");
    this.isComingFromNotification = this.navParams.get('isComingFromNotification');
    if (this.dapItemInfo != undefined) {
      this.dapId = this.dapItemInfo
      this.isEdit = true;
    }
  }



  ionViewDidLoad() {
    //console.log('ionViewDidLoad CreateDapPage');
    this.getDapData(this.dapId);

    this.nav.backButtonClick = (e: UIEvent) => {
      if (this.form.dirty) {
        this.utilities.presentConfirmation("Are you sure you want to discard the changes?").then(() => {
          this.navCtrl.pop();
        }).catch(() => {

        })
      } else {
        this.navCtrl.pop();
      }
    }

  }

  ionViewWillEnter() {
    // //console.log(this.form)
    console.log(this.navParams);
    console.log('dap', this.navParams.get('dapCourseList'))
    // //console.log('other', this.navParams.get('otherList'))
    console.log(this.navParams.get('selectedMentor'));
    this.mentor = this.navParams.get('selectedMentor');
    this.dapCoursesList = this.navParams.get('dapCourseList');
    this.otherList = this.navParams.get('otherList');
    //console.log(this.dapCoursesList);
    if (this.dapCoursesList && this.dapCoursesList.length > 0) {
      this.dapList.filter(value => {
        value.list.filter(dapList => {
          if (dapList.bindWith == 'addProgram') {
            dapList.value = this.dapCoursesList.length;
            this.addProgram = dapList.value;
            this.isCourseListAvaliable = true;

          }
        })
      })
    }
    if (this.otherList) {
      this.dapList.filter(value => {
        value.list.filter(dapList => {
          if (dapList.bindWith == 'addProgram') {
            dapList.value = 1;
            this.addProgram = dapList.value;
            this.isCourseListAvaliable = true
          }
        })
      })
    }
    if (this.mentor) {
      console.log(this.mentor);
      let mentorName = this.mentor;
      console.log('seleceted mentor');
      this.dapList.filter(value => {
        value.list.filter(dapList => {
          if (dapList.bindWith == 'peerName') {
            dapList.value = this.mentor.key;
            dapList.titleKey = this.mentor.value;
            dapList.profilePic = this.mentor.profilePic;

            this.mentor = "";

          }
          if (dapList.bindWith == 'messageForMentor') {
            if (!this.previousData) {
              this.previousData = mentorName;
              let firstName = mentorName.value.substr(0, mentorName.value.indexOf(" "));
              let message = "Dear " + firstName + "," + "\n \nAs a part of my Development Action Plan (DAP), requesting if you can guide me to learn more on " + this.selectedCompetancyName + " as my mentor. \nI will take the responsibility of scheduling meetings with you once a month after you accept the request."
              dapList.value = message.trim();
            } else if (this.previousData && this.previousData.value != mentorName.value) {
              this.previousData = mentorName;
              let firstName = mentorName.value.substr(0, mentorName.value.indexOf(" "));
              let message = "Dear " + firstName + "," + "\n \nAs a part of my Development Action Plan (DAP), requesting if you can guide me to learn more on " + this.selectedCompetancyName + " as my mentor. \nI will take the responsibility of scheduling meetings with you once a month after you accept the request."
              dapList.value = message.trim();
            } else if (this.previousData && this.previousData.value == mentorName.value) {
              console.log(this.editedMsg);
              if (this.editedMsg) {
                dapList.value = this.editedMsg;
              }


            }

          }
        })
      })
    }
    console.log(this.form);
  }


  getDapData(dapId) {
    let param = {
      url: 'createNewOrGetDAP',
      data: {
        "dapId": dapId
      },
      zenLearn: true
    }
    this.utilities.updateLoader(true);
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response);
      if (response.details && response.details.responseList.list && response.details.responseList.dapSectionslist) {
        this.list = response.details.responseList.list;
        this.dapList = response.details.responseList.dapSectionslist;
        this.isDataAvailable = true

        this.list.filter(value => {
          if (value.bindWith == 'milestoneDate') {
            this.maxDate = value.maxValue;
          }
        })

        //check if already added courses for manager(approve or reject)
        if (this.dapItemInfo) {
          this.dapList.filter(value => {
            value.list.filter(dapList => {
              if (dapList.bindWith == 'addProgram') {
                // dapList.value = this.dapCoursesList.length;
                this.addProgram = dapList.value
                this.isCourseListAvaliable = true

              }
            })
          })
          this.list.filter(value => {
            if (value.bindWith == 'typeOfLearning') {
              this.learningId = value.value;
            } if (value.bindWith == 'skillCompetancy') {
              this.compentancyId = value.value;
              value.lov.filter(lovDetails => {
                if (lovDetails.key == value.value) {
                  //console.log(lovDetails.value);
                  if (lovDetails.value == 'Other') {
                    this.isOtherSelected = true;
                  } else {
                    this.isOtherSelected = false;
                  }
                  return;
                }
              })
            }

          })
        }

        this.utilities.updateLoader(false);

      }
    },
      error => {
        //console.log(error);
        this.utilities.updateLoader(false)

      })

  }

  selectedDate(date) {

    if (date && date > this.maxDate) {
      this.selectedMilestoneDate = date;
      this.maxDateValidation = true;
    } else {
      this.selectedMilestoneDate = date;
      this.maxDateValidation = false;
    }
  }

  getLearningID(item, event: {
    component: IonicSelectableComponent,
    item: any,
    isSelected: boolean
  }) {

    if (item.bindWith == 'typeOfLearning') {
      this.learningId = item.value;
      item.lov.filter(val => {
        if (val.key == item.value) {
          this.selectedLearning = val.value;
        }
      })

      if (item.value) {
        let param = {
          url: 'competencyLov',
          data: { "learningId": item.value },
          zenLearn: true
        }

        this.httpProvider.http.commonService(param).subscribe((response: any) => {
          //console.log(response);

          this.list.filter(value => {
            if (value.bindWith == 'skillCompetancy') {
              value.lov = response.details.responseList;
              this.isBehavioural = true
            }
          })


        })
        //console.log(this.list)
      } else {
        this.learningId = item.value;
        this.isBehavioural = false;
      }
    } else if (item.bindWith == 'skillCompetancy') {
      this.compentancyId = item.value
      this.addProgram = null;
      this.isCourseListAvaliable = false;
      item.lov.filter(val => {
        if (val.key == item.value) {
          this.selectedCompetancyName = val.value;
          //console.log(val);
          if (val.value == 'Other') {
            this.isOtherSelected = true;
          } else {
            this.isOtherSelected = false;
          }
          return;
        }
      })
    }
  }



  getCourseList(item) {
    if (this.dapItemInfo) {
      let data = {
        "learningId": this.learningId,
        "startOffSet": 0,
        "competencyId": this.compentancyId,
        "learningMode": "",
        "selectedLearning": this.selectedLearning,
        'isOtherSelected': this.isOtherSelected,
        'dapID': this.dapId
      }
      this.navCtrl.push('DapCoursesListPage', { 'listData': data })
    } else {
      let data = {
        "learningId": this.learningId,
        "startOffSet": 0,
        "competencyId": this.compentancyId,
        "learningMode": "",
        "selectedLearning": this.selectedLearning,
        'isOtherSelected': this.isOtherSelected
      }
      this.navCtrl.push('DapCoursesListPage', { 'listData': data })
    }

  }

  saveDap() {
    //console.log(this.form)
    //Check for 1st milestone date
    if (this.selectedMilestoneDate && this.selectedMilestoneDate > this.maxDate) {
      this.utilities.presentAlert("Milestone date cannot be greater than the current financial year");
      this.content.scrollToTop();
      return;
    }

    //check all the form fields are valid and filled
    for (const props in this.form.value) {
      //console.log(`${props}: ${this.form.value[props]}`)
      if (this.form.value[props] == null) {
        this.utilities.presentAlert("Please fill all the mandatory fields");
        return;
      }
    }

    //for checking list milestone date greater than other milestone date

    for (const props in this.form.value) {
      //console.log(`${props}: ${this.form.value[props]}`)
      if ((this.form.value['milestoneDate'] >= this.form.value['milestoneDate1']) && (this.form.value['milestoneDate'] >= this.form.value['milestoneDate2'] && this.form.value['milestoneDate'] >= this.form.value['milestoneDate3'])) {
        this.showDateMessage = false
      } else {
        this.showDateMessage = true;
        this.utilities.presentAlert("Milestone date cannot be greater than the DAP milestone date");
        return;
      }
    }




    // formatting list
    let Listdata: Array<any> = [];
    Listdata = this.list.map(val => {
      let a = {};
      a[val.bindWith] = val.value.toString().trim();

      return a;
    })
    //console.log(Listdata);
    let listObject = Object.assign({}, ...Listdata)
    //console.log(listObject);


    // formating dap list  
    let dapData: Array<any> = [];
    dapData = this.dapList.map(val => {
      let newList = val.list.map(daplist => {
        let a = {};
        if (daplist.value) {
          a[daplist.bindWith] = daplist.value.toString().trim();
          return a;
        }

      })
      return newList
    })

    //console.log(dapData);
    let daplist = dapData.map(value => {
      return Object.assign({}, ...value)
    })

    //console.log(daplist);
    let dapListDetails = Object.assign({}, ...daplist)
    //console.log(dapListDetails)

    //combining both the list 
    //console.log(Object.assign(listObject, dapListDetails))
    let paramData;
    if (this.isEdit == true) {
      paramData = Object.assign(listObject, dapListDetails, { "dapId": this.dapId })
    }
    else {
      paramData = Object.assign(listObject, dapListDetails)
    }
    let param = {
      url: 'submitDAP',
      data: paramData,
      zenLearn: true
    }



    if (this.addProgram && this.isCourseListAvaliable) {
      this.utilities.updateLoader(true);
      this.httpProvider.http.commonService(param).subscribe((response: any) => {
        //console.log(response)
        this.utilities.updateLoader(false);
        if (response && response.status.statusCode == 1) {
          this.utilities.presentAlert("DAP created successfully and submitted to your Manager for approval.\n You will not be able to add more courses in your DAP once the DAP is approved by your manager").then(() => {
            if (this.isComingFromNotification) {
              this.navCtrl.popToRoot();
            } else {
              this.navCtrl.pop();
            }

          })
        }
      },
        error => {
          //console.log(error);
          this.utilities.updateLoader(false);
        })
    } else {
      this.utilities.presentAlert("Please add program by clicking addCourses");
      return;
    }
  }

  showCourses(data) {

    //console.log(data);
    if (this.dapItemInfo) {
      let dapDetails = {
        'dapId': this.dapId,
        'dapSectionId': data.dapSectionId,
        'userId': 0
      }
      this.navCtrl.push("SelectedCoursesPage", { "dapId": dapDetails })
    } else {
      if (this.otherList) {
        this.navCtrl.push("SelectedCoursesPage", { "otherList": this.otherList })
      } else {
        this.navCtrl.push("SelectedCoursesPage", { "data": this.dapCoursesList })
      }

    }

  }

  openCalender(j) {
    this.dateTime.toArray();
    this.dateTime.toArray()[j].open();
  }

  newValue() {
    //console.log("called");
  }

  selectMentor() {
    if (this.learningId && this.compentancyId) {
      this.navCtrl.push("MentorsPage");
    } else {
      this.utilities.showToast("Please select Type of Learning & competancy/skills");
    }

  }

  openLink() {
    this.utilities.openWithSystemBrowser('https://rpg.percipio.com/library/fb5153db-fe90-4764-bbb7-823409072fb7/0c3bd22e-706f-43a8-b804-1acc28e84f28');
  }
  updateMentorMsg(data) {
    console.log(data);
    this.editedMsg = data;
  }
}
