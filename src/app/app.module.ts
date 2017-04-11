import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { TestosteroneResultListPage } from '../pages/testosterone-result-list/testosterone-result-list';
import { TestosTestCreatePage} from '../pages/testos-test-create/testos-test-create';
import { PsaPage } from '../pages/psa/psa';
import { HemoPage } from '../pages/hemo/hemo';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

// Import providers
import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';
import { TestosteroneData } from '../providers/testosterone-data';
import { PsaData } from '../providers/psa-data';
import { HemoData } from '../providers/hemo-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    TestosteroneResultListPage,
    PsaPage,
    HemoPage,
    TestosTestCreatePage,
    ContactPage,
    AboutPage,
    TabsPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    TestosteroneResultListPage,
    PsaPage,
    HemoPage,
    TestosTestCreatePage,
    ContactPage,
    AboutPage,
    TabsPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    EventData,
    ProfileData,
    TestosteroneData,
    PsaData,
    HemoData
  ]
})
export class AppModule {}
