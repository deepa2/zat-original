import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExitFaqPage } from './exit-faq';
import {ComponentsModule} from '../../../components/components.module';
import {PipesModule} from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    ExitFaqPage,
  ],
  imports: [
    IonicPageModule.forChild(ExitFaqPage),
    ComponentsModule,
    PipesModule
  ],
})
export class ExitFaqPageModule {}
