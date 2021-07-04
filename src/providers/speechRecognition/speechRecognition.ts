import { Injectable, NgZone } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Dialogs } from '@ionic-native/dialogs';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';

@Injectable()
export class SpeechRecognitionUtility {

  private options: any = {
    language: 'en-IN',
    matches: 1,
    prompt: "Please wait", // Android only
    showPopup: false, // Android only
    showPartial: true
  };

  private prevResult = "";
  private timerBusy = null;

  private recognitionNotAvailable: string = "Sorry, speech recognition is not available";
  private sorryMessage = "Sorry I couldn't get that";


  constructor(private zone: NgZone, private speechRecognition: SpeechRecognition, private dialogs: Dialogs, private platform: Platform, private tts: TextToSpeech) { }

  startListening(): Observable<{}> {

    let observable = Observable.create(observer => {

      // Check feature available

      this
        .speechRecognition
        .isRecognitionAvailable()
        .then((available: boolean) => {


          if (available) {

            // Check permission
            this
              .speechRecognition
              .hasPermission()
              .then((hasPermission: boolean) => {

                if (hasPermission) {
                  this
                    .startRecognition()
                    .subscribe((value) => {
                      observer.next(value);
                    }, (error) => {
                      observer.error(error);
                    }, () => {
                    });
                } else {
                  // Request permissions
                  this
                    .speechRecognition
                    .requestPermission()
                    .then(() => {

                      this
                        .startRecognition()
                        .subscribe((value) => {
                          observer.next(value);
                        }, (error) => {
                          observer.error(error);
                        }, () => {
                        });

                    }, () => {
                    });
                }

              });
          } else {
            this
              .dialogs
              .alert(this.recognitionNotAvailable)
              .then(() => {})
              .catch(e => {
                observer.error(onerror);
              });
          }

        })

    });

    return observable;

  }

  startRecognition(): Observable<{}> {

    // Start the recognition process

    let observable = Observable.create(observer => {

      //previous code
      // if (this.platform.is('ios')) {
      //   setTimeout(() => {
      //     this.stopListening();
      //   }, 3000);
      // }

      this
        .speechRecognition
        .startListening(this.options)
        .subscribe((matches: string[]) => {

          this.prevResult = matches[0];


          /* cancel all timeouts */
          while (this.timerBusy--) {
            window.clearTimeout(this.timerBusy);
          }

          if (this.timerBusy) {
            window.clearTimeout(this.timerBusy);
          }

          /* after 3 sec check, then stop, as it listens continuously */
          this.timerBusy = setTimeout(() => {

            if (this.prevResult) {
              if (this.prevResult.length == matches[0].length) {

                this
                  .zone
                  .run(() => {
                    observer.next(this.prevResult);
                  });
                this.stopListening();
                observer.complete();
                window.clearTimeout(this.timerBusy);
              }
            }
          }, 3000);


          //previous code
          // this
          //   .zone
          //   .run(() => {
          //     observer.next(matches[0]);
          //   });

        }, (onerror) => {
          observer.error(onerror);
        }, () => {
          clearTimeout(this.timerBusy);
        });

    });

    return observable;

  }

  stopListening() {
    window.clearTimeout(this.timerBusy);
    this
      .speechRecognition
      .stopListening()
      .then(success => {
      }, error => {
      });
  }

  textToSpeech(text = this.sorryMessage) {
    
    return new Promise((resolve)=>{
      this.tts.speak(text)
      .then((success:any) => resolve())
      .catch((error: any) => {});
    });
   
  }

}
