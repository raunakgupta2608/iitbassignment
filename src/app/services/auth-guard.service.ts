import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    return this.verifyLogin();
  }

  verifyLogin(): boolean{
    if(!this._LoggedIn()){
      return false;
    }
    else if(this._LoggedIn()){
      return true;
    }
  }

  public _LoggedIn(): boolean{
    let status = false;
    if(localStorage.getItem('_LoggedIn') === "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
  }
}
