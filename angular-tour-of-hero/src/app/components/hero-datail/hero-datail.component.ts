import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.scss']
})
export class HeroDatailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
