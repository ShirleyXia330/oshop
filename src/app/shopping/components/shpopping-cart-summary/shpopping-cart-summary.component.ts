import { Component, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'shpopping-cart-summary',
  templateUrl: './shpopping-cart-summary.component.html',
  styleUrls: ['./shpopping-cart-summary.component.css']
})
export class ShpoppingCartSummaryComponent {
  @Input('cart') cart: ShoppingCart;
  // constructor() { }
}
