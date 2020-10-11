import { Component, OnInit } from '@angular/core';
import { totalmem } from 'os';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<any>;
  
  constructor() { }

  ngOnInit() {
    this.orders = JSON.parse(localStorage.getItem('orders'));
  }

  //Calculating the total amount of the order
  getTotal(items){
    var total = 0;
    items.forEach(item => {
      total = total + parseFloat(item.item_price);
    });
    return total.toString();
  }

}
