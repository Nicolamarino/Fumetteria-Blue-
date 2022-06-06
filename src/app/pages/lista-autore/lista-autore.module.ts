import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAutorePageRoutingModule } from './lista-autore-routing.module';

import { ListaAutorePage } from './lista-autore.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { UserComponentComponent } from 'src/app/components/user-component/user-component.component';
import { BottoneComponent } from 'src/app/components/bottone/bottone.component';
import { AutoreComponent } from 'src/app/components/autore/autore.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAutorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListaAutorePage,MenuComponent,FooterComponent,UserComponentComponent,BottoneComponent,AutoreComponent]
})
export class ListaAutorePageModule {}
