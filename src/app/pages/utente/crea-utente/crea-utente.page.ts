import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { CreaUtenteService } from './crea-utente.service';

@Component({
  selector: 'app-crea-utente',
  templateUrl: './crea-utente.page.html',
  styleUrls: ['./crea-utente.page.scss'],
})
export class CreaUtentePage implements OnInit {
 utente:UserDTO;
 name:string;
 surname:string;
 email:string;
 password:string;
 utenteForm;
 
  constructor(private creaUtenteService:CreaUtenteService, private fb:FormBuilder) { 
   
    this.utenteForm=this.fb.group({
    name:['',[Validators.required]],
    surname:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  }
  );
    }
 aggiungiUtente (){
   
   this.creaUtenteService.creaUtenti(this.utenteForm.controls.name.value,this.utenteForm.controls.surname.value,this.utenteForm.controls.email.value,this.utenteForm.controls.password.value).subscribe(
     resp=>{
      const utente:UserDTO=resp;
     }
   )
   this.utenteForm.reset();
 }
 
  ngOnInit() {
  }

}
