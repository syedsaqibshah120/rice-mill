import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Check on internet subscriber and oversable
  GetUserInfo(passcode: any): Observable<any> {
    return this.http.get('https://reqres.in/api/users/' + passcode);
  }
  // getUsers(page: number): Observable<any> {
  //   return this.http.get(`https://reqres.in/api/users?page=${page}`);
  // }
}
