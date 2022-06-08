import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategorieDTO } from 'src/app/model/package/DTO/categorie-dto';
import { AggiornaCategorieService } from './aggiorna-categorie.service';

@Component({
  selector: 'app-aggiorna-categorie',
  templateUrl: './aggiorna-categorie.page.html',
  styleUrls: ['./aggiorna-categorie.page.scss'],
})
export class AggiornaCategoriePage implements OnInit {
  categoria:CategorieDTO;
  name:string;
  description: string;
  categorieForm;

  constructor(private aggiornaCategoria:AggiornaCategorieService, private fb:FormBuilder) { 
    this.categorieForm=this.fb.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]]
    }
    );
  }
  aggiungiCategoria (){
   
    this.aggiornaCategoria.creaCategoria(this.categorieForm.controls.name.value,this.categorieForm.controls.description.value).subscribe(
      resp=>{
       const categoria:CategorieDTO=resp;
      }
    )
    this.categorieForm.reset();
  }

  ngOnInit() {
  }

}
