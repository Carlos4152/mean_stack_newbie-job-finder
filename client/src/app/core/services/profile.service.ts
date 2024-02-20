import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.interface';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  URI = 'https://mean-stack-newbie-job-finder-server.vercel.app/user/profile';
  //URI_PICTURE = 'https://mean-stack-newbie-job-finder-server.vercel.app/user/images/profile'
  URI_PICTURE = 'http://localhost:3000/user/images/profile'


  update(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.URI, profile)
  }

  delete(userId: string ): Observable<Profile> {
    return this.http.delete<Profile>(`${this.URI}/${userId}`)
  }

  get(userId: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.URI}/${userId}`)
  }

  post(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.URI, profile)
  }

  // *************************** User Photo API *********************************** 

  uploadImage(image: File): Observable<Image>{
    const formData = new FormData();
    formData.append('imageProfile', image);
    return this.http.post<Image>(this.URI_PICTURE, formData);
  }

  updateImage(image: File): Observable<Image>{
    const formData = new FormData();
    formData.append('imageProfile', image);
    return this.http.put<Image>(this.URI_PICTURE, formData);
  }

  getImages(): Observable<any>{
    return this.http.get<any>(this.URI_PICTURE)
  }




}
