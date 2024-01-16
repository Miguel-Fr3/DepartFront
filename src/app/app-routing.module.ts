import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionariosDepartamentoComponent } from './components/funcionarios-departamento/funcionarios-departamento.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'funcionarios', component: FuncionariosComponent},
  {path: 'funcionario-departamento', component: FuncionariosDepartamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
