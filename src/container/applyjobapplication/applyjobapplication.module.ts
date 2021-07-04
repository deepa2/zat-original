import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyjobapplicationPage } from './applyjobapplication';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    ApplyjobapplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyjobapplicationPage),
    NgCircleProgressModule
  ],
})
export class ApplyjobapplicationPageModule {}
