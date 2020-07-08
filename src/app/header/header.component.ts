import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _LoggedIn: string;

  constructor(public dialog: MatDialog,
    private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this._LoggedIn = localStorage.getItem('_LoggedIn');
  }

  openLoginForm(){
    const dialogRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
    dialogRef.afterClosed().subscribe(data => { this._LoggedIn = localStorage.getItem('_LoggedIn')});
  }

  openLogout(){
    this._LoggedIn = "false";
    this.snackbar.open("Logged out Successful", "Cancel", { duration: 2000, });
    localStorage.setItem('_LoggedIn', 'false');
    this.router.navigate(['/intro']);
  }

}
