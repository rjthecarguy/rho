import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any;
  zone: NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


this.zone = new NgZone({});
    firebase.initializeApp({
      apiKey: "AIzaSyBDKTJgc1u4CVvJCH9uKPftNG-PMtXYkW0",
      authDomain: "event-97c4b.firebaseapp.com",
      databaseURL: "https://event-97c4b.firebaseio.com",
      storageBucket: "event-97c4b.appspot.com",
      messagingSenderId: "150439043340"
    });

    this.zone = new NgZone({});
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        this.zone.run( () => {
    if (!user) {
      this.rootPage = LoginPage;
      unsubscribe();
    } else { 
      this.rootPage = HomePage; 
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
