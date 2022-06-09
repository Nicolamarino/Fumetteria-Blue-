import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreaFumettoCommand } from 'src/app/model/package/command/fumetto/crea-fumetto-command';
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
  listaFumetto:CreaFumettoCommand;
  mostra:boolean[]=[];
  constructor(private fb:FormBuilder, private service:ListaFumettiService, private zone:NgZone) {
    this.filterForm=this.fb.group ({
    "nome":[""],
    });
  this.fumetto= new CreaFumettoDto;
  this.listaFumetti= new ListaFumettiDto; 
  
  }
  modificaAutore(item:CreaFumettoDto){
    let index = this.listaFumetti.list.indexOf(item);
    this.mostra[index]=!this.mostra[index];
    return index
  }
  aggionraAutore(i:number,event:any, testo:string){
    if(testo=="nome"){
      this.listaFumetti.list[i].name=event.target.value;
    }
  }
  // confermaModifica(item:number){
  //   this.service.modificaListaFumetti(this.listaFumetti.list[item]).subscribe(resp =>{
  //     this.zone.runOutsideAngular(() => {
  //       window.location.href = '/lista-fumetti';
  //     });
  //    });
  //   }
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
