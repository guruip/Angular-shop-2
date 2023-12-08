import { Action, createReducer, on } from '@ngrx/store';
import { IProduct } from '../../content/backoffice/content/products/products.service';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';

const initialState: { items: IProduct[], loading: boolean } = {
  items: [],
  loading: false
};

const scoreboardReducer = createReducer(
  initialState,
  on(getProductsSuccess, (_state, action) => {
    return {
      items: action.products,
      loading: false
    };
  }),
  on(getProductsPending, (_state) => {
    return {
      ..._state,
      loading: true
    };
  }),
);

export default function reducer(state: any, action: Action): any {
  return scoreboardReducer(state, action);
}
