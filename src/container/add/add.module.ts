import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from './add';
import { ComponentsModule } from '../../components/components.module';
import { Attachment } from '../../providers/attachment/attachment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicPageModule.forChild(AddPage),
  ],
  declarations: [AddPage],
  providers: [
    Attachment,
  ]
})
export class AddPageModule { }
