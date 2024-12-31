import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private configBorrarSubject = new BehaviorSubject<boolean>(false); // Inicialmente desactivado
  configBorrar$ = this.configBorrarSubject.asObservable();

  constructor() {}

  // Obtener el valor actual
  obtenerConfigBorrar(): boolean {
    return this.configBorrarSubject.value;
  }

  // Establecer un nuevo valor y notificar a los suscriptores
  establecerConfigBorrar(valor: boolean): void {
    this.configBorrarSubject.next(valor);
  }
}
