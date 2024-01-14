import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/Departamento.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentoForm!: FormGroup;

  titulo = 'Departamentos';

  public departamentoSelecionado: Departamento | null = null;

  public departamentos: Departamento[] = [
    { id: 1, nome: 'Inovação Tecnológica', sigla: 'IT' },
    { id: 2, nome: 'Recursos Humanos', sigla: 'RH' },
    { id: 3, nome: 'Financeiro', sigla: 'FIN' },
    { id: 4, nome: 'Marketing', sigla: 'MK' },
    { id: 5, nome: 'Desenvolvimento de Software', sigla: 'DEV' },
  ];

  constructor(private fb: FormBuilder) {
  this.criarForm();
  }

  ngOnInit() {}

  criarForm(){
    this.departamentoForm = this.fb.group({
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    }
    );
  }

  departamentoSelect(departamento: Departamento){
    this.departamentoSelecionado = departamento;
    this.departamentoForm.patchValue(departamento)
  }

  departamentoSubmit(){

  }

  voltar() {
    this.departamentoSelecionado = null;
  }


}
