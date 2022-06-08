import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreaFumettoDto } from 'src/app/model/package/DTO/fumetto/crea-fumetto-dto';
import { CreaFumettoService } from './crea-fumetto-service';

@Component({
  selector: 'app-crea-fumetto',
  templateUrl: './crea-fumetto.page.html',
  styleUrls: ['./crea-fumetto.page.scss'],
})
export class CreaFumettoPage implements OnInit {
  fumetto:CreaFumettoDto;
  name:string;
  description:string;
  type:string;
  author:string;
  category:string;
  photo:any;
  fumettoForm;
  
  constructor(private creaFumettoService:CreaFumettoService, private fb:FormBuilder) { 
    this.fumettoForm=this.fb.group({
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    type:[''],
    author:[''],
    category:['']
  }
  );
}
aggiungiFumetto (){
   
  this.creaFumettoService.creaFumetti(this.fumettoForm.controls.name.value,this.fumettoForm.controls.description.value,this.fumettoForm.controls.type.value,this.fumettoForm.controls.author.value,this.fumettoForm.controls.category.value/*,this.fumettoForm.controls.photo.value*/).subscribe(
    resp=>{
     const fumetto:CreaFumettoDto=resp;
    }
  )
  this.fumettoForm.reset();
}
  ngOnInit() {
  }

}




 
  