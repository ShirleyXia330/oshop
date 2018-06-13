import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Order } from 'shared/models/order';

@Component({
  selector: 'order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent {
  order: Order;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.order = data;
  }
}
