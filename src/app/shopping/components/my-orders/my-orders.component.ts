import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderModalComponent } from 'shared/components/order-modal/order-modal.component';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  order$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private dialog: MatDialog) {
      this.order$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }

  view(order) {
    this.dialog.open(OrderModalComponent,{data: order});
  }
}
