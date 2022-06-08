import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaFumettoPageRoutingModule } from './crea-fumetto-routing.module';

import { CreaFumettoPage } from './crea-fumetto.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { UserComponentComponent } from 'src/app/components/user-component/user-component.component';
import { BottoneComponent } from 'src/app/components/bottone/bottone.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaFumettoPageRoutingModule,
    ReactiveFormsModule
  ],declarations: [CreaFumettoPage,MenuComponent,FooterComponent,UserComponentComponent,BottoneComponent]
})

export class CreaFumettoPageModule {}
