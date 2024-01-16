import { Departamento } from './../../models/Departamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../../models/Funcionario.models';

@Injectable({
  providedIn: 'root'
})

export class departamentoService {
  private apiUrl = 'http://localhost:5114/api/departamento';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }

  getFuncionariosByDepartamentoId(departamentoId: number): Observable<Funcionario[]> {
    const url = `${this.apiUrl}/funcionarios/${departamentoId}`;
    return this.http.get<Funcionario[]>(url);
  }
  post(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.apiUrl, departamento);
  }

  put(id: number, departamento: Departamento): Observable<Departamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Departamento>(url, departamento);
  }


  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
