import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clienti } from './component/clienti/clienti';
import { Fatture } from './component/fatture/fatture';
import { Ordini } from './component/ordini/ordini';
import { Servizi } from './component/servizi/servizi';

const routes: Routes = [
  { path: '', redirectTo: '/clienti', pathMatch: 'full' },
  { path: 'clienti', component: Clienti },
  { path: 'servizi', component: Servizi },
  { path: 'ordini', component: Ordini },
  { path: 'fatture', component: Fatture },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
