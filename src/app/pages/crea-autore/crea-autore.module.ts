import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaAutorePageRoutingModule } from './crea-autore-routing.module';

import { CreaAutorePage } from './crea-autore.page';
import { BottoneComponent } from 'src/app/components/bottone/bottone.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { UserComponentComponent } from 'src/app/components/user-component/user-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaAutorePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreaAutorePage,MenuComponent,FooterComponent,UserComponentComponent,BottoneComponent,]
})
export class CreaAutorePageModule {}
