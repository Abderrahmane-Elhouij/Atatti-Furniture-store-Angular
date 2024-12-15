import { Component, inject } from '@angular/core';
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



  // Track the current slide
  slides = ['hero1', 'hero2', 'hero3'];
  currentSlideIndex = 0;

  ngAfterViewInit(): void {
    this.initializeSplide();
  }

  initializeSplide(): void {
    new Splide('.splide', {
      type       : 'loop',       // Makes it continuous
      perPage    : 1,            // Show only one slide at a time
      perMove    : 1,            // Move one slide at a time
      autoplay  : true,          // Starts automatically
      interval  : 3000,          // Delay between slides (in ms)
      arrows    : false,         // Hide navigation arrows
      pagination: false,         // Hide pagination
      direction : 'rtl',         // Slide direction from right to left
      speed     : 3000,          // Speed of the sliding effect
    }).mount();
  }

  // Method to set the component for the current slide
  getCurrentSlideComponent(): string {
    return this.slides[this.currentSlideIndex];
  }
}
