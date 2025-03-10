import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './products.component.html',
})
export class ProductsComponent {
}
