import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  edit(student: Student) {
    this.studentService.editStudent(student);
  }

  remove(index: number) {
    this.studentService.removeStudent(index);
  }
}
