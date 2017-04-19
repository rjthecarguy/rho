import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http, Request, RequestMethod, Headers} from "@angular/http";



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
	http: Http;
    mailgunUrl: string;
    mailgunApiKey: string;
	
	


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, http:Http) {


  	 	this.http = http;
        this.mailgunUrl = "sandbox90ad627c933640e48e9d3099f4d21b3b.mailgun.org";
        this.mailgunApiKey = window.btoa("api:key-cc2a7c44f4c6bf078cb2496c90ac5b2d");


  		this.contact = formBuilder.group({
        Name: ['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        Email: ['',Validators.compose([Validators.required])],
        Message: ['']
    });

  }

  sendForm() {


  	this.submitAttempt = true;

  	var messageName = this.contact.controls.Name.value;
  	var messageEmail = this.contact.controls.Email.value;
  	var messageMessage = this.contact.controls.Message.value;




  	var message = this.buildMessage(messageName, messageEmail, messageMessage);


  	  	  	
  	if(this.contact.valid) {

  			this.send("rj@rjrobinson.net", "App Inquiry", message);
  			 
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

  buildMessage(name:string, email:string, messageString:string)  {


var message = "BioEdge Application Message\n\n";

message += "Name:" + name + "\n";
message += "Email:" + email + "\n\n";
message += "Message:\n\n" + messageString + "\n";



return message;


  }



send(recipient: string, subject: string, message: string) {
        var requestHeaders = new Headers();
        requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
        requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        this.http.request(new Request({
            method: RequestMethod.Post,
            url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
            body: "from=test@example.com&to=" + recipient + "&subject=" + subject + "&text=" + message,
            headers: requestHeaders
        }))
        .subscribe(success => {
            console.log("SUCCESS -> " + JSON.stringify(success));
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }





}
