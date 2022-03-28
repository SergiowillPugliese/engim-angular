import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { AddStudentService } from 'src/app/services/add-student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private add_Student: AddStudentService) { }

  ngOnInit(): void {
  }

  student: Student = {
    firstName: '',
    lastName: ''
  };

}
