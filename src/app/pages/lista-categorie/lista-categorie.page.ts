import { Component, NgZone, OnInit } from '@angular/core';
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
  mostra:boolean[]=[];
  constructor(private fb:FormBuilder, private service:ListaCategorieService,private zone:NgZone) { 
    this.filterform=this.fb.group ({
      "nome":[""],
      "descrizione":[""]
      });
    this.categorie= new CategorieDTO;
    this.listaCategorie= new ListaCategorieDTO; 
    }
    modificaAutore(item:CategorieDTO){
      let index = this.listaCategorie.list.indexOf(item);
      this.mostra[index]=!this.mostra[index];
      return index
    }
    aggionraAutore(i:number,event:any, testo:string){
      if(testo=="nome"){
        this.listaCategorie.list[i].name=event.target.value;
      }else{
        this.listaCategorie.list[i].description=event.target.value;
      }
    }
    confermaModifica(item:number){
      console.log(this.listaCategorie)
      this.service.modificaListaCategoria(this.listaCategorie.list[item]).subscribe(resp =>{
        this.zone.runOutsideAngular(() => {
          window.location.href = '/lista-autore';
        });
       });
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
