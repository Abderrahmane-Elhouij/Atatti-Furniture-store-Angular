import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FooterComponent, NavbarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'Atatti';
}
