
import { Funcionario } from "./Funcionario.models";

export class Departamento {

  constructor() {
    this.id = 0;
    this.nome = '';
    this.sigla = '';

  }
  id: number;
  nome: string;
  sigla: string;
  funcionarios?: Funcionario[];
}
