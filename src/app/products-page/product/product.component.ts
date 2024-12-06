import { Component, Input } from '@angular/core';
import { Product } from '../../app.model';
import { CurrencyPipe, NgIf } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {faHeart, faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-product',
  imports: [FontAwesomeModule, CurrencyPipe, NgIf],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  @Input({required: true}) height!: string;

  faHeart = faHeart;
  faEye = faEye;


}
