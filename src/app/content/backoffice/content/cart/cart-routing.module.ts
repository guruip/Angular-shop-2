import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

const routes: Route[] = [
  {
    path: '',
    component: CartComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule {
}
