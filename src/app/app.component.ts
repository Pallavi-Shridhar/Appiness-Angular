import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzaOrders: Array<any>;
  title = 'appiness-angular';
  ngOnInit() {
    //Pizza Orders data
    this.pizzaOrders = [{"id":1,"name":"George","items": [{"item_id":"1", "item_name": "Corn Pizza","item_price":"300"},{"item_id":"2", "item_name": "Mexican Pizza","item_price":"500"}],"address":"Indiranagar, Bangalore","status":"Open"},
    {"id":2,"name":"Helen","items": [{"item_id":"1", "item_name": "Tomato Pizza","item_price":"250"},{"item_id":"2", "item_name": "Pasta","item_price":"400"}],"address":"Jayanagar, Bangalore","status":"Open"},
    {"id":3,"name":"Anand","items": [{"item_id":"1", "item_name": "Corn Pizza","item_price":"300"},{"item_id":"2", "item_name": "Mexican Pizza","item_price":"500"},{"item_id":"3", "item_name": "Large Pizza","item_price":"700"},],"address":"Silk Board, Bangalore","status":"Closed"},
    {"id":4,"name":"Rita","items": [{"item_id":"1", "item_name": "Corn & Olives Pizza","item_price":"400"},{"item_id":"2", "item_name": "Tomato Pizza","item_price":"200"},{"item_id":"3", "item_name":"White Pasta","item_price":"300"},],"address":"Banaswadi, Bangalore","status":"Closed"},
    {"id":5,"name":"Anita","items": [{"item_id":"1", "item_name": "Tomato & Capsicum Pizza","item_price":"400"}],"address":"Malleshwaram, Bangalore","status":"Open"},
    {"id":6,"name":"Rahul","items": [{"item_id":"1", "item_name": "Large Pizza","item_price":"700"}],"address":"Koramangla, Bangalore","status":"Open"}];
    //Storing the data in localStorage
    localStorage.setItem('orders', JSON.stringify(this.pizzaOrders));
  }
}
