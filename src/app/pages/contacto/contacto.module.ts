import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactService } from 'src/app/services/contact.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [ContactService]
})
export class ContactoModule { }
