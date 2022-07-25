import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  tituloComponente = "Colaborador";

  constructor() { }

  ngOnInit(): void {
  }

  colaborador = {
  id: 7,
  nome: 'Nathan Carlos',
  salario: 4500,
  cargo: 'Dev Pl',
  imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
}


}
