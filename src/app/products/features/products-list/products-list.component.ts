import { Component, inject } from '@angular/core';
import { ProductStateServices } from '../../data-access/product-state.services';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { productServices } from '../../data-access/products.services';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  providers:[ProductStateServices]
})
export class ProductsListComponent {

  productsState = inject(ProductStateServices)
  prod = inject(productServices)
  param:number = 1

  Nextpage(){
    this.param = this.param + 1
    this.prod.getProducts(this.param).subscribe({
      next:(x)=>{
        this.productsState.state().products = x
      }
    })

  }

}
