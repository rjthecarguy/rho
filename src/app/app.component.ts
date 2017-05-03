import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TestosteroneResultListPage } from '../pages/testosterone-result-list/testosterone-result-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage : any;
  zone: NgZone;


  @ViewChild(Nav) nav: Nav;

  isAuth: boolean;

  rootPage: any = HomePage;

  navPages: Array<{title: string, component: any}>;
  testInfoPages: Array<{title: string, component: any}>;
  testResultPages: Array<{title: string, component: any}>;
  userPages: Array<{title: string, component: any}>;
  loggedPages: Array<{title: string, component: any}>;
  notLoggedPages: Array<{title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    this.navPages = [
      { title: 'Home', component: HomePage },
      { title: 'About Us', component:  HomePage  },
      { title: 'Contact Us', component: HomePage }
    ];

    this.testInfoPages = [
      { title: 'Testosterone', component: HomePage },
      { title: 'Estrogen', component:  HomePage  },
      { title: 'Hemoglobin', component: HomePage },
      { title: 'Prostate Specific Antigen (PSA)', component: HomePage }
    ]

    this.testResultPages = [
      { title: 'Testosterone', component: HomePage },
      { title: 'Estrogen', component:  HomePage  },
      { title: 'Hemoglobin', component: HomePage },
      { title: 'Prostate Specific Antigen (PSA)', component: HomePage }
    ]

    this.userPages = [
      { title: 'Profile', component: HomePage }
    ];

    this.loggedPages = [
      { title: 'logout', component:  HomePage  }
    ];

    this.notLoggedPages = [
      { title: 'login', component:  HomePage  }
    ];






this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: "AIzaSyDU3VBEJmRdNrnjBB9wgM3MQqp1NDdImw4",
    authDomain: "rho-app.firebaseapp.com",
    databaseURL: "https://rho-app.firebaseio.com",
    projectId: "rho-app",
    storageBucket: "rho-app.appspot.com",
    messagingSenderId: "224120617245"
    });

    this.zone = new NgZone({});
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        this.zone.run( () => {
    if (!user) {
      this.rootPage = LoginPage;
      this.isAuth = false;
      unsubscribe();
    } else { 
      this.rootPage = TabsPage;
      this.isAuth = true; 
      unsubscribe();
    }
  });     
});



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
