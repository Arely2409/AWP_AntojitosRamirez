import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {


  numeroPlatillo: number = 1;
  numeroBebida: number = 1;

  incrementoPlatillo() {
    this.numeroPlatillo++;
  }
  decrementoPlatillo() {
    this.numeroPlatillo--;
  }

  incrementoBebida() {
    this.numeroBebida++;
  }
  decrementoBebida() {
    this.numeroBebida--;
  }

}
