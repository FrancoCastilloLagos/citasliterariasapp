import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], 
})
export class CitaComponent {
  @Input() cita: any | null = null; 
  @Input() mostrarBorrar: boolean = false; 
  @Output() borrar = new EventEmitter<void>(); 

  borrarCita() {
    this.borrar.emit(); 
  }
}
