import { Component } from '@angular/core';
import { detalleTicket } from 'src/app/models/detalleTicket';
import { DetalleTicketService } from 'src/app/services/detalle-ticket.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  detallesTickets: detalleTicket[] = [];

  constructor( public detalleTicketService: DetalleTicketService) {}

  ngOnInit() {
    
    this.getDetallesTicket();
  }

 

  getDetallesTicket() {
    this.detalleTicketService.getDetallesTicket().subscribe(
      res => {
        this.detalleTicketService.detallesTicket = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  
}