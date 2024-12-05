import { Component, Input } from '@angular/core';
import { Product } from '../app.model';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  
  

}
