import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
// TODO named outlet
const routes: Route[] = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./content/cart/cart.module')
          .then(mod => mod.CartModule),
      },
      {
        path: '',
        loadChildren: () => import('./content/products/products.module')
          .then(mod => mod.ProductsModule),
      },
    ]
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
export class BackofficeRoutingModule {
}
