import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestosteroneData} from '../../providers/testosterone-data';
import { TestosTestCreatePage} from '../testos-test-create/testos-test-create';
import { TestosteroneGraphPage} from '../testosterone-graph/testosterone-graph';
import { ModalController } from 'ionic-angular';
import { TesResultModal } from '../tes-result-modal/tes-result-modal';

@Component({
  selector: 'page-testosterone-result-list',
  templateUrl: 'testosterone-result-list.html'
})
export class TestosteroneResultListPage {
	 public testosteroneResultList: any;




  constructor(public navCtrl: NavController, public navParams: NavParams, public testosteroneData: TestosteroneData, public modalCtrl: ModalController) {}



  openTesResultModal() {
    let myModal = this.modalCtrl.create(TesResultModal);
    myModal.present();
  }


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

goToGraph(){
  this.navCtrl.push(TestosteroneGraphPage);
}


}
