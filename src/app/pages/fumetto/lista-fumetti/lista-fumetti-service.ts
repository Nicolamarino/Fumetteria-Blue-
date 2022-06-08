import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaFumettiDto } from 'src/app/model/package/DTO/fumetto/lista-fumetti-dto';

@Injectable({
  providedIn: 'root'
})
export class ListaFumettiService {
  id:number;
  constructor(private http: HttpClient) { }
  creaListaFumetti() {
    return this.http.post<ListaFumettiDto>("http://2.44.173.210:7080/comic-be/api/comic/select", {});
  }
  eliminaListaFumetti(id:number) {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.delete("http://2.44.173.210:7080/comic-be/api/comic/delete/"+id, {headers} );
  }
  //modificaListaFumetti() {
  //  return this.http.put("http://2.44.173.210:7080/comic-be/api/comic/update/",{ viewValue });
  //}

}