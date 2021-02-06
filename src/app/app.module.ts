import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginboxComponent } from './loginbox/loginbox.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService} from '../app/services/book.service';
import { TabelalComponent } from './tabelal/tabelal.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { CadformComponent } from './cadform/cadform.component';
import { NovolivroComponent } from './novolivro/novolivro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginboxComponent,
    NavbarComponent,
    TabelalComponent,
    LayoutComponent,
    PerfilComponent,
    CadformComponent,
    NovolivroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
