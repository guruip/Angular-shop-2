import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../content/backoffice/content/products/products.service';

export const getProductsPending = createAction(
  '[Products] Get products pending'
);

export const getProductsSuccess = createAction(
  '[Products] Get products success',
  props<{ products: IProduct[] }>()
);

export const getProductsError = createAction(
  '[Products] Get products error'
);
