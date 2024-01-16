import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './../../models/Funcionario.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  public funcionarioForm!: FormGroup;

  titulo = 'Funcionários';

  public funcionarioSelecionado: Funcionario | null = null;

  public funcionarios!: Funcionario[]

  funcionarioSelect(funcionario: Funcionario ){
    this.funcionarioSelecionado = funcionario;
    this.funcionarioForm.patchValue(funcionario)
  }
  constructor(private fb: FormBuilder, private funcionarioService: FuncionarioService) {
    this.criarForm();
    }

    ngOnInit() {
      this.carregarFuncionarios();
    }

    carregarFuncionarios(){
      this.funcionarioService.getAll().subscribe(
        (funcionarios: Funcionario[]) => {
          this.funcionarios = funcionarios;
        },
        (erro: any) => {
          console.error(erro);
        }
      );
    }

    criarForm(){
      this.funcionarioForm = this.fb.group({
        id: [''],
        nome: ['', Validators.required],
        foto: ['', Validators.required],
        rg: ['', Validators.required],
        departamentoId: ['', Validators.required],
      }
      );
    }

    funcionarioSubmit(){
      this.salvarFuncionario(this.funcionarioForm.value);
    }




    salvarFuncionario(funcionario: Funcionario) {
    this.funcionarioService.put(funcionario.id, funcionario).subscribe(
      (retorno: Funcionario) => {
        console.log('Funcionario salvo com sucesso:', retorno);
        this.carregarFuncionarios();
      },
      (erro: any) => {
        console.error('Erro ao salvar departamento:', erro);
      }
    );
  }

  voltar() {
    this.funcionarioSelecionado = null;
  }
}
