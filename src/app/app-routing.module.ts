import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista-autore',
    loadChildren: () => import('./pages/lista-autore/lista-autore.module').then( m => m.ListaAutorePageModule)
  },
  {
    path: 'crea-autore',
    loadChildren: () => import('./pages/crea-autore/crea-autore.module').then( m => m.CreaAutorePageModule)
  },  {
    path: 'aggiorna-categorie',
    loadChildren: () => import('./pages/aggiorna-categorie/aggiorna-categorie.module').then( m => m.AggiornaCategoriePageModule)
  },
  {
    path: 'lista-categorie',
    loadChildren: () => import('./pages/lista-categorie/lista-categorie.module').then( m => m.ListaCategoriePageModule)
  },
  {
    path: 'crea-fumetto',
    loadChildren: () => import('./pages/fumetto/crea-fumetto/crea-fumetto.module').then( m => m.CreaFumettoPageModule)
  },
  {
    path: 'lista-fumetti',
    loadChildren: () => import('./pages/fumetto/lista-fumetti/lista-fumetti.module').then( m => m.ListaFumettiPageModule)
  },
  {
    path: 'crea-utente',
    loadChildren: () => import('./pages/utente/crea-utente/crea-utente.module').then( m => m.CreaUtentePageModule)
  },
  {
    path: 'lista-utenti',
    loadChildren: () => import('./pages/utente/lista-utenti/lista-utenti.module').then( m => m.ListaUtentiPageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
