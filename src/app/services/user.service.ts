import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/user';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe();
  }

  save(user: User) {
    console.log('usuario a guardar', user);
    return this.http.post<User>(this.userUrl, user).pipe();
  }
}
