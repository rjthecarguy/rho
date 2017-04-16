import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class EventData {
  public currentUser: string;
  public eventList: firebase.database.Reference;

  constructor() {
    this.currentUser = firebase.auth().currentUser.uid;
    this.eventList = firebase.database()
        .ref(`userProfile/${this.currentUser}/eventList`);


  }


 createEvent(eventName: string, eventDate: string, eventPrice: number, 
    eventCost: number): firebase.Promise<any> {
    return this.eventList.push({
      name: eventName,
      date: eventDate,
      price: eventPrice * 1,
      cost: eventCost * 1,
      revenue: eventCost * -1
    });
  }

  getEventList(): firebase.database.Reference {
  return this.eventList;
}



getEventDetail(eventId): firebase.database.Reference {
  return this.eventList.child(eventId);
}

}



