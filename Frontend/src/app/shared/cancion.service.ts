import { Injectable } from '@angular/core';
import { canciones } from '../../assets/data';
import { Observable, of } from 'rxjs';
import { Cancion } from '../models/canciones.interface';


@Injectable({
  providedIn: 'root'
})
export class CancionService {

constructor() { }

  // Método para obtener todas las canciones
  consultarCanciones(): Observable<Cancion[]> {
    return of(canciones);
  }

  consultar(idCancion: number): Observable<Cancion> {
    const cancion = canciones.find(cancion => cancion.id === idCancion);
    if (!cancion) {
      throw new Error(`Cancion with id ${idCancion} not found`);
    }
    return of(cancion);
  }

}
