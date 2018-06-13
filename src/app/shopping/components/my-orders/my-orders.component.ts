import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
//declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  order$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService) {
      this.order$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }

  // viewOrder(){
  //   $('#exampleModal').modal('toggle');
  // }
}