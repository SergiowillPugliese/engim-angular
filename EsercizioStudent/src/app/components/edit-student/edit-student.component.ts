import { Component, OnInit } from '@angular/core';
import { EditStudentService } from 'src/app/services/edit-student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(public editSudent:EditStudentService) { }

  ngOnInit(): void {
  }

}
