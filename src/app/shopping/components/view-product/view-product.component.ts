import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  id: string;
  product: Product;
  cart$: Observable<ShoppingCart>;
  appUser: AppUser;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.productService.get(this.id).take(1).subscribe(product => this.product = product);

    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
