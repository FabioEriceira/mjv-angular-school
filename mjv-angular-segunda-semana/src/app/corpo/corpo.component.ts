import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent implements OnInit {

  nomeComponente: string = "Nome do componente é Corpo";

  constructor() { }

  ngOnInit(): void {
  }

}
