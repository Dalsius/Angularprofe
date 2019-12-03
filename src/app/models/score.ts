export class Score {
  id: number;
  studentId: number;
  course: string;
  score: number;

  constructor(
    studentId: number,
    course: string,
    score: number) {
      this.studentId = studentId;
      this.course = course;
      this.score = score;
    }
}
