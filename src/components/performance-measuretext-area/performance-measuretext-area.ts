import { ViewChild } from '@angular/core';
import { NgZone } from '@angular/core';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { SpeechRecognitionUtility } from './../../providers/speechRecognition/speechRecognition';
import { NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';

/**
 * Generated class for the PerformanceMeasuretextAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'performance-measuretext-area',
  templateUrl: 'performance-measuretext-area.html'
})
export class PerformanceMeasuretextAreaComponent
{

  text: string;
  private performanceValue: string = '';
  private prevtext = '';
  private performancetext = '';
  private showLoader = false;
  private showMic = true;
  private pageTitle
  @ViewChild('inputToFocus') inputToFocus;


  constructor(private viewCtrl: ViewController, private navParams: NavParams,
    private speechRecognitionUtility: SpeechRecognitionUtility, private utility: CommonUtilities, private zone: NgZone)
  {
    this.text = 'Hello World';
    this.pageTitle = this.navParams.get('data').pageTitle
    this.performanceValue = this.navParams.get('data').performanceData

  }
  ionViewDidEnter()
  {
    // on entering set focus on input field
    setTimeout(() =>
    {
      // Commented to hide keyboard to make whole text readable to the user 
      // this.inputToFocus.setFocus();
    });
  }
  dismiss()
  {
    this.viewCtrl.dismiss(this.performanceValue)
  }

  dismissAlert()
  {
    this.viewCtrl.dismiss();
  }
  startSpeech()
  {
    // this.prevtext = this.performancetext;
    // this.prevtext = this.performancetext;
    this.prevtext = this.performanceValue

    this.showMic = false;
    this.showLoader = true
    this.speechRecognitionUtility.startListening().subscribe((value: string) =>
    {
      if (this.utility.platformAvailable)
      {
        // this.showMic = false;
        // this.showLoader = true;
        // console.log("value", value)
        this.performancetext = this.prevtext + ' ' + value;
        this.performancetext.trim();
        // this.GoalsForm.get('performanceMeasure').setValue(this.performancetext);
        this.performanceValue = this.performancetext

      }
      this.zone.run(() =>
      {
        this.showLoader = false;
        this.showMic = true;
      })
    }, (error) =>
    {
      this.zone.run(() =>
      {
        this.showLoader = false;
        this.showMic = true;
      })

    })
  }
}
