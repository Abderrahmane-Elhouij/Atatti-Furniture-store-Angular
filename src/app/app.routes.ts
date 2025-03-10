import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent),
    // component: ProductsComponent,
    loadChildren: () => import('./components/products/products.routes').then(mod => mod.routes),
  },
  {
    path: 'cart',
    loadComponent: () => import('./components/add-to-card/add-to-card.component').then(mod => mod.AddToCardComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./components/checkout-component/checkout-component.component').then(mod => mod.CheckoutComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
