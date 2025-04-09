import { Component, inject, OnInit, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductComponent } from '../products/product/product.component';
import { MockDataService } from '../../services/mock-data.service';
import '@google/model-viewer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AnimateFromViewportDirective } from '../../animate-from-viewport.directive';
import { AddToCardComponent } from '../add-to-card/add-to-card.component';
import { Hero1Component } from "./hero1/hero1.component";
import { Hero2Component } from "./hero2/hero2.component";
import { Hero3Component } from "./hero3/hero3.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CommonModule, AnimateFromViewportDirective, Hero1Component, Hero2Component, Hero3Component],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit {
  private authService = inject(AuthService);
  username = signal<string>("");
  bestSellerProducts: any[] = [];
  private productsService = inject(MockDataService);

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiper: Swiper | null = null;

  ngOnInit() {
    this.username.set(this.authService.username());
    this.bestSellerProducts = this.getBestSellerProducts();
  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      loop: true,
      touchRatio: 0,
      simulateTouch: false,
      allowTouchMove: false,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      resistance: false,
      resistanceRatio: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  getBestSellerProducts() {
    const allProducts = this.productsService.getData();
    const selectedProducts = allProducts.seatings.chairs.slice(0, 4);
    return selectedProducts;
  }
}
