
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesa } from '../models/mesas';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  URL_API = 'https://prueba-6-jov9.onrender.com/mesas';
  mesas: Mesa[] = [];
  selectedMesa: Mesa = {
    id_mesa: 0,
    numero_mesa: 0,
    id_mesero: 0,
    total_ventas: 0
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getMesas() {
    return this.http.get<Mesa[]>(this.URL_API + '/');
  }

  createMesa(id_mesa: Mesa) {
    return this.http.post(this.URL_API + 'createMesa', id_mesa);
  }

  deleteMesa(id_mesa: number) {
    return this.http.delete(this.URL_API + 'deleteMesa/' + id_mesa);
  }

  updateMesa(mesa: Mesa) {
    return this.http.put(this.URL_API + 'updateMesa/' + mesa.id_mesa, mesa);
  }
}
