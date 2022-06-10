import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreaFumettoDto } from 'src/app/model/package/DTO/fumetto/crea-fumetto-dto';
import { ListaFumettiDto } from 'src/app/model/package/DTO/fumetto/lista-fumetti-dto';
import { ListaFumettiService } from './lista-fumetti-service';

@Component({
  selector: 'app-lista-fumetti',
  templateUrl: './lista-fumetti.page.html',
  styleUrls: ['./lista-fumetti.page.scss'],
})
export class ListaFumettiPage implements OnInit {
  filterForm;
  fumetto:CreaFumettoDto;
  listaFumetti:ListaFumettiDto;

  constructor(private fb:FormBuilder, private service:ListaFumettiService) {
    this.filterForm=this.fb.group ({
    "nome":[""],
    });
  this.fumetto= new CreaFumettoDto;
  this.listaFumetti= new ListaFumettiDto; 
  }

 reset(){
   this.filterForm.reset()
 }
 elimina(item:CreaFumettoDto){
  let index = this.listaFumetti.list.indexOf(item);
  this.listaFumetti.list.splice(index,1);
  this.service.eliminaListaFumetti(item.id).subscribe(resp =>{
    this.creaLista();})

 }
 creaLista(){
    this.service.creaListaFumetti().subscribe(resp =>{
      this.listaFumetti=resp;
    })
 }

  ngOnInit() {
    this.creaLista();
  }

}