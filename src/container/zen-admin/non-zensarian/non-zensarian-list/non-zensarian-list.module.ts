import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonZensarianListPage } from './non-zensarian-list';

@NgModule({
  declarations: [
    NonZensarianListPage,
  ],
  imports: [
    IonicPageModule.forChild(NonZensarianListPage),
  ],
})
export class NonZensarianListPageModule {}
