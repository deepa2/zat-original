import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenRichSearchPage } from './zen-rich-search';

@NgModule({
  declarations: [
    ZenRichSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ZenRichSearchPage),
  ],
})
export class ZenRichSearchPageModule {}
