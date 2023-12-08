import productsReducer from './reducers/products.reducers';
import { IProduct } from '../content/backoffice/content/products/products.service';
import { EntityState } from '@ngrx/entity';
import { cartReducer, ICartProduct } from './reducers/cart.reducers';
import { IUser, userReducer } from './reducers/user.reducers';

export interface IState {
  products: {
    items: IProduct[],
    loading: boolean
  };
  cart: EntityState<ICartProduct>;
  user: IUser
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
};
