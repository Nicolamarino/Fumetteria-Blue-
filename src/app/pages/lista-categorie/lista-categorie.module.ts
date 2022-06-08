import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaCategoriePageRoutingModule } from './lista-categorie-routing.module';
import { ListaCategoriePage } from './lista-categorie.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { UserComponentComponent } from 'src/app/components/user-component/user-component.component';
import { BottoneComponent } from 'src/app/components/bottone/bottone.component';
import { CategorieComponent } from 'src/app/components/categorie/categorie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCategoriePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListaCategoriePage,MenuComponent,FooterComponent,UserComponentComponent,BottoneComponent,CategorieComponent]
})
export class ListaCategoriePageModule {}
