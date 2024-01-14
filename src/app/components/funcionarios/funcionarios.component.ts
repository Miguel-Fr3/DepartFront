import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionario.models';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  titulo = 'Funcionarios';

  public funcionarioSelecionado!: string;

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
        rg: '916782345',
        departamentoId: 3
      },
      {
        id: 3,
        nome: 'Lucas',
        foto: 'https://picsum.photos/100/100',
        rg: '456237891',
        departamentoId: 4
      },
      {
        id: 3,
        nome: 'Luis',
        foto: 'https://picsum.photos/100/100',
        rg: '912345678',
        departamentoId: 5
      },
  ];

  funcionarioSelect(Funcionario: any){
    this.funcionarioSelecionado = Funcionario.nome;
  }
  voltar() {
    this.funcionarioSelecionado = ''
  }

  constructor() {}

  ngOnInit() {}
}
