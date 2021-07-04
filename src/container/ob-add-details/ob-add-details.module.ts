import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObAddDetailsPage } from './ob-add-details';
import { FormControlService } from '../../providers/formService/form-control.service';
import { ComponentsModule } from '../../components/components.module';
import { Attachment } from '../../providers/attachment/attachment';

@NgModule({
  declarations: [
    ObAddDetailsPage, 
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ObAddDetailsPage),
  ],
  providers: [
    Attachment,
    FormControlService
  ]
})
export class ObAddDetailsPageModule { }
