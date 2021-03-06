import { ShoppingCartItem } from "./shopping-cart-item";
import { count } from "rxjs/operators";
import { Product } from "./product";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            // Object.assign(x, item);
            // x.$key = productId;
            this.items.push(new ShoppingCartItem({...item, $key: productId }));
        }
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.itemsMap)
            count += this.itemsMap[productId].quantity;
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;
        return sum;
    }

    // get productIds() {
    //     return Object.keys(this.itemsMap);
    // }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }
}