import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    if(this.auth.getToken() !== null) {
      this.navCtrl.setRoot(HomePage);
    }
    console.log('ionViewDidLoad StarterPage');
  }


  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
