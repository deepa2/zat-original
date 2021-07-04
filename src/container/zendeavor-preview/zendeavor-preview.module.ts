import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZendeavorPreviewPage } from './zendeavor-preview';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ZendeavorPreviewPage
    
  ],
  imports: [
    IonicPageModule.forChild(ZendeavorPreviewPage),
    ComponentsModule
  ],
})
export class ZendeavorPreviewPageModule {}
