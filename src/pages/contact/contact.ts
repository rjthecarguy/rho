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
	submitAttempt: boolean = false;
	submitComplete: boolean = false;
	nameValid: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

  		this.contact = formBuilder.group({
        Name: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        Email: [''],
        Message: ['']
    });

  }

  sendForm() {

  	this.submitAttempt = true;

  	console.log(this.contact.value);

  	if(!this.contact.controls.Name.valid) {
  		console.log("NOT VALID NAME");
  		console.log(this.submitAttempt);
  		console.log(this.nameValid);
  	}
  		else {
  			 this.nameValid = true;
  			console.log("Valid!!!!");

  			this.contact.reset();
  			this.submitAttempt = false;
  			this.nameValid = false;



  			
  		}
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  ionViewDidLeave() {

  	// Reset form and clear validation flags on page exit

  	this.contact.reset();
  	this.submitAttempt = false;
  	this.nameValid = false;
  }

}
