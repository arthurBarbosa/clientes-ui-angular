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
    this.router.navigate(['clientes-form']);
  }
  

}
