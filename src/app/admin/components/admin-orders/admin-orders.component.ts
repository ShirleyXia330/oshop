import { Component } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { MatDialog } from '@angular/material';
import { OrderModalComponent } from 'shared/components/order-modal/order-modal.component';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;

  constructor(private orderService: OrderService, private dialog: MatDialog) {
    this.dialog.closeAll();
    
    this.orders$ = this.orderService.getOrders();
  }

  view(order) {
    this.dialog.open(OrderModalComponent,{data: order});
  }
}
