import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../models/Funcionario.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  public funcionarioForm!: FormGroup;

  titulo = 'Funcionarios';

  public funcionarioSelecionado: Funcionario | null = null;

  public funcionarios: Funcionario[] = [
    {
      id: 1,
      nome: 'Miguel',
      foto: 'https://picsum.photos/100/100',
      rg: '987654321',
      departamentoId: 5
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
      departamentoId: 4
    },
    {
      id: 4,
      nome: 'Lucas',
      foto: 'https://picsum.photos/100/100',
      rg: '456237891',
      departamentoId: 3
    },
    {
      id: 5,
      nome: 'Luis',
      foto: 'https://picsum.photos/100/100',
      rg: '912345678',
      departamentoId: 1
    },
  ];

  funcionarioSelect(funcionario: Funcionario){
    this.funcionarioSelecionado = funcionario;
    this.funcionarioForm.patchValue(funcionario)
  }
  constructor(private fb: FormBuilder) {
    this.criarForm();
    }

    ngOnInit() {}

    criarForm(){
      this.funcionarioForm = this.fb.group({
        nome: ['', Validators.required],
        foto: ['', Validators.required],
        rg: ['', Validators.required],
        departamentoId: ['', Validators.required],
      }
      );
    }

    funcionarioSubmit(){

    }


  voltar() {
    this.funcionarioSelecionado = null;
  }
}
