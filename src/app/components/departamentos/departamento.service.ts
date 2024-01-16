import { Departamento } from './../../models/Departamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  baseUrl = 'http://localhost:5114/api/departamento';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.baseUrl);
  }

  getById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.baseUrl}/${id}`);
  }

  post(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.baseUrl, departamento);
  }

  put(id: number, departamento: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.baseUrl}/${id}`, departamento);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
