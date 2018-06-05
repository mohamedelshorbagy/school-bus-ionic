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
    let loading = this.loadingCtrl.create({
      content: 'Loading...'
    });
    loading.present();
    this.auth.login(data.value.username).subscribe(res => {

      if(res['success'] === true) {
          setTimeout(() => {
            if(res['isParent'] === true) {
              this.auth.storeToken(res['parent']['id'],'parent');
            } else if(res['isMatrons'] === true) {
              this.auth.storeToken(res['matrons']['id'],'matrons',res['matrons']['line']);
            } else if(res['isDriver'] === true) {
              this.auth.storeToken(res['driver']['id'],'driver');
            }
            this.navCtrl.setRoot(HomePage);
            loading.dismiss();
          }, 2000);
      } else {
          this.errorMessage = 'Username or Password is wrong!';
      }
    });
  }

}
