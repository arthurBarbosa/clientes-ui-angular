import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.css']
})
export class ClientesListagemComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.service.getClientes()
    .subscribe(response => this.clientes = response)
  }

  novoCadastro(){
    this.router.navigate(['clientes/form']);
  }
  
  prepareDelecao(cliente:Cliente){
    this.clienteSelecionado = cliente;
  }

  deletar(){
   this.service.deletar(this.clienteSelecionado)
   .subscribe(response => {
     this.mensagemSucesso = 'Cliente deletado com sucesso.',
     this.ngOnInit();
   },
   errorResponse => {
     this.mensagemErro = 'Ocorreu um erro ao tentar deletar um cliente.'
   })
  }

}
