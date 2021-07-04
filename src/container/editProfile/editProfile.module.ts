import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from './editProfile';
import { ComponentsModule } from '../../components/components.module';
import { Attachment } from '../../providers/attachment/attachment';
import { FormControlService } from '../../providers/formService/form-control.service';

@NgModule({
  declarations: [
    EditProfilePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EditProfilePage)
  ],
  providers: [
    Attachment,
    FormControlService
  ]
})

export class EditProfilePageModule { }
