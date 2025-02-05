import { Musico } from "./musico.interface";

export interface Cancion {
    id: number;
    titulo: string;
    seleccionada: boolean;
    musicos: Musico[];
  }