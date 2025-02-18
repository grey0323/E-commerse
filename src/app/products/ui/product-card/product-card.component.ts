import { Component, input } from '@angular/core';
import { product } from '../../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  product = input.required<product>()


}
