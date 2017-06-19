import { IProduct, ProductService } from './../../../shared/models/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List'
  showImage: boolean = true;
  listFilter: string = "";
  //products: IProduct[];
  products: Observable<IProduct[]>;
  
  constructor(private productService: ProductService) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
    console.log("toogle")
  };

  ngOnInit() {
    // this.productService.getProducts()
    //      .subscribe(
    //        products => this.products = products,
    //        error => console.error(error)
    //      )

    this.products = this.productService.getProducts();
  }

}
