import { Component } from '@angular/core';
import { Mesa } from 'src/app/models/mesas';
import { MesaService } from 'src/app/services/mesa.service';

@Component({
  selector: 'app-cash-break',
  templateUrl: './cash-break.component.html',
  styleUrls: ['./cash-break.component.css']
})
export class CashBreakComponent {
  mesas: Mesa[] = [];

  constructor(public mesaService: MesaService) {}

  ngOnInit() {
    this.getMesas();
  }

  getMesas() {
    this.mesaService.getMesas().subscribe(
      res => {
        this.mesaService.mesas = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  
  
}

