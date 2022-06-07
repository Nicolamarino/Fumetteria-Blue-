import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AutoreDTO } from 'src/app/model/package/DTO/autore-dto';
import { ListaAutoriDTO } from 'src/app/model/package/DTO/lista-autori-dto';
import { ListaAutoreService } from './lista-autore.service';

@Component({
  selector: 'app-lista-autore',
  templateUrl: './lista-autore.page.html',
  styleUrls: ['./lista-autore.page.scss'],
})
export class ListaAutorePage implements OnInit {
filterform;
autore:AutoreDTO;
listaAutori:ListaAutoriDTO;
  constructor(private fb:FormBuilder, private service:ListaAutoreService) {
    this.filterform=this.fb.group ({
    "nome":[""],
    "cognome":[""]
    });
  this.autore= new AutoreDTO;
  this.listaAutori= new ListaAutoriDTO; 
  }

 reset(){
   this.filterform.reset()
 }
 elimina(item:AutoreDTO){
  let index = this.listaAutori.list.indexOf(item);
  this.listaAutori.list.splice(index,1);
  this.service.eliminaListaAutori(item.value).subscribe(resp =>{
    this.creaLista();})

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
