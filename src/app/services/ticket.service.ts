import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  URL_API = 'http://localhost:3000/';
  tickets: Ticket[] = [];
  selectedTicket: Ticket = {
    id_ticket: 0,
    id_mesa: 0,
    fecha: new Date(),
    confirmado: false
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getAllTickets() {
    return this.http.get<Ticket[]>(this.URL_API + 'getTickets');
  }

  addTicket(ticket: Ticket) {
    return this.http.post(this.URL_API + 'createTicket', ticket);
  }

  deleteTicket(id: number) {
    return this.http.delete(this.URL_API + 'deleteTicket/' + id);
  }

  updateTicket(ticket: Ticket) {
    return this.http.put(this.URL_API + 'updateTicket/' + ticket.id_ticket, ticket);
  }
}
