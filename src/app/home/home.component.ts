import { Component, inject } from '@angular/core';
import { ProductComponent } from '../products/product/product.component';
import { MockDataService } from '../services/mock-data.service';
import '@google/model-viewer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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


  products = this.productsService.getData();

  bestSellerProducts = this.bestSellerData();
  
  bestSellerData() {
    const allProducts: any[] = [];
  
    function collectProducts(obj: any) {
      if (Array.isArray(obj)) {
        allProducts.push(...obj);
      } else if (typeof obj === "object" && obj !== null) {
        Object.values(obj).forEach(value => collectProducts(value));
      }
    }
  
    collectProducts(this.products);
  
    // Manually select specific items by their indices
    const selectedIndices = [0, 7, 14, 19, 25, 31, 40, 70];  // Indices for 1st, 8th, 15th, 20th items
    const selectedProducts = selectedIndices.map(index => allProducts[index]).filter(Boolean);
  
    return selectedProducts;
  }
  
  




}
