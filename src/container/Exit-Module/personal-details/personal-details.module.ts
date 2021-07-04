import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalDetailsPage } from './personal-details';
import {Attachment} from '../../../providers/attachment/attachment';

@NgModule({
  declarations: [
    PersonalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalDetailsPage),
  ],
  providers :[
    Attachment
  ]
})
export class PersonalDetailsPageModule {}
