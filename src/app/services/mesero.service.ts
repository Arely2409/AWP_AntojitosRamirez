import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesero } from '../models/Mesero';

@Injectable({
  providedIn: 'root'
})
export class MeseroService {
  URL_API = 'http://localhost:3000/';
  meseros: Mesero[] = [];
  selectedMesero: Mesero = {
    id_mesero: 0,
    nombre: ""
  };
  update: boolean = false;

  constructor(private http: HttpClient) { }

  getAllMeseros() {
    return this.http.get<Mesero[]>(this.URL_API + 'getMeseros');
  }

  
}
