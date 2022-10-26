import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appLogo:string = 'Blogify';
  public isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.checkIsLoggedIn();
  }

  checkIsLoggedIn():void{
    if(this.router.url.endsWith('/users')){
      this.isLoggedIn = true;
    }
  }

  // logout function
  onLogout():void{
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
