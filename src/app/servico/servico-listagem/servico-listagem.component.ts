import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/servico.service';
import { ServicoPesquisa } from './servico-pesquisa';

@Component({
  selector: 'app-servico-listagem',
  templateUrl: './servico-listagem.component.html',
  styleUrls: ['./servico-listagem.component.css']
})
export class ServicoListagemComponent implements OnInit {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPesquisa[] = [];
  message: string

  constructor(
    private servico: ServicoService
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
  }

  consultar() {
    this.servico.buscar(this.nome, this.mes)
      .subscribe(response => {
        this.lista = response;
        if (this.lista.length <= 0) {
          this.message = "Nenhum registro encontrado"
        } else {
          this.message = null;
        }
      })
  }

}
