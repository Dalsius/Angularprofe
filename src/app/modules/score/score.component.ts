import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Score } from './../../models/score';

import { ScoreService } from './../../services/score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, OnChanges {

  dataSource: Score;
  displayedColumns: string[] = ['id', 'course', 'score'];

  @Input() message: string;
  @Input() studentId: number;
  @Input() studentName: string;
  @Output() response: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private scoreService: ScoreService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes message', changes.message);
    // console.log('changes studentId', changes.studentId);

    if (changes.studentId.currentValue) {
      this.getScoreByStudentId(changes.studentId.currentValue);
    }
  }

  sendMessage() {
    this.response.emit('Soy tu hijo');
  }

  getScoreByStudentId(studentId: number) {
    this.scoreService.getByStudentId(studentId).subscribe(
      data => {
        // console.log('score', data);
        this.dataSource = data;
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
