import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ViewProductComponent } from 'app/shopping/components/view-product/view-product.component';
import { Product } from 'shared/models/product';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;
  @Input('view-product') viewProduct = false;

  constructor(
    private cartService: ShoppingCartService, 
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog) {}

  // async ngOnInit() {
  //   await this.activatedRoute.params.take(1).subscribe(params => {
  //      this.id = params["id"];
  //     console.log("params: ",this.id);
  //   })
  //   if (this.id){
  //   }
  // }

  view() {
    this.dialog.open(ViewProductComponent, {data: this.product.$key});
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
