import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OrdersComponent } from './orders/orders.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
   path: '',
   component: OrdersComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppRoutingModule { }
