import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FuncionariosDepartamentoComponent } from './components/funcionarios-departamento/funcionarios-departamento.component';
@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    FuncionariosComponent,
    HomeComponent,
    FuncionariosDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
