import { Routes } from '@angular/router';
import { InicioPage } from './inicio/inicio.page';
import { GestionCitasPage } from './gestioncitas/gestioncitas.page';
import { ConfiguracionPage } from './configuracion/configuracion.page';

export const routes: Routes = [
  { path: '', component: InicioPage },
  { path: 'gestioncitas', component: GestionCitasPage },
  { path: 'configuracion', component: ConfiguracionPage }
];
