import { Departamento } from './../../models/Departamento.model';
import { DepartamentoService } from './departamento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  constructor(private fb: FormBuilder, private modalService: BsModalService, private DepartamentoService: DepartamentoService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarDepartamentos();
  }

  carregarDepartamentos() {
    this.DepartamentoService.getAll().subscribe(
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

      this.DepartamentoService.put(departamento.id, departamento).subscribe(
        (retorno: Departamento) => {
          console.log('Departamento salvo com sucesso:', retorno);
          this.carregarDepartamentos();
        },
        (erro: any) => {
          console.error('Erro ao salvar departamento:', erro);
        }
      );
    }


  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef?.hide();
  }

  departamentoSelect(departamento: Departamento) {
    this.departamentoSelecionado = departamento;
    this.departamentoForm.patchValue(departamento);
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
    this.DepartamentoService.post(departamento).subscribe(
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
    this.DepartamentoService.delete(id).subscribe(
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
