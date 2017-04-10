import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventData } from '../../providers/event-data';


@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})


export class EventDetailPage {
  currentEvent: any;
  
  
  constructor(public nav: NavController, public navParams: NavParams, 
    public eventData: EventData) {

console.log("NavParam Constructor:" + this.navParams.get('eventId'));
  }

 ionViewCanEnter(){

 	console.log("NavParam Enter:" + this.navParams.get('eventId'));

    this.eventData.getEventDetail(this.navParams.get('eventId')).on('value', snapshot => {
      this.currentEvent = snapshot.val();
      console.log("Current Event:" + this.currentEvent.name);

      this.currentEvent.id = snapshot.key;
    });
  }

  

  

}