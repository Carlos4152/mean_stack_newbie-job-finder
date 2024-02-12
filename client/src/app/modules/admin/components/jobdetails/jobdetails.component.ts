import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/core/models/application.interface';
import { JobsService } from 'src/app/core/services/jobs.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent {

  jobApplication!: Application[];
  //alert
  title = ''
  message = ''

  constructor(
    private route: ActivatedRoute, 
    private service: UserService, 
    private jobsApplication: JobsService,
    private router: Router
    ) {}

  userApplication= false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const appId = params['appId'];
      const checkerAppId = appId.split("").length;

      this.userApplication = checkerAppId > 3;

      if(checkerAppId > 3) {
        this.service.getById(appId).subscribe({
          next: response => { this.jobApplication = [response] },
          error: error => { console.log(error.error.message) }
        });
  
      } else {
        this.jobsApplication.getAll().subscribe({
          next: response => {
            response.filter(job => {
              if (job && job._id && job._id.toString() === appId) {
                this.jobApplication = [job];
              }
            })
          },
          error: error => {
            console.log(error.error.message)
          }
        })
      }
      
    });
  }

  createApplication(application: Application) {
    this.service.apply(application).subscribe({
      next: response => {
        if(response) {
          this.title = 'Success';
          this.message = `Application submitted`;
        }
        setTimeout(() => {
          this.title = 'no showing'
          this.router.navigate(['/jobs'])
        }, 1500)

        
      },
      error: error => {
        console.log(error)
        this.title = 'Error';
        this.message = `${error.error.message}`;
        
        setTimeout(() => {
          this.title = 'no showing'
        }, 2000);
      }
    })

  }




}

