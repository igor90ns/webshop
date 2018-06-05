import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;

  constructor(private productsService:ProductsService) {
    this.products$ = this.productsService.getAll();
   }

  ngOnInit() {
  }

}
