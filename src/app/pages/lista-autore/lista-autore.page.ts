import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreaAutoreDTO } from 'src/app/model/package/DTO/crea-autore-dto';
import { ListaAutoriDTO } from 'src/app/model/package/DTO/lista-autori-dto';
import { ListaAutoreService } from './lista-autore.service';

@Component({
  selector: 'app-lista-autore',
  templateUrl: './lista-autore.page.html',
  styleUrls: ['./lista-autore.page.scss'],
})
export class ListaAutorePage implements OnInit {
filterform;
autore:CreaAutoreDTO;
listaAutori:ListaAutoriDTO;
mostra:boolean[]=[];
  constructor(private fb:FormBuilder, private service:ListaAutoreService, private zone:NgZone) {
    this.filterform=this.fb.group ({
    "nome":[""],
    "cognome":[""]
    });
  this.autore= new CreaAutoreDTO;
  this.listaAutori= new ListaAutoriDTO; 
  }
  modificaAutore(item:CreaAutoreDTO){
    let index = this.listaAutori.list.indexOf(item);
    this.mostra[index]=!this.mostra[index];
    return index
  }
  aggionraAutore(i:number,event:any, testo:string){
    if(testo=="nome"){
      this.listaAutori.list[i].name=event.target.value;
    }else{
      this.listaAutori.list[i].surname=event.target.value;
    }
  }
  confermaModifica(item:number){
    console.log(this.listaAutori)
    this.service.modificaListaAutori(this.listaAutori.list[item]).subscribe(resp =>{
      this.zone.runOutsideAngular(() => {
        window.location.href = '/lista-autore';
      });
     });
     
  }  
 reset(){
   this.filterform.reset()
 }
 elimina(item:CreaAutoreDTO){
  let index = this.listaAutori.list.indexOf(item);
  this.listaAutori.list.splice(index,1);
  this.service.eliminaListaAutori(item.id).subscribe(resp =>{
    this.creaLista();
  ;})

 }
 creaLista(){
    this.service.creaListaAutori().subscribe(resp =>{
      this.listaAutori=resp;
    })
 }
  ngOnInit() {
    this.creaLista();
  }

}
