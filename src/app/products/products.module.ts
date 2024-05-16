import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    OrderPageComponent,
    UncommonPageComponent,
    CanFlyPipe,
    SortByPipe,
    ToggleCasePipe,
  ],
})
export class ProductsModule {}
