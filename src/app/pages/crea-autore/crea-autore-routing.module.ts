import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaAutorePage } from './crea-autore.page';

const routes: Routes = [
  {
    path: '',
    component: CreaAutorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaAutorePageRoutingModule {}
