import { Router } from '@angular/router';
import { Departamentos } from './../../models/Departamento.model';
import { departamentoService } from './departamento.service';
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
  public departamentoSelecionado: Departamentos | null = null;
  public modo!: string;
  public departamentos!: Departamentos[];
  public mostrarFormularioCadastro = false;
  departamentoId: number | undefined;

  constructor(private fb: FormBuilder, private modalService: BsModalService, private departamentoService: departamentoService, private router: Router ) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarDepartamentos();
  }

  criarForm() {
    this.departamentoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    });
  }

  openModal(template: TemplateRef<void>, departamentoId: number) {
    this.departamentoId = departamentoId;
    this.modalRef = this.modalService.show(template);
  }
  closeModal() {
  this.modalRef?.hide();
}


  carregarDepartamentos() {
    this.departamentoService.getAll().subscribe(
      (departamentos: Departamentos[]) => {
        this.departamentos = departamentos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }


  departamentoSubmit() {
    this.salvarDepartamento(this.departamentoForm.value);
    this.departamentoSelecionado = null;
    this.departamentoForm.reset();
    this.mostrarFormularioCadastro = false;
  }

  salvarDepartamento(departamento: Departamentos) {

    this.departamentoService.put(departamento.id, departamento).subscribe(
      (retorno: Departamentos) => {
        console.log('Departamento salvo com sucesso:', retorno);
        this.carregarDepartamentos();
      },
      (erro: any) => {
        console.error('Erro ao salvar departamento:', erro);
      }
    );
  }

  departamentoSelect(departamento: Departamentos) {
    this.departamentoForm.patchValue(departamento);
    this.departamentoSelecionado = departamento;

  }

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

  departamentoCadastro(departamento: Departamentos) {
    this.departamentoService.post(departamento).subscribe(
      (retorno: Departamentos) => {
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
  Editarfuncionarios() {
    this.router.navigate(['/funcionarios']);
    this.closeModal()
  }

  voltar() {
    this.departamentoSelecionado = null;
    this.departamentoForm.reset();
    this.mostrarFormularioCadastro = false;
  }
}
