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
import { AttendancePage } from '../pages/attendance/attendance';
import {AgmCoreModule} from '@agm/core';

import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailedTablePage,
    StarterPage,
    AttendancePage,
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
    AttendancePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {
}
