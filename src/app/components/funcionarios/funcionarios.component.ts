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
      this.funcionarioSelecionado = null;
      this.funcionarioForm.reset();
      this.mostrarFormularioCadastro = false;
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
  public mostrarFormularioCadastro = false;

  funcionarioNovo() {
    this.funcionarioSelecionado = null;
    this.funcionarioForm.reset();
    this.mostrarFormularioCadastro = true;
  }

  cadastrar() {
    if (this.funcionarioForm.valid) {
      const dadosFormulario = this.funcionarioForm.value;

      delete dadosFormulario.id;

      this.funcionarioCadastro(dadosFormulario);
    }
  }

  funcionarioCadastro(funcionario: Funcionario) {
    this.funcionarioService.post(funcionario).subscribe(
      (retorno: Funcionario) => {
        console.log('Funcionario salvo com sucesso:', retorno);
        this.carregarFuncionarios();
        this.mostrarFormularioCadastro = false;
      },
      (erro: any) => {
        console.error('Erro ao salvar funcionario:', erro);
      }
    );
  }

  voltar() {
    this.funcionarioSelecionado = null;
    this.funcionarioForm.reset();
    this.mostrarFormularioCadastro = false;
  }

}
