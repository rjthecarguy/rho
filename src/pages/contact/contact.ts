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
        Email: ['',Validators.compose([Validators.required])],
        Message: ['']
    });

  }

  sendForm() {

  	this.submitAttempt = true;

  	  	
  	if(this.contact.valid) {

  			 
  			console.log("Valid!!!!");

  			this.resetContactForm();
  			this.submitComplete = true;



  			
  		}
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  ionViewDidLeave() {

  	// Reset form and clear validation flags on page exit

  	
  	this.resetContactForm();

  	this.submitComplete = false;
  }


  resetContactForm() {
  	
	this.contact.reset();
  	this.submitAttempt = false;
  	

  }


}
