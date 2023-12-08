import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from '../../content/backoffice/content/products/products.service';
import { getProductsPending, getProductsSuccess } from '../actions/products.action';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    mergeMap(() => this.productsService.getProducts()
      .pipe(
        map((products) => getProductsSuccess({products})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }
}
