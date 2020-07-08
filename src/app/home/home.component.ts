import { Component, OnInit } from '@angular/core';
import { User, users } from '../shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  u: User;
  users: User[];
  showContent: boolean;
  editable: boolean;
  index: number;
  
  constructor() { }

  ngOnInit() {
    this.showContent = false;
    this.editable = false;
    this.users = users;
  }


  onClick(u: User, i: number) {
    this.u = u;
    this.index = i;
    this.showContent = true;
  }

  cancelClicked() {
    this.showContent = !this.showContent;
  }

  onSubmit(ele) {
    this.editable = !this.editable;
    ele.textContent = (this.editable === true) ? "Done" : "Edit";
  }

  onDelete() {
    if(this.editable === true) this.editable = false;
    this.users.splice(this.index, 1);
    this.showContent = false;
  }
  
}
