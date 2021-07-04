import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { TagPage } from './tag';
// import { SearchPipe } from '../../pipes/search/search';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TagPage
    // SearchPipe
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(TagPage),
  ],
})
export class TagPageModule { }
