import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  // Alert
  title = '';
  message = '';

  constructor(private fb: FormBuilder) {}

  supportForm = this.fb.group({
    subject: ["", Validators.required],
    contact: ["", Validators.required],
    message: ["", Validators.required], 
  })


  submitReport() {
    const validForm = this.supportForm.valid;

    if(validForm) {
      this.title = 'Success',
      this.message = 'Your report has been sent. Our Team will contact within 24 hours.'
      this.supportForm.reset();

      setTimeout(() => { this.title = 'change'}, 2000)
    } else {
      this.title = 'Error';
      this.message = 'Please fill all the information.'
      setTimeout(() => { this.title = 'change'}, 2000)
    }
  }



}
