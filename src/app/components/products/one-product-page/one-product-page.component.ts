import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import {faCubes, faHeart, faImage, faHeadphones, faTruck, faBolt, faShieldAlt, faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-one-product-page',
  imports: [FontAwesomeModule],
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

  currentView: 'image' | '3d' = 'image';
  quantity: number = 1;


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

  constructor(private route: ActivatedRoute) {}


  sendData() {
    this.cartService.sendData(this.quantity, this.source);
  }



  ngOnInit(): void {

    this.productRef = "ares_dining_table";

    //this.productRef = this.route.snapshot.paramMap.get('ref')!;
    console.log('Product Ref:', this.productRef);

    this.http.get(`http://localhost:8080/api/products/ref/${this.productRef}`, {withCredentials: true})
      .subscribe((data: any) => {
        this.oneProduct = data;
        console.log('Fetched Product:', this.oneProduct);  // log inside subscribe callback
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
}
