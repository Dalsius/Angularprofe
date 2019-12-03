import { TestBed } from '@angular/core/testing';

import { ScoreService } from './score.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ScoreService = TestBed.get(ScoreService);
    expect(service).toBeTruthy();
  });
});
