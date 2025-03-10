import { Component } from '@angular/core';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { HttpBackend, HttpClient } from '@angular/common/http';
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
