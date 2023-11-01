import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {


  numero: number = 1;

  incremento() {
    this.numero++;
  }
  decremento() {
    this.numero--;
  }

}
