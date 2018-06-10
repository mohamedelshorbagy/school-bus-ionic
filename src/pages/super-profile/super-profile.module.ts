import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperProfilePage } from './super-profile';

@NgModule({
  declarations: [
    SuperProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SuperProfilePage),
  ],
})
export class SuperProfilePageModule {}
