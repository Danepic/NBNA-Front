import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PrincipalComponent } from './principal/principal.component';
import { DownloadComponent } from './download/download.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { NewsComponent } from './news/news.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PrincipalComponent,
    DownloadComponent,
    CadastroComponent,
    PersonagensComponent,
    RecentNewsComponent,
    NewsComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
