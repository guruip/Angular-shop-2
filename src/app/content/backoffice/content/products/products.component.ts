import { Component, OnInit } from '@angular/core';
import { IProduct } from './products.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from '../../../../store';
import { getProductsPending } from '../../../../store/actions/products.action';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public searchText = '';
  public onlyFavorites = false;
  public products$: Observable<IProduct[]> = this.store.select('products', 'items');
  public loading$: Observable<boolean> = this.store.select('products', 'loading');

  public constructor(
    // @Inject(ProductsService) private productsService: any
    private store: Store<IState>
  ) {
  }

  public ngOnInit(): void {
    this.store.dispatch(getProductsPending());

  }

  public search(text: string): void {
    this.searchText = text;
  }

  public productsFilter(products: IProduct[]): IProduct[] {
    return products.filter((product: IProduct) =>
      `${product.title} ${product.price}`.toLocaleLowerCase().includes(this.searchText.toLowerCase()));
  }

  public toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}
