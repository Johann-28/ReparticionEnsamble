import { TipoMusico } from "./tipo-musico.interface";

export interface Musico {
    id: number;
    nombre: string;
    tipoMusico : TipoMusico;
    presente? : boolean;
  }