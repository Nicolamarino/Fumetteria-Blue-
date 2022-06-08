import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent implements OnInit {
  @Input() id:number;
  @Input() nome: string;
  @Input() descrizione: string;
  constructor() { }

  ngOnInit() {}

}
