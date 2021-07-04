import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenloungePage } from './zenlounge';
import { ComponentsModule } from '../../components/components.module';
 

@NgModule({
  declarations: [
    ZenloungePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ZenloungePage),
  ],
  providers:[
  ]
})
export class ZenloungePageModule {}
