import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaAutore } from 'src/app/model/package/command/crea-autore';


@Injectable({
  providedIn: 'root'
})
export class ListaAutoreService {
  id:number;
  constructor(private http: HttpClient) { }
  creaListaAutori() {
    return this.http.post("http://2.44.173.210:7080/comic-be/api/author/search", {});
  }


  eliminaListaAutori(id:number) {
    
    return this.http.delete("http://2.44.173.210:7080/comic-be/api/author/delete/"+id);
  }
  modificaListaAutori(autore:CreaAutore) {
   
    return this.http.put("http://2.44.173.210:7080/comic-be/api/author/update/",autore);
  }
}
