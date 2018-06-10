import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

/**
 * Generated class for the DriverProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-profile',
  templateUrl: 'driver-profile.html',
})
export class DriverProfilePage {
  profile: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    this.authService.getDriverProfile().subscribe(res => {
      this.profile = res['driver'];
      console.log('driver', this.profile);
    })
    console.log('ionViewDidLoad DriverProfilePage');
  }

}
