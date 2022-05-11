import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { ContactService } from 'src/app/services/contact.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoFocusInputDirective } from 'src/app/directivas/auto-focus-input.directive';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ContactoComponent,
    AutoFocusInputDirective
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
