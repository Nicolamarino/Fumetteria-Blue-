import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaFumettiPageRoutingModule } from './lista-fumetti-routing.module';
import { ListaFumettiPage } from './lista-fumetti.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { UserComponentComponent } from 'src/app/components/user-component/user-component.component';
import { BottoneComponent } from 'src/app/components/bottone/bottone.component';
import { FumettoComponent } from 'src/app/components/fumetto/fumetto.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFumettiPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaFumettiPage,MenuComponent,FooterComponent,UserComponentComponent,BottoneComponent,FumettoComponent]
})
export class ListaFumettiPageModule {}
