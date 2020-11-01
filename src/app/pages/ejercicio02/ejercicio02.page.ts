import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.page.html',
  styleUrls: ['./ejercicio02.page.scss'],
})
export class Ejercicio02Page implements OnInit {

  name: string;
  buttonText: string;

  constructor() { }

  ngOnInit() {
    this.buttonText = "Muestra nombre";
  }

  pressButton() {
    if (this.buttonText == "Muestra nombre") {
      this.name = "Ismael Pacheco Torrecilla";
      this.buttonText = "Limpia pantalla";
    } else {
      this.name = "";
      this.buttonText = "Muestra nombre";
    }
  }

}
