import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: any[] = [];

  constructor() {
    this.citas = [
      { frase: 'La vida es lo que pasa mientras estamos ocupados haciendo otros planes.', autor: 'John Lennon' },
      { frase: 'La imaginación es más importante que el conocimiento.', autor: 'Albert Einstein' }
    ];
  }

  obtenerCitas() {
    return [...this.citas];  
  }

  agregarCita(cita: any) {
    this.citas.push(cita);
  }

  eliminarCita(cita: any) {
    this.citas = this.citas.filter(c => c !== cita);
  }

  obtenerCitaAleatoria() {
    const randomIndex = Math.floor(Math.random() * this.citas.length);
    return this.citas[randomIndex];
  }
}