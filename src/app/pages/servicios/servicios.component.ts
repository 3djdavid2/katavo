import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios!: any[];

  constructor() { }

  ngOnInit(): void {

    this.servicios = [
      {
        nombre: 'Alisado',
        imgURL: 'https://patronatotelas.s3.amazonaws.com/pelo.jpg',

        tiempo: '2 horas'

      },
      {
        nombre: 'Peinado',
        imgURL: 'urlfoto',

        tiempo: '1 horas'
      },
      {
        nombre: 'Cortes de cabello',
        imgURL: 'urlfoto',

        tiempo: '1 horas'

      },
      {
        nombre: 'Mechas Balayages',
        imgURL: 'urlfoto',

        tiempo: '1 horas'
      },
      {
        nombre: 'Tratamientos capilares',
        imgURL: 'urlfoto',
        tiempo: '1 horas'

      },
      {
        nombre: 'Ondulacion de pestañas',
        imgURL: 'urlfoto',
        tiempo: '1 horas'
      }
    ]

  }

}
