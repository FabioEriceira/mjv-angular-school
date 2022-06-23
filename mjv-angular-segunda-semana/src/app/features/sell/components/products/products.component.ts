import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de Produtos!";

  produto = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 1,
    imagem: "https://s03.video.glbimg.com/x720/8619970.jpg"
  };

  constructor() { }

  ngOnInit(): void {
  }

  precoComDesconto(preco: number){
    return preco * 0.90;
  }

  obterPrecoDesconto(){
    this.produto.preco = this.produto.preco * 0.90;
  }

  comprar(){
    alert("Produto comprado com sucesso!")
  }
  
  clicouTag(){
    alert("Clicou na tag")
  }

  passouMouse(){
    alert("Passou o mouse")
  }

  pressionouTecla(event: any){
    console.log(event.target.value);
  }
}
