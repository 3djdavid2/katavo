import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
        path:'contacto',
        loadChildren:()=>import('./pages/contacto/contacto.module').then(m=>m.ContactoModule)
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
