import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTaskPage } from './add-task';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AddTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTaskPage),
    ComponentsModule
  ],
  exports:[AddTaskPage]
})
export class AddTaskPageModule { }
