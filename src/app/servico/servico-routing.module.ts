import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
 { path: 'servicos', component: LayoutComponent, children: [
  { path: 'form', component: ServicoFormComponent },
  { path: 'lista', component: ServicoListagemComponent },
  { path: '', redirectTo: '/servicos/lista', pathMatch : 'full'}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
