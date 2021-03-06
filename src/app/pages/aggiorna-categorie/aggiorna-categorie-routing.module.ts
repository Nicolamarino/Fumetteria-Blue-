import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiornaCategoriePage } from './aggiorna-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AggiornaCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiornaCategoriePageRoutingModule {}
