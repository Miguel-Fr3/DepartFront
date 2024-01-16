import { TestBed } from '@angular/core/testing';

import { FuncionariosDepartamentoService } from './funcionarios-departamento.service';

describe('FuncionariosDepartamentoService', () => {
  let service: FuncionariosDepartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionariosDepartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
