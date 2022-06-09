import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaUtentePageRoutingModule } from './crea-utente-routing.module';

import { CreaUtentePage } from './crea-utente.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { UserComponentComponent } from 'src/app/components/user-component/user-component.component';
import { BottoneComponent } from 'src/app/components/bottone/bottone.component';
import { UtentiComponent } from 'src/app/components/utenti/utenti.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaUtentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreaUtentePage,MenuComponent,FooterComponent,UserComponentComponent,BottoneComponent,UtentiComponent]
})
export class CreaUtentePageModule {}
