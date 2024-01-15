import { Component, OnInit, TemplateRef } from '@angular/core';
import { Departamento } from '../../models/Departamento.model';
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
  public departamentos: Departamento[] = [
    { id: 1, nome: 'Inovação Tecnológica', sigla: 'IT' },
    { id: 2, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 3, nome: 'Financeiro', sigla: 'FIN' },
    { id: 4, nome: 'Marketing', sigla: 'MK' },
    { id: 5, nome: 'Desenvolvimento de Software', sigla: 'DEV' },
  ];

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
  }

  ngOnInit() {}

  criarForm() {
    this.departamentoForm = this.fb.group({
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    });
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

  departamentoSubmit() {
    if (this.departamentoForm.valid) {
      console.log('Formulário válido:', this.departamentoForm.value);
      this.closeModal();
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }

  voltar() {
    this.departamentoSelecionado = null;
  }
}
