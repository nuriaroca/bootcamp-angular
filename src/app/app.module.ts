import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductListComponent} from './product-list/product-list.component';
import {TooltipDirective} from './tooltip.directive';
import {EuroCurrencyPipe} from './euro-currency.pipe';
import { CarComponent } from './car/car.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    TooltipDirective,
    EuroCurrencyPipe,
    CarComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
