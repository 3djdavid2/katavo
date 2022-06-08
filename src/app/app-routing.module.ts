import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../../src/app/pages/contacto/contacto.component';
import { DialogSesionComponent } from './components/dialog-sesion/dialog-sesion.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: '',
    children: [
      {
        path: 'reservas',
        loadChildren: () => import('./pages/reservas/reservas.module').then(m => m.ReservasModule)
      },
      {
        path: 'servicios',
        loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
