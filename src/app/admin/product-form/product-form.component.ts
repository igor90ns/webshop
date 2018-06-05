import { ProductsService } from './../../products.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(
    private categoryService: CategoryService, 
    private productsService: ProductsService,
    private router:Router) {
      
      
    this.categories$ = categoryService.getCategories();
  }

  save(product){
    this.productsService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
