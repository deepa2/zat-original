import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenwenEventPage } from './zenwen-event';
import { ComponentsModule } from '../../../components/components.module';
import {PipesModule} from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    ZenwenEventPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ZenwenEventPage),
    PipesModule,
  ],
})
export class ZenwenEventPageModule { }
