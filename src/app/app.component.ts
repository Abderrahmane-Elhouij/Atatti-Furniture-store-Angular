import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FooterComponent, NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'tutorial-est';
}
