import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'shared/models/order';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  @Input('order') order: Order;

  // constructor(public dialog: MatDialog) {
  //   console.log("constructor: ", this.order);
  // }

  ngOnInit() {
    console.log("ngOnInit: ", this.order);
  }

  view() {

  }
}
