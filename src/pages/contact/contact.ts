import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	contact: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

  		this.contact = formBuilder.group({
        Name: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        Email: [''],
        Message: ['']
    });

  }

  sendForm() {
  	console.log(this.contact.value);

  	if(!this.contact.valid) {
  		console.log("NOT VALID");
  	}
  		else {
  			console.log("Valid!!!!");
  		}
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
