
import {ChangeDetectionStrategy, Component,  OnInit} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Musico } from '../models/musico.interface';
import { Cancion } from '../models/canciones.interface';
import {MatRippleModule} from '@angular/material/core';
import { canciones as cancionesData, musicos } from '../../assets/data'; 
import { GeneralConstant } from '../../assets/general-constants';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canciones',
  standalone: true,
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.scss',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatRippleModule,
            MatGridListModule, MatCheckboxModule, FormsModule, ReactiveFormsModule,
            CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancionesComponent implements OnInit {

  private musicosPresentes: number[] = [];
  protected canciones: Cancion[] = cancionesData;
  protected voces : Musico [] = musicos.filter(musico => musico.tipoMusico.instrumento === GeneralConstant.TipoMusicoConstant.VOZ);
  protected instrumentos : Musico[] = musicos.filter(musico => musico.tipoMusico.instrumento !== GeneralConstant.TipoMusicoConstant.VOZ);

  onCheckboxChange(musico : Musico): void {
    if (musico.presente) {
        this.musicosPresentes.push(musico.id);
    } else {
        const index = this.musicosPresentes.indexOf(musico.id);
        if (index > -1) {
            this.musicosPresentes.splice(index, 1);
        }
    }
    this.actualizarMusicosPresentes();
    this.ordenarCancionesPorMusicosPresentes();
    
  }

  ordenarCancionesPorMusicosPresentes(): void {
    this.canciones.sort((a, b) => {
      const aPresenteCount = a.musicos.filter(musico => musico.presente).length;
      const bPresenteCount = b.musicos.filter(musico => musico.presente).length;
  
      return bPresenteCount - aPresenteCount;
    });
  }
  

  actualizarMusicosPresentes(): void {
    this.canciones.forEach(cancion => {
      cancion.musicos.forEach(musico => {
        musico.presente = this.musicosPresentes.includes(musico.id);
      });
    });
  }

  ngOnInit(): void {

  }

}
