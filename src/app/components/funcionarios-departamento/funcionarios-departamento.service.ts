import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../../models/Funcionario.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosDepartamentoService {


  apiUrl = 'http://localhost:5114/api/funcionario'

  constructor(private http: HttpClient) { }


  getFuncionariosByDepartamentoId(departamentoId: number): Observable<Funcionario[]> {
    const url = `${this.apiUrl}/funcionarios/${departamentoId}`;
    return this.http.get<Funcionario[]>(url);
  }
}
