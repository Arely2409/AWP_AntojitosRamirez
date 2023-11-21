import { Component } from '@angular/core';


document.addEventListener('DOMContentLoaded', () => {
  const platilloOpcion = document.getElementById('platilloOpcion') as HTMLSelectElement;
  const cantidadPlatillo = document.getElementById('cantidadPlatillo') as HTMLInputElement;
  const idObservaciones = document.getElementById('idObservaciones') as HTMLInputElement;
  const btnAddPlatillo = document.getElementById('btnAddPlatillo');
  const btnDeletePlatillo = document.getElementById('btnDeletePlatillo');
  const tablaTicket = document.querySelector('#card2 tbody');
  
  const bebidaOpcion = document.getElementById('bebidaOpcion') as HTMLSelectElement;
  const cantidadBebida = document.getElementById('cantidadBebida') as HTMLInputElement;
  const btnDeleteBebida = document.getElementById('btnDeleteBebida');
  const btnAddBebida = document.getElementById('btnAddBebida');

  let filaCountPlatillo = 1;
  let filaCountBebida = 1;

  /* Agregar Platillo */
  if (btnAddPlatillo) {
    btnAddPlatillo.addEventListener('click', () => {
      const platilloSeleccionado = platilloOpcion.value;
      const cantidadSeleccionada = cantidadPlatillo.value;
      const observaciones = idObservaciones.value;

      const nuevaFila = document.createElement('tr');
      nuevaFila.id = `filaPlatillo${filaCountPlatillo}`;

      nuevaFila.innerHTML = `
        <td>${platilloSeleccionado}</td>
        <td>${cantidadSeleccionada}</td>
        <td>${observaciones}</td>
        <td>precio</td>

      `;

      if (tablaTicket) {
        tablaTicket.appendChild(nuevaFila);
      }

      filaCountPlatillo++;
    });
  }

  /* Agregar Bebida */
  if (btnAddBebida) {
    btnAddBebida.addEventListener('click', () => {
      const bebidaSeleccionada = bebidaOpcion.value;
      const cantidadSeleccionadaB = cantidadBebida.value;
      const observaciones = idObservaciones.value;

      const nuevaFilaB = document.createElement('tr');
      nuevaFilaB.id = `filaBebida${filaCountBebida}`;

      nuevaFilaB.innerHTML = `
        <td>${bebidaSeleccionada}</td>
        <td>${cantidadSeleccionadaB}</td>
        <td></td>
        <td>precio</td>
      `;

      if (tablaTicket) {
        tablaTicket.appendChild(nuevaFilaB);
      }

      filaCountBebida++;
    });
  }

  if (btnDeletePlatillo) {
    btnDeletePlatillo.addEventListener('click', () => {
      if (tablaTicket && tablaTicket.lastElementChild) {
        const ultimaFilaPlatillo = tablaTicket.lastElementChild as HTMLTableRowElement;
        if (ultimaFilaPlatillo.id.startsWith('filaPlatillo')) {
          tablaTicket.removeChild(ultimaFilaPlatillo);
          filaCountPlatillo--;
        }
      }
    });
  }

  if (btnDeleteBebida) {
    btnDeleteBebida.addEventListener('click', () => {
      if (tablaTicket && tablaTicket.lastElementChild) {
        const ultimaFilaBebida = tablaTicket.lastElementChild as HTMLTableRowElement;
        if (ultimaFilaBebida.id.startsWith('filaBebida')) {
          tablaTicket.removeChild(ultimaFilaBebida);
          filaCountBebida--;
        }
      }
    });
  }
});


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
