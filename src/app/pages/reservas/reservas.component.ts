import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
 import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  providers: [
    
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class ReservasComponent implements OnInit {
  selected!: Date | null;
  @Input() value1:any;
  constructor(private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,) {
      this._adapter.setLocale('es')
     }

  ngOnInit(): void {
  }
  

}
