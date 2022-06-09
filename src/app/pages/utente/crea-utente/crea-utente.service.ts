import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';


@Injectable({
  providedIn: 'root'
})
export class CreaUtenteService {

  constructor(private http: HttpClient) { }

creaUtenti(nome: string, cognome :string, email:string, password:string) {
   
   const utente=new UserDTO ();
    utente.name = nome;
    utente.surname = cognome;
    utente.email = email;
    utente.password = password;
    
  return this.http.post <UserDTO>("http://2.44.173.210:7080/comic-be/api/user/create", utente);
}
}