import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverProfilePage } from './driver-profile';

@NgModule({
  declarations: [
    DriverProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverProfilePage),
  ],
})
export class DriverProfilePageModule {}
