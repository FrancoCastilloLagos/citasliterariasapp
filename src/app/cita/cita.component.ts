import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CitaComponent {
  @Input() cita: any | null = null; // Recibe la cita aleatoria desde el padre
  @Input() mostrarBorrar: boolean = false; // Controla si se muestra el botón rojo
  @Output() borrar = new EventEmitter<void>(); // Emite un evento al padre para borrar la cita

  borrarCita() {
    this.borrar.emit(); // Envía la señal al padre
  }
}
