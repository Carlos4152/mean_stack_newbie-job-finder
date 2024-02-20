import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobsURL = 'https://mean-stack-newbie-job-finder.vercel.app/dashboard/jobs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.jobsURL);
  }

  



}
