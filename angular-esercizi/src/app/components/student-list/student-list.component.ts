import { Component, OnInit } from '@angular/core';
import { STUDENTS } from 'src/app/mock-data/mock-students'; //((ho importato il mock))
import { Student } from 'src/app/models/Student'; //ho importato l'interfaccia


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student: Student[] = STUDENTS;
  selectedStudent?: Student;

  constructor() { }

  ngOnInit(): void {
  }

  /* definisco la funzione */
  changeCard(student: Student){
    //prendo pippo che mi arriva dal ciclo e lo uso per immagazzinarlo
    //dentro ad una variabile ts, che riuserò per fare cose nella view
    this.selectedStudent = student;
    console.log(('id=') + student.id, ('name=') + student.name);
  }

}
