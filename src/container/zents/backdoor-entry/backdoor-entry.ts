import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../../../providers/data/data';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
/**
 * Generated class for the BackdoorEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backdoor-entry',
  templateUrl: 'backdoor-entry.html',
})
export class BackdoorEntryPage {
  private form: FormGroup;
  backdoorLoginUrl: string = "backdoorlogin";
  selModule: string;

  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private dataStorage: Data, private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    public navctrl: NavController) {
    //backdoor login
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      // category: ['', Validators.required]
      category: ['TimeEntryPage']
    });
  }

  ionViewDidLoad() {
    //
  }

  login() {
    this.selModule = this.form.get('category').value;
    this.utility.updateLoader(true);

    /**
     * ZenTS Backdoor Service call & response
     */
    // this.httpProvider.http.authenticateZenTS(this.backdoorLoginUrl, this.form.value).subscribe((result: any) => {
    //   this.utility.updateLoader(false);
    //   if (result && result.data && result.data.encryptedToken) {
    //     this.form.reset();
    //     this.dataStorage.saveData('access-allowed', "Y");
    //     this.dataStorage.saveData('loginDetails', result.data);
    //     this.dataStorage.saveData('selectedModule', this.selModule);

    //     this.navCtrl.setRoot(this.selModule.toString());
    //   }
    // }, (err) => {
    //   this.utility.updateLoader(false);
    // })

    /**
    * ZenTalent Backdoor Service call & response
    */
    this.httpProvider.http.authenticate(this.form.value, 'tsBackdoorLogin').subscribe((result: any) => {
      this.utility.updateLoader(false);
      if (result && result.details && result.details.encryptedToken) {
        this.form.reset();
        this.dataStorage.saveData('loginStatus', true);
        this.dataStorage.saveData('access-allowed', "Y");
        this.dataStorage.saveData('loginDetails', result);
        this.dataStorage.saveData('encryptedToken', result.details.encryptedToken)
        // this.navCtrl.setRoot('HomePage');
        this.navCtrl.setRoot('NewHomePage');
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })


  }


}
