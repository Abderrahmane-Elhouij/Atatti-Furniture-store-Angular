import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCartShopping, faSearch, faUser, faSignIn, faSignOut} from '@fortawesome/free-solid-svg-icons';
import {CartService} from '../../../services/cart.service';
import {AuthService} from '../../../services/auth.service';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, AsyncPipe],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService)
  private cartService = inject(CartService)
  private router = inject(Router)
  totalItems = signal(0);
  isAuthenticated$ = this.authService.isAuthenticated$;

  ngOnInit() {
    this.cartService.totalItems$.subscribe((data) => {
      this.totalItems.set(data);
    });

    this.authService.checkAuthStatus().subscribe();
  }

  logout() {
    this.authService.logout().subscribe({
      error: (err) => {
        console.error(err);
        alert('Failed to log out');
        this.router.navigate(['/login']);
      }
    });
  }

  faSearch = faSearch;
  faUser = faUser;
  faCart = faCartShopping;
  faSignIn = faSignIn;
  faSignOut = faSignOut;

}
