
import { Funcionarios } from "./Funcionario.models";

export class Departamentos {

  constructor() {
    this.id = 0;
    this.nome = '';
    this.sigla = '';

  }
  id: number;
  nome: string;
  sigla: string;
  funcionarios?: Funcionarios[];
}
