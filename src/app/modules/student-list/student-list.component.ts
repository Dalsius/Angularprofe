import { Component, OnInit } from '@angular/core';

import { Student } from '../../models/student';

import { StudentService } from '../../services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  messageValue = '';
  dataSource: Student[];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  studentId: number;
  studentName: string;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.messageValue = 'Soy tu padre';
    this.getStudents();
  }

  printMessage(event: string) {
    console.log(event);
  }

  getStudents() {
    this.studentService.getAll().subscribe(
      data => {
        this.dataSource = data;
      },
      error => {
        console.log('error', error);
      }
    );
  }

  setStudent(event: Student) {
    this.studentId = event.id;
    this.studentName = event.name;
  }

}
