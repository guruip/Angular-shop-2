import { Component, Injectable, Injector, NgModule } from '@angular/core';
import { IProduct } from '../../products.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Injectable()
class ConfirmService {
  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;
}


@Component({
  selector: 'app-card-confirm',
  templateUrl: './card-confirm.component.html',
  styleUrls: ['./card-confirm.component.css']
})
export class CardConfirmComponent {
  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;
  public injector;

  constructor() {
    this.injector = Injector.create([{provide: ConfirmService, useClass: ConfirmService}]);
  }


}

@NgModule({
  declarations: [CardConfirmComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
// @ts-ignore
class CardConfirmModule {

}
