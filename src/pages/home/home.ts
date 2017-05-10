import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { TestosteroneResultListPage } from '../testosterone-result-list/testosterone-result-list';
import { TestosteroneGraphPage } from '../testosterone-graph/testosterone-graph';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })

export class HomePage {


  isAuth:boolean;
  auth:boolean; 
    


  constructor(public navCtrl: NavController, public events: Events) {

  this.events.subscribe('Auth:state', (user) => {
  // user and time are the same arguments passed in `events.publish(user, time)`
  this.auth = user;
  
  console.log(this.auth);

});

  	
    
  }

 goToProfile(){

    this.navCtrl.push(ProfilePage);
  }

goToLogin() {
  this.navCtrl.setRoot(LoginPage);
}


goToList(){
  this.navCtrl.push(TestosteroneResultListPage);
}

goToGraph(){
  this.navCtrl.push(TestosteroneGraphPage);
}

ionViewDidLoad() {



}



}
