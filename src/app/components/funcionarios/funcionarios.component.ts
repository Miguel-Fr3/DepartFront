import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario.models';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  titulo = 'Funcionarios';

  public funcionarios: Funcionario[] = [
    {   id: 1,
      nome: 'Miguel',
      foto: 'https://picsum.photos/100/100',
      rg: '987654321',
      departamentoId: 1
    },
    {
        id: 2,
        nome: 'Heloisa',
        foto: 'https://picsum.photos/100/100',
        rg: '123456789',
        departamentoId: 2
      },
      {
        id: 3,
        nome: 'Mariana',
        foto: 'https://picsum.photos/100/100',
        rg: '456789123',
        departamentoId: 3
      }
  ];

  constructor() {}

  ngOnInit() {}
}
