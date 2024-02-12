import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

export const Guard: CanActivateFn = (route, state) => {

  const authService = inject(AuthenticationService);
  const isAuthenticated = authService.isAuthenticated();
  const router = inject(Router);

  if(!isAuthenticated){
    router.navigate(['/login']);
    return false;
  } 

    return true;
  

  
};
