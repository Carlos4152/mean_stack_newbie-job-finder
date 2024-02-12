import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Application } from 'src/app/core/models/application.interface';
import { JobsService } from 'src/app/core/services/jobs.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  // Alert
  title = '' ;
  desc = '';

  userApplications!: Application[];
  username =  localStorage.getItem('username')?.split(' ')[0]

  jobs!: Application[];
  selectedJob!: Application[];
  selectedIndex: number | null = null;

  constructor(
    private fb: FormBuilder, 
    private jobService: JobsService, 
    private userServices: UserService, 
    ) { }

  searchForm = this.fb.group({
    position: [''],
    location: [''],
  })

  ngOnInit(): void {

    this.jobService.getAll().subscribe({
      next: (response) => {
        this.jobs = response
        this.selectedJob = [this.jobs[0]];
        this.selectedIndex = 0;
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  // IN CHARGED TO KEEP ONE JOB POST SELECTED ONCE USER GET ACCESS.
  showJobDetails(selected: string, index: number) {
    const displayJob = this.jobs.filter(job => job._id === selected)
    this.selectedJob = displayJob;

    if (displayJob) {
      this.selectedIndex = index;
    }
  }

  searchJob() {
    if (this.searchForm.valid) {
      const position = this.searchForm.get('position')?.value?.toLocaleLowerCase();
      const location = this.searchForm.get('location')?.value?.toLocaleLowerCase();
      this.jobs = this.jobs.filter(value =>
        value.position.toLocaleLowerCase().includes(`${position}`) || value.location.toLowerCase().includes(`${location}`));
    } 
  }

  resetSearch() {
    this.jobService.getAll().subscribe({
      next: (response) => {
        this.jobs = response;
        this.searchForm.reset();
        this.selectedJob = [this.jobs[0]];
        this.selectedIndex = 0;
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

  createApplication(application: Application) {
    this.userServices.apply(application).subscribe({
      next: response => {
        if(response) {
          this.title = 'Success';
          this.desc = `Application submitted`;
        }
        setTimeout(() => {
          this.title = 'no showing'
        }, 2000)
      },
      error: error => {
        this.title = 'Error';
        this.desc = `${error.error.message}`;
        
        setTimeout(() => {
          this.title = 'no showing'
        }, 2000);
      }
    })

  }


}
