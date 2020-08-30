import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Servico } from './servico/servico';
import { ServicoPesquisa } from './servico/servico-listagem/servico-pesquisa';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  apiURL = environment.apiURLBase + '/api/servicos-prestados';

  constructor(
    private http: HttpClient
  ) { }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${this.apiURL}`, servico);
  }

  buscar(nome: string, mes: number): Observable<ServicoPesquisa[]>{

    const httpParams = new HttpParams()
    .set("nome", nome ? nome : '')
    .set("mes", mes ? mes.toString() : '');
    
    console.log("Nome servico " + nome)
    console.log("Mes " + mes)
    
    const url = this.apiURL + "?" + httpParams.toString();
    console.log(url)
    return this.http.get<any>(url);
  }
}
