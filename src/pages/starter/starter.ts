import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {HomePage} from '../home/home';

/**
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public auth: AuthProvider,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    if (this.auth.getToken() !== null) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  login(data) {
    let isAuth = this.auth.login(data.value);
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });

    loading.present();
    if (isAuth) {
      setTimeout(() => {
        this.auth.storeToken('123456');
        this.navCtrl.setRoot(HomePage);
        loading.dismiss();
      }, 3000);
    } else {
      this.errorMessage = 'Username or Password is wrong!';
    }
  }

}
