import { Component } from '@angular/core';
import { ConfiguracionService } from '../configuracion.service';
import { IonTitle, IonContent, IonHeader, IonItem, IonLabel, IonToolbar, IonToggle } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  templateUrl: 'configuracion.page.html',
  styleUrls: ['configuracion.page.scss'],
  imports: [IonTitle, IonContent, IonHeader, IonItem, IonLabel, IonToolbar, IonToggle, FormsModule]
})
export class ConfiguracionPage {
  configBorrar: boolean;

  constructor(private configuracionService: ConfiguracionService) {
    this.configBorrar = this.configuracionService.obtenerConfigBorrar();
  }

  cambiarConfigBorrar() {
    this.configuracionService.establecerConfigBorrar(this.configBorrar);
  }
}