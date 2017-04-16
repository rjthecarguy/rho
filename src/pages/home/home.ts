import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TestosteroneResultListPage } from '../testosterone-result-list/testosterone-result-list';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  })

export class HomePage {


  
    


  constructor(public navCtrl: NavController) {

  	
    
  }

 goToProfile(){

    this.navCtrl.push(ProfilePage);
  }




goToList(){
  this.navCtrl.push(TestosteroneResultListPage);
}


}
