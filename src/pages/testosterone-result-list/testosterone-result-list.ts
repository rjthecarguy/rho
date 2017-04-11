import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestosteroneData} from '../../providers/testosterone-data';
import { TestosTestCreatePage} from '../testos-test-create/testos-test-create';

@Component({
  selector: 'page-testosterone-result-list',
  templateUrl: 'testosterone-result-list.html'
})
export class TestosteroneResultListPage {
	 public testosteroneResultList: any;




  constructor(public navCtrl: NavController, public navParams: NavParams, public testosteroneData: TestosteroneData) {}

  ionViewDidEnter() {


    this.testosteroneData. getTestosTestList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          result: snap.val().result,
          date: snap.val().date,
        });
      return false
      });
      this.testosteroneResultList = rawList;
    });



   
  }



newTestosteroneResult() {
 	this.navCtrl.push(TestosTestCreatePage);
  }



}
