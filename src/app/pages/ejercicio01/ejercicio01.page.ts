import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
  }

  showName() {
    this.name = "Ismael Pacheco Torrecilla";
  }

  clearName() {
    this.name = "";
  }

}
