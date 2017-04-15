import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any;
  zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


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
      unsubscribe();
    } else { 
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
}
