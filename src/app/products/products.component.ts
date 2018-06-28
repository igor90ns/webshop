import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;

  constructor(productService: ProductsService,  route:ActivatedRoute) { 
    productService
    .getAll()
    .switchMap(products => {
      this.products = products;
      return route.queryParamMap;
    })


      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : 
          this.products;
      });

   
    


   
  }

 

}
