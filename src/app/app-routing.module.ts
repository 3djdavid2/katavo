import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../../src/app/pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path:'',
    children:[
      {
        path: 'reservas',
        loadChildren:()=>import('./pages/reservas/reservas.module').then(m=>m.ReservasModule)
      },
      
      {
        path: 'contacto',
        component: ContactoComponent
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
