import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { ProductFilterPipe } from './modules/layout/product/product-list/product-filter.pipe';
import { StarRatingComponent } from './shared/component/star-rating/star-rating.component';
import { ProductService } from './shared/models/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ReversePipe,
    ProductFilterPipe,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
