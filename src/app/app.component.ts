import { Component } from '@angular/core';
import { ProductsPageComponent } from "./products-page/products-page.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProductsPageComponent]
})
export class AppComponent {
  title = 'tutorial-est';
}
