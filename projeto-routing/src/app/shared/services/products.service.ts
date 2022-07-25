import { Injectable } from '@angular/core';
import { Product } from 'src/app/features/home/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    {
      id:1,
      descricao: "Fone de Ouvido Sem Fio Philips SHB3175WT/00 com Bass+, Haste Dobrável - Branco",
      preco: 170.00,
      quantidade: 1,
      imagem: "https://imgs.casasbahia.com.br/55000409/1xg.jpg?imwidth=292",
      desconto: 0,
      disponivel: true
    },
    {
      id:2,
      descricao: "AirPods com Estojo de Recarga Apple",
      preco: 1270.00,
      quantidade: 0,
      imagem: "https://imgs.casasbahia.com.br/15083484/1xg.jpg?imwidth=292",
      desconto: 0.10,
      disponivel: true
    },
    {
      id:3,
      descricao: "Fone de Ouvido Bluetooth Multilaser PH247 Pop - Branco",
      preco: 89.00,
      quantidade: 1,
      imagem: "https://imgs.casasbahia.com.br/55009329/1xg.jpg?imwidth=292",
      desconto: 0.15,
      disponivel: true
    },
    {
      id:4,
      descricao: "Fones de ouvido Bluetooth JBL Tune 125TWS – Preto",
      preco: 500.00,
      quantidade: 0,
      imagem: "https://imgs.casasbahia.com.br/55015577/1xg.jpg?imwidth=292",
      desconto: 0,
      disponivel: false
    }
  ];

  constructor() { }

  getProducts(){
    return this.products;
  }

  getbyId(id: number){
    return this.products.find((product) => product.id === id);
  }
    
}
