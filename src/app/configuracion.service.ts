import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  private configBorrarSubject = new BehaviorSubject<boolean>(false); 
  configBorrar$ = this.configBorrarSubject.asObservable();

  constructor() {
    this.cargarConfigBorrar();
  }

  
  async cargarConfigBorrar() {
    const { value } = await Preferences.get({ key: 'configBorrar' });
    if (value !== null) {
      this.configBorrarSubject.next(JSON.parse(value));
    }
  }

  obtenerConfigBorrar(): boolean {
    return this.configBorrarSubject.value;
  }

  async establecerConfigBorrar(valor: boolean): Promise<void> {
    await Preferences.set({ key: 'configBorrar', value: JSON.stringify(valor) });
    this.configBorrarSubject.next(valor);
  }
}
