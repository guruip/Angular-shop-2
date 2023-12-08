import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';


@NgModule({
  declarations: [CartComponent,
    CartProductComponent,
    DefaultComponent, OnPushComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule {
}
