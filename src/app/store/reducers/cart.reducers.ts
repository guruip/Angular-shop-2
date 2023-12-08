import { IProduct } from '../../content/backoffice/content/products/products.service';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { addProductToCart, decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../actions/cart.action';
import { IUser } from './user.reducers';

export interface ICartProduct extends IProduct {
  count: number;
}


export const cartAdapter = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});

const initialState = cartAdapter.getInitialState();

const reducer = createReducer(initialState,
  on(addProductToCart, (state, {product}) => {
    const entity = state.entities[product._id] as ICartProduct;
    return cartAdapter.upsertOne({...product, count: entity ? ++entity.count : 1}, state);
  }),
  on(removeProductFromCart, (state, {id}) => {
    return cartAdapter.removeOne(id, state);
  }),
  on(incrementProductInCart, (state, {id}) => {
    const entity = state.entities[id] as ICartProduct;
    return cartAdapter.updateOne({id, changes: {count: ++entity.count}}, state);
  }),
  on(decrementProductInCart, (state, {id}) => {
    const entity = state.entities[id] as ICartProduct;
    return cartAdapter.updateOne({id, changes: {count: --entity.count}}, state);
  }),
);

// tslint:disable-next-line:typedef
export function cartReducer(state: EntityState<ICartProduct> | undefined, actions: Action) {
  return reducer(state, actions);
}


export const {selectAll} = cartAdapter.getSelectors();
export const selectCart = createFeatureSelector<EntityState<ICartProduct>>('cart');
export const selectUser = createFeatureSelector<IUser>('user');

export const selectProductInCart = createSelector(selectCart, selectAll);

export const totalProducts = createSelector(selectProductInCart, (products: ICartProduct[]) => {
  return products.reduce((count, product) => {
    return (count += product.count);
  }, 0);
});


export const cartProductsWithBonuses = createSelector(
  selectProductInCart,
  selectUser,
  (products: ICartProduct[], user: IUser) => {
    return products.map((product) => {
      return {...product, price: product.count * product.price * user.bonuses};
    }, 0);
  }
);
