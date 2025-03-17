import {Component, inject, signal} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);

  credentials = {
    name: '',
    password: '',
  };

  login() {
    this.authService.login(this.credentials);
  }

  loginWithGoogle() {
    // Redirects to the backend's OAuth2 endpoint to trigger Google login flow.
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
}
