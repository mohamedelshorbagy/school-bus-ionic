import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StarterPage } from '../pages/starter/starter';
import { DetailedTablePage } from '../pages/detailed-table/detailed-table';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = StarterPage;
  detailsPage: any = DetailedTablePage;
  signupPage: any = SignupPage;
  homePage: any = HomePage;
  @ViewChild('nav') nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  
  Logout() {
    this.auth.removeToken();
    this.nav.setRoot(this.rootPage);
    this.menuCtrl.close();
  }
}

