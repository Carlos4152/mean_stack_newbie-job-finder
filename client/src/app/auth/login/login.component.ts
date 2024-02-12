import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../core/models/login.interface';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Alert
  title = '' ;
  desc = '';

  constructor(private fb: FormBuilder, private service: UserService, private router: Router, private authService: AuthenticationService) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })


  onSubmit() {
    if (this.loginForm.valid) {

      const loginData: Login = {
        userEmail: this.loginForm.get('email')?.value?.toLowerCase() || '',
        password: this.loginForm.get('password')?.value || ''
      }

      this.service.login(loginData).subscribe({
        next: (response) => {
          if (response.token) {
            const data = response;
            // ALERT MESSAGE
            this.title = 'Success';
            this.desc = 'Your credentials have been found in the system.';

            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.name);
            localStorage.setItem("email", data.email);
            localStorage.setItem("userid", data._id);
            this.authService.setAuthenticateUser(true)
            this.router.navigate(['/jobs'])

            setTimeout(() => {
              this.title = 'no showing';
            }, 1500)
          }

        },
        error: (error) => {
          
          this.title = 'Error';
          this.desc = `${error.error.message}`;

          setTimeout(() => {
            this.title = 'no showing'
          }, 1500);
        }
      })
    } else {
      console.log('Error')
    }
  }

}
