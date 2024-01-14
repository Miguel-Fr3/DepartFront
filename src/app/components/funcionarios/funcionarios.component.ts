import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent  implements OnInit{

  titulo = 'Funcionarios'

  public funcionarios = [
    {nome: ' Miguel '},
    {nome: ' Heloisa '},
    {nome: ' Mariana '},
    {nome: ' Lucas '},
    {nome: ' Tatiane '},
    {nome: ' Roberto '},
    {nome: ' Luis '},
    {nome: ' Pedro '},
    {nome: ' Paulo '},
    { nome: 'Gabriel' },
    { nome: 'Larissa' },
    { nome: 'Fernando' },
    { nome: 'Camila' },
    { nome: 'Vinícius' },
    { nome: 'Juliana' },
    { nome: 'Alexandre' },
    { nome: 'Mariana' },
    { nome: 'Renato' },
    { nome: 'Carolina' },
    { nome: 'Laura' },
    { nome: 'Guilherme' },
    { nome: 'Thais' },
    { nome: 'Rodrigo' },
    { nome: 'Amanda' },
    { nome: 'Diego' },
    { nome: 'Fernanda' },
    { nome: 'Bruno' },
    { nome: 'Patrícia' },
  ];




  constructor(){}

  ngOnInit(){

  }

}
