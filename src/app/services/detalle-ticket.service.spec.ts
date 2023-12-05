import { TestBed } from '@angular/core/testing';

import { DetalleTicketService } from './detalle-ticket.service';

describe('DetalleTicketService', () => {
  let service: DetalleTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
