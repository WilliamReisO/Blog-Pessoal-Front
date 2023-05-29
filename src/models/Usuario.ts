import { Postagem } from "./Postagem";

 interface Usuario{
    id:number; 
    foto:string;
    nome:string; 
    senha:string 
    usuario :string;
    postagem? : Postagem[]
}
export default Usuario;