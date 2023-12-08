import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IState } from '../../../store';
import { totalProducts } from '../../../store/reducers/cart.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public set title(t: string) {
    this.ownTitle = t;
  };

  public someClass = 'someClass value';
  public condition = true;

  public ownTitle!: string;

  @Input()
  public drawer!: MatDrawer;

  public cartProductCount$ = this.store.select(totalProducts);

  constructor(
    private store: Store<IState>
  ) {

  }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', changes);
  // }
  //
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

}
