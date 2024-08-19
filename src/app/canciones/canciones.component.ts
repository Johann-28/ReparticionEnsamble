
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Musico } from '../models/musico.interface';
import { TipoMusico } from '../models/tipo-musico.interface';
import { Cancion } from '../models/canciones.interface';

@Component({
  selector: 'app-canciones',
  standalone: true,
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.scss',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancionesComponent {

   musicos : Musico[] = [
    {"id": 1, "nombre": "JESUS C", "tipoMusicoId": 1},
    {"id": 2, "nombre": "CHUY", "tipoMusicoId": 1},
    {"id": 3, "nombre": "HASELL", "tipoMusicoId": 2},
    {"id": 4, "nombre": "EDGAR", "tipoMusicoId": 2},
    {"id": 5, "nombre": "ELPIDIO", "tipoMusicoId": 3},
    {"id": 6, "nombre": "GABRIEL", "tipoMusicoId": 4},
    {"id": 7, "nombre": "JOHANN", "tipoMusicoId": 1},
    {"id": 8, "nombre": "ERIK", "tipoMusicoId": 5},
    {"id": 9, "nombre": "EDUARDO", "tipoMusicoId": 1},
    {"id": 10, "nombre": "DIEGO", "tipoMusicoId": 2},
    {"id": 11, "nombre": "VIKI", "tipoMusicoId": 3}
  ];


  tipoMusicos : TipoMusico[] = [
      {"id": 1, "instrumento": "GTR"},
      {"id": 2, "instrumento": "BSS"},
      {"id": 3, "instrumento": "BTR"},
      {"id": 4, "instrumento": "TRP"},
      {"id": 5, "instrumento": "TCL"}
  ];  

  canciones : Cancion[] = [
    {"id": 1, "titulo": "La Bikina"},
    {"id": 2, "titulo": "Lo que Construimos"},
    {"id": 3, "titulo": "TQM"},
    {"id": 4, "titulo": "La planta"},
    {"id": 5, "titulo": "One, Two, Three, GO!"},
    {"id": 6, "titulo": "Cada Que"},
    {"id": 7, "titulo": "No Te Contaron Mal"},
    {"id": 8, "titulo": "Fuerte No Soy"},
    {"id": 9, "titulo": "Hasta La Raíz"},
    {"id": 10, "titulo": "La Media Vuelta"},
    {"id": 11, "titulo": "La Carcacha"},
    {"id": 12, "titulo": "Belleza de Cantina"},
    {"id": 13, "titulo": "El Chico Del Apartamento 512"},
    {"id": 14, "titulo": "Di Que Si"},
    {"id": 15, "titulo": "No Rompas Mi Corazón"}
  ];

  musicosCanciones = [
    {"cancionId": 1, "musicoId": 1},
    {"cancionId": 1, "musicoId": 2},
    {"cancionId": 1, "musicoId": 3},
    {"cancionId": 1, "musicoId": 4},
    {"cancionId": 1, "musicoId": 5},
    {"cancionId": 1, "musicoId": 6},
    {"cancionId": 2, "musicoId": 1},
    {"cancionId": 2, "musicoId": 7},
    {"cancionId": 2, "musicoId": 3},
    {"cancionId": 2, "musicoId": 4},
    {"cancionId": 2, "musicoId": 5},
    {"cancionId": 2, "musicoId": 8},
    {"cancionId": 3, "musicoId": 9},
    {"cancionId": 3, "musicoId": 2},
    {"cancionId": 3, "musicoId": 3},
    {"cancionId": 3, "musicoId": 4},
    {"cancionId": 3, "musicoId": 5},
    {"cancionId": 3, "musicoId": 8},
    {"cancionId": 4, "musicoId": 9},
    {"cancionId": 4, "musicoId": 7},
    {"cancionId": 4, "musicoId": 10},
    {"cancionId": 4, "musicoId": 11},
    {"cancionId": 4, "musicoId": 6},
    {"cancionId": 5, "musicoId": 2},
    {"cancionId": 5, "musicoId": 9},
    {"cancionId": 5, "musicoId": 3},
    {"cancionId": 5, "musicoId": 4},
    {"cancionId": 5, "musicoId": 5},
    {"cancionId": 6, "musicoId": 2},
    {"cancionId": 6, "musicoId": 9},
    {"cancionId": 6, "musicoId": 3},
    {"cancionId": 6, "musicoId": 4},
    {"cancionId": 6, "musicoId": 5},
    {"cancionId": 7, "musicoId": 7},
    {"cancionId": 7, "musicoId": 1},
    {"cancionId": 7, "musicoId": 4},
    {"cancionId": 7, "musicoId": 5},
    {"cancionId": 7, "musicoId": 8},
    {"cancionId": 8, "musicoId": 2},
    {"cancionId": 8, "musicoId": 7},
    {"cancionId": 8, "musicoId": 3},
    {"cancionId": 8, "musicoId": 11},
    {"cancionId": 8, "musicoId": 5},
    {"cancionId": 9, "musicoId": 7},
    {"cancionId": 9, "musicoId": 1},
    {"cancionId": 9, "musicoId": 10},
    {"cancionId": 9, "musicoId": 5},
    {"cancionId": 9, "musicoId": 4},
    {"cancionId": 10, "musicoId": 7},
    {"cancionId": 10, "musicoId": 2},
    {"cancionId": 10, "musicoId": 10},
    {"cancionId": 10, "musicoId": 11},
    {"cancionId": 10, "musicoId": 6},
    {"cancionId": 11, "musicoId": 2},
    {"cancionId": 11, "musicoId": 9},
    {"cancionId": 11, "musicoId": 3},
    {"cancionId": 11, "musicoId": 11},
    {"cancionId": 11, "musicoId": 5},
    {"cancionId": 12, "musicoId": 9},
    {"cancionId": 12, "musicoId": 2},
    {"cancionId": 12, "musicoId": 3},
    {"cancionId": 12, "musicoId": 4},
    {"cancionId": 12, "musicoId": 6},
    {"cancionId": 13, "musicoId": 7},
    {"cancionId": 13, "musicoId": 1},
    {"cancionId": 13, "musicoId": 10},
    {"cancionId": 13, "musicoId": 11},
    {"cancionId": 13, "musicoId": 8},
    {"cancionId": 14, "musicoId": 2},
    {"cancionId": 14, "musicoId": 7},
    {"cancionId": 14, "musicoId": 3},
    {"cancionId": 14, "musicoId": 11},
    {"cancionId": 14, "musicoId": 4},
    {"cancionId": 15, "musicoId": 9},
    {"cancionId": 15, "musicoId": 1},
    {"cancionId": 15, "musicoId": 3},
    {"cancionId": 15, "musicoId": 11},
    {"cancionId": 15, "musicoId": 4}
];





  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;




}
