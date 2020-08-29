import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListagemComponent } from './clientes-listagem/clientes-listagem.component';


@NgModule({
  declarations: [ClientesFormComponent, ClientesListagemComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ], exports: [ClientesListagemComponent]
})
export class ClientesModule { }
