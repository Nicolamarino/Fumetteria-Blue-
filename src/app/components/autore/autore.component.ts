import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.scss'],
})
export class AutoreComponent implements OnInit {
  @Input() nome: string;
  @Input() cognome: string;
  @Input() nomeCompleto: string;
  constructor() { }

  ngOnInit() {
    const separato = this.nomeCompleto.split(" ");
    this.nome = separato[0];
    this.cognome = separato[1];

    let parole = 0;
    let index = 0;
    while (index < separato.length && parole < 2) {
      let elementoCorrente = separato[index];
      if (elementoCorrente != '') {
        switch (parole) {
          case 0:
            this.nome = elementoCorrente;
            parole++
            break;
          case 1:
            this.cognome = elementoCorrente;
            parole++
            break;
        }
      }
      index++
    }
  }

}
