import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategorieDTO } from 'src/app/model/package/DTO/categorie-dto';
import { ListaCategorieDTO } from 'src/app/model/package/DTO/lista-categorie-dto';
import { ListaCategorieService } from './lista-categorie.service';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.page.html',
  styleUrls: ['./lista-categorie.page.scss'],
})
export class ListaCategoriePage implements OnInit {

  filterform;
  categorie:CategorieDTO
  listaCategorie:ListaCategorieDTO;
  
  constructor(private fb:FormBuilder, private service:ListaCategorieService) { 
    this.filterform=this.fb.group ({
      "nome":[""],
      "descrizione":[""]
      });
    this.categorie= new CategorieDTO;
    this.listaCategorie= new ListaCategorieDTO; 
    }
    reset(){
      this.filterform.reset()
    }
    elimina(item:CategorieDTO){
      let index = this.listaCategorie.list.indexOf(item);
      this.listaCategorie.list.splice(index,1);
      this.service.eliminaListaCategoria(item.id).subscribe(resp =>{
        this.creaLista();})
    
     }
     creaLista(){
      this.service.creaListaCategoria().subscribe(resp =>{
        this.listaCategorie=resp;
      })
   }

  ngOnInit() {
    this.creaLista();
  }

}
