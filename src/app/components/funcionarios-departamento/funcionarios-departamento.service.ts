import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionarios } from '../../models/Funcionario.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosDepartamentoService {


  apiUrl = 'http://localhost:5114/api'

  constructor(private http: HttpClient) { }


  getFuncionariosByDepartamentoId(departamentoId: number): Observable<Funcionarios[]> {
    const url = `${this.apiUrl}/Departamentos/${departamentoId}/Funcionarios`;
    return this.http.get<Funcionarios[]>(url);
  }
}
