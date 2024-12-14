import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  private cartService = inject(CartService)
  totalItems = signal(0);

  ngOnInit() {
    this.cartService.totalItems$.subscribe((data) => {
      this.totalItems.set(data); 
    });
  }

  faSearch = faSearch;
  faUser = faUser;
  faCart = faCartShopping;

}
