import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export class DepartamentosComponent implements OnInit{

  titulo = 'Departamentos'

  public departamentos = [
    { nome: 'Inovação Tecnológica' },
    { nome: 'Recursos Humanos' },
    { nome: 'Financeiro' },
    { nome: 'Marketing' },
    { nome: 'Desenvolvimento de Software' },
  ];


  constructor(){}

  ngOnInit(){

  }

}
