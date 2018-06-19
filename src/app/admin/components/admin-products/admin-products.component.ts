import { Component, OnDestroy } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'shared/models/product';
import { DataTableResource } from 'angular5-data-table';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  private initializeTable(products: Product[]){
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset:0}).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  constructor(private productService: ProductService,private dialogRef: MatDialog) {
    this.dialogRef.closeAll();

    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

    this.initializeTable(filteredProducts);
  }

  reloadItems(params){
    if (!this.tableResource) return;

    this.tableResource.query(params).then(items => this.items = items);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
