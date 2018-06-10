import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';

/**
 * Generated class for the SuperProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-super-profile',
  templateUrl: 'super-profile.html',
})
export class SuperProfilePage {
  profile: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    this.authService.getSuperProfile().subscribe(res => {
      this.profile = res['supervisor'];
      console.log('Super' , this.profile);
    })
    console.log('ionViewDidLoad SuperProfilePage');
  }

}
