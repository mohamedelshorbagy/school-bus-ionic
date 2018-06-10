import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverRatesPage } from './driver-rates';

@NgModule({
  declarations: [
    DriverRatesPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverRatesPage),
  ],
})
export class DriverRatesPageModule {}
