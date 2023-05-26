import Usuario from "./Usuario";
import { Tema } from "./Tema";

export interface Postagem {

   id: number,
   titulo: string,
   texto: string,
   data: string,
   tema?: Tema | null
   usuario?: Usuario | null
}