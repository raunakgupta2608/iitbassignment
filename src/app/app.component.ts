import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IITB';

  ngOnInit() {
    let a = localStorage.getItem("_LoggedIn");
    if(a == null) 
      localStorage.setItem("_LoggedIn", "false");
  }
}
