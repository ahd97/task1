import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:SocialAuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signOut(){
    if(sessionStorage.getItem('social_usr')){
      sessionStorage.removeItem('social_usr');
      this.authService.signOut();
      this.router.navigate(['login']);  
    }
    if(sessionStorage.getItem('usr')){
      sessionStorage.removeItem('usr');
      this.router.navigate(['login']);
    }
  }
}
