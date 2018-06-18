import { ProductsService } from './../../products.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product ={};
  id;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productsService: ProductsService,
    private router:Router) {
      
      
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productsService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product){
    if(this.id) this.productsService.update(this.id, product);
    else this.productsService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('are you sure')) return;

      this.productsService.delete(this.id);
      this.router.navigate(['/admin/products']);


  }

  ngOnInit() {
  }

}
