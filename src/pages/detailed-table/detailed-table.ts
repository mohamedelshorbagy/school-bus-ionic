import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {MatronsServiceProvider} from '../../providers/matrons-service/matrons-service';

/**
 * Generated class for the DetailedTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailed-table',
  templateUrl: 'detailed-table.html',
})
export class DetailedTablePage {
  children: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public matronsService: MatronsServiceProvider,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    let toast = this.toastCtrl.create({
      message: 'Swipe Every Element to see Buttons',
      duration: 3000,
      position: 'top'
    });
    toast.present();
    console.log('ionViewDidLoad DetailedTablePage');
    this.matronsService.getAttendanceTable().subscribe(res => {
      if(res['success'] === true) {
        this.children = res['children'];
      }
    })
  }

}
