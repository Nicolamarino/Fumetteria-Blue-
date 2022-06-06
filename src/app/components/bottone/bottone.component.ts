import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.scss'],
})
export class BottoneComponent implements OnInit {
@Input()testo:string;

  constructor() { }

  ngOnInit() {}

}
