import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';
import { ListaUtentiDTO } from 'src/app/model/package/DTO/utenti/lista-utenti-dto';
import { ListaUtentiService } from './lista-utenti.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.page.html',
  styleUrls: ['./lista-utenti.page.scss'],
})
export class ListaUtentiPage implements OnInit {

  filterform;
  utenti:UserDTO;
  listaUtenti:ListaUtentiDTO;
  mostra:boolean[]=[];

  constructor(private fb:FormBuilder, private service:ListaUtentiService,private zone:NgZone) { 
    this.filterform=this.fb.group ({
      "nome":[""],
      "cognome":[""],
      "email":[""]
      });
    this.utenti= new UserDTO;
    this.listaUtenti= new ListaUtentiDTO; 
    }
    modificaUtente(item:UserDTO){
      let index = this.listaUtenti.list.indexOf(item);
      this.mostra[index]=!this.mostra[index];
      return index
    }
    aggiornaUtente(i:number,event:any, testo:string){
      if(testo=="nome"){
        this.listaUtenti.list[i].name=event.target.value;
      }else if(testo=="cognome"){
        this.listaUtenti.list[i].surname=event.target.value;
      }else{
        this.listaUtenti.list[i].email=event.target.value;
      }
    }
    confermaModifica(item:number){
      console.log(this.listaUtenti)
      this.service.modificaListaUtenti(this.listaUtenti.list[item]).subscribe(resp =>{
        this.zone.runOutsideAngular(() => {
          window.location.href = '/lista-autore';
        });
       });
   }
    reset(){
      this.filterform.reset()
    }
    elimina(item:UserDTO){
      let index = this.listaUtenti.list.indexOf(item);
      this.listaUtenti.list.splice(index,1);
      this.service.eliminaListaUtenti(item.id).subscribe(resp =>{
        this.creaLista();})
    
     }
     creaLista(){
      this.service.creaListaUtenti().subscribe(resp =>{
        this.listaUtenti=resp;
      })
   }

  ngOnInit() {
    this.creaLista();
  }

}
