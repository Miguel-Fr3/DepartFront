import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Departamentos } from '../../models/Departamento.model';

@Injectable({
  providedIn: 'root'
})
export class departamentoService {



  apiUrl = 'http://localhost:5114/api/Departamentos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Departamentos[]> {
    return this.http.get<Departamentos[]>(this.apiUrl);
  }

  getById(id: number): Observable<Departamentos> {
    return this.http.get<Departamentos>(`${this.apiUrl}/${id}`);
  }

  getFuncionariosByDepartamentoId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/funcionarios`;
    return this.http.get(url)
  }


  post(departamento: Departamentos): Observable<Departamentos> {
    return this.http.post<Departamentos>(this.apiUrl, departamento);
  }

  put(id: number, departamento: Departamentos): Observable<Departamentos> {
    return this.http.put<Departamentos>(`${this.apiUrl}/${id}`, departamento);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
