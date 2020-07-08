import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { userid: 0, loginpass: ''};
  spinner: boolean;
  _LoggedIn: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this._LoggedIn = localStorage.getItem('_LoggedIn');
  }

  onSubmit(){
    this.spinner = true;
    if(this.user.userid == 121 && this.user.loginpass =="iitb"){
      this.snackbar.open("Login Successful", "Cancel", { duration: 2000, });
      localStorage.setItem('_LoggedIn', 'true');
      this.router.navigate(['/home']);
      this.dialogRef.close();
    }
    else{
      this.spinner = false;
      localStorage.setItem('_LoggedIn', 'false');
      this.snackbar.open("Invalid Details", "Cancel", { duration: 4000, });
    }
  }
}
