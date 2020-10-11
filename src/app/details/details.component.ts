import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  orderId;
  orders: Array<any>;
  orderDetails;
  items: Array<any>;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //Fetching the Id from the Orders page
    this.route.params.subscribe(params => {
			this.orderId = params['id'];
    });
    this.orders = JSON.parse(localStorage.getItem('orders'));
    //Fetching the corresponding record using Order Id
    this.orders.forEach(order => {
      if(order.id == this.orderId){
        this.orderDetails = order;
      }
    });
  }
//Calculating the total amount
  getTotal(){
    var total = 0 ;
    this.items = this.orderDetails.items;
    this.items.forEach(item => {
      total = total + parseFloat(item.item_price);
      });
    return total;
  }
}
