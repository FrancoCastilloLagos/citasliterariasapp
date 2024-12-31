import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CitasService } from '../citas.service';
import { ConfiguracionService } from '../configuracion.service';
import { CitaComponent } from '../cita/cita.component';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, CitaComponent],
})
export class InicioPage implements OnInit, OnDestroy {
  citaAleatoria: any;
  mostrarBotonBorrar: boolean = false;
  private configSubscription: Subscription | undefined;

  constructor(
    private citasService: CitasService,
    private configuracionService: ConfiguracionService
  ) {}

  ngOnInit() {
    this.obtenerCitaAleatoria(); 

    this.configSubscription = this.configuracionService.configBorrar$.subscribe(
      (valor) => {
        this.mostrarBotonBorrar = valor;
      }
    );
  }

  ngOnDestroy() {
    if (this.configSubscription) {
      this.configSubscription.unsubscribe(); 
    }
  }

  obtenerCitaAleatoria() {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }

  cambiarCita() {
    this.obtenerCitaAleatoria();
  }

  borrarCita() {
    if (this.citaAleatoria) {
      this.citaAleatoria = null; 
    }
  }
}
