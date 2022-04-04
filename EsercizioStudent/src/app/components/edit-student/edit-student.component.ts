import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

  close() {
    this.studentService.selectedStudent = undefined;
  }

}
