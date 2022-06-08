import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaFumettoCommand } from 'src/app/model/package/command/fumetto/crea-fumetto-command';

@Injectable({
  providedIn: 'root'
})
export class CreaFumettoService {

  constructor(private http: HttpClient) { }
  creaFumetti(nome: string, descrizione :string, tipo:string, autore:string, categoria:string/*,foto:any*/ ) {
   
    const fumetto=new CreaFumettoCommand ();
     fumetto.name = nome;
     fumetto.description = descrizione;
     fumetto.type = tipo;
     fumetto.author = autore;
     fumetto.category = categoria;
     //fumetto.photo = foto;


   return this.http.post <any>("http://2.44.173.210:7080/comic-be/api/author/create", fumetto);
 }
}
