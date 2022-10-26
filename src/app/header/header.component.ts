import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor() { }

  login(event: any){
    event.preventDefault();
    this.isLoggedIn = true;
  }

  ngOnInit(): void {
  }

}
