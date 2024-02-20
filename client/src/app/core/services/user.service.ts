import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../models/registration.interface';
import { Observable } from 'rxjs';
import { Data, Login } from '../models/login.interface';
import { Application } from '../models/application.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL = 'https://mean-stack-newbie-job-finder.vercel.app/user';
  userApplications: Application[] =[]

  constructor(private http: HttpClient) { }

// USER REGISTRATION
  create(formvalues: Registration): Observable<Registration>{
    return this.http.post<Registration>(`${this.userURL}/registration`, formvalues);
  }

// USER LOGIN ACCESS
  login(formValues: Login): Observable<Data>{
    return this.http.post<Data>(`${this.userURL}/login`, formValues);
  }

  // USER JOB APPLICATION - POST METHOD
  apply(application: Application): Observable<Application>{
    return this.http.post<Application>(`${this.userURL}/applications`, application);
  }

  // USER JOB APPLICATION - GET METHOD
  getApplications(): Observable<Application[]>{
    return this.http.get<Application[]>(`${this.userURL}/applications`);
  }

  // GET METHOD - REQUEST USER SINGLE APPLICATION
  getById(application: Application): Observable<Application>{
    return this.http.get<Application>(`${this.userURL}/application/${application}`);
  }

  deleteById(application: string): Observable<Application>{
    return this.http.delete<Application>(`${this.userURL}/application/${application}`);
  }

  

  } 









