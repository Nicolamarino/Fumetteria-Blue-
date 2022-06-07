import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaAutore } from 'src/app/model/package/command/crea-autore';

@Injectable({
  providedIn: 'root'
})
export class CreaAutoreService {

  constructor(private http: HttpClient) { }

creaAutori(nome: string, cognome :string) {
   
   const autore=new CreaAutore ();
    autore.name = nome;
    autore.surname = cognome;
  return this.http.post <any>("http://2.44.173.210:7080/comic-be/api/author/create", autore);
}
}