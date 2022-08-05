import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {
  url: string = "/pdata/" //change in prod

  constructor(private http:HttpClient) {
    console.log("myapi running");
   }

  getUserData():Observable<any> { 
    return this.http.get<any>(this.url+"user/1/search");
  }

  getSkillsData():Observable<any> {
    return this.http.get<any>(this.url+"skill/list");
  }

  getProjectsData():Observable<any> {
    return this.http.get<any>(this.url+"projects/list");
  }

  getEducationData():Observable<any> {
    return this.http.get<any>(this.url+"education/list");
  }

}
