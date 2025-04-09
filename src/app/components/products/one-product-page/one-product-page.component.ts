import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, model, OnInit} from '@angular/core';
import {faCubes, faHeart, faImage, faHeadphones, faTruck, faBolt, faShieldAlt, faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {HttpClient} from '@angular/common/http';
import { RatingModule } from 'primeng/rating';;
import {FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-one-product-page',
  imports: [FontAwesomeModule, RatingModule, FormsModule, ButtonModule, MatProgressBarModule],
  standalone: true,
  templateUrl: './one-product-page.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OneProductPageComponent implements OnInit{
  private cartService = inject(CartService)
  //private productsService = inject(ProductsService);
  private http = inject(HttpClient);

  totalItems = 0;
  source = 'oneproduct'
  modelUrl: SafeUrl | null = null;

  currentView: 'image' | '3d' = 'image';
  quantity: number = 1;

  value= 4


  productRef!: string;
  oneProduct!: any;
  faImage = faImage;
  fa3DModel = faCubes;
  faHeart = faHeart;
  faHeadphones = faHeadphones;
  faTruck = faTruck;
  faBolt = faBolt;
  faShield = faShieldAlt;
  faCircle = faCircle;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}


  sendData() {
    this.cartService.sendData(this.quantity, this.source);
  }

  base64ToBlob(base64: string, mimeType: string): Blob {
    try {
      // Remove any Base64 prefix (like "data:model/gltf-binary;base64,")
      const cleanedBase64 = base64.replace(/^data:model\/gltf-binary;base64,/, '');

      // Convert Base64 string to binary data
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Array(byteCharacters.length).map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: mimeType });
    } catch (error) {
      console.error("Error converting Base64 to Blob:", error);
      throw error;
    }
  }

  ngOnInit(): void {

    this.productRef = "ares_dining_table";

    //this.productRef = this.route.snapshot.paramMap.get('ref')!;
    console.log('Product Ref:', this.productRef);

    this.http.get(`http://localhost:8080/api/products/ref/${this.productRef}`, {withCredentials: true})
      .subscribe((data: any) => {
        console.log("Fetched Product Data:", data);

        if (!data.model) {
          console.error("No model data received from backend!");
          return;
        }
        this.oneProduct = data;
        const blob = this.base64ToBlob(data.model, "model/gltf-binary");
        const url = URL.createObjectURL(blob);

        this.modelUrl = this.sanitizer.bypassSecurityTrustUrl(url);
        console.log("Blob URL Created:", url);
      });




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

  protected readonly model = model;
}
