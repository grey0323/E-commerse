import { Component, input } from '@angular/core';
import { product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  product = input.required<product>()


}
