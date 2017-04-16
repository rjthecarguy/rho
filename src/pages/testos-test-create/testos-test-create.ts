import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestosteroneData} from '../../providers/testosterone-data';
/*
  Generated class for the TestosTestCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-testos-test-create',
  templateUrl: 'testos-test-create.html'
})
export class TestosTestCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public testoResult:TestosteroneData) {}

 createTestosResult(testosDate: string, testosResult: number): void {

  this.testoResult.createTestosTest(testosDate, testosResult)
  .then( () => {
    this.navCtrl.pop();
  });
}

}
