import { Component, effect, inject, Input, input } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { product } from '../../../interfaces/product';
import { productServices } from '../../data-access/products.services';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.scss'
})
export class ProductsDetailComponent {
  @Input() id:string =""
  private services = inject(productServices)
  product?:product


  constructor() {
    effect(()=>{
      this.services.getproductsById(this.id).subscribe({
        next:(x)=>{
          this.product = x
        }
      })
    })
  }

}
