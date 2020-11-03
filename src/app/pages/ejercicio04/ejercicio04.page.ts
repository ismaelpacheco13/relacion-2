import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio04',
  templateUrl: './ejercicio04.page.html',
  styleUrls: ['./ejercicio04.page.scss'],
})
export class Ejercicio04Page implements OnInit {

  name: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  showMessage() {
    this.message = "!Hola " + this.name + "!";
  }

}
