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

  let filaCount = 1;

  if (btnAddPlatillo) {
      btnAddPlatillo.addEventListener('click', () => {
          const platilloSeleccionado = platilloOpcion.value;
          const cantidadSeleccionada = cantidadPlatillo.value;
          const observaciones = idObservaciones.value;

          const nuevaFila = document.createElement('tr');
          nuevaFila.id = `filaPlatillo${filaCount}`;

          nuevaFila.innerHTML = `
              <td>${platilloSeleccionado}</td>
              <td>${cantidadSeleccionada}</td>
              <td>${observaciones}</td>
              
          `;
          if (tablaTicket) {
              tablaTicket.appendChild(nuevaFila);
          }
          filaCount++;
      });
  }
  if (btnAddBebida) {
    btnAddBebida.addEventListener('click', () => {
        const bebidaSeleccionada = bebidaOpcion.value;
        const cantidadSeleccionadaB = cantidadBebida.value;
        const observaciones = idObservaciones.value;

        const nuevaFila = document.createElement('tr');
        nuevaFila.id = `filaPlatillo${filaCount}`;

        nuevaFila.innerHTML = `
            <td>${bebidaSeleccionada}</td>
            <td>${cantidadSeleccionadaB}</td>
            <td>${observaciones}</td>
            <td>precio</td>
            
        `;
        if (tablaTicket) {
            tablaTicket.appendChild(nuevaFila);
        }
        filaCount++;
    });
}

  if (btnDeletePlatillo) {
      btnDeletePlatillo.addEventListener('click', () => {
          if (tablaTicket && tablaTicket.lastElementChild) {
              const ultimaFila = tablaTicket.lastElementChild as HTMLTableRowElement;
              tablaTicket.removeChild(ultimaFila);
              filaCount--;
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
