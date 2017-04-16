import { Injectable } from '@angular/core';
import firebase from 'firebase';





/*
  Generated class for the TestosteroneData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class TestosteroneData {
  public currentUser: string;
  public eventList: firebase.database.Reference;



  constructor() {

  	this.currentUser = firebase.auth().currentUser.uid;
    this.eventList = firebase.database().ref(`userProfile/${this.currentUser}/testosTest`);

  }


 createTestosTest(testDate: string, testResult: number): firebase.Promise<any> {
    return this.eventList.push({
      date: testDate,
      result: testResult
    });
  }



 getTestosTestList(): firebase.database.Reference {
  return this.eventList;
}



}
