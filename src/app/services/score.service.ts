import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Score } from '../models/score';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private userUrl = 'api/score';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Score[]> {
    return this.http.get<Score[]>(this.userUrl).pipe();
  }

  getByStudentId(studentId: number): Observable<Score> {
    return this.http.get<Score>(this.userUrl, {
      params: new HttpParams()
      .set('studentId', studentId.toString())
    });
  }
}
