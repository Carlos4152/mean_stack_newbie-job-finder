import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/core/models/application.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {

  // Alert
  title = '' ;
  desc = '';

  username =  localStorage.getItem('username')?.split(' ')[0]

  userApplications!: Application[];
  userID = localStorage.getItem('userID');

  constructor(private service: UserService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
   this.reloadApplicationData();
  }

  searchForm = this.fb.group({
    position: [''],
  })

  searchApplication() {
    if(this.searchForm.valid) {
      const position = this.searchForm.get('position')?.value?.toLowerCase();
      this.userApplications = this.userApplications.filter(data => data.position.toLocaleLowerCase().includes(`${position}`))
    }
  }

  resetSearch() {
    this.reloadApplicationData() 
  }

  deleteApplication(application: Application) {
    this.service.deleteById(application._id).subscribe({
      next: (response) => {
        if(response) {
          this.title = 'Success';
          this.desc = `Application has been removed`;
        }
        setTimeout(() => {
          this.title = 'no showing'
        }, 2000)
        this.reloadApplicationData()
      },
      error: (error) => {
        this.title = 'Error';
        this.desc = `${error.error.message}`;
        
        setTimeout(() => {
          this.title = 'no showing'
        }, 2000);
      }
    })
  }


  reloadApplicationData() {
    this.service.getApplications().subscribe({
      next: (response) => { this.userApplications = response; },
      error: (error) => { console.log(error)}
    })

  }
}
