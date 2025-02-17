import { Component, inject } from '@angular/core';
import { ProductStateServices } from '../../data-access/product-state.services';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ProductsDetailComponent } from "../products-detail/products-detail.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, ProductsDetailComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  providers:[ProductStateServices]
})
export class ProductsListComponent {

  productsState = inject(ProductStateServices)

}
