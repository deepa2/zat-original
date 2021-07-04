import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DapPopoverPage } from './dap-popover';

@NgModule({
  declarations: [
    DapPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DapPopoverPage),
  ],
})
export class DapPopoverPageModule {}
