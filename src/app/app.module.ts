import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GreetingPage } from '../pages/greeting/greeting';
import { MyProfilePage } from '../pages/my-profile/my-profile';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    GreetingPage,
    MyProfilePage
=======
    LoginPage,
    RegisterPage,
    ForgotpasswordPage
>>>>>>> 02526abf0e3e05e38155f44d6f06d03956bf3d99
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    GreetingPage,
    MyProfilePage
=======
    LoginPage,
    RegisterPage,
    ForgotpasswordPage
>>>>>>> 02526abf0e3e05e38155f44d6f06d03956bf3d99
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
