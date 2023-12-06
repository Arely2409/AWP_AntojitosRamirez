import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detalleTicket } from '../models/detalleTicket';

@Injectable({
  providedIn: 'root'
})
export class DetalleTicketService {
  URL_API = 'http://localhost:3000/detalleTickets';
  detallesTicket: detalleTicket[] = [];
  selectedDetalle: detalleTicket = {
    id_detalle: 0,
    id_ticket: 0,
    id_platillo: 0,
    id_bebida: 0,
    cantidad: 0,
    observaciones: ""
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getDetallesTicket() {
    return this.http.get<detalleTicket[]>(this.URL_API + '/');
  }

  addDetalleTicket(id_detalle: detalleTicket) {
    return this.http.post(this.URL_API + '/createDetalleTicket', id_detalle);
  }

  deleteDetalleTicket(id_detalle: number) {
    return this.http.delete(this.URL_API + 'deleteDetalleTicket/' + id_detalle);
  }

  updateDetalleTicket(detalle: detalleTicket) {
    return this.http.put(this.URL_API + 'updateDetalleTicket/' + detalle.id_detalle, detalle);
  }
}
