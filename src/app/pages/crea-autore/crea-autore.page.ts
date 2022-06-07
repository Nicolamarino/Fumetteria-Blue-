import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreaAutoreDTO } from 'src/app/model/package/DTO/crea-autore-dto';

import { CreaAutoreService } from './crea-autore.service';

@Component({
  selector: 'app-crea-autore',
  templateUrl: './crea-autore.page.html',
  styleUrls: ['./crea-autore.page.scss'],
})
export class CreaAutorePage implements OnInit {
 autore:CreaAutoreDTO;
 name:string;
 surname:string;
 autoreForm;
 
  constructor(private creaAutoreService:CreaAutoreService, private fb:FormBuilder) { 
   
    this.autoreForm=this.fb.group({
    name:['',[Validators.required]],
    surname:['',[Validators.required]]
  }
  );
    }
 aggiungiAutore (){
   
   this.creaAutoreService.creaAutori(this.autoreForm.controls.name.value,this.autoreForm.controls.surname.value).subscribe(
     resp=>{
      const autore:CreaAutoreDTO=resp;
     }
   )
   this.autoreForm.reset();
 }
 
  ngOnInit() {
  }

}
