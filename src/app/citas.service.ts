import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: any[] = [];

  constructor() {
    // Cargar algunas citas iniciales si es necesario
    this.citas = [
      { frase: 'La vida es lo que pasa mientras estamos ocupados haciendo otros planes.', autor: 'John Lennon' },
      { frase: 'La imaginación es más importante que el conocimiento.', autor: 'Albert Einstein' }
    ];
  }

  // Obtener todas las citas
  obtenerCitas() {
    return [...this.citas];  // Devuelve una copia para evitar la mutación externa
  }

  // Agregar una cita
  agregarCita(cita: any) {
    this.citas.push(cita);
  }

  // Eliminar una cita
  eliminarCita(cita: any) {
    this.citas = this.citas.filter(c => c !== cita);
  }

  // Obtener una cita aleatoria
  obtenerCitaAleatoria() {
    const randomIndex = Math.floor(Math.random() * this.citas.length);
    return this.citas[randomIndex];
  }
}
