import { Component, NgZone, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TestosteroneResultListPage } from '../pages/testosterone-result-list/testosterone-result-list';

import { AuthCheckProvider } from '../providers/auth-check-provider';
import { Events } from 'ionic-angular';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage : any;
  zone: NgZone;


  isAuth:boolean;

  @ViewChild(Nav) nav: Nav;

 
  rootPage: any = HomePage;

  navPages: Array<{title: string, component: any}>;
  testInfoPages: Array<{title: string, component: any}>;
  testResultPages: Array<{title: string, component: any}>;
  userPages: Array<{title: string, component: any}>;
  loggedPages: Array<{title: string, component: any}>;
  notLoggedPages: Array<{title: string, component: any}>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public setAuth:AuthCheckProvider, public events:Events) {

this.events.subscribe('Auth:state', (user) => {
  // user and time are the same arguments passed in `events.publish(user, time)`
  this.isAuth = user;
  
  

});
    

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
      { title: 'Testosterone', component: TestosteroneResultListPage },
      { title: 'Estrogen', component:  HomePage  },
      { title: 'Hemoglobin', component: HomePage },
      { title: 'Prostate Specific Antigen (PSA)', component: HomePage }
    ]

    this.userPages = [
      { title: 'Profile', component: HomePage }
    ];

    this.loggedPages = [
      { title: 'Logout', component:  HomePage  }
    ];

    this.notLoggedPages = [
      { title: 'Login', component:  LoginPage  }
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
      this.events.publish('Auth:state', false);
      this.rootPage = HomePage;
      unsubscribe();
    } else { 
     this.events.publish('Auth:state', true);
      this.rootPage = TabsPage;
           
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


menuOpened() {
  console.log(this.isAuth);
  
}



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
