import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { FooterComponent } from "./footer/footer.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent, ProductsPageComponent, FooterComponent]
})
export class AppComponent {
  title = 'tutorial-est';
}
