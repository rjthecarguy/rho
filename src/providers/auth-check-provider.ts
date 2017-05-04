import { Injectable } from '@angular/core';



@Injectable()
export class AuthCheckProvider {

isAuth:boolean = false;



  constructor() {
    

  }

  setAuthState(state:boolean) {
  	this.isAuth = state;
  }

  getAuthState()  {
  	return this.isAuth;
  }

  
}
