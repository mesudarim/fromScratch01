import { Pipe, PipeTransform } from '@angular/core';
import { IProduct} from '../../../../shared/models/product.service'
import{ProductListComponent} from '../../../product/product-list/product-list.component'


@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterText:string): IProduct[]  {
    return products.filter(product =>{
      return product.productName.includes(filterText);

    });
  }

}
