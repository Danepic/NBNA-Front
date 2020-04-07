import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PrincipalComponent } from './principal/principal.component';
import { DownloadComponent } from './download/download.component';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { RodapeComponent } from './rodape/rodape.component';


const routes: Routes = [
  {path: 'cabecalho', component: CabecalhoComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'recent-news', component: RecentNewsComponent},
  {path: 'screenshots', component: ScreenshotsComponent},
  {path: 'rodape', component: RodapeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
