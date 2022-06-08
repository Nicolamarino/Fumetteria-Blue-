import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  utente: UserDTO = new UserDTO;  
  constructor(private id:ActivatedRoute, private home:HomeService) { 
  }
  ngOnInit(){
   this.home.mostraUtente(this.id).subscribe(resp =>{  
   this.utente = resp;
   console.log(this.utente);
   })
  }
}