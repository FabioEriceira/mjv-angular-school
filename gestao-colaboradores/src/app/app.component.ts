import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

tituloComponente = "Informações Colaborador";

colaborador = {
  id: 7,
  nome: 'Nathan Carlos Exercicio',
  salario: 4500,
  cargo: 'Dev Pl',
  imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
}

}
