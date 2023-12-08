import { Component, Input } from '@angular/core';
import { IProduct } from '../products.service';
import { ModalService } from '../../../../../modal/modal.service';
import { Store } from '@ngrx/store';
import { IState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.action';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    private readonly modalService: ModalService,
    private store: Store<IState>
  ) {
  }

  public async addToCart(): Promise<void> {
    const {CardConfirmComponent} = await import('./card-confirm/card-confirm.component');
    this.modalService.open({
      component: CardConfirmComponent,
      context: {
        product: {...this.product},
        save: () => {
          this.store.dispatch(addProductToCart({product: this.product}));
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}
