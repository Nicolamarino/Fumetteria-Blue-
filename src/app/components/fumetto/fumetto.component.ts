import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fumetto',
  templateUrl: './fumetto.component.html',
  styleUrls: ['./fumetto.component.scss'],
})
export class FumettoComponent implements OnInit {
@Input() nome:string;
@Input() descrizione:string;
@Input() tipo:string;
@Input() autore:string;
@Input() categoria:string;
@Input() id:number;

  constructor() { }

  ngOnInit() {}

}
