import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaAutoreService {
id:number;
  constructor(private http: HttpClient) { }
  creaListaAutori() {
    return this.http.post("http://2.44.173.210:7080/comic-be/api/author/select", {});
  }
 // eliminaListaAutori() {
 //   return this.http.delete("http://2.44.173.210:7080/comic-be/api/author/delete/"+this.id );
 // }
 // modificaListaAutori() {
 //   return this.http.put("http://2.44.173.210:7080/comic-be/api/author/update/",{ viewValue });
 // }
}
