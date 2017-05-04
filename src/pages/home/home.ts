import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TestosteroneResultListPage } from '../testosterone-result-list/testosterone-result-list';
import { TestosteroneGraphPage } from '../testosterone-graph/testosterone-graph';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })

export class HomePage {


  isAuth:boolean;
    


  constructor(public navCtrl: NavController, public events: Events) {

  

  	
    
  }

 goToProfile(){

    this.navCtrl.push(ProfilePage);
  }




goToList(){
  this.navCtrl.push(TestosteroneResultListPage);
}

goToGraph(){
  this.navCtrl.push(TestosteroneGraphPage);
}



}
