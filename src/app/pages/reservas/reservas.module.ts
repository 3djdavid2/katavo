
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './reservas.component';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card'
import { MatButtonToggleModule} from '@angular/material/button-toggle'

//date pipe import
import locale from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
registerLocaleData(locale ,'es')

@NgModule({
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  declarations: [
    ReservasComponent
  ],
  imports: [
    MatDatepickerModule,
    CommonModule,
    ReservasRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatCardModule,
    MatButtonToggleModule
  ]
})
export class ReservasModule { }
