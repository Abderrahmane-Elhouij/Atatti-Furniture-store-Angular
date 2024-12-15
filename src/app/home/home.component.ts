import { AfterViewInit, Component, inject } from '@angular/core';
import Splide from '@splidejs/splide';
import { ProductComponent } from '../products/product/product.component';
import { MockDataService } from '../services/mock-data.service';
import '@google/model-viewer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../animate-from-viewport.directive';import { AddToCardComponent } from '../add-to-card/add-to-card.component';
import { Hero1Component } from "./hero1/hero1.component";
import { Hero2Component } from "./hero2/hero2.component";
import { Hero3Component } from "./hero3/hero3.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CommonModule, AnimateFromViewportDirective, Hero1Component, Hero2Component, Hero3Component],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})

export class HomeComponent {
  

 // List of components
 components = ['hero1', 'hero2', 'hero3'];
 currentComponent = 'hero1'; // Start with the first component
 intervalId: any;

 ngOnInit() {
   // Start the interval
   this.intervalId = setInterval(() => {
     this.nextComponent();
   }, 7000); // Change every 5 seconds
 }

 ngOnDestroy() {
   // Clear the interval when the component is destroyed
   if (this.intervalId) {
     clearInterval(this.intervalId);
   }
 }

 nextComponent() {
   // Find the next component in the array
   const currentIndex = this.components.indexOf(this.currentComponent);
   const nextIndex = (currentIndex + 1) % this.components.length;
   this.currentComponent = this.components[nextIndex];
 }

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
