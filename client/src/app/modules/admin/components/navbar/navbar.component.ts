import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userlogedin = localStorage.getItem("token");
  toggleValue = false;

  username = localStorage.getItem("username")

  constructor(private router: Router, private authService: AuthenticationService){}


  logedOut() {
    if(this.userlogedin) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      this.authService.setAuthenticateUser(false);
      this.router.navigate(['/login'])
    }
  }

  toggleMenu() {
    this.toggleValue = !this.toggleValue;
    console.log(this.toggleValue)
  }

}
