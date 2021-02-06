import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { TabelalComponent } from './tabelal/tabelal.component';
import { LayoutComponent } from './layout/layout.component';
import { PerfilComponent} from './perfil/perfil.component';
import { CadformComponent} from './cadform/cadform.component';
import { NovolivroComponent } from './novolivro/novolivro.component';

const routes: Routes = [
  {path : '', component : LayoutComponent},  
  {path : 'livros', component: TabelalComponent},
  
  {path : 'perfil', component: PerfilComponent},
  {path : 'novoliv', component: NovolivroComponent},
  {path : 'cad', component: CadformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
