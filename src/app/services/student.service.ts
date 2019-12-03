import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private userUrl = 'api/student';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.userUrl).pipe();
  }
}
