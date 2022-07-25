import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo: string  = "Produtos em:";
  exibe: boolean = true;
  dataHoje = new Date();
  telefone = "11988855959";

  exibeProduto = false;

   produtos: Array<Product> = [
    {
      descricao: "Fone de Ouvido Sem Fio Philips SHB3175WT/00 com Bass+, Haste Dobrável - Branco",
      preco: 170.00,
      quantidade: 1,
      imagem: "https://imgs.casasbahia.com.br/55000409/1xg.jpg?imwidth=292",
      desconto: 0,
      disponivel: true
    },
    {
      descricao: "AirPods com Estojo de Recarga Apple",
      preco: 1270.00,
      quantidade: 0,
      imagem: "https://imgs.casasbahia.com.br/15083484/1xg.jpg?imwidth=292",
      desconto: 0.10,
      disponivel: true
    },
    {
      descricao: "Fone de Ouvido Bluetooth Multilaser PH247 Pop - Branco",
      preco: 89.00,
      quantidade: 1,
      imagem: "https://imgs.casasbahia.com.br/55009329/1xg.jpg?imwidth=292",
      desconto: 0.15,
      disponivel: true
    },
    {
      descricao: "Fones de ouvido Bluetooth JBL Tune 125TWS – Preto",
      preco: 500.00,
      quantidade: 0,
      imagem: "https://imgs.casasbahia.com.br/55015577/1xg.jpg?imwidth=292",
      desconto: 0,
      disponivel: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  exibeSimNao(){
    this.exibe = !this.exibe;
  }

  comprou(){
   alert("Produto comprado");
  }

  precoComDesconto(preco: number, desconto: number){
    return preco * (1-desconto)
  }
}
