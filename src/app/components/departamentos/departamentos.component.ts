import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamento.model';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  titulo = 'Departamentos';

  public departamentos: Departamento[] = [
    { id: 1, nome: 'Inovação Tecnológica', sigla: 'IT' },
    { id: 2, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 3, nome: 'Financeiro', sigla: 'FIN' },
    { id: 4, nome: 'Marketing', sigla: 'MK' },
    { id: 5, nome: 'Desenvolvimento de Software', sigla: 'DEV' },
  ];

  constructor() {}

  ngOnInit() {}
}
