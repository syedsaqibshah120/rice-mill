import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    const body = { userName, password };
    debugger;
    return this.http.post(`${this.baseUrl}/users/login`, body);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${user.userID}`, user);
  }
}
