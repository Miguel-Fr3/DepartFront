import { Component, Input, OnInit } from '@angular/core';
import { Funcionarios } from '../../models/Funcionario.models';
import { FuncionariosDepartamentoService } from './funcionarios-departamento.service';

@Component({
  selector: 'app-funcionarios-departamento',
  templateUrl: './funcionarios-departamento.component.html',
  styleUrls: ['./funcionarios-departamento.component.css'],
})
export class FuncionariosDepartamentoComponent implements OnInit {
  @Input() departamentoId?: number;

  public funcionariosDoDepartamento: Funcionarios[] = [];

  constructor(private funcionariosDepartamentoService: FuncionariosDepartamentoService) {}

  ngOnInit() {
    this.carregarFuncionariosPorDepartamentoId(this.departamentoId);
  }

  carregarFuncionariosPorDepartamentoId(departamentoId: number | undefined) {
    if (departamentoId !== undefined && departamentoId !== null) {
      this.funcionariosDepartamentoService.getFuncionariosByDepartamentoId(departamentoId).subscribe(
        (funcionarios: Funcionarios[]) => {
          this.funcionariosDoDepartamento = funcionarios;
        },
        (erro: any) => {
          console.error(erro);
        }
      );
    }
  }
}
