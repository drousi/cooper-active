import { NgModule } from '@angular/core';

import { ProductComponent } from './pages/product.component';
import {SharedModule} from '../../shared/shared.module';
import {ProductRoutingModule} from './product-routing.module';
import { from } from 'rxjs';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
