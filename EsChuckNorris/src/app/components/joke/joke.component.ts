import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  title: String = 'esChuckNorris';

  constructor() { }

  ngOnInit(): void {
  }

}
