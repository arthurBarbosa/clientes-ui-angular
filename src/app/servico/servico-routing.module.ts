import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';

const routes: Routes = [
  { path: 'servicos-form', component: ServicoFormComponent },
  { path: 'servicos', component: ServicoListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
