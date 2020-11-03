import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.page.html',
  styleUrls: ['./ejercicio05.page.scss'],
})
export class Ejercicio05Page implements OnInit {

  min = 0;
  max = 0;
  randomNumber: number;

  constructor() { }

  ngOnInit() {
  }

  generateRandom() {
    this.randomNumber = +this.min + Math.floor(Math.random() * (this.max - this.min + 1));
  }

}
