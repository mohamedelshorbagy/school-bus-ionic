import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  profile: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    this.authService.getParentProfile().subscribe(res => {
      this.profile = res['parent'];
      console.log('parent' , this.profile);
    });
    console.log('ionViewDidLoad MyProfilePage');
  }

}
