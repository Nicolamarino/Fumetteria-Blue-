import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserInfoCommand} from 'src/app/model/package/command/user-info-command'
import { UserDTO } from 'src/app/model/package/DTO/user-dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {  
  constructor(private http:HttpClient) {}
  mostraUtente(url:ActivatedRoute){
    let utente: UserInfoCommand = new UserInfoCommand
    url.queryParams.subscribe(params => {
    utente.id = params['id'];
    } );

    return this.http.get<UserDTO>("http://2.44.173.210:7080/comic-be/api/user/get/"+utente.id);
  }
}