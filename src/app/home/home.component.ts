import { Component, inject } from '@angular/core';
import { ProductComponent } from '../products-page/product/product.component';
import { MockDataService } from '../services/mock-data.service';
import '@google/model-viewer';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FadeInDirective } from '../fade-in.directive';
import { AnimateFromViewportDirective } from '../animate-from-viewport.directive';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, FadeInDirective, AnimateFromViewportDirective],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class HomeComponent {

  private productsService = inject(MockDataService);

  allProducts = this.productsService.getData();
  seatings = this.allProducts.seatings;
  tables = this.allProducts.tables;
  beds = this.allProducts.bedRoom;
  storage = this.allProducts.storage;

  chairs = this.seatings.chairs;

}
