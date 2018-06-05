import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyTablePage } from './daily-table';

@NgModule({
  declarations: [
    DailyTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DailyTablePage),
  ],
})
export class DailyTablePageModule {}
