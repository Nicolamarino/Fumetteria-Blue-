import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaFumettoDto } from 'src/app/model/package/DTO/fumetto/crea-fumetto-dto';
import { CreaFumettoCommand } from 'src/app/model/package/command/fumetto/crea-fumetto-command';

@Injectable({
  providedIn: 'root'
})
export class CreaFumettoService {

  constructor(private http: HttpClient) { }
  creaFumetti(nome: string, descrizione :string, tipo:string, autore:number, categoria:number/*,foto:any*/ ) {
   
    const fumetto=new CreaFumettoCommand ();
     fumetto.name = nome;
     fumetto.description = descrizione;
     fumetto.type = tipo;
     fumetto.idAuthor = autore;
     fumetto.idCategory = categoria;
     fumetto.photo = null;


   return this.http.post <CreaFumettoDto>("http://2.44.173.210:7080/comic-be/api/comic/create", fumetto);
 }
}
