import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Servico } from './servico/servico';
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
}
