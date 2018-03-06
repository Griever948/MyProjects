import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FascicoloComponent } from './fascicolo/fascicolo.component';
import { DocumentoComponent } from './documento/documento.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: 'root', component: FascicoloComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: ':id', component: FascicoloComponent },
  { path: 'detail/:id', component: DocumentoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
