import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../../../../store/reducers/cart.reducers';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {

  @Input()
  public product!: ICartProduct;

  @Output()
  public remove = new EventEmitter();

  @Output()
  public increment = new EventEmitter();

  @Output()
  public decrement = new EventEmitter();


}
