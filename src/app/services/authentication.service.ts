import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userUrl = 'api/user';
  private currentUserSubject = new BehaviorSubject<User>(null);
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient
  ) { }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, pws: string): Observable<User> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(map(user => {
        const userAux = user.find(f => f.username === username && f.pws === pws);

        if (userAux) {
          this.currentUserSubject.next(userAux);
        }

        return userAux;
      })
    );
  }

  logout() {
    localStorage.removeItem('userName');
    this.currentUserSubject.next(null);
  }
}
