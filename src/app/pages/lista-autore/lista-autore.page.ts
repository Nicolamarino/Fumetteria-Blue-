import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lista-autore',
  templateUrl: './lista-autore.page.html',
  styleUrls: ['./lista-autore.page.scss'],
})
export class ListaAutorePage implements OnInit {
filterform;

  constructor(private fb:FormBuilder) {
    this.filterform=this.fb.group ({
    "nome":[""],
    "cognome":[""]
    });
   }
 reset(){
   this.filterform.reset()
 }
  ngOnInit() {
  }

}
