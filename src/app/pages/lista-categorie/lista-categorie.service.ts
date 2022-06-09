import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaCategoria } from 'src/app/model/package/command/crea-categoria';

@Injectable({
  providedIn: 'root'
})
export class ListaCategorieService {
  id:number;

  constructor(private http: HttpClient) { }

  creaListaCategoria() {
    return this.http.post("http://2.44.173.210:7080/comic-be/api/category/search", {});
  }
  eliminaListaCategoria(id:number) {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.delete("http://2.44.173.210:7080/comic-be/api/category/delete/"+id, {headers} );
  }
  modificaListaCategoria(categorie:CreaCategoria) {
   
    return this.http.put("http://2.44.173.210:7080/comic-be/api/author/update/",categorie);
  }
}
