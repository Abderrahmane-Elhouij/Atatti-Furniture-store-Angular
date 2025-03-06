import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
  ,
  {
    path: 'products',
    loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
    // component: ProductsComponent,
    loadChildren: () => import('./products/products.routes').then(mod => mod.routes),
  },
  {
    path: 'cart',
    loadComponent: () => import('./add-to-card/add-to-card.component').then(mod => mod.AddToCardComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./checkout-component/checkout-component.component').then(mod => mod.CheckoutComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
