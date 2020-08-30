import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ServicoListagemComponent } from '../servico-listagem/servico-listagem.component';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  clientes: Cliente[];
  servico: Servico = new Servico();

  constructor(
    private service: ClientesService
  ) { }

  ngOnInit(): void {
    this.service.getClientes()
    .subscribe( 
      response => this.clientes = response)
  }

  onSubmit(){
    console.log(this.servico)
  }

}
