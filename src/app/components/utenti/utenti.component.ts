import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss'],
})
export class UtentiComponent implements OnInit {
  @Input() id:number;
  @Input() nome: string;
  @Input() cognome: string;
  @Input() email: string;
  
  constructor() { }

  ngOnInit() {}

}
