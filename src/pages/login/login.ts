import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
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
      }, 5000)
    } else {
      this.errorMessage = 'Username or Password is wrong!';
    }
  }

}
