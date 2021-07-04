import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicPageModule } from 'ionic-angular';

import { DetailPage } from './detail';


import { ComponentsModule } from '../../components/components.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicPageModule.forChild(DetailPage),
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
