import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewProfilePage } from './new-profile';
import { LinkyModule } from 'ngx-linky'; 
import{ImagePreloaderDirective} from './img-preloader.directive';
 
@NgModule({
  declarations: [
    NewProfilePage,
    ImagePreloaderDirective
  ],
  imports: [
    IonicPageModule.forChild(NewProfilePage),
    LinkyModule
    
    
  ],
})
export class NewProfilePageModule {}
