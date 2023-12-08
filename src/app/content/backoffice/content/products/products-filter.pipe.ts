import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './products.service';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string, onlyFavorites: boolean = false): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = products.filter((product: IProduct) => product.isFavorite);
    }
    if (!searchTerm) {
      return result;
    }
    return result.filter((product: IProduct) =>
      `${product.title} ${product.price}`.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }

}
