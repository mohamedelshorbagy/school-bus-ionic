import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, NavController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {StarterPage} from '../pages/starter/starter';
import {DetailedTablePage} from '../pages/detailed-table/detailed-table';
import {HomePage} from '../pages/home/home';
import {AuthProvider} from '../providers/auth/auth';
import {AttendancePage} from "../pages/attendance/attendance";
import {ProfileChildrenPage} from "../pages/profile-children/profile-children";
import {FollowersPage} from "../pages/followers/followers";
import {ContactUsPage} from "../pages/contact-us/contact-us";
import {MyProfilePage} from "../pages/my-profile/my-profile";
import {RatesPage} from "../pages/rates/rates";
import {DriverRatesPage} from "../pages/driver-rates/driver-rates";
import {DriverProfilePage} from "../pages/driver-profile/driver-profile";
import {SuperProfilePage} from "../pages/super-profile/super-profile";
import {ProfilePage} from "../pages/profile/profile";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = StarterPage;
  detailsPage: any = DetailedTablePage;
  homePage: any = HomePage;
  attendancePage: any = AttendancePage;
  profileChildrenPage: any = ProfileChildrenPage;
  followerPage: any = FollowersPage;
  notificationPage: any = Notification;
  contactUsPage: any = ContactUsPage;
  myProfilePage: any = MyProfilePage;
  profilePage: any = ProfilePage;
  ratesPage: any = RatesPage;
  driverRatesPage: any = DriverRatesPage;
  driverProfilePage: any = DriverProfilePage;
  superProfilePage: any = SuperProfilePage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController, public auth: AuthProvider) {
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

  getUserType() {
    return this.auth.getType();
  }
}

