import { Injectable } from '@angular/core';
import { musicos } from '../../assets/data';
import { Observable, of } from 'rxjs';
import { Musico } from '../models/musico.interface';
import { InstrumentoMusicos } from '../models/instrumento-musicos';


@Injectable({
  providedIn: 'root'
})
export class MusicoService {

constructor() { }

  // Método para obtener todos los musicos
  consultarMusicos() : Observable<Musico[]> {
    return of(musicos);
  }

  consultarMusico(idMusico: number) {
    const musico = musicos.find(musico => musico.id === idMusico);
    if (!musico) {
      throw new Error(`Musico with id ${idMusico} not found`);
    }
    return musico;
  }

  // Método para agrupar músicos por instrumento
  agruparPorInstrumento(): Observable<InstrumentoMusicos[]> {
    const agrupados: { [key: string]: Musico[] } = {};

    musicos.forEach(musico => {
      const instrumento = musico.tipoMusico.instrumento;
      if (!agrupados[instrumento]) {
        agrupados[instrumento] = [];
      }
      agrupados[instrumento].push(musico);
    });

    const resultado: InstrumentoMusicos[] = Object.keys(agrupados).map(instrumento => ({
      instrumento,
      musicos: agrupados[instrumento]
    }));

    return of(resultado);
  }



}
