import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bebidas } from '../models/bebidas';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {
  URL_API = 'http://localhost:3000//bebidas';
  bebidas: Bebidas[] = [];
  selectedBebida: Bebidas = {
    id_bebida: 0,
    nombre: "",
    precio: 0
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getAllBebidas() {
    return this.http.get<Bebidas[]>(this.URL_API + '/');
  }

  addBebida(bebida: Bebidas) {
    return this.http.post(this.URL_API + '/createBebida', bebida);
  }

  deleteBebida(id: number) {
    return this.http.delete(this.URL_API + '/deleteBebida/' + id);
  }

  updateBebida(bebida: Bebidas) {
    return this.http.put(this.URL_API + '/updateBebida/' + bebida.id_bebida, bebida);
  }
}
