import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaCategoria } from 'src/app/model/package/command/crea-categoria';

@Injectable({
  providedIn: 'root'
})
export class AggiornaCategorieService {

  constructor(private http: HttpClient) { }
  creaCategoria(nome: string, descrizione :string) {
   
    const categoria=new CreaCategoria ();
     categoria.name = nome;
     categoria.description = descrizione;
   return this.http.post <any>("http://2.44.173.210:7080/comic-be/api/category/create", categoria);
 }
}
