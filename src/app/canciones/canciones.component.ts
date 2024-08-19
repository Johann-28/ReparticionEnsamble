
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Musico } from '../models/musico.interface';
import { Cancion } from '../models/canciones.interface';
import {MatRippleModule} from '@angular/material/core';
import { canciones as cancionesData, canciones, musicos } from '../../assets/data'; 
import { GeneralConstant } from '../../assets/general-constants';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-canciones',
  standalone: true,
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.scss',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatRippleModule,
            MatGridListModule, MatCheckboxModule, FormsModule, ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancionesComponent implements OnInit {

  musicosPresentes: Musico[] = [];
  canciones: Cancion[] = cancionesData;
  voces : Musico [] = musicos.filter(musico => musico.tipoMusico.instrumento === GeneralConstant.TipoMusicoConstant.VOZ);
  instrumentos = musicos.filter(musico =>
    GeneralConstant.TipoMusicoConstant.INSTRUMENTO.some(instrumento => instrumento.nombre === musico.tipoMusico.instrumento)
  );

  onCheckboxChange(musico : Musico): void {
    musico.presente = !musico.presente;
    if(musico.presente){
      this.musicosPresentes.push(musico);
    } else {
      this.musicosPresentes = this.musicosPresentes.filter(musicoPresente => musicoPresente.nombre !== musico.nombre);
    }

    this.actualizarMusicosPresentes();
    console.log(this.canciones);
    console.log(this.musicosPresentes);

  }

  actualizarMusicosPresentes(): void {
    this.canciones.forEach(cancion => {
      cancion.musicos.forEach(musico => {
        musico.presente = this.musicosPresentes.includes(musico);
      });
    });
  }



  ngOnInit(): void {

  }

  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;




}
