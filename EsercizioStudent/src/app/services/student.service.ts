import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];
  selectedStudent?: Student;

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  editStudent(student: Student): void {
    this.selectedStudent = student;
  }

  removeStudent(index: number): void {
    this.students.splice(index, 1);
  }
}
