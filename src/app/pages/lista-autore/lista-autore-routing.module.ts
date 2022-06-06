import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAutorePage } from './lista-autore.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAutorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAutorePageRoutingModule {}
