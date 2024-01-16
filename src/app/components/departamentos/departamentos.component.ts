import { Departamento } from './../../models/Departamento.model';
import { departamentoService } from './departamento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Funcionario } from '../../models/Funcionario.models';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public departamentoForm!: FormGroup;
  public titulo = 'Departamentos';
  public departamentoSelecionado: Departamento | null = null;
  public modo!: string;
  public departamentos!: Departamento[];
  departamentoId: number | undefined;

  constructor(private fb: FormBuilder, private modalService: BsModalService, private departamentoService: departamentoService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarDepartamentos();
  }

  carregarDepartamentos() {
    this.departamentoService.getAll().subscribe(
      (departamentos: Departamento[]) => {
        this.departamentos = departamentos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  criarForm() {
    this.departamentoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    });
  }

  departamentoSubmit() {
    this.salvarDepartamento(this.departamentoForm.value);
    this.departamentoSelecionado = null;
    this.departamentoForm.reset();
    this.mostrarFormularioCadastro = false;
  }

  salvarDepartamento(departamento: Departamento) {

    this.departamentoService.put(departamento.id, departamento).subscribe(
      (retorno: Departamento) => {
        console.log('Departamento salvo com sucesso:', retorno);
        this.carregarDepartamentos();
      },
      (erro: any) => {
        console.error('Erro ao salvar departamento:', erro);
      }
    );
  }
    openModal(template: TemplateRef<void>, departamentoId: number) {
      this.departamentoId = departamentoId;
      this.modalRef = this.modalService.show(template);
    }
  closeModal() {
    this.modalRef?.hide();
  }

  departamentoSelect(departamento: Departamento) {
    this.departamentoForm.patchValue(departamento);
    this.departamentoSelecionado = departamento;

  }

  public mostrarFormularioCadastro = false;

  departamentoNovo() {
    this.departamentoSelecionado = null;
    this.departamentoForm.reset();
    this.mostrarFormularioCadastro = true;
  }

  cadastrar() {
    if (this.departamentoForm.valid) {
      const dadosFormulario = this.departamentoForm.value;

      delete dadosFormulario.id;

      this.departamentoCadastro(dadosFormulario);
    }
  }

  departamentoCadastro(departamento: Departamento) {
    this.departamentoService.post(departamento).subscribe(
      (retorno: Departamento) => {
        console.log('Departamento salvo com sucesso:', retorno);
        this.carregarDepartamentos();
        this.mostrarFormularioCadastro = false;
      },
      (erro: any) => {
        console.error('Erro ao salvar departamento:', erro);
      }
    );
  }

  excluir(id: number){
    this.departamentoService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.carregarDepartamentos();
      },
      (erro: any)=>{
        console.error(erro)
      }
    )
  }

  voltar() {
    this.departamentoSelecionado = null;
    this.departamentoForm.reset();
    this.mostrarFormularioCadastro = false;
  }
}
