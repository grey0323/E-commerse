import { Component, inject } from '@angular/core';
import { ProductStateServices } from '../../data-access/product-state.services';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { RouterLink } from '@angular/router';

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

}
