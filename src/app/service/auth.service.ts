import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modele/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/api/v1/users/login`, { email, password });
  }
}
