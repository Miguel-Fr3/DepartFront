import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../../models/Funcionario.models';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl = 'http://localhost:5114/api/funcionario'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.baseUrl}/${id}`)
  }

  post(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.baseUrl}`, funcionario);
  }

  put(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.baseUrl}/${id}`, funcionario);
  }


  delete(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.baseUrl}/${id}`);
  }
}
