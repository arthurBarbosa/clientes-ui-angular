import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesFormComponent } from './clientes-form/clientes-form.component'
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';

const routes: Routes = [
  { path: 'clientes-form', component: ClientesFormComponent },
  { path: 'clientes-form/:id', component: ClientesFormComponent },
  { path: 'clientes', component: ClientesListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
