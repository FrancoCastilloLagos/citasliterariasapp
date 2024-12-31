import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CitasService } from '../citas.service'; // Importa el servicio de citas
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestioncitas',
  templateUrl: 'gestioncitas.page.html',
  styleUrls: ['gestioncitas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule], 
})
export class GestionCitasPage {
  citas: any[] = []; 
  formularioCita: FormGroup; 

  constructor(private citasService: CitasService, private fb: FormBuilder) {
    this.formularioCita = this.fb.group({
      frase: ['', [Validators.required, Validators.minLength(5)]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {
   
    this.cargarCitas();
  }

  
  cargarCitas() {
    this.citas = this.citasService.obtenerCitas();
  }

 
  agregarCita() {
    if (this.formularioCita.valid) {
      this.citasService.agregarCita(this.formularioCita.value);
      this.cargarCitas(); 
      this.formularioCita.reset(); 
    }
  }

  eliminarCita(cita: any) {
    this.citasService.eliminarCita(cita);
    this.cargarCitas(); 
  }
}