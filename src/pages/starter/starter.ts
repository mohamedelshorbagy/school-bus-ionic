import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
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
              public loadingCtrl: LoadingController,
              public toastCtrl:ToastController) {
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
        console.log(res);
          setTimeout(() => {
            if(res['isParent'] === true) {
              console.log(res);
              this.auth.storeToken(res['parent']['id'],res['parent']['code'],'parent');
            } else if(res['isMatrons'] === true) {
              this.auth.storeToken(res['matrons']['id'],res['matrons']['code'],'matrons',res['matrons']['line']);
            } else if(res['isDriver'] === true) {
              this.auth.storeToken(res['driver']['id'],res['driver']['code'],'driver');
            } else if(res['isSuper'] === true) {
              this.auth.storeToken(res['supervisor']['id'],res['supervisor']['code'],'supervisor');
            }
            this.navCtrl.setRoot(HomePage);
            loading.dismiss();
          }, 2000);
      } else {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Username or Password is wrong!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    });
  }

}
