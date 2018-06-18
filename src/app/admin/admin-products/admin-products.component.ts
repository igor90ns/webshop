import { ProductsService } from './../../products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: {title: string}[];
  filteredProducts: any[];
  subscription:Subscription;

  constructor(private productsService:ProductsService) {
    this.subscription = this.productsService.getAll()
      .subscribe(products => this.filteredProducts = this.products = products);
   }

   filter(query){
    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

   
   }

   

   ngOnDestroy(){
    this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
