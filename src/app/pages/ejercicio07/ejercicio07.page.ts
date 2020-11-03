import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.page.html',
  styleUrls: ['./ejercicio07.page.scss'],
})
export class Ejercicio07Page implements OnInit {

  eur = 0;
  pts = 0;

  constructor() { }

  ngOnInit() {
  }

  updateEuros() {
    this.eur = this.pts / 166.386;
  }

  updatePesetas() {
    this.pts = this.eur * 166.386;
  }

}
