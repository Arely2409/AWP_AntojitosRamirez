import { Component } from '@angular/core';


document.addEventListener('DOMContentLoaded', () => {
  // Obtén los elementos relevantes del DOM
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
          // Obtén los valores seleccionados
          const platilloSeleccionado = platilloOpcion.value;
          const cantidadSeleccionada = cantidadPlatillo.value;
          const observaciones = idObservaciones.value;

          // Crea una nueva fila en la tabla del ticket
          const nuevaFila = document.createElement('tr');
          nuevaFila.id = `filaPlatillo${filaCount}`;

          // Agrega las celdas con los datos del platillo
          nuevaFila.innerHTML = `
              <td>${platilloSeleccionado}</td>
              <td>${cantidadSeleccionada}</td>
              <td>${observaciones}</td>
              
          `;
          // Agrega la nueva fila a la tabla del ticket si existe
          if (tablaTicket) {
              tablaTicket.appendChild(nuevaFila);
          }
          // Incrementa el contador de filas
          filaCount++;
      });
  }
  if (btnAddBebida) {
    btnAddBebida.addEventListener('click', () => {
        // Obtén los valores seleccionados
        const bebidaSeleccionada = bebidaOpcion.value;
        const cantidadSeleccionadaB = cantidadBebida.value;
        const observaciones = idObservaciones.value;

        // Crea una nueva fila en la tabla del ticket
        const nuevaFila = document.createElement('tr');
        nuevaFila.id = `filaPlatillo${filaCount}`;

        // Agrega las celdas con los datos del platillo
        nuevaFila.innerHTML = `
            <td>${bebidaSeleccionada}</td>
            <td>${cantidadSeleccionadaB}</td>
            <td>${observaciones}</td>
            <td>precio</td>
            
        `;
        // Agrega la nueva fila a la tabla del ticket si existe
        if (tablaTicket) {
            tablaTicket.appendChild(nuevaFila);
        }
        // Incrementa el contador de filas
        filaCount++;
    });
}

  if (btnDeletePlatillo) {
      btnDeletePlatillo.addEventListener('click', () => {
          // Verifica que haya al menos una fila para eliminar
          if (tablaTicket && tablaTicket.lastElementChild) {
              // Obtiene la última fila agregada
              const ultimaFila = tablaTicket.lastElementChild as HTMLTableRowElement;

              // Elimina la última fila de la tabla del ticket
              tablaTicket.removeChild(ultimaFila);

              // Decrementa el contador de filas
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
