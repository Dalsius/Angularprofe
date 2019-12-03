import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: StudentService = TestBed.get(StudentService);
    expect(service).toBeTruthy();
  });
});
