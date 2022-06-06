import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatCardModule
  ]
})
export class ServiciosModule { }
