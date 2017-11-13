import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosSensorPage } from './datos-sensor';

@NgModule({
  declarations: [
    DatosSensorPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosSensorPage),
  ],
})
export class DatosSensorPageModule {}
