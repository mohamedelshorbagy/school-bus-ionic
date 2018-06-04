import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { DetailedTablePage } from '../pages/detailed-table/detailed-table';
import { SignupPage } from '../pages/signup/signup';
import { AuthProvider } from '../providers/auth/auth';
import { StarterPage } from '../pages/starter/starter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DetailedTablePage,
    SignupPage,
    StarterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DetailedTablePage,
    SignupPage,
    StarterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
