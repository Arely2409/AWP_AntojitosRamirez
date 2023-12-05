import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platillo } from '../models/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  URL_API = 'http://localhost:3000/';
  platillos: Platillo[] = [];
  selectedPlatillo: Platillo = {
    id_platillo: 0,
    nombre: '',
    precio: 0
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getAllPlatillos() {
    return this.http.get<Platillo[]>(this.URL_API + 'getPlatillos');
  }

  addPlatillo(platillo: Platillo) {
    return this.http.post(this.URL_API + 'createPlatillo', platillo);
  }

  deletePlatillo(id: number) {
    return this.http.delete(this.URL_API + 'deletePlatillo/' + id);
  }

  updatePlatillo(platillo: Platillo) {
    return this.http.put(this.URL_API + 'updatePlatillo/' + platillo.id_platillo, platillo);
  }
}
