import { Funcionario } from "./Funcionario.models";

export interface Departamento {
  id: number;
  nome: string;
  sigla: string;
  funcionarios?: Funcionario[];
}
