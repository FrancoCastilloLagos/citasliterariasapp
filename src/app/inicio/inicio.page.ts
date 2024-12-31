import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitasService } from '../citas.service';
import { ConfiguracionService } from '../configuracion.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class InicioPage implements OnInit, OnDestroy {
  formularioCita: FormGroup;
  citas: any[] = [];
  citaAleatoria: any;
  mostrarBotonBorrar: boolean = false;

  private configSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private citasService: CitasService,
    private configuracionService: ConfiguracionService
  ) {
    this.formularioCita = this.fb.group({
      frase: ['', [Validators.required]],
      autor: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.citas = [...this.citasService.obtenerCitas()];
    this.obtenerCitaAleatoria();

    // Suscribirse a los cambios en el estado de "configBorrar"
    this.configSubscription = this.configuracionService.configBorrar$.subscribe((valor) => {
      this.mostrarBotonBorrar = valor;
    });
  }

  ngOnDestroy() {
    // Asegurarse de cancelar la suscripción para evitar fugas de memoria
    if (this.configSubscription) {
      this.configSubscription.unsubscribe();
    }
  }

  agregarCita() {
    if (this.formularioCita.valid) {
      this.citasService.agregarCita(this.formularioCita.value);
      this.citas = [...this.citasService.obtenerCitas()];
      this.formularioCita.reset();
      this.obtenerCitaAleatoria();
    }
  }

  eliminarCita(cita: any) {
    this.citasService.eliminarCita(cita);
    this.citas = [...this.citasService.obtenerCitas()];
    this.obtenerCitaAleatoria();
  }

  obtenerCitaAleatoria() {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }

  cambiarCita() {
    this.obtenerCitaAleatoria();
  }

  borrarCita() {
    this.citaAleatoria = null;
  }
}
