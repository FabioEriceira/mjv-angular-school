import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  titulo: string  = "Produtos em:";
  exibe: boolean = true;
  dataHoje = new Date();
  telefone = "11988855959";

  exibeProduto = false;

    produtos: Array<Product> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private router: Router) { }

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

  detalhesProduto(idProduto: number){
    this.router.navigateByUrl(`product-details/${idProduto}`);
  }
}
  