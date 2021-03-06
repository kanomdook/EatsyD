import { HomePage } from '../pages/home/home';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { RegisterPage } from '../pages/register/register';

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { GreetingPage } from '../pages/greeting/greeting';
import { MyProfilePage } from '../pages/my-profile/my-profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = GreetingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
