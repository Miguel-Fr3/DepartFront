import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from '../../models/Funcionario.models';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  apiUrl = 'http://localhost:5114/api/Funcionarios'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionarios[]>{
    return this.http.get<Funcionarios[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<Funcionarios>{
    return this.http.get<Funcionarios>(`${this.apiUrl}/${id}`)
  }

  post(funcionario: Funcionarios): Observable<Funcionarios> {
    return this.http.post<Funcionarios>(`${this.apiUrl}`, funcionario);
  }

  put(id: number, funcionario: Funcionarios): Observable<Funcionarios> {
    return this.http.put<Funcionarios>(`${this.apiUrl}/${id}`, funcionario);
  }


  delete(id: number): Observable<Funcionarios> {
    return this.http.delete<Funcionarios>(`${this.apiUrl}/${id}`);
  }
}
