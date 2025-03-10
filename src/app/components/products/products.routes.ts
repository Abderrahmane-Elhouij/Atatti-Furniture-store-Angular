import { Routes } from "@angular/router";
import { OneProductPageComponent } from "./one-product-page/one-product-page.component";
import { ProductsPageComponent } from "./products-page/products-page.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductsPageComponent
      },
      {
        path: ':id',
        component: OneProductPageComponent
      }
    ]
  }
]
