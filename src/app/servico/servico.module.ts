import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicoRoutingModule } from './servico-routing.module';
import { ServicoFormComponent } from './servico-form/servico-form.component';
import { ServicoListagemComponent } from './servico-listagem/servico-listagem.component';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';


@NgModule({
  declarations: [ServicoFormComponent, ServicoListagemComponent],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormsModule,
    RouterModule
  ], 
  exports: [ServicoFormComponent, ServicoListagemComponent]
})
export class ServicoModule { }
