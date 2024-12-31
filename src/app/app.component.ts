import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Para el enrutamiento
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterOutlet, CommonModule]  // Importación de módulos correctos
})
export class AppComponent {
  constructor() {}
}
