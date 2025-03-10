import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, inject, input } from '@angular/core';
import { MockDataService } from '../../../services/mock-data.service';
import { faCubes, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProductsService } from '../../../services/products.service';

import { Product } from '../../../models/products';

@Component({
  selector: 'app-one-product-page',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './one-product-page.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OneProductPageComponent {
  private cartService = inject(CartService)
  //private productsService = inject(ProductsService);

  totalItems = 0;
  source = 'oneproduct'

  currentView: 'image' | '3d' = 'image';
  quantity: number = 1;


  productRef!: string;
  oneProduct!: any;
  faImage = faImage;
  fa3DModel = faCubes;

  constructor(private route: ActivatedRoute) {
    
  }

  sendData() {
    this.cartService.sendData(this.quantity, this.source);
  }

  ngOnInit(): void {
    
    //this.productRef = this.route.snapshot.paramMap.get('ref')!;
    this.productRef = "ares_dining_table";
    console.log('Product Ref:', this.productRef);
    
    //this.oneProduct = this.productsService.getProductByRef(this.productRef);
    this.oneProduct = {
      id: 1,
      name: "Ares Dining Table",
      ref: "ares_dining_table",
      category: "table",
      subCategory: "dining table",
      description: "A dining table ",
      price: 400.00,
      color: "black",
      tags: "table, dining table",
      fabric: "wood",
      quantity: 60,
      discountPercentage: 30,
      rating: 2.5,
      image: "assets/images/ares_dining_table.jpg",
      model: "assets/3dModels/ares_dining_table.glb",

    }

    console.log('Fetched Product:', this.oneProduct);
  }





  
  toggleView() {
    this.currentView = this.currentView === 'image' ? '3d' : 'image';
    console.log(`Switched to ${this.currentView} view.`);
    console.log(this.oneProduct);

  }



  //Cart functions
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.oneProduct.quantity = this.quantity;
    this.cartService.addToCart(this.oneProduct);
    alert('Product added to cart!');
  }
}
