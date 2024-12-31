import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CitasService } from '../citas.service';  // Importa el servicio de citas
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestioncitas',
  templateUrl: 'gestioncitas.page.html',
  styleUrls: ['gestioncitas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  // Asegúrate de importar los módulos necesarios
})
export class GestionCitasPage {
  citas: any[] = [];  // Almacena las citas
  nuevaCita = { frase: '', autor: '' };  // Nueva cita que se añadirá

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    // Cargar las citas desde el servicio al iniciar la página
    this.cargarCitas();
  }

  // Método para cargar las citas
  cargarCitas() {
    this.citas = this.citasService.obtenerCitas();
  }

  // Método para agregar una nueva cita
  agregarCita() {
    if (this.nuevaCita.frase && this.nuevaCita.autor) {
      this.citasService.agregarCita(this.nuevaCita);
      this.cargarCitas();  // Recargar las citas
      this.nuevaCita = { frase: '', autor: '' };  // Resetear los campos
    }
  }

  // Método para eliminar una cita
  eliminarCita(cita: any) {
    this.citasService.eliminarCita(cita);
    this.cargarCitas();  // Recargar las citas después de eliminar
  }
}
