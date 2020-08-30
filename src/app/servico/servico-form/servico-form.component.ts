import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ServicoListagemComponent } from '../servico-listagem/servico-listagem.component';
import { Servico } from '../servico';
import { ServicoService } from 'src/app/servico.service';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent implements OnInit {

  clientes: Cliente[];
  servico: Servico = new Servico();
  success: boolean = false;
  errors: string[];

  constructor(
    private service: ClientesService,
    private servicoService: ServicoService
  ) { }

  ngOnInit(): void {
    this.service.getClientes()
      .subscribe(
        response => this.clientes = response)
  }

  onSubmit() {
    this.servicoService.salvar(this.servico)
      .subscribe(
        response => {
          this.success = true,
            this.errors = null;
            this.servico = new Servico();
        },
        errorResponse => {
          this.success = false,
            this.errors = errorResponse.error.errors

        }
      )
    
  }

}
