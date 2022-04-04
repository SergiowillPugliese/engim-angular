import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student: Student = {
    firstname: '',
    lastname: ''
  };  

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  add() {
    // let student: Student = { firstname: this.firstname, lastname: this.lastname };
    this.studentService.addStudent(this.student);
    this.student = {
      firstname: '',
      lastname: ''
    }; 
  }

}
