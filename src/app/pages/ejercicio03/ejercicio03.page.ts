import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio03.page.html',
  styleUrls: ['./ejercicio03.page.scss'],
})
export class Ejercicio03Page implements OnInit {

  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
  }

  addUp() {
    this.counter++;
  }

  subtract() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

}
