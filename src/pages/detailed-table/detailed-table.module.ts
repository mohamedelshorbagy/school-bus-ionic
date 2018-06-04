import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedTablePage } from './detailed-table';

@NgModule({
  declarations: [
    DetailedTablePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedTablePage),
  ],
})
export class DetailedTablePageModule {}
