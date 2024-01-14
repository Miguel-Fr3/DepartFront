import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    FuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
