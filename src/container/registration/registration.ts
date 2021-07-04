import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  registerForm: FormGroup;
  submitted = false;
  showForm: any = false;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private utility: CommonUtilities) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.clearForm()
    }, 400);
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      companyName: ['', Validators.required]
    });
    this.showForm = true
  }

  clearForm() {
    this.registerForm.reset({
      'firstName': '',
      'lastName': '',
      'username': '',
      'password': '',
      'companyName': ''
    });
  }

  // convenience getter for easy access to form fields
  get form() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    if (!this.registerForm.invalid) {
      localStorage.setItem("registration", JSON.stringify(this.registerForm.value));
      this.utility.presentAlert('Successfully registered', '').then(res => {
        this.navCtrl.pop()
      })
    }
  }

}
