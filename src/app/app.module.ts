import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {DetailedTablePage} from '../pages/detailed-table/detailed-table';
import {AuthProvider} from '../providers/auth/auth';
import {StarterPage} from '../pages/starter/starter';
import {AttendancePage} from '../pages/attendance/attendance';
import {AgmCoreModule} from '@agm/core';
import {ProfileChildrenPage} from "../pages/profile-children/profile-children";
import {SearchPipe} from '../pipes/search.pipe';
import {MatronsServiceProvider} from '../providers/matrons-service/matrons-service';
import {ParentServiceProvider} from '../providers/parent-service/parent-service';
import {DailyTablePage} from "../pages/daily-table/daily-table";

import {NotificationPage} from '../pages/notification/notification';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {FollowersPage} from '../pages/followers/followers';
import {MyProfilePage} from '../pages/my-profile/my-profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailedTablePage,
    StarterPage,
    AttendancePage,
    ProfileChildrenPage,
    DailyTablePage,
    NotificationPage,
    ContactUsPage,
    FollowersPage,
    MyProfilePage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIE3IOiOrz07sCN_L4H6fzImRzSozlJoA'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailedTablePage,
    StarterPage,
    AttendancePage,
    ProfileChildrenPage,
    DailyTablePage,
    NotificationPage,
    ContactUsPage,
    MyProfilePage,
    FollowersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MatronsServiceProvider,
    ParentServiceProvider
  ]
})
export class AppModule {
}
