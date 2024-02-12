import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticatedUser: boolean = false;

  setAuthenticateUser(value: boolean): void {
    this.authenticatedUser = value;
  }

  isAuthenticated(): boolean {
    return this.authenticatedUser;
  }

}
