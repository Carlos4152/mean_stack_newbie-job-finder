import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl  } from '@angular/forms';
import { Registration } from '../../core/models/registration.interface';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // Alert
  title = '' ;
  desc = '';

  passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:,<.>])/;
  
  constructor(private fb: FormBuilder, private service:UserService, private router: Router ) { }

  isInvalid(control: AbstractControl | null): boolean {
    return !!control && control.touched && control.invalid;
  }

  registrationForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern), Validators.minLength(10)]]
  });

 submitForm() {
    const formValues = this.registrationForm.value;
    if (this.registrationForm.valid) {
      const formData: Registration = {
        first_name: formValues.first_name?.toLowerCase() || '',
        last_name: formValues.last_name?.toLowerCase() || '',
        userEmail: formValues.userEmail?.toLowerCase() || '',
        password: formValues.password || '',
      }

     this.service.create(formData).subscribe({
        next: (response) => { 
          this.title = 'Success';
          this.desc = 'Your account has been created proceed to login.';
          this.router.navigate(['/login'])

          setTimeout(() => {
            this.title = 'no showing'
          }, 2000)

          this.registrationForm.reset(); 
        },
        error: (error) => { 
          this.title = 'Error';
          this.desc = `${error.error.message}`;
          setTimeout(() => {
            this.title = 'no showing'
          }, 2000);
        }
      });

    } 
  }







  

}
