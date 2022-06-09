import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreaFumettoDto } from 'src/app/model/package/DTO/fumetto/crea-fumetto-dto';
import { CreaFumettoService } from './crea-fumetto-service';
import { ListaAutoriDTO } from 'src/app/model/package/DTO/lista-autori-dto';
import { ListaCategorieDTO } from 'src/app/model/package/DTO/lista-categorie-dto';
import { ListaAutoreService } from '../../lista-autore/lista-autore.service';
import { ListaCategorieService } from '../../lista-categorie/lista-categorie.service';
import { CreaAutoreDTO } from 'src/app/model/package/DTO/crea-autore-dto';

@Component({
  selector: 'app-crea-fumetto',
  templateUrl: './crea-fumetto.page.html',
  styleUrls: ['./crea-fumetto.page.scss'],
})
export class CreaFumettoPage implements OnInit {
  fumetto: CreaFumettoDto;
  name: string;
  description: string;
  type: string;
  author: string;
  category: string;
  photo: any;
  fumettoForm;
  listaAutori: ListaAutoriDTO;
  listaCategorie: ListaCategorieDTO;

  constructor(
    private creaFumettoService: CreaFumettoService,
    private fb: FormBuilder,
    private serviceAutori: ListaAutoreService,
    private serviceCategorie: ListaCategorieService
  ) {
    this.fumettoForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: [null, [Validators.required]],
      author: [null, [Validators.required]],
      category: [null, [Validators.required]],
    });

    this.listaAutori = new ListaAutoriDTO();
    this.listaCategorie = new ListaCategorieDTO();
  }
  creaListaAutori() {
    this.serviceAutori.creaListaAutori().subscribe((resp) => {
      this.listaAutori = resp;
    });
  }
  creaListaCategorie() {
    this.serviceCategorie.creaListaCategoria().subscribe((resp) => {
      this.listaCategorie = resp;
    });
  }

  aggiungiFumetto() {
    
    
    

    this.creaFumettoService
      .creaFumetti(
        this.fumettoForm.controls.name.value,
        this.fumettoForm.controls.description.value,
        this.fumettoForm.controls.type.value,
        +this.fumettoForm.controls.author.value,
        +this.fumettoForm.controls.category.value /*,this.fumettoForm.controls.photo.value*/
      )
      .subscribe((resp) => {
        const fumetto: CreaFumettoDto = resp;
      });
    this.fumettoForm.reset();


  }

  
  /* Non serve!
compareWithAutori(o1: ListaAutoriDTO, o2: ListaAutoriDTO | ListaAutoriDTO[]) {
  if (!o1 || !o2) {
    return o1 === o2;
  }

  if (Array.isArray(o2)) {
    return o2.some((u: ListaAutoriDTO) => u.list === o1.list);
  }

  return o1.list === o2.list;
}


compareWithCategorie(a1: ListaCategorieDTO, a2: ListaCategorieDTO | ListaCategorieDTO[]) {
  if (!a1 || !a2) {
    return a1 === a2;
  }

  if (Array.isArray(a2)) {
    return a2.some((u: ListaCategorieDTO) => u.list === a1.list);
  }

  return a1.list === a2.list;
}*/
  ngOnInit() {
    this.creaListaAutori();
    this.creaListaCategorie();
  }
}
