import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../../../store';
import { decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../../../../store/actions/cart.action';
import { ICartProduct, cartProductsWithBonuses } from '../../../../store/reducers/cart.reducers';

export class Person {
  constructor(public name: string, public surname: string) {
  }

  public getStamp(): Date {
    return new Date();
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products$ = this.store.select(cartProductsWithBonuses);

  public person1 = new Person('Ihor', 'Nepipenko');
  public person2 = new Person('Vlad', 'Loban');


  constructor(
    private store: Store<IState>
  ) {

    setTimeout(() => {
      console.log('Jon')
      this.person2.name = 'Jon';
      this.person1.name = 'Jon';
    }, 4000);


    setTimeout(() => {
      console.log('new Person')
      this.person2 = new Person('Ihor1', 'Nepipenko1');
    }, 7000);
  }


  public increment({_id}: ICartProduct): void {
    this.store.dispatch(incrementProductInCart({id: _id}));
  }

  public decrement(product: ICartProduct): void {
    if (product.count === 1) {
      this.remove(product);
      return;
    }
    this.store.dispatch(decrementProductInCart({id: product._id}));
  }

  public remove({_id}: ICartProduct): void {
    this.store.dispatch(removeProductFromCart({id: _id}));
  }

  public trackByFn(_index: number, item: ICartProduct): string {
    return item._id;
  }
}
