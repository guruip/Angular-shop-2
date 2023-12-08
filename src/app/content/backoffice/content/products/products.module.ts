import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';
import { ProductsInjectorRedolverModule } from './products-injector-redolver.module';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsFilterPipe,
    ProductsComponent,
    OneProductComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    ProductsInjectorRedolverModule
  ],
  providers: [
    ProductResolverService
  ]
})
export class ProductsModule {
}
