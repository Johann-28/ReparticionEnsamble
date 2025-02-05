import { Component, inject, OnInit } from '@angular/core';
import { Cancion } from '../../models/canciones.interface';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatLabel } from '@angular/material/form-field';
import { CancionService } from '../../shared/cancion.service';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import { MusicoService } from '../../shared/musico.service';
import { Musico } from '../../models/musico.interface';
import { InstrumentoMusicos } from '../../models/instrumento-musicos';


@Component({
  selector: 'app-cancion-formulario',
  standalone: true,
  imports: [
    MatDialogModule,
    MatLabel,
    MatGridListModule
  ],
  templateUrl: './cancion-formulario.component.html',
  styleUrl: './cancion-formulario.component.scss'
})
export class CancionFormularioComponent implements OnInit {

  readonly data = inject(MAT_DIALOG_DATA);
  protected titulo : string = '';
  protected cancion : Cancion;
  protected instrumentosMusicos : InstrumentoMusicos[];


  constructor(private dialogRef: MatDialogRef<CancionFormularioComponent>,
              private cancionService: CancionService,
              private musicoService: MusicoService,

  ) {
    
  }

  ngOnInit(): void {
   this.consultarCancion(this.data.idCancion);
   this.consultarMusicos();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  consultarCancion(idCancion : number): void {
    this.cancionService.consultar(idCancion).subscribe(cancion => {
      this.cancion = cancion;
    });
  }

  consultarMusicos(): void {
    this.musicoService.agruparPorInstrumento().subscribe(data => {
      this.instrumentosMusicos = data;
    }
    );

  }

}
