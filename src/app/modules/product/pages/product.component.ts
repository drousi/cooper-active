import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../data/services/product.service';
import { Product } from '../../../data/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productListe: Product[];

  constructor(public prodServ: ProductService) {}

  ngOnInit(): void {
    this.prodServ.getProductList().subscribe((products) => {
      this.productListe=products;
    });
  }

  addProduct() {
    //this.prodServ.newProduct(new Product("kk","hh"));
  }
}
