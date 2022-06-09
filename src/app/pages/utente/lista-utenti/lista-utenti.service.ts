import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreaUtenti } from 'src/app/model/package/command/crea-utenti';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';


@Injectable({
  providedIn: 'root'
})
export class ListaUtentiService {
  id:number;

  constructor(private http: HttpClient) { }

  creaListaUtenti() {
    return this.http.post("http://2.44.173.210:7080/comic-be/api/user/search", {});
  }
  eliminaListaUtenti(id:number) {
    const headers = { 'Content-Type': 'application/json'};
    return this.http.delete("http://2.44.173.210:7080/comic-be/api/user/delete/"+id, {headers} );
  }
  modificaListaUtenti(utenti:UserDTO) {
   
    return this.http.put("http://2.44.173.210:7080/comic-be/api/user/update/",utenti);
  }
}
