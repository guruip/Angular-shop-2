import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../products.service';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public product$: Observable<IProduct> = this.activatedRoute.data.pipe(
    pluck('product')
  );

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

}
