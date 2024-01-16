import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Departamento } from '../../models/Departamento.model';

@Injectable({
  providedIn: 'root'
})
export class departamentoService {



  apiUrl = 'http://localhost:5114/api/departamento';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }

  getById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.apiUrl}/${id}`);
  }

  getFuncionariosByDepartamentoId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/funcionarios`;
    return this.http.get(url)
  }


  post(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.apiUrl, departamento);
  }

  put(id: number, departamento: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.apiUrl}/${id}`, departamento);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
